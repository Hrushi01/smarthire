import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import axios from "axios";
import Cookies from "universal-cookie";

function InterviewList({ setItrId, UserDataData }) {
  const [testEmail, setTestEmail] = useState("");
  const [IntrList, setIntrList] = useState([]);
  const BASEURL = process.env.REACT_APP_SAMPLE;
  const cookies = new Cookies();
  const [loading, setLoading] = useState(true);

  // const setterF = (Obj) => {
  //   setSwitchD(false);
  // };
  const findInterviewList = async () => {
    const viewData = await axios
      .post(`${BASEURL}/ViewInterviewList`, {
        Res_Interviewer_Email: testEmail,
      })
      .then((Data) => {
        setIntrList(Data.data.data1);
      })
      .catch((ErrorR) => {
        console.log("kkkkk", ErrorR);
      });
  };
  useEffect(() => {
    setTestEmail(UserDataData.emailId);
    findInterviewList();
    // console.log("Org", OrgData);
    if (IntrList[0] && testEmail) {
      setLoading(false);
      console.log("kkkkk=====", loading);
    }
  }, [loading]);

  const cards = [
    {
      organization: "Acme Inc.",
      jobPosition: "Software Engineer",
      interviewDate: "May 15, 2023",
      interviewTime: "10:00am",
    },
    {
      organization: "Widget Corp.",
      jobPosition: "Frontend Developer",
      interviewDate: "May 20, 2023",
      interviewTime: "2:00pm",
    },
  ];
  return (
    <>
      {loading ? (
        <></>
      ) : (
        <>
          <div>
            <div className="flex justify-center">
              <div className="font-bold text-4xl font mt-4 ">
                Upcoming Interviews
              </div>
            </div>
            <div>
              <CardList cards={cards} />
            </div>
          </div>
          <hr />
          <hr />
          <hr />
          <div>
            <div>
              <div className="flex justify-center">
                <div className="font-bold text-4xl font mt-4 ">
                  Previous Interviews
                </div>
              </div>
              <CardList cards={cards} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default InterviewList;
