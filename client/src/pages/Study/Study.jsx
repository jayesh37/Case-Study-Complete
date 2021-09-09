import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./study.css";
import Card from "../../components/Card/Card";
import {cardData} from "../../cardData"


export default function Study() {

  if(window.value===1)
  { 
    window.value=0;
    window.location.reload();
  }

  return (
    <div>
      <Topbar></Topbar>
      <div className="studyContainer">
        <Sidebar></Sidebar>
        <div className="feed">
          <div className="feedWrapper">
            <div className="grid">
              {cardData.map((val)=>{
                  return (
                      <Card key={val.id} title={val.title} imgurl={val.imgurl} fileurl={val.fileurl}></Card>        
                  )
              })}
            </div>      
          </div>
        </div>
      </div>
    </div>
  )
}
