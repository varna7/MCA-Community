import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './filehome.scss';

const FileHome = () => {
  const [files, setFiles] = useState([]);
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/fileHome')
      .then(res => {
        setFiles(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    axios.get('/api/folders')
      .then(res => {
        setFolders(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="file-home-container">
      <h1 className="file-home-title">File Management System</h1>
      <div className="file-home-options">
        <Link to="/add-file" className="file-home-add-file-btn">Add File</Link>
        <a href="https://ktu.edu.in/data/MCA%20Syllabus.pdf?=qsrMdr4VIRIwu8p%2BZvFv4gqO%2B9bGRGJIwh6Q2YyM8sgTzrETe9oaq0tXa4J%2B2fqf">syllabus</a>
        <Link to="/create-folder" className="file-home-create-folder-btn">Create Folder</Link>
      </div>
      <div className="file-home-files">
        <h2 className="file-home-section-title">Files</h2>
        <table className="file-home-files-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Size</th>
              <th>Type</th>
              <th>User</th>
              <th>Folder</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {files.map(file => (
              <tr key={file.id}>
                <td>{file.name}</td>
                <td>{file.size}</td>
                <td>{file.type}</td>
                <td>{file.user_id}</td>
                <td>{file.folder_id}</td>
                <td>
                  <a href={`http://localhost:8000/fileHome/${file.id}`} download>Download</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="file-home-folders">
        <h2 className="file-home-section-title">Folders</h2>
        <ul className="file-home-folders-list">
          {folders.map(folder => (
            <li key={folder.id}>
              <Link to={`/folders/${folder.id}`}>{folder.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FileHome;
