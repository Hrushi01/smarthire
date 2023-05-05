import React from "react";
import "./AddStudent.css";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { Subject } from "@mui/icons-material";

function AddStudent({ list, setList }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function sendAcceptanceEmailToCandidate(candidateEmail) {
    const subject = "Smart Hire Acceptance Mail";
    const body =
      "Hrushikesh Ambike HR of the company XYZ invited you to give the interview for the position of XYZ";
    window.location.href = `mailto:${candidateEmail}?subject=${subject}&body=${body}`;
  }
  return (
    <div className="">
      <div className="container mx-auto py-8">
        <div className="flex w-2/4 mx-auto">
          <div className="max-w-2xl mx-auto px-4  ">
            <div className="flex justify-between items-center mx-auto">
              <h1 className="text-2xl font-bold text-gray-800 mx-auto ">
                Add Students to the list
              </h1>
            </div>
            <div className="my-4">
              <p className="text-gray-600 italic">
                Please add the name and email of the students which are to be
                allowed
              </p>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="text-lg font-bold">Interview Topic</div>
          <div className="text-lg">Date of Interview</div>
        </div>
        <div className="flexRowReverse">
          <Formik>
            <Form className="card cardStudent width30 max-h-[300px]">
              <h2 className="w-full text-lg font-bold mb-4 borderBottom">
                Add Candidate
              </h2>

              <div className="bg-white rounded-lg p-4 mb-4 flex">
                <label className=" mt-2 font-bold" htmlFor="name">
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  placeholder="Enter Name"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 ml-2"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>

              <div className="bg-white rounded-lg p-4 mb-4 flex">
                <label className=" mt-2 font-bold" htmlFor="email">
                  Email
                </label>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Enter Email"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 ml-2"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>

              <button
                type="button"
                onClick={() => {
                  const newItem = { name: name, email: email };
                  setList([...list, newItem]);
                  setName("");
                  setEmail("");
                }}
                className="ml-4 buttonBlack text-white font-bold py-2 px-4 rounded-lg"
              >
                Add Candidate
              </button>
            </Form>
          </Formik>
          <div className="mb-8 card min-h-[400px]">
            <h2 className="text-lg font-bold mb-4 w-full borderBottom">Candidate List</h2>
            <div className="bg-white rounded-lg w-full p-4">
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell className="font-bold">Name</TableCell>
                      <TableCell className="font-bold">Email</TableCell>
                      <TableCell className="font-bold">Send Mail</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {list?.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <button
                            className="bg-blue-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
                            onClick={() =>
                              sendAcceptanceEmailToCandidate(`${user.email}`)
                            }
                          >
                            Send acceptance
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
