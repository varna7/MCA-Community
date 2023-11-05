import React,{useState,useEffect} from "react";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import "../AdminView.scss";
import { makeRequest } from "../../../axios";

const AdminViewUsers = () => {

  const [userData, setUserData] = useState([]);
  const [loginData,setLoginData] =useState([]);
  const [status,setStatus] = useState()

  useEffect(() => {
    init();
  },[]);

  const init = async () => {
    const res1 = await makeRequest("/users/getUsers");
    console.log(res1);
    setUserData(res1.data.users);
    const res2 = await makeRequest("/auth/login");
    setLoginData(res2.data.login)
  };

  const [err, setErr] = useState();

  return (
    <div className="main">
      <div className="body">
        <div className="head">
          <span>Users.</span>
        </div>
        <div className="content">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">College</th>
                <th scope="col">Batch</th>
                <th scope="col">Email</th>
                <th scope="col">Type</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {(!userData)?
            <tr>No Users</tr>
            :userData.map((item,idx)=>(
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.college}</td>
                <td>{item.batch}</td>
                <td>{item.email}</td>
                <td>{item.status}</td>
                <td>
                  {/* {(!loginData)?" ":loginData.map((login,idx)=>(
                    setStatus(login.status)
    
                   (status===1)?
                    <button className="active">
                    <div className="dot"/> Active
                  </button>
                  :
                  <button className="pending">
                    <div className="dot"/> Active
                  </button>
                  ))} */}
                  <button className="pending">
                    <div className="dot"/> pending
                  </button>
                  
                </td>
                <td className="buttons">
                  <button><VisibilityOutlinedIcon/></button>
                  <button><ClearOutlinedIcon/></button>
                </td>
              </tr>))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminViewUsers;
