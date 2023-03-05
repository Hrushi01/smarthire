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
  const handleSubmitQuestions = {
    // fucntion
  };
  const addQuestionField= {
    // add question flied
  }
  return (
    <>
      <div className="CompanyDetails">
        <div>
          <div>companyName</div>
          <div>Description</div>
          <div>HR Name</div>
        </div>
        <div>instructions</div>
      </div>

      <div className="InterviewDetails">
        <Formik>
          <Form onSubmit={handleSubmitInterview}>
            <h1>Interview Details</h1>
            <Field
              type="text"
              label="technologyName"
              name="technologyName"
              value={technologyName}
              placeholder="Technology Name "
              required
              onChange={(Event) => {
                setTechnologyName(Event.target.value);
              }}
            />
            <Field
              type="text"
              label="noQuestions"
              name="noQuestions"
              value={noQuestions}
              placeholder="Number of Questions "
              required
              onChange={(Event) => {
                setNoQuestions(Event.target.value);
              }}
            />

            <Field
              type="date"
              label="interviewDate"
              name="interviewDate"
              value={interviewDate}
              placeholder="Interview Date"
              required
              onChange={(Event) => {
                setInterviewDate(Event.target.value);
              }}
            />

            <Field
              type="time"
              label="interviewTime"
              name="interviewTime"
              value={interviewTime}
              placeholder="Interview Time"
              required
              onChange={(Event) => {
                setInterviewTime(Event.target.value);
              }}
            />

            <Field
              type="text"
              label="interviewDuration"
              name="interviewDuration"
              value={interviewDuration}
              placeholder="Interview Duration"
              required
              onChange={(Event) => {
                setInterviewDuration(Event.target.value);
              }}
            />
            <button type="submit">Schedule Interview</button>
          </Form>
        </Formik>
      </div>

      <div className="questions">
      <Formik>
          <Form onSubmit={handleSubmitQuestions}>
            <h1>Interview Questions</h1>
            <Field
              type="text"
              label="question"
              name="question"
              value={question}
              placeholder="Enter question"
              required
              onChange={(Event) => {
                setQuestion(Event.target.value);
              }}
            />
            <Field
              type="text"
              label="answer"
              name="answer"
              value={answer}
              placeholder="Enter Answer"
              required
              onChange={(Event) => {
                setAnswer(Event.target.value);
              }}
            />

            <button type="button" onClick={addQuestionField}>+</button>
            <button type="submit">submit</button>
          </Form>
        </Formik>  

      </div>
    </>
  );
}

export default NewInterview;
