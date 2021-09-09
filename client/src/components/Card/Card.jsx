import React from 'react'
import "./card.css";
import { useHistory } from "react-router-dom";


export default function Card(props) {
    
    let history= useHistory();

    function handleClick3d() {

        history.push({
            pathname: '/model-view',
            fileurl:props.fileurl
        }); 
    }
    function handleClickAR() {

        history.push({
            pathname: '/ar-view',
            fileurl:props.fileurl
        }); 
    }
    
    return (
        <div className="card">
            <div className="cardWrapper">      
                <img className="card-img" src={props.imgurl} alt="" loading="lazy"/>
                <div className="card-content">
                    <h5 className="card-header">{props.title}</h5>
                    <button className="card-btn" onClick={handleClick3d} style={{marginBottom:"10px"}} >View 3D<span>&rarr;</span></button>
                    <button className="card-btn" onClick={handleClickAR}>View AR<span>&rarr;</span></button>
                </div>
            </div>
        </div>
    )
}



