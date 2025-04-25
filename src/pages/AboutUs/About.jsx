import { HiOutlinePlusCircle } from "react-icons/hi";
import { HiOutlineMinusCircle } from "react-icons/hi";
import React, { useState } from "react";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Professionalism",
      content:
        "Our business practices are based on high ethical values and principles.",
    },
    {
      title: "Audacity",
      content:
        "We innovate and push for boundless creativity through curiosity. CAN DO SPIRIT.",
    },
    {
      title: "Responsiveness",
      content:
        "We are not only approachable, we understand the essence of speed and take accountability for each responsibility entrusted to us by our clients.",
    },
    {
      title: "Innovation",
      content:
        "Thinking differently is in our DNA. We constantly push ourselves to be our best, we focus on solutions, and we arrive every day inspired to make an impact through our talents, passion and hard work.",
    },
    {
      title: "Constantly Improving",
      content:
        "We have a culture of innovation and continuous improvement. Constantly seeking personal and professional growth.",
    },
    {
      title: "Entrepreneurial Spirit",
      content:
        "We never rest on our laurels. We are adaptive, risk-taking, hungry for success and constantly spotting opportunities for social impact.",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="bg-gray-100 p-10 md:p-20 text-center space-y-8 mt-15 ">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Fourcore is driven by a vision to reform the public sector through
          energizing key economic sectors and translating policies to service
          using technology solutions and sustainable business models with the
          overarching objective of realizing widespread social impact and
          transformation.
        </h2>
        <p className="max-w-1xl mx-auto space-y-9">
          We are implementing impactful technology-driven government and fiscal
          policy reforms at Federal and State Government levels through
          innovative and blue ocean solutions executed under sustainable
          public-private partnerships or concessions.
        </p>
        <div className="space-y-9 px-4 md:px-0 text-gray-700 text-left text-xs mt-30">
          <p>
            We have built an unrivalled reputation in delivering superior
            innovative solutions
            <br /> thus putting us in a strong position to bring exponential
            growth and outcomes in
            <br /> efficiency.
          </p>
          <p>
            We are passionate about digital transformation as we innovate and
            apply our <br />
            creative minds to imagining new ways to energize key economic
            sectors and <br />
            translate policies to service using technology. Unlike others, we
            don’t just say, <br />
            we deliver.
          </p>
        </div>
      </div>
      <div className="bg-[#EB8317] text-white flex flex-col md:flex-row p-10 md:p-20">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Creating culture <br />
            through our core <br />
            values (PARICE)
          </h2>
        </div>

        <div className="md:w-1/2 text-white space-y-6">
          <p>
            Our continued ability to create widespread impact stems directly
            from fostering an environment based on fairness, curiosity, mutual
            respect and a shared passion for success.
          </p>
          <p>
            We are driven by our core values as our workplace creates an
            atmosphere that respects and values people from diverse backgrounds
            and enables all employees to perform at their best. These values
            define how we expect every member of our team to operate each day.
          </p>
          <p className="font-semibold">...connecting with what matters</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row bg-gray-50 p-10 md:p-20 ">
        <div className="md:w-1/2 space-y-4 ">
          {accordionData.map((item, index) => {
            const isActive = activeIndex === index;
            const isProfessionalism = item.title === "Professionalism";

            return (
              <div
                key={index}
                className={`rounded-xl p-5 transition-all duration-300  ${
                  isActive ? "text-gray-300" : "bg-white text-gray-800"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full flex justify-between items-center text-left text-lg font-semibold ${
                    isProfessionalism ? "font-bold" : ""
                  } ${isActive && isProfessionalism ? "text-black" : ""}`}
                >
                  {item.title}

                  <span>
                    {isActive ? (
                      <HiOutlineMinusCircle className="w-6 h-6" />
                    ) : (
                      <HiOutlinePlusCircle className="w-6 h-6" />
                    )}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isActive ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p
                    className={`text-sm ${
                      isProfessionalism && isActive ? "text-gray-400" : ""
                    }`}
                  >
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <img
            src="/lap.avif"
            className="rounded-lg shadow-lg md:w-auto ml-25 max-h-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
