import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FullFileBrowser } from "chonky";
import "./Resources.scss";

const Sem1 = () => {
  const location = useLocation();
  let pathArr = location.pathname.split("/");
  

const folderChain = pathArr.map((value)=>({
  id: value, 
  name: value,
  isDir: true 
}));

  console.log(folderChain);


  const files = [
    { id: "lht", name: "Projects", isDir: true },
    {
      id: "mcd",
      name: "chonky-sphere-v2.png",
      isDir: true,
    },
  ];

  // const folderChain = [{ id: "xcv", name: "Demo", isDir: true },{ id: "xcu", name: "Demo1", isDir: true }];

  return (
    <div className="resources">
      <div className="res-header">
        <img
          src="https://techworldthink.github.io/MCA/assets/img/logo.png"
          alt="logo"
          className="logo m-3 w-5 h-5"
        />
        <div className="res-header-title ">Free resourses</div>
        <p>Learn.Share.Grow</p>
      </div>
      <div className="res-items w-75 h-50">
        <FullFileBrowser files={files} folderChain={folderChain} />
      </div>
    </div>
  );
};

export default Sem1;
