import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import { Button } from "@mui/material";

const Card = ({
  organization,
  jobPosition,
  interviewDate,
  interviewTime,
  qsnNumber,
  timeDuration,
  jobDesc,
  setItrId,
  card,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const getDescription = () => {
    if (expanded) {
      return jobDesc;
    }
    return jobDesc.slice(0, 50) + "...";
  };

  const getReadMoreButton = () => {
    if (!expanded && jobDesc.length > 50) {
      return (
        <button
          className="text-blue-500 font-bold hover:underline focus:outline-none"
          onClick={toggleExpansion}
        >
          Read More
        </button>
      );
    }
    return null;
  };

  const formattedInterviewDate = new Date(interviewDate).toLocaleDateString();
  const formattedInterviewTime = new Date(interviewTime).toLocaleTimeString(
    [],
    {
      hour: "numeric",
      minute: "numeric",
      timeZoneName: "short",
    }
  );

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80 mx-4 my-8">
      <div className="p-4">
        <h3 className="font-bold text-2xl mb-2 text-gray-900">
          {organization}
        </h3>
        <p className="text-gray-700 text-base mb-2 font-semibold">
          {jobPosition}
        </p>
        <p className="text-gray-700 text-base mb-4 h-20 overflow-scroll leading-6">
          <span className="font-bold text-gray-900">Description:</span> &nbsp;
          {getDescription()}
          {getReadMoreButton()}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <span className="font-bold text-gray-900">Interview Date:</span>{" "}
          &nbsp;
          {formattedInterviewDate}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <span className="font-bold text-gray-900">Interview Time:</span>{" "}
          &nbsp;
          {formattedInterviewTime}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <span className="font-bold text-gray-900">Number of Questions:</span>{" "}
          &nbsp;
          {qsnNumber}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <span className="font-bold text-gray-900">Duration:</span> &nbsp;
          {timeDuration} Minutes
        </p>
      </div>
      <div className="flex justify-center p-4">
        <Button
          variant="contained"
          onClick={() => {
            setItrId(card.Interview_ID);
          }}
        >
          Give Test
        </Button>
      </div>
    </div>
  );
};

const CardList = ({ cards, UserDataData, setItrId }) => {
  const [testEmail, setTestEmail] = useState("");
  const [IntrList, setIntrList] = useState([]);
  const BASEURL = process.env.REACT_APP_SAMPLE;
  const cookies = new Cookies();
  const [loading, setLoading] = useState(true);

  const findInterviewList = async () => {
    console.log("testEmail", testEmail);

    const viewData = await axios
      .post(`${BASEURL}/ViewInterviewList`, {
        Res_Interviewer_Email: testEmail,
      })
      .then((Data) => {
        setIntrList(Data.data.data1);
        console.log("kkkkk=====", Data);
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
            {IntrList.map((card, index) => (
              <div key={index}>
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
                    setItrId={setItrId}
                    card={card}
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
