import React from "react";
import { GoCheckCircleFill } from "react-icons/go";

export default function Experience() {
  return (
    <div>
      <div className="max-w-5xl mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            The <span className="text-[#EB8317]">Fourcore</span>
            <br></br> Experience
          </h2>
          <p className="mt-4 text-gray-600">
            Some call it “perks or benefits”, we call it the Fourcore
            Experience. Here are some of the Fourcore experiences you will enjoy
            as a member of our team.
          </p>
        </div>

        <div className="bg-[#EB8317] text-white p-6 rounded-md shadow-md h-fit">
          <ul className="list-disc space-y-2 pl-4 ">
            <li> Health insurance</li>
            <li>Paid Annual Leave</li>
            <li>Professional Development</li>
            <li>Flexible work hours</li>
            <li>Company social events</li>
            <li>Monthly happy hours to connect with colleagues</li>
            <li>Bonuses</li>
            <li>Career growth and planning</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
