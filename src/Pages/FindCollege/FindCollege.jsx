import React ,{useState,useEffect}from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Carousel } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "./findCollege.scss";
import { makeRequest } from "../../axios";
import Topbar from "../../components/Topbar";

const FindCollege = () => {
  const navigate = useNavigate();
  const [clgData, setClgData] = useState([]);

  useEffect(() => {
    init();
  },[]);

  const init = async () => {
    const res1 = await makeRequest("/auth/getCollege");
    console.log(res1);
    setClgData(res1.data.college);
  };

  const [err, setErr] = useState();

  const collegeData = [
    {
      id: 1,
      name: "college of engineering, Trivandrum",
      logo: "https://upload.wikimedia.org/wikipedia/en/6/6b/Cet_emblem.jpg",
      cover: "https://ca.cet.ac.in/wp-content/uploads/Edit1-min.jpg",
    },
    {
      id: 2,
      name: "tkm",
      logo: "https://upload.wikimedia.org/wikipedia/en/8/87/Thangal_Kunju_Musaliar_College_of_Engineering_logo.png",
      cover: "https://ca.cet.ac.in/wp-content/uploads/edit3-min.jpg",
    },
  ];

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
    navigate(`/Collegeview/${item.id}`);
  };

  const formatResult = (item) => {
    return (
      <>
        <div>
          <span style={{ display: "block", textAlign: "left" }}>
            {item?.clg_name}
          </span>
        </div>
      </>
    );
  };

  return (
    <div className="findCollege">
      <div className="carousel">
        <div className="top d-flex flex-row justify-content-between">
          <img
            src="https://techworldthink.github.io/MCA/assets/img/logo.png"
            alt="logo"
            className="logo m-0"
          />
          <Topbar />
          <Link to="/login">
            <button className="loginButton rounded-pill px-3 m-3 border border-0">
              Login
            </button>
          </Link>
        </div>
        <Carousel>
          {collegeData.length == 0 ? (
            <Carousel.Item>
              <img
                alt="no_image"
                style={{ width: "100%", height: "60vh", objectFit: "cover" }}
              ></img>
            </Carousel.Item>
          ) : (
            collegeData.map((item, idx) => {
              return (
                <Carousel.Item>
                  <img
                    src={item.cover}
                    className="rounded"
                    style={{
                      width: "100%",
                      height: "60vh",
                      objectFit: "cover",
                    }}
                  ></img>
                </Carousel.Item>
              );
            })
          )}
        </Carousel>
      </div>
      <div style={{ width: "40vw", zIndex: 3 }} className="search my-4 ">
        <ReactSearchAutocomplete
          items={clgData}
          onSelect={handleOnSelect}
          fuseOptions={{ keys: ["clg_name"] }}
          resultStringKeyName="clg_name"
          // styling={{width:"400px"}}
          placeholder="Search Colleges"
          formatResult={formatResult}
        />
      </div>
      <div className="colleges">
        <div className="list m-5 rounded">
          {clgData.length == 0 ? (
            <div className="listItem">
              <img alt="no_image" />
              <span>No Colleges</span>
            </div>
          ) : (
            clgData.map((item, idx) => {
              return (
                <Link to ="/college-profile">
                <div className="listItem ">
                  
                  <img src={item.profile} />
                  <div className="d-flex flex-column justify-content-center">
                  <span className="h1">{item.clg_name}</span>
                  <span>{item.place},{item.district}</span>
                  </div>
                  
                  
                  
                </div>
                </Link>
              );
            })
          )}
        </div>

        <div className="filterSort">
          <div className="filter">
            
            <span>Filter</span>
            <hr />
            {/* {clgData.map((item,idx) =>( */}
            <div className="item">
              <span>Type</span>
              <div className="radio">
                <div className="radioItem">
                  <input type="radio" name="type" id="" />
                  <span>Govt</span>
                </div>
                <div className="radioItem">
                  <input type="radio" name="type" id="" />
                  <span>Aided</span>
                </div>
                <div className="radioItem">
                  <input type="radio" name="type" id="" />
                  <span>Self-financing</span>
                </div>
              </div>
            </div>
            {/* ))} */}
            <hr />
            <div className="item">
              <span>District</span>
              <select name="dist" id="">
                <option value="tvm">Trivandrum</option>
                <option value="klm">Kollam</option>
                <option value="ksd">Kasargod</option>
              </select>
            </div>
             
            <hr />
            <button className="rounded">Apply</button>
           
          </div>
          <div className="sort"></div>
        </div>
      </div>
    </div>
  );
};

export default FindCollege;
