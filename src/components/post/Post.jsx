import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useContext, useEffect, useState } from "react";
import { getImageFromFilePath } from "../../utils";
import moment from "moment";
import { AuthContext } from "../../context/authContext";
import { makeRequest } from "../../axios";
const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);
  const handleDelete = () => {
    makeRequest.delete("/posts/" + post.post_id).then((data) => {
      console.log(data);
      window.location.reload();
    });
  };

  useEffect(() => {
    getLike()
  
  
  }, [])
  
  const [likes, setLikes] = useState([])

  const getLike = () => { 
    makeRequest.get("/likes?postId=" + post?.post_id).then((res) => {
         setLikes( res.data)
    })
   }
  //TEMPORARY
  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={getImageFromFilePath(post.profile)} alt="" />
            <div className="details">
              <Link
                to={`/user-home/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">{moment(post.created_at).fromNow()}</span>
            </div>
          </div>
          <MoreHorizIcon onClick={() => setMenuOpen(!menuOpen)} />
          {menuOpen && post.userId === currentUser.id && (
            <button onClick={handleDelete}>delete</button>
          )}
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={getImageFromFilePath(post.post_img)} alt="sds" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments pid={post.post_id} />}
      </div>
    </div>
  );
};

export default Post;
