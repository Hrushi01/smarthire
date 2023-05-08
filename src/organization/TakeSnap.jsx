import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";

function TakeSnapFunction({ imageTrigger, setImageTrigger }) {
  const webcamRef = useRef(null); // Create a reference to the webcam
  const [imageUrl, setImageUrl] = useState(null); // Create a state to store the image URL

  // const capture = () => {
  //   // Use the webcamRef to capture a photo
  //   const imageSrc = webcamRef.current.getScreenshot();
  //   // Convert the image data to a Blob
  //   const imageBlob = new Blob([imageSrc], { type: "image/png" });
  //   // Create a URL object for the Blob
  //   const imageUrl = URL.createObjectURL(imageBlob);
  //   // Set the image URL state to the HTTPS version of the URL object
  //   setImageUrl(imageUrl.replace("http://", "https://"));
  // };
  useEffect(() => {
    // Use the setTimeout function to capture a photo after 10 seconds
    setTimeout(() => {
      capture();
    }, 10000);
  }, [imageTrigger]);

  const canvasRef = useRef(null);
  const [modelsLoaded, setModelsLoaded] = useState(false);

  useEffect(() => {
    async function loadModels() {
      await faceapi.nets.ssdMobilenetv1.loadFromUri("/models");
      await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
      setModelsLoaded(true);
    }
    loadModels();
  }, []);

  const capture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const imageBlob = new Blob([imageSrc], { type: "image/png" });
    const imageUrl = URL.createObjectURL(imageBlob);
    setImageUrl(imageUrl.replace("http://", "https://"));

    if (canvasRef.current && modelsLoaded) {
      const image = await faceapi.fetchImage(imageUrl);
      const detections = await faceapi
        .detectAllFaces(image)
        .withFaceLandmarks();
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      detections.forEach((detection) => {
        const landmarks = detection.landmarks;
        const jawline = landmarks.getJawOutline();
        const nose = landmarks.getNose();
        const leftEye = landmarks.getLeftEye();
        const rightEye = landmarks.getRightEye();
        const mouth = landmarks.getMouth();
        // Draw lines on face using the detected landmarks
        ctx.beginPath();
        ctx.moveTo(jawline[0].x, jawline[0].y);
        jawline.forEach((point) => {
          ctx.lineTo(point.x, point.y);
        });
        ctx.lineTo(jawline[0].x, jawline[0].y);
        ctx.stroke();
        // Repeat for other facial landmarks
      });
    }
  };

  return (
    // <div className="w-full">
    //   <Webcam audio={false} ref={webcamRef} screenshotFormat="png" style={{height: '120%', width: '120%'}} />
    //   {imageUrl && (
    //     <a href={imageUrl} target="_blank" rel="noopener noreferrer">
    //       <img src={imageUrl} alt="Webcam capture" />
    //     </a>
    //   )}
    // </div>
    <div className="w-full">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="png"
        style={{ height: "100%", width: "100%" }}
      />
      {imageUrl && (
        <a href={imageUrl} target="_blank" rel="noopener noreferrer">
          <img src={imageUrl} alt="Webcam capture" />
        </a>
      )}
      <canvas ref={canvasRef} className="face-lines" />
    </div>
  );
}

export default TakeSnapFunction;
