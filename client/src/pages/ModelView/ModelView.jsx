import React from 'react'
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./modelView.css"
import { useLocation } from 'react-router-dom';

export default function ModelView(props) {

    const location = useLocation();
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div>
                <Topbar></Topbar>
                <div className="modelContainer">
                    <Sidebar></Sidebar>
                    <div className="container">
                    <model-viewer src={PF+"3dmodels/3dassets/"+location.fileurl+"/scene.gltf"} 
                    camera-controls auto-rotate ar-modes="webxr scene-viewer quick-look" 
                    ios-src={PF+"3dmodels/3dassets/"+location.fileurl+"/scene.uzdz"}>
                    </model-viewer>
                    </div>
                </div>
        </div>
    )
}