import React, { useEffect, useState } from 'react';
import { BsPersonWorkspace } from 'react-icons/bs';
import graduation from '../assets/img/graduation-hats.svg'
import background from '../assets/img/education-bg.png'
import blur23 from '../assets/img/blur-23.svg'
const Education = () => {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    
    fetch('/educations.json')
      .then((response) => response.json())
      .then((data) => setEducations(data))
      .catch((error) => console.error('Error fetching the educations:', error));
  }, []);

  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <img
        src={background}
        alt="Background"
        className="absolute top-0 -z-10 w-full h-auto"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Educations
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-center lg:items-start">
            <div className="w-3/4 h-3/4">
              <img src={graduation} alt="Education Illustration" className="w-full h-auto" />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {educations.map((education) => (
                <div key={education.id} className="relative p-3 bg-gray-800 rounded-lg shadow-lg">
                  <img
                    src={blur23}
                    alt="Blur"
                    className="absolute bottom-0 w-full opacity-80"
                  />
                  <div className="flex justify-center">
                    <p className="text-xs sm:text-sm text-[#16f2b3]">
                      {education.duration}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-8 px-3 py-5">
                    <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                      <BsPersonWorkspace size={36} />
                    </div>
                    <div>
                      <p className="text-base sm:text-xl mb-2 font-medium uppercase text-white">
                        {education.title}
                      </p>
                      <p className="text-sm sm:text-base text-white">
                        {education.institution}, {education.location}
                      </p>
                      <p className="text-sm sm:text-base text-white">
                        Field of Study: {education.fieldOfStudy}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
