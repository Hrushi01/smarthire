import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import DateConverter from "../../assets/DateConverter";

const Card = ({
  organization,
  jobPosition,
  interviewDate,
  interviewTime,
  qsnNumber,
  timeDuration,
  jobDesc,
  id,
  setItrId,
  visited_Array,
  testEmail,
}) => {
  const [validIntr, setValidIntr] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const date = new Date(); // create a new Date object with the current date and time
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    };
    function convertDateFormat(dateString) {
      const date = new Date(dateString);
      const isoDateString = date.toISOString().split("T")[0] + "T00:00:00.000Z";
      return isoDateString;
    }
    setValidIntr(interviewDate >= convertDateFormat(new Date()));
    console.log("testEmail", interviewDate <= convertDateFormat(new Date()));
    setLoading(false);
  });
  const dFunction = () => {
    if (visited_Array.includes(testEmail)) {
      return (
        <p className="text-gray-700 text-base mb-2">
          <button
            variant="contained"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Attempted
          </button>
        </p>
      );
    } else {
      return (
        <p className="text-gray-700 text-base mb-2">
          <button
            variant="contained"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Expired
          </button>
        </p>
      );
    }
  };

  const startButton = (validIntr) => {
    if (validIntr === true) {
      console.log(validIntr);
      return (
        <p className="text-gray-700 text-base mb-2">
          <Link to="/interview">
            <button
              variant="contained"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
              onClick={() => {
                setItrId(id);
              }}
            >
              Start Interview
            </button>
          </Link>
        </p>
      );
    } else {
      return <>{dFunction()}</>;
    }
  };

  return (
    <>
      {loading ? (
        <>Loading....</>
      ) : (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80 mx-4 my-8">
          <div className="p-4">
            <h3 className="font-bold text-2xl mb-2">{organization}</h3>
            <p className="text-gray-700 text-base mb-2 font-bold">
              {jobPosition}
            </p>
            <p className="text-gray-700 text-base mb-2">
              <span className="font-bold ">Description:</span> &nbsp;
              {jobDesc}
            </p>
            <p className="text-gray-700 text-base mb-2">
              <span className="font-bold ">Interview Date :</span> &nbsp;
              {DateConverter(interviewDate, "Date")}
            </p>
            <p className="text-gray-700 text-base mb-2">
              <span className="font-bold ">Interview Time:</span> &nbsp;
              {interviewTime} [24 Hrs Format]
            </p>
            <p className="text-gray-700 text-base mb-2">
              <span className="font-bold ">Number of Questions:</span> &nbsp;
              {qsnNumber}
            </p>
            <p className="text-gray-700 text-base mb-2">
              <span className="font-bold ">Duration:</span> &nbsp;
              {timeDuration} Minutes
            </p>
            {startButton(validIntr)}
          </div>
        </div>
      )}
    </>
  );
};

const CardList = ({ cards, UserDataData, setItrId }) => {
  const [testEmail, setTestEmail] = useState("");
  const [IntrList, setIntrList] = useState([]);
  const BASEURL = process.env.REACT_APP_SAMPLE;
  const cookies = new Cookies();
  const [loading, setLoading] = useState(true);

  const findInterviewList = async () => {
    const viewData = await axios
      .post(`${BASEURL}/ViewInterviewList`, {
        Res_Interviewer_Email: testEmail,
      })
      .then((Data) => {
        setIntrList(Data.data.data1);
        setLoading(false);
      })
      .catch((ErrorR) => {
        console.log("kkkkk", ErrorR);
      });
  };
  useEffect(() => {
    setTestEmail(UserDataData.emailId);
    findInterviewList();
    if (IntrList[0] && testEmail) {
      setLoading(false);
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <>Loading</>
      ) : (
        <>
          {" "}
          <div className="flex flex-wrap justify-center">
            {IntrList.map((card) => (
              <div>
                <div
                  key={card.organization}
                  className="transform hover:scale-110 transition-all duration-500"
                >
                  <Card
                    organization={card.Company_Name}
                    jobPosition={card.Name_Technology}
                    jobDesc={card.Description}
                    interviewDate={card.Date_Of_Interview}
                    interviewTime={card.Time_Of_Interview}
                    qsnNumber={card.Number_Of_Questions}
                    timeDuration={card.Time_Duration}
                    id={card.Interview_ID}
                    setItrId={setItrId}
                    visited_Array={card.visited_Array}
                    testEmail={testEmail}
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default CardList;
