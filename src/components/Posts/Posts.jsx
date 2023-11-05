import { useEffect, useState } from "react";
import { makeRequest } from "../../axios";
import Post from "../post/Post";
import "./Posts.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Posts = ({id}) => {

const {currentUser}=useContext(AuthContext)
const [posts, setPosts] = useState([])
console.log(currentUser)
  useEffect(() => {
console.log("runni")

    if (id==false){
      makeRequest.get(`posts/?userType=${currentUser.type=="admin"?"users":currentUser.type}`).then(res=>{
     setPosts(res?.data?.posts)
      })

    }
  
  
  
  }, [])
  
  //TEMPORARY
  const post = [
    {
      id: 1,
      name: "Shifan",
      userId: 1,
      profilePic:
        "https://avatars.githubusercontent.com/u/67517134?s=100&v=4",
      desc: "Our Definition e.",
      img: "https://ca.cet.ac.in/wp-content/uploads/IMG_6411-640x480.jpg",
    },
    {
      id: 2,
      name: "Shigin",
      userId: 2,
      profilePic:
        "https://avatars.githubusercontent.com/u/85169428?v=4",
      desc: " tempore.",
    },
  ];
  console.log(posts)

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;