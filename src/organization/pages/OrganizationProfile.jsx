import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
// import Avatar from "react-avatar";
// import Avatar from "./Avatar";
import { Button } from "@mui/material";
const OrganizationProfile = ({UserDataData}) => {
  const [OrgData, setOrgData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setOrgData(UserDataData);
    console.log("Org",OrgData);
    if(OrgData){
      setLoading(false);
    }
  }, [loading]);
  return (
    <>{
      loading ? (<>Loading</>) :(<>
            <div className="bg-gray-100">
        <div className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex items-center">
                {/* <Avatar
                  size="lg"
                  src="https://picsum.photos/200"
                  alt="Organization Logo"
                /> */}
                <div className="ml-4">
                  <h1 className="text-2xl font-bold text-gray-900">
                    Organization Name
                  </h1>
                  <p className="text-lg font-medium text-gray-500">Industry</p>
                </div>
              </div>
              <div className="mt-4 sm:mt-0">
                <Button label="Edit Profile" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Company Details
                </h2>
                <div className="flex items-center mb-2">
                  <p className="text-gray-500 w-1/2">Founded</p>
                  <p className="text-gray-600 w-1/2">2020</p>
                </div>
                <div className="flex items-center mb-2">
                  <p className="text-gray-500 w-1/2">Location</p>
                  <p className="text-gray-600 w-1/2">San Francisco, CA</p>
                </div>
                <div className="flex items-center mb-2">
                  <p className="text-gray-500 w-1/2">Website</p>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-500 w-1/2"
                  >
                    www.company.com
                  </a>
                </div>
                <div className="flex items-center mb-2">
                  <p className="text-gray-500 w-1/2">Size</p>
                  <p className="text-gray-600 w-1/2">10-50 employees</p>
                </div>
                <div className="flex items-center mb-2">
                  <p className="text-gray-500 w-1/2">Specialties</p>
                  <p className="text-gray-600 w-1/2">
                    Web Development, UI/UX Design, Mobile Development
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Mission
                </h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  ut nibh vitae diam dignissim efficitur. Ut dignissim dolor
                  velit, eu aliquam libero elementum ac. Aliquam vitae massa sit
                  amet odio tempor sagittis. Proin pellentesque posuere est, eu
                  consectetur sapien elementum a.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Projects
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Project 1</li>
                <li>Project 2</li>
                <li>Project 3</li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Technologies
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Open Positions
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Web Developer</li>
                <li>UI/UX Designer</li>
                <li>Mobile Developer</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-2xl mt-8">
          <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  About Organization
                </h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  ut nibh vitae diam dignissim efficitur. Ut dignissim dolor
                  velit, eu aliquam libero elementum ac. Aliquam vitae massa sit
                  amet odio tempor sagittis. Proin pellentesque posuere est, eu
                  consectetur sapien elementum a.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Contact Information
                </h2>
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="text-gray-500 mr-2"
                  />
                  <p className="text-gray-600">Company Name</p>
                </div>
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-gray-500 mr-2"
                  />
                  <a
                    href="mailto:info@company.com"
                    className="text-blue-600 hover:text-blue-500"
                  >
                    info@company.com
                  </a>
                </div>
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-gray-500 mr-2"
                  />
                  <a
                    href="tel:+1234567890"
                    className="text-blue-600 hover:text-blue-500"
                  >
                    (123) 456-7890
                  </a>
                </div>
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-gray-500 mr-2"
                  />
                  <a href="#" className="text-blue-600 hover:text-blue-500">
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="              text-gray-500 mr-2"
                  />
                  <a href="#" className="text-blue-600 hover:text-blue-500">
                    Twitter
                  </a>
                </div>
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-gray-500 mr-2"
                  />
                  <a href="#" className="text-blue-600 hover:text-blue-500">
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>)
    }

    </>
  );
};

export default OrganizationProfile;
