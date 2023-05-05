import InterviewShow from "./InterviewShow";
import React, { useState } from "react";

const SwitchInterviewWindow = ({ UserDataData }) => {
  //Swithcing

  const [ItrId, setItrId] = useState(0);

  return (
    <>
      <InterviewShow
        setItrId={setItrId}
        UserDataData={UserDataData}
        ItrId={ItrId}
      />
    </>
  );
};
export default SwitchInterviewWindow;
