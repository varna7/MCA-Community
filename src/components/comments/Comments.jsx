// import { useContext } from "react";
import { useEffect, useState } from "react";
import { makeRequest } from "../../axios";
import "./comments.scss";
import moment from "moment";
import { getImageFromFilePath } from "../../utils";
// import { AuthContext } from "../../context/authContext";

const Comments = ({ pid }) => {
  //   const { currentUser } = useContext(AuthContext);
  //Temporary

  const [desc, setDesc] = useState("");
console.log(desc)
  const [comments, setComments] = useState([]);

  const addComment = () => {
    makeRequest
      .post("comments/", {
        desc: desc,
        pid: pid,
      })
      .then((res) => {
        alert(res.data);
        setDesc("")
        getComments();
      });
  };

  const getComments = () => {
    makeRequest.get(`comments/?postId=${pid}&user=`).then((res) => {
      setComments(res?.data)
    });
  };

  useEffect(() => {
    getComments();
  }, []);

  // const comments = [
  //   {
  //     id: 1,
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
  //     name: "John Doe",
  //     userId: 1,
  //     profilePicture:
  //       "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 2,
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
  //     name: "Jane Doe",
  //     userId: 2,
  //     profilePicture:
  //       "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //   },
  // ];
  return (
    <div className="comments">
      <div className="write">
        {/* <img src={currentUser.profilePic} alt="" /> */}
        <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder="write a comment" />
        <button onClick={()=>addComment()}>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={getImageFromFilePath(comment.profile)} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">{moment(comment.created_at).fromNow()}</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
