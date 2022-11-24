import React from "react";
import Individual from "../components/Individual";
import Searchbar from "../components/Searchbar";
import Tracker from "../components/Tracker";

function Candidate() {
  return (
    <div className="candi">
      <div>
        <div className="p-10 ">
          <Searchbar />
        </div>
        <div className="  flex p-20  rounded-xl   ">
          <Individual />
          <Tracker />
        </div>
      </div>
    </div>
  );
}

export default Candidate;
