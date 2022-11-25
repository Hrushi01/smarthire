import Navbar from "./components/Navbar";
import Login from "./login/Login";
import Candidate from "./pages/Candidate";
import { useState } from "react";
import InterviewCam from "./components/InterviewCam";
import { useRecordWebcam } from "react-record-webcam";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./components/InterviewCam.css";
import MicroPhoneTesting from "./components/MicroPhoneTesting";

function App() {
  const [show, setShow] = useState(false);
  const [Itr, setItr] = useState(true);

  const recordWebcam = useRecordWebcam({ frameRate: 60 });
  const saveFile = async () => {
    const blob = await recordWebcam.getRecording();
  };

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  return (
    <div>
      {show ? (
        <div className="bg-gray-100 flex h-full w-full ">
          <>
            <div className="bg-gray-100 flex h-full w-full ">
              <Navbar setItr={setItr} Itr={Itr} />
              {Itr ? <InterviewCam /> : <Candidate />}
            </div>
          </>
        </div>
      ) : (
        <Login show={show} setShow={setShow} />
      )}
    </div>
  );
}

export default App;
