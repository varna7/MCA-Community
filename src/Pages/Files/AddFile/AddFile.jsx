import React, { useState } from 'react';
import axios from 'axios';
import './AddFile.scss';

const AddFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [fileType, setFileType] = useState('');

  const handleFileSelect = event => {
    setSelectedFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
    setFileType(event.target.files[0].type);
  };

  const handleFileDrop = event => {
    event.preventDefault();
    setSelectedFile(event.dataTransfer.files[0]);
    setFileName(event.dataTransfer.files[0].name);
    setFileType(event.dataTransfer.files[0].type);
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('name', fileName);
    formData.append('type', fileType);

    axios.post('http://localhost:8000/add-file', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(res => {
        console.log(res);
        // show success message or redirect to file home page
      })
      .catch(err => {
        console.log(err);
        // show error message
      });
  };

  const handleDragOver = event => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div className="add-file-container"
      onDragOver={handleDragOver}
      onDrop={handleFileDrop}>
      <h1 className="add-file-title">Add File</h1>
      <form className="add-file-form" action="/add-file" method='post' onSubmit={handleFormSubmit}>
        <div className="add-file-form-group">
          <label htmlFor="file-input">Select file:</label>
          <input type="file" name="file" id="file-input" onChange={handleFileSelect} />
          <p>{fileName}</p>
        </div>
        <button type="submit" onClick={handleFormSubmit} className="add-file-submit-btn">Upload</button>
      </form>
    </div>
  );
};

export default AddFile;
