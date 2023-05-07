import React, { useState, useEffect, useRef } from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import base64ToHttps from "./ImageConverter";

function TakeSnapFunction(props) {
  // const cameraRef = useRef(null);
  let flag = false;
  const [imgURI, setImgUri] = useState("");
  function handleTakePhoto(dataUri) {
    setTimeout(() => {
      // console.log("dataUri", dataUri);
      let tingTong=base64ToHttps(dataUri);
      setImgUri(tingTong);
            console.log("dataUri", dataUri);
    }, 2000);
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const dataUri = "data:image/jpeg;base64,/9j/4AAQSkZJRgA..."; // replace with your dataUri parameter
  //     if (cameraRef.current) {
  //       cameraRef.current.onTakePhoto(dataUri);
  //       console.log(dataUri);
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  function handleTakePhotoAnimationDone(dataUri) {
    // Do stuff with the photo...
    // console.log("takePhoto");
  }

  function handleCameraError(error) {
    // console.log("handleCameraError", error);
  }

  function handleCameraStart(stream) {
    // console.log("handleCameraStart");
  }

  function handleCameraStop() {
    // console.log("handleCameraStop");
  }

  return (
    <Camera
      onTakePhoto={(dataUri) => {
        handleTakePhoto(dataUri);
      }}
      onTakePhotoAnimationDone={(dataUri) => {
        handleTakePhotoAnimationDone(dataUri);
      }}
      onCameraError={(error) => {
        handleCameraError(error);
      }}
      idealFacingMode={FACING_MODES.ENVIRONMENT}
      idealResolution={{ width: 640, height: 480 }}
      imageType={IMAGE_TYPES.JPG}
      imageCompression={0.97}
      isMaxResolution={true}
      isImageMirror={false}
      isSilentMode={false}
      isDisplayStartCameraError={true}
      isFullscreen={false}
      sizeFactor={1}
      onCameraStart={(stream) => {
        handleCameraStart(stream);
      }}
      onCameraStop={() => {
        handleCameraStop();
      }}
    />
  );
}

export default TakeSnapFunction;