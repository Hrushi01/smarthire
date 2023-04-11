import React from "react";
import { useState } from "react";
import Arrow from "./images/arrow.png";
import { FaArrowRight } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import Cookies from "universal-cookie";
import { RxCross2 } from "react-icons/rx";

function Fields(props) {
  const [typeOfUser, setTypeOfUser] = useState("");
  const {
    setIsLoggedIn,
    refresher,
    setRefresher,
    OrganizationLog,
    candidateLog,
    status,
    setSignup,
  } = props;
  console.log("jjj", OrganizationLog, candidateLog);
  const [Error, setError] = useState("");
  const cookies = new Cookies();
  const { setShow } = props;
  if (OrganizationLog === true) {
    setTypeOfUser("Company");
  } else if (candidateLog === true) {
    setTypeOfUser("Candidate");
  }

  const onsubmit = () => {
    OnClickLogin();
  };

  // for Snackbar
  const [open, setOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState();
  const [snackbarClass, setSnackbarClass] = useState();
  const handleClose = () => {
    setOpen(false);
  };

  const action = (
    <button onClick={handleClose}>
      <RxCross2 />
    </button>
  );

  const BASEURL = process.env.REACT_APP_SAMPLE;
  //Login Api
  const OnClickLogin = async () => {
    setOpen(true);
    setSnackbarMsg("Please Wait ...");
    setSnackbarClass("default");
    const Temp = await axios
      .post(`${BASEURL}/login`, {
        Res_EmailId: initialValues.name,
        Res_Password: initialValues.password,
        Res_TypeOfUser: status,
      })
      .then((Data) => {
        if (Data) {
          cookies.set("SmartToken", Data.data.data, { maxAge: 86400 });
          setIsLoggedIn(true);
          setRefresher(!refresher);
          console.log(refresher);
        }
      })
      .catch((ErrorR) => {
        setSnackbarClass("invalid");
        setOpen(true);
        setError(ErrorR?.response?.data?.message);
        setSnackbarMsg(ErrorR?.response?.data?.message);
        console.log("kkkkk", ErrorR);
      });
  };

  const [initialValues, setInitialvalues] = useState({
    name: "",
    password: "",
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

                  <div className="text-xs font-medium p-0">{status}</div>
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
          </div>
          <div className="ml-24">
            <div className="login text-sm font-semibold">Forgot password?</div>
          </div>
          <div className="ml-24 pl-0 p-5 ">
            <button
              type="submit"
              className="w-fit p-3 rounded-lg text-white font-semibold button flex"
              onClick={setInitialvalues(props.values)}
            >
              <div className="pr-20 pl-5">Log In</div>
              <div className="p-1">
                <FaArrowRight />
              </div>
            </button>
          </div>
          <div className="h-20">
            <div className="login ml-24 text-xs h-12 flex rounded-full border-gray-400  pr-3 pl-3 round">
              <div className="pl-9 pt-4">don’t have an account yet?</div>
              <div
                className="font-semibold  pt-4 pl-2 underline hover:cursor-pointer"
                onClick={() => {
                  setSignup(true);
                }}
              >
                Sign up
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Fields;
