import React, { useContext, useState } from "react";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import "./AddPost.scss";
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";

const AddPost = () => {
  const [postImg, setPostImg] = useState(null);
  const [desc, setDesc] = useState("");
  const { currentUser } = useContext(AuthContext);
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setPostImg(file);
  };

  const addPost = () => {
    let formData = new FormData();
    formData.append("desc", desc);
    formData.append("file", postImg);
    formData.append("uid", currentUser?.id);
    makeRequest
      .post("/posts/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res?.data?.status == true) {
          alert("Post added");

          window.location.reload();
        } else alert("Post adding failed");
      });
  };
  return (
    <div className="add-post">
      <div className="user">
        <img
          src="https://techworldthink.github.io/MCA/assets/img/logo.png"
          alt=""
        />
        <span>KTU MCA Community</span>
      </div>
      <form action="" method="post" enctype="multipart/form-data">
        <textarea
          name="post-desc"
          id=""
          className="textInput"
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Write Something"
        />
        {postImg ? (
          <img src={URL.createObjectURL(postImg)} alt="" className="" />
        ) : (
          <div className=""></div>
        )}
        <label htmlFor="fileInput">
          <AddPhotoAlternateOutlinedIcon color="grey" />
        </label>
        <input
          type="file"
          name=""
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleFileInputChange}
        />
      </form>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Close
        </button>
        <button type="button" onClick={() => addPost()} class="btn btn-primary">
          submit
        </button>
      </div>
    </div>
  );
};

export default AddPost;
