import Extra from "./CameraMicrophone/Extra";
import Timer from "./Timer";
import StudentResult from "./studentResult/studentResult";
// import BlobToVideo from "../TestingAssets/BlobHelpingFunction";
import React, { useState, useEffect } from "react";
import { useRecordWebcam } from "react-record-webcam";
import TakeSnapFunction from "../organization/TakeSnap";
import axios from "axios";
import Cookies from "universal-cookie";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
function InterviewShow() {
  const [switchWindow, setSwitchWindow] = useState(true);
  const [camRefresh, setCamREfresh] = useState(false);
  const recordWebcam = useRecordWebcam({ frameRate: 60 });
  const [startInterview, setStartInterview] = useState(false);
  const [finishInterview, setFinishedInterview] = useState(false);
  const [time, setTime] = useState(20 * 60);
  const [isActive, setIsActive] = useState(false);
  const [camOpener, setCamOpen] = useState(false);
  const [submitRecord, setSubmitRecord] = useState(false);
  const BASEURL = process.env.REACT_APP_SAMPLE;
  // console.log("nnn",recordWebcam.status);
  const questionArray = [
    "Lets Rock !!!!!!",
    "What is reactJs ?",
    "What is  ECMAScript6 ?  ",
    "How DOM works? ",
  ];
  let [counter, setCounter] = useState(2);
  const countIncrement = () => {
    if (counter >= questionArray.length) {
      setFinishedInterview(true);
      setSubmitRecord(true);
      setCounter(counter);
    } else {
      setCounter(counter++);
    }
  };

  const submitInterview = () => {
    SpeechRecognition.stopListening();
    setStartInterview(false);
    recordWebcam.stop();
    recordWebcam.download();
    setSubmitRecord(true);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, camRefresh]);

  useEffect(() => {
    recordWebcam.open();
  }, [camOpener]);

  const handleStart = () => {
    setCounter(counter++);
    setStartInterview(true);
    setIsActive(true);
    resetTranscript();
    SpeechRecognition.startListening();
    recordWebcam.start();
  };

  const handleStop = () => {
    setStartInterview(false);
    setCounter(-1);
    setIsActive(false);
    SpeechRecognition.stopListening();
    recordWebcam.stop();
    setCamOpen(!camOpener);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(20 * 60);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleAPIRecording = async () => {
    setIsActive(false);
    const blob = await recordWebcam.getRecording();
    if (blob) {
      console.log(blob);
      const Temp = await axios
        .post(`${BASEURL}/SubmitInterview`, {
          Recording: blob,
        })
        .then((Data) => {
          if (Data.data.message === "Interview send successfully !") {
            console.log(Data.data.message);
            setSwitchWindow(false);
          }
        })
        .catch((ErrorR) => {
          console.log("kkkkk", ErrorR);
        });
    } else {
      console.log("error");
    }
  };

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
      {switchWindow ? (
        <div className="flex flex-col md:flex-row h-screen">
          <div className="bg-gray-200 w-full md:w-1/2 h-100 md:h-auto flex items-center justify-center">
            {/* Left side interview section */}
            {/* Left side webcam section start */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h1 className="text-3xl font-extrabold text-gray-900 mt-12 mb-6">
                Webcam Section
              </h1>
              {/* Webcam Functioning Setup*/}
              <div className="flex flex-col items-center space-y-4">
                <p className="text-lg font-bold">
                  Camera status:{" "}
                  <span className="inline-block bg-red-400 text-white rounded-md py-1 px-3">
                    {recordWebcam.status}
                  </span>
                </p>
                <div className="flex justify-between w-1/2">
                  {/* <button
                    onClick={() => {
                      recordWebcam.open();
                      setCamREfresh(!camRefresh);
                    }}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50"
                  >
                    Open camera
                  </button> */}
                  {/* <button
                    onClick={recordWebcam.start}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50"
                  >
                    Start recording
                  </button> */}
                  {/* 
                  <button
                    onClick={recordWebcam.stop}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50"
                  >
                    Stop recording
                  </button> */}
                  {/* <button onClick={recordWebcam.download}>Download</button> */}
                </div>
                <video
                  className="Candidate-Screen-WebCam w-full max-w-md"
                  ref={recordWebcam.webcamRef}
                  autoPlay
                  muted
                />
                {/* <div className="hidden">
                  <video
                    ref={recordWebcam.previewRef}
                    autoPlay
                    muted
                    loop
                    className="w-full max-w-md"
                  />
                </div> */}
              </div>

              {/* Left side webcam section ends */}

              {/* Left side microphone section start */}

              <div className="p-10 border-t-2 border-black mt-10 ">
                <h2 className="font-bold text-lg mb-5">
                  Your transcript text :
                </h2>
                {/* <p className="font-bold mb-2">
                  Microphone:{" "}
                  <span className="bg-red-400 text-lg font-semibold p-1 border-2 border-black">
                    {listening ? "on" : "off"}
                  </span>
                </p> */}
                {/* <div className="mb-3">
                  Click on start before giving the answer.
                </div> */}
                {/* <div className="flex items-center mb-4">
                  <button
                    onClick={() => {
                      SpeechRecognition.startListening();
                    }}
                    className="bg-gray-600 text-white rounded p-2 w-fit m-2 ml-0  pr-3 disabled:opacity-50"
                  >
                    Start
                  </button>
                  <button
                    onClick={SpeechRecognition.stopListening}
                    className="bg-gray-600 text-white rounded p-2 w-fit m-2 pr-3 disabled:opacity-50"
                  >
                    Stop
                  </button>
                  <button
                    onClick={resetTranscript}
                    className="bg-gray-600 text-white rounded p-2 w-fit m-2 pr-3 disabled:opacity-50"
                  >
                    Reset
                  </button>
                </div> */}
                <p className="border-2 border-black p-5 font-semibold text-xl text-blue-500">
                  {transcript}
                </p>
              </div>
            </div>
            {/* Left side microphone section ends */}

            {/* Left side interview section ends*/}
          </div>
          <div className="bg-white w-full md:w-1/2 h-screen md:h-auto flex flex-col justify-between p-4">
            <div>
              <div className="text-right">
                {/* Right side interview section */}
                <div
                  className="Slefie-Taker"
                  style={{ height: "10rem", width: "10rem" }}
                >
                  <TakeSnapFunction />
                </div>
                <div className="relative h-screen flex justify-center items-center ">
                  <div className="absolute top-0 right-0 border-2 border-black p-5">
                    <p className="text-3xl font-bold">{formatTime(time)}</p>
                  </div>
                  <div className=" flex flex-col items-center w-4/5">
                    <div className="w-full mt-8 border-2 border-black p-5">
                      <p className="text-2xl mb-4">Interview Question:</p>
                      <p className="text-lg mb-4">{questionArray[counter]}</p>
                    </div>
                    {submitRecord ? (
                      <>
                        <h2>Company Name:</h2>
                        <h3>Candidate Name:</h3>
                        <h3>Total Time:</h3>
                        <h3>Interview Time:</h3>
                        <h3>Total Number of Questions:</h3>
                        <h3>Total Questions Attempted:</h3>
                        <>................</>
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                          onClick={() => {
                            handleAPIRecording();
                          }}
                        >
                          Submit Interview
                        </button>
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                          onClick={() => {
                            recordWebcam.download();
                          }}
                        >
                          Download Recording
                        </button>
                      </>
                    ) : (
                      <>
                        {" "}
                        <div className="w-full mt-8 flex">
                          {finishInterview ? (
                            <>dfjivdivbdihvbhdu h</>
                          ) : (
                            <>
                              <div className="w-full mt-8 flex">
                                {!isActive && (
                                  <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                                    onClick={() => {
                                      handleStart();
                                    }}
                                  >
                                    Start
                                  </button>
                                )}
                                {isActive && (
                                  <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4"
                                    onClick={() => {
                                      recordWebcam.download();
                                      setIsActive(false);
                                    }}
                                  >
                                    Interview has been recording - Answer
                                    carefully !
                                  </button>
                                )}
                              </div>
                            </>
                          )}
                          {startInterview ? (
                            <>
                              {" "}
                              <div className="w-1/2 flex ">
                                {finishInterview ? (
                                  <></>
                                ) : (
                                  <>
                                    <button
                                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
                                      onClick={() => {
                                        countIncrement();
                                        console.log(counter);
                                        resetTranscript();
                                        SpeechRecognition.startListening();
                                      }}
                                    >
                                      Next Question
                                    </button>
                                  </>
                                )}

                                <button
                                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                  onClick={() => {
                                    submitInterview();
                                  }}
                                >
                                  Finish
                                </button>
                              </div>
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Right side interview section ends*/}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <StudentResult />
      )}
    </>
  );
}

export default InterviewShow;
