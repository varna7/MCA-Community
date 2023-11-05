import React,{useState,useEffect} from "react";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import "../AdminView.scss";
import { makeRequest } from "../../../axios";

const AdminViewColleges = () => {

  const [clgData, setClgData] = useState([]);
  const [loginData,setLoginData] =useState([]);
  const [status,setStatus] = useState()

  useEffect(() => {
    init();
  },[]);
const changeUserStatus = async (id) => { 
  console.log(id)
  const res = await makeRequest.post(`/auth/change-status/${id}`);

  if(res?.data?.status){
    alert(res?.data?.message)
    init()
  }
  else{
    alert(res?.data?.message)
  }

 }
  const init = async () => {
    const res1 = await makeRequest("/auth/getCollege");
    console.log(res1);
    setClgData(res1.data.college);
    // const res2 = await makeRequest("/auth/login");
    // setLoginData(res2.data.login)
  };

  const [err, setErr] = useState();

  return (
    <div className="main">
      <div className="body">
        <div className="head">
          <span>Colleges.</span>
        </div>
        <div className="content">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">College Name</th>
                <th scope="col">HOD Name</th>
                <th scope="col">Email</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {(!clgData)?
            <tr>No Colleges</tr>
            :clgData.map((clg,idx)=>(
              <tr>
                <th scope="row">{clg.clg_id}</th>
                <td>{clg.clg_name}</td>
                <td>{clg.hod}</td>
                <td>{clg.email}</td>
                <td>
                 
                  {
                    clg?.lstatus==1? <button className="active">
                    <div className="dot"/> Active
                  </button>: <button 
                  onClick={()=>changeUserStatus(clg.id)}
                  className="pending">
                    <div className="dot"/> pending
                  </button>
                  }
                 
                  
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

export default AdminViewColleges;
