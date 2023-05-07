import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";

function TakeSnapFunction({ imageTrigger, setImageTrigger }) {
  const webcamRef = useRef(null); // Create a reference to the webcam
  const [imageUrl, setImageUrl] = useState(null); // Create a state to store the image URL

  const capture = () => {
    // Use the webcamRef to capture a photo
    const imageSrc = webcamRef.current.getScreenshot();
    // Convert the image data to a Blob
    const imageBlob = new Blob([imageSrc], { type: "image/png" });
    // Create a URL object for the Blob
    const imageUrl = URL.createObjectURL(imageBlob);
    // Set the image URL state to the HTTPS version of the URL object
    setImageUrl(imageUrl.replace("http://", "https://"));
  };
  useEffect(() => {
    // Use the setTimeout function to capture a photo after 10 seconds
    setTimeout(() => {
      capture();
    }, 10000);
  }, [imageTrigger]);

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="png" />
      {imageUrl && (
        <a href={imageUrl} target="_blank" rel="noopener noreferrer">
          <img src={imageUrl} alt="Webcam capture" />
        </a>
      )}
    </div>
  );
}

export default TakeSnapFunction;
