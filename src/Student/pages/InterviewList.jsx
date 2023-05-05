import React from "react";
import CardList from "./CardList";

function InterviewList() {
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
      <div>
        <div className="flex justify-center">
          <div className="font-bold text-4xl font mt-4 ">
            Upcoming Interviews
          </div>
        </div>
        <CardList cards={cards} />
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
  );
}

export default InterviewList;
