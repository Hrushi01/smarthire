import React from "react";
import { useState } from "react";
import Arrow from "../images/arrow.png";
import { FaArrowRight } from "react-icons/fa";
import { Formik, Form, Field } from "formik";

function Fields(props) {
  const { setSignup } = props;
  const onsubmit = () => {
    if (
      initialValues.name === "Hrushi" &&
      initialValues.password === "Keystone"
    ) {
      setSignup(true);
    }
  };

  const [initialValues, setInitialvalues] = useState({
    name: "",
    password: "",
    confirmpass: "",
  });

  return (
    <Formik initialValues={initialValues} onSubmit={onsubmit}>
      {(props) => (
        <Form>
          <div>
            <img src={Arrow} alt="img" height="100" width="100"></img>
          </div>
          <div className="pl-10">
            <div>
              <div className="flex p-2 login font-bold text-4xl ml-24">
                Log{" "}
                <div className=" pl-2">
                  <div className="p-0">in</div>

                  <div className="text-xs font-medium p-0">Candidates</div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-24">
            <div className="p-5 pl-0">
              <Field
                type="text"
                label="Name"
                name="name"
                placeholder="Name"
                className="p-3 w-80 font-mono text-sm login outline-none rounded-md shadow"
              />
            </div>
            <div className="p-5 pl-0">
              <Field
                type="password"
                label="password"
                name="password"
                placeholder="Password"
                className="p-3 w-80 font-mono text-sm login outline-none rounded-md shadow"
              />
            </div>
            <div className="p-5 pl-0">
              <Field
                type="password"
                label="confirmpass"
                name="confirmpass"
                placeholder="Confirm-Password"
                className="p-3 w-80 font-mono text-sm login outline-none rounded-md shadow"
              />
            </div>
          </div>

          <div className="ml-24 pl-0 p-5 ">
            <button
              type="submit "
              onClick={() => {
                setInitialvalues(props.values);
              }}
              className="w-fit p-3 rounded-lg text-white font-semibold button flex"
            >
              <div className="pr-20 pl-5">Register</div>
              <div className="p-1">
                <FaArrowRight />
              </div>
            </button>
          </div>
          <div className="h-20">
            <div className="login ml-24 text-xs h-12 flex rounded-full border-gray-400  pr-3 pl-3 round">
              <div className="pl-9 pt-4">already have an account?</div>
              <span className="font-semibold  pt-4 pl-2 underline hover:cursor-pointer">
                Log in
              </span>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Fields;
