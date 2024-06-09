import React, { useEffect, useState } from "react";
import { FaUserGraduate } from "react-icons/fa";
import graduation from "../assets/img/graduation-hats.svg";
import background from "../assets/img/education-bg.png";
import "./Education.css";
const Education = () => {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    fetch("/educations.json")
      .then((response) => response.json())
      .then((data) => setEducations(data))
      .catch((error) => console.error("Error fetching the educations:", error));
  }, []);

  return (
    <section
      id="education"
      className="education-section relative z-50 my-12 py-24 lg:my-24 "
    >
      <img
        src={background}
        alt="Background"
        className="absolute top-0 left-0 w-full h-auto -z-10"
      />
      <div className="text-center mb-8">
        <div className="inline-flex items-center">
          <span className="block w-16 lg:w-24 h-[2px] bg-[#e7e7e7]"></span>
          {/* <span className="mx-4 px-5 py-2 text-lg lg:text-xl bg-[#1a1443] text-white rounded-md">
            Educations
          </span> */}
          <h2 className="mx-4">Education</h2>
          <span className="block w-16 lg:w-24 h-[2px] bg-[#e7e7e7]"></span>
        </div>
      </div>
      <div className="flex justify-center mb-8">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 px-4 lg:px-0">
        <div className="flex justify-center lg:justify-end">
          <img
            src={graduation}
            alt="Graduation Illustration"
            className="w-2/3 lg:w-3/4 h-auto mr-4"
          />
        </div>

        <div className="flex flex-col gap-6 w-4/5">
          {educations.map((education) => (
            <div
              key={education.id}
              className="p-4 bg-customColor rounded-lg shadow-lg relative overflow-hidden"
            >
              {/* Conditional rendering for duration */}
              {education.duration && (
                <p className="text-xs lg:text-sm text-[#16f2b3] mb-2 text-center">
                  {education.duration}
                </p>
              )}

              {/* Conditional rendering for field of study */}
              {education.fieldOfStudy && (
                <p className="text-sm lg:text-base text-white text-center">
                  Field of Study: {education.fieldOfStudy}
                </p>
              )}
              <div className="flex items-center gap-x-4 mb-4">
                <FaUserGraduate className="text-white text-3xl transition-transform duration-300 hover:scale-125" />
                <div>
                  <p className="text-lg lg:text-xl text-white font-medium uppercase mb-1">
                    {education.title}
                  </p>
                  <p className="text-sm lg:text-base text-white">
                    {education.institution}, {education.location}
                  </p>
                </div>
              </div>

              {/* <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
