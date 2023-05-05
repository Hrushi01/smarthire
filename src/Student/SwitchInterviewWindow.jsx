
import IntreviewList from "./IntreviewList";
import InterviewShow from "./InterviewShow";
import React, { useState, useEffect } from "react";

const SwitchInterviewWindow =({ UserDataData })=>{
  //Swithcing
  const [switchD, setSwitchD] = useState(true);
  const [ItrId, setItrId] = useState(0);
  
  return (<>
  {
    switchD ? (<IntreviewList
        setSwitchD={setSwitchD}
        setItrId={setItrId}
        UserDataData={UserDataData}
      />) : (<InterviewShow setSwitchD={setSwitchD}
        setItrId={setItrId}
        UserDataData={UserDataData} ItrId={ItrId} switchD={switchD}/>)
  }
  </>);
}
export default SwitchInterviewWindow;