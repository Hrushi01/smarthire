import { useState, useEffect } from "react";
import Extra from "./CameraMicrophone/Extra";
import Timer from "./Timer";
// import questionsData from "./questionsData";

function InterviewShow() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const questionsData = [
    "What is your name?",
    "What is your favorite color?",
    "What is your favorite food?",
  ];

  useEffect(() => {
    // Load questions from database or API
    setQuestions(questionsData);
  }, []);

  function handleStartInterview() {
    setIsTimerRunning(true);
  }

  function handleNextQuestion() {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  }

  function handlePreviousQuestion() {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  }

  function handleFinish() {
    setIsTimerRunning(false);
    // Calculate result and show it
    alert("RESULT");
  }

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="bg-gray-200 w-full md:w-1/2 h-100 md:h-auto flex items-center justify-center">
        <Extra />
      </div>
      <div className="bg-white w-full md:w-1/2 h-screen md:h-auto flex flex-col justify-between p-4">
        <div>
          <div className="text-right">
            <Timer duration={20 * 60} isRunning={isTimerRunning} />
          </div>
          {/* <div className="p-4 border rounded-md">
            <h2 className="text-xl font-bold mb-4">
              {questions[currentQuestionIndex]?.title}
            </h2>
            <p className="mb-4">{questions[currentQuestionIndex]?.content}</p>
            <textarea
              className="border w-full p-2 mb-4"
              placeholder="Type your answer here"
            />
            <div className="flex justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleNextQuestion}
                disabled={currentQuestionIndex === questions.length - 1}
              >
                Next
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleFinish}
              >
                Finish
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default InterviewShow;
