import React from "react";
import "./AdminPost.scss";
import PostAddIcon from "@mui/icons-material/PostAdd";
import Posts from "../../Posts/Posts";
import AddPost from "../../AddPost/AddPost";

const AdminPost = () => {
  return (
    <div className="admin-post-main">
      <button data-bs-toggle="modal" data-bs-target="#exampleModal">
        <PostAddIcon fontSize="large" />
        New Post
      </button>
      <div className="post-container">
        <Posts id={false} />
      </div>

      {/* MODAL */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLabel">
                New Post
              </h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <AddPost />
            </div>
 
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPost;
