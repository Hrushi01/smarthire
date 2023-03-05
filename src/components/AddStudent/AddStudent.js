import React from "react";
import { Formik, Form, Field } from "formik";
import { useState } from "react";

function AddStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleAddStudent = {
    // fucntion
  };
  return (
    <>
      <div>
        <div>Interview Topic</div>
        <div>Date of Interview</div>

        <div>
          <h2>candidate List</h2>
          <div>Akash Malekar</div>
          <div>Rahat Sayyed</div>
        </div>

        <Formik>
          <Form onSubmit={handleAddStudent}>
            <h2>add candidate </h2>

            <Field
              type="text"
              label="name"
              name="name"
              value={name}
              placeholder="Enter Name "
              required
              onChange={(Event) => {
                setName(Event.target.value);
              }}
            />
            <Field
              type="text"
              label="email"
              name="email"
              value={email}
              placeholder="Email"
              required
              onChange={(Event) => {
                setEmail(Event.target.value);
              }}
            />

            <button type="submit">Add candidate</button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default AddStudent;
