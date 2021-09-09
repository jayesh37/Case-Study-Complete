import React from 'react';

import { useLocation } from 'react-router-dom';

export default function ArView(){

    const location = useLocation();
    window.value=1;
    // console.log(location.fileurl);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    // src={PF+"3dmodels/3dassets/"+location.fileurl+"/scene.gltf"}
    return (
        <a-scene arjs='sourceType: webcam;debugUIEnabled: false'>
            <a-anchor hit-testing-enabled="true">
                <a-entity position='0 0 0' scale="0.1px 0.1px 0.1px" rotation="0 0 0" gltf-model={PF+"3dmodels/3dassets/"+location.fileurl+"/scene.gltf"}></a-entity>
                {/* <a-box position='0 0 0' material='opacity: 1; color: yellow;'></a-box> */}
            </a-anchor>
            <a-camera-static preset="hiro" />
        </a-scene>
    );
}

