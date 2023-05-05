import StudentResult from "./studentResult/studentResult";
import IntreviewList from "./IntreviewList";
// import BlobToVideo from "../TestingAssets/BlobHelpingFunction";
import React, { useState, useEffect } from "react";
import { useRecordWebcam } from "react-record-webcam";
import TakeSnapFunction from "../organization/TakeSnap";
import axios from "axios";
import Cookies from "universal-cookie";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Results from "../organization/Results/Results";
function InterviewShow({ setItrId, setSwitchD, UserDataData, ItrId, switchD }) {
  const [switchWindow, setSwitchWindow] = useState(true);
  const [camRefresh, setCamREfresh] = useState(false);
  const recordWebcam = useRecordWebcam({ frameRate: 60 });
  const [startInterview, setStartInterview] = useState(false);
  const [finishInterview, setFinishedInterview] = useState(false);
  const [lastQsn, setLastQsn] = useState(false);
  const [time, setTime] = useState(20 * 60);
  const [isActive, setIsActive] = useState(false);
  const [camOpener, setCamOpen] = useState(false);
  const [submitRecord, setSubmitRecord] = useState(false);
  const BASEURL = process.env.REACT_APP_SAMPLE;
  const cookies = new Cookies();
  const [firstTime, setFirstTime] = useState("");
  //Interview Detials state
  const [interviewData, setInterviewData] = useState({});
  const [loading, setLoading] = useState(true);
  const [questionArray, setQuestionArray] = useState([]);
  // console.log("nnn",recordWebcam.status);
  const countIncrement = () => {
    let counter = parseInt(localStorage.getItem("Counter"));
    if (counter >= questionArray.length - 2) {
      setLastQsn(true);
    }
    if (counter > questionArray.length - 1) {
      setFinishedInterview(true);
      setSubmitRecord(true);
      localStorage.setItem("Counter", counter);
    } else {
      counter = counter + 1;
      localStorage.setItem("Counter", counter);
    }
  };
  const submitInterview = () => {
    countIncrement();
    SpeechRecognition.stopListening();
    setStartInterview(false);
    recordWebcam.stop();
    recordWebcam.download();
    setSubmitRecord(true);
  };

  const pushAnswerFunction = () => {
    const ArrayFromCookie = cookies.get("AnswerArray");
    const newSpreadedArray = [...ArrayFromCookie];
    // let newObj = {
    //   Question: questionArray[(parseInt(localStorage.getItem("Counter"))-1)],
    //   Answer: transcript,
    //   TimeOfQuestion:(formatTime(time)),
    // };
    newSpreadedArray.push(transcript);
    cookies.set("AnswerArray", newSpreadedArray, { maxAge: 43200 });
    console.log(cookies.get("AnswerArray"));
    console.log(parseInt(localStorage.getItem("Counter")));
  };
  const fetchInterview = async () => {
    const viewData = await axios
      .post(`${BASEURL}/ViewInterview`, {
        Res_Interview_ID: ItrId,
      })
      .then((Data) => {
        setInterviewData(Data.data.data1);
        setQuestionArray(Data.data.data1.Question_Arrays);
        setTime(Data.data.data1.Time_Duration * 60);
        if (questionArray) {
          setLoading(false);
        }
      })
      .catch((ErrorR) => {
        console.log("kkkkk", ErrorR);
      });
  };
  useEffect(() => {
    fetchInterview();
  }, [loading]);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
      setSwitchD(true);
    };
  }, [isActive, camRefresh]);

  useEffect(() => {
    localStorage.setItem("Counter", -1);
    cookies.set("AnswerArray", [], { maxAge: 43200 });
    setFirstTime(formatTime(time));
  }, []);

  useEffect(() => {
    recordWebcam.open();
  }, [camOpener]);

  const handleStart = () => {
    let counter = parseInt(localStorage.getItem("Counter"));
    counter = counter + 1;
    localStorage.setItem("Counter", counter);
    setStartInterview(true);
    setIsActive(true);
    resetTranscript();
    SpeechRecognition.startListening();
    recordWebcam.start();
  };

  const secondCounter = (strTime) => {
    // const minuteInt = parseInt(strTime.split(":")[0]) * 60;
    // const secondInt = parseInt(strTime.split(":")[1]);
    // console.log(minuteInt + secondInt);
    console.log(strTime);
    // return minuteInt + secondInt;
  };

  const handleStop = () => {
    setStartInterview(false);
    localStorage.setItem("Counter", -1);
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
    const ArrayFromCookie = cookies.get("AnswerArray");
    const newSpreadedArray = [...ArrayFromCookie];
    const submitInterviewData = await axios
      .post(`${BASEURL}/CalculateResult`, {
        Res_Interview_ID: 456456,
        Res_Answer_Array: newSpreadedArray,
        Res_Interview_Timing:
          secondCounter(firstTime) - secondCounter(formatTime(time)),
      })
      .then((Data) => {
        console.log("ooooo-->", Data);
        if (Data.data.message === "Result found successfully !") {
          setSwitchWindow(false);
          setIsActive(false);
        }
      })
      .catch((ErrorR) => {
        console.log("kkkkk", ErrorR);
      });
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
      <>
        {" "}
        <h3>Interview Details</h3>
        <div>Company Name:{interviewData.Company_Name} </div>
        <div>HR Name: {interviewData.HR_Name}</div>
        <div>Date: {interviewData.Date_Of_Interview}</div>
        <div>Name of Technlogy : {interviewData.Name_Technology}</div>
        <div> Time Duration: {interviewData.Time_Duration}</div>
        <div>Number of Questions: {interviewData.Number_Of_Questions}</div>
        <div>Description: {interviewData.Description}</div>
        <div>Interview ID: {interviewData.Interview_ID}</div>
        <marquee> Instructions : {interviewData.Instruction}</marquee>
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
                        <p className="text-lg mb-4">
                          {
                            questionArray[
                              parseInt(localStorage.getItem("Counter"))
                            ]
                          }
                        </p>
                      </div>
                      {submitRecord ? (
                        <>
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
                                        console.log(
                                          "when start",
                                          parseInt(
                                            localStorage.getItem("Counter")
                                          )
                                        );
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
                                  {lastQsn ? (
                                    <></>
                                  ) : (
                                    <>
                                      <button
                                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
                                        onClick={() => {
                                          countIncrement();
                                          // console.log("when next",
                                          //   parseInt(
                                          //     localStorage.getItem("Counter")
                                          //   )
                                          // );
                                          resetTranscript();
                                          SpeechRecognition.startListening();
                                          pushAnswerFunction();
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
                                      pushAnswerFunction();
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
          <Results />
        )}
      </>
    </>
  );
}

export default InterviewShow;
