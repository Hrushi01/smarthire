import axios from "axios";
import Cookies from "universal-cookie";
import React, { useState, useEffect } from "react";

const IntreviewList = ({ setItrId, setSwitchD, UserDataData }) => {
  const [testEmail, setTestEmail] =useState("");
  const [IntrList, setIntrList] = useState([]);
  const BASEURL = process.env.REACT_APP_SAMPLE;
  const cookies = new Cookies();
  const [loading, setLoading] = useState(true);

  const setterF = (Obj) => {
    setSwitchD(false);
  };
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
      console.log("kkkkk=====",loading);
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <>
          {IntrList.map((Item) => {
            console.log(Item);
            return (
              <div
                onClick={() => {
                  setItrId(Item.Interview_ID);
                  setSwitchD(false);
                }}
              >
                {/* <div>{Item.Interview_ID}</div> */}
                <div>wee</div>
                <div>wee</div>
                <div>wee</div>
                <div>wee</div>
                <div>wee</div>
                <div>wee</div>
                <div>wee</div>
                <div>wee</div>
                <div>wee</div>
                <div>wee</div>
                <br />
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
export default IntreviewList;
