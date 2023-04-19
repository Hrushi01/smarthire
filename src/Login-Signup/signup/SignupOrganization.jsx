import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";

function SignupOrganization() {
  const [initialValues, setInitialvalues] = useState({
    orgName: "",
    industry: "",
    founded: "",
    location: "",
    website: "",
    size: "",
    specialities: "",
    mission: "",
    projects: "",
    technologies: "",
    openPositions: "",
    description: "",
    email: "",
    phone: "",
    linkedin: "",
  });
  console.log("Values", initialValues);

  const validationSchema = Yup.object({
    orgName: Yup.string().required("Required"),
    industry: Yup.string().required("Required"),
    founded: Yup.string().required("Required"),
    location: Yup.string().required("Required"),
    website: Yup.string().required("Required"),
    size: Yup.string().required("Required"),
    specialities: Yup.string().required("Required"),
    mission: Yup.string().required("Required"),
    projects: Yup.string().required("Required"),
    technologies: Yup.string().required("Required"),
    openPositions: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().required("Required"),
    linkedin: Yup.string().url("Invalid URL").required("Required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // TODO: Handle form submission here
    setInitialvalues(values);

    setSubmitting(false);
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center">
        Organization Sign Up
      </h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form className="max-w-xl mx-auto">
            <div className="mb-4">
              <label htmlFor="orgName" className="font-bold mb-1 block">
                Organization Name<span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                name="orgName"
                className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
              />
              <ErrorMessage
                name="orgName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="industry" className="font-bold mb-1 block">
                Industry<span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                name="industry"
                className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
              />
              <ErrorMessage
                name="industry"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="founded" className="font-bold mb-1 block">
                Founded<span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                name="founded"
                className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
              />
              <ErrorMessage
                name="founded"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="location" className="font-bold mb-1 block">
                Location<span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                name="location"
                className="form-input w-full px-3  py-2 rounded-md border border-gray-300"
              />
              <ErrorMessage
                name="location"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="website" className="font-bold mb-1 block">
                Website<span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                name="website"
                className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
              />
              <ErrorMessage
                name="website"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="size" className="font-bold mb-1 block">
                Size<span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                name="size"
                className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
              />
              <ErrorMessage
                name="size"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="specialities" className="font-bold mb-1 block">
                Specialities<span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                name="specialities"
                className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
              />
              <ErrorMessage
                name="specialities"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mission" className="font-bold mb-1 block">
                Mission<span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                name="mission"
                className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
              />
              <ErrorMessage
                name="mission"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="projects" className="font-bold mb-1 block">
                Projects<span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                name="projects"
                className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
              />
              <ErrorMessage
                name="projects"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="technologies" className="font-bold mb-1 block">
                Technologies<span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                name="technologies"
                className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
              />
              <ErrorMessage
                name="technologies"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="openPositions" className="font-bold mb-1 block">
                Open Positions<span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                name="openPositions"
                className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="technologies" className="font-bold mb-1 block">
                Email<span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                name="email"
                className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="technologies" className="font-bold mb-1 block">
                description<span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                name="description"
                className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="technologies" className="font-bold mb-1 block">
                linkedin<span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                name="linkedin"
                className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
              />
              <ErrorMessage
                name="linkedin"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="technologies" className="font-bold mb-1 block">
                Phone<span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                name="phone"
                className="form-input w-full px-3 py-2 rounded-md border border-gray-300"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="btn btn-primary w-full md:w-auto"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
export default SignupOrganization;
