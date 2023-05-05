import React from "react";

const Card = ({ organization, jobPosition, interviewDate, interviewTime }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80 mx-4 my-8">
      <div className="p-4">
        <h3 className="font-bold text-2xl mb-2">{organization}</h3>
        <p className="text-gray-700 text-base mb-2 font-bold">{jobPosition}</p>
        <p className="text-gray-700 text-base mb-2">
          <span className="font-bold ">
          Interview Date : 
            </span> &nbsp;
            {interviewDate}
        </p>
        <p className="text-gray-700 text-base mb-2">
        <span className="font-bold ">
        Interview Time:
            </span> &nbsp;
          {interviewTime}
        </p>
      </div>
    </div>
  );
};

const CardList = ({ cards }) => {
  return (
    <>
    


    <div className="flex flex-wrap justify-center">
      {cards.map((card) => (
        <div
          key={card.organization}
          className="transform hover:scale-110 transition-all duration-500"
        >
          <Card
            organization={card.organization}
            jobPosition={card.jobPosition}
            interviewDate={card.interviewDate}
            interviewTime={card.interviewTime}
          />
        </div>
      ))}
    </div>
    </>
  );
};

export default CardList;
