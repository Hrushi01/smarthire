import React from "react";
import { Formik, Form, Field } from "formik";
import { useState } from "react";

function NewInterview() {
  const [technologyName, setTechnologyName] = useState("");
  const [noQuestions, setNoQuestions] = useState("");
  const [interviewDate, setInterviewDate] = useState("");
  const [interviewTime, setInterviewTime] = useState("");
  const [interviewDuration, setInterviewDuration] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmitInterview = {
    // fucntion
  };
  // const handleSubmitQuestions = {
  //   // fucntion
  // };
  const addQuestionField = {
    // add question flied
  };
  return (
    <>
      <div className="bg-gray-50 py-4 flex">
        <div className="CompanyDetails p-4 bg-gray-100 w-1/4">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-bold mb-4 font-serif">
              MicroSoft Kuroku Pvt Limited
            </h2>
            <div className="mb-4">
              <span className="italic font-bold">Description:</span>&nbsp;
              Software Consulting Company Deals with all the trending
              technologies
            </div>
            <div>
              <span className="italic font-bold">HR Name:</span> &nbsp;
              Hrushikesh Ambike
            </div>
          </div>
        </div>
        <div className="flex w-2/4">
          <div className="max-w-2xl mx-auto px-4 ">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-800">
                New Interview
              </h1>
              <div className="text-right">
                <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                  Save
                </button>
                <button className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 ml-2">
                  Cancel
                </button>
              </div>
            </div>
            <div className="my-4">
              <p className="text-gray-600">
                Fill in the form below to schedule a new interview.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-xl font-bold mb-4">Interview Details</h2>
            <Formik>
              <Form onSubmit={handleSubmitInterview}>
                <div className="mb-4">
                  <label
                    htmlFor="technologyName"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Technology Name
                  </label>
                  <Field
                    type="text"
                    id="technologyName"
                    name="technologyName"
                    value={technologyName}
                    placeholder="Enter technology name"
                    required
                    onChange={(Event) => {
                      setTechnologyName(Event.target.value);
                    }}
                    className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="noQuestions"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Number of Questions
                  </label>
                  <Field
                    type="number"
                    id="noQuestions"
                    name="noQuestions"
                    value={noQuestions}
                    placeholder="Enter number of questions"
                    required
                    onChange={(Event) => {
                      setNoQuestions(Event.target.value);
                    }}
                    className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="interviewDate"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Interview Date
                  </label>
                  <Field
                    type="date"
                    id="interviewDate"
                    name="interviewDate"
                    value={interviewDate}
                    placeholder="Enter interview date"
                    required
                    onChange={(Event) => {
                      setInterviewDate(Event.target.value);
                    }}
                    className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="interviewTime"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Interview Time
                  </label>
                  <Field
                    type="time"
                    id="interviewTime"
                    name="interviewTime"
                    value={interviewTime}
                    placeholder="Enter interview time"
                    required
                    onChange={(Event) => {
                      setInterviewTime(Event.target.value);
                    }}
                    className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="interviewDuration"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Interview Duration
                  </label>
                  <Field
                    type="number"
                    id="interviewDuration"
                    name="interviewDuration"
                    value={interviewDuration}
                    placeholder="Enter interview duration in minutes"
                    required
                    onChange={(Event) => {
                      setInterviewDuration(Event.target.value);
                    }}
                    className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-600"
                  />
                </div>

                <h2 className="text-xl font-bold mb-4">Questions</h2>
                {[...Array(Number(noQuestions))].map((value, index) => {
                  return (
                    <div key={index}>
                      <div className="mb-4">
                        <label
                          htmlFor="question"
                          className="block text-gray-700 font-bold mb-2"
                        >
                          Question {index + 1}
                        </label>
                        <Field
                          type="text"
                          id={`question${index}`}
                          name={`question${index}`}
                          value={question}
                          placeholder="Enter question"
                          required
                          onChange={(Event) => {
                            setQuestion(Event.target.value);
                          }}
                          className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-600"
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="answer"
                          className="block text-gray-700 font-bold mb-2"
                        >
                          Answer {index + 1}
                        </label>
                        <Field
                          type="text"
                          id={`answer${index}`}
                          name={`answer${index}`}
                          value={answer}
                          placeholder="Enter answer"
                          required
                          onChange={(Event) => {
                            setAnswer(Event.target.value);
                          }}
                          className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-600"
                        />
                      </div>
                    </div>
                  );
                })}
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                >
                  Save Interview
                </button>
              </Form>
            </Formik>
            <button
              type="button"
              onClick={addQuestionField}
              className="mt-4 px-4 py-2 rounded-md bg-gray-600 text-white hover:bg-gray-700"
            >
              Add Question Field
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewInterview;
