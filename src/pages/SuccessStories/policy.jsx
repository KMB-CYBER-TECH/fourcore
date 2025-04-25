import React, { useState } from "react";
import { GoCheckCircleFill } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";

const successStories = [
  {
    id: 1,
    title: "Policy",
    subtitle: "Ease of doing business.",
    solution:
      "In line with the policy of the Federal Government of Nigeria to create an enabling environment for businesses by entrenching measures and strategies to promote transparency and efficiency in the administration of Fiscal Incentives and Exemptions, we re-engineered the process from application to issuance and validation of exemptions with digital technology resulting in savings in the hundreds of billions of naira annually.",
    impact: [
      "A simpler and smarter end-to-end automated process.",
      "Fast turnaround application time.",
      "Transparency.",
      "Elimination of paperwork.",
      "Leakage blocks.",
    ],
    image: "/hap.avif",
  },
  {
    id: 2,
    title: "Policy",
    subtitle:
      "To ensure a more equitable distribution of resources to vulnerable populations, including children, youth and women..",
    solution:
      "A central management platform for the administration and coordination of Social Investment Programmes geared towards moving millions of Nigerians above the poverty line.",
    impact: [
      "Delivered the largest social investment platform in Africa directly compensating over 3million people.",
    ],
    image: "/or.jpg",
  },
  {
    id: 3,
    title: "Policy",
    subtitle: "Economic and National Planning.",
    solution:
      "A platform to track all vehicles and moveable assets possessing global vehicle identification numbers from points of entry to exit and use within the country",
    impact: [
      "Increased import duty revenue.",
      "Fast turnaround application time.",
      "Transparency.",
      "Elimination of paperwork.",
      "Leakage blocks.",
    ],
    image: "/trr.avif",
  },
];

export default function Policy() {
  const [index, setIndex] = useState(0);
  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % successStories.length);
  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? successStories.length - 1 : prev - 1));

  const current = successStories[index];

  return (
    <div className="bg-white w-full font-sans">
      <div
        className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/shakee.jpg')" }}
      >
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Success Stories</h1>
        </div>
      </div>

      <div className="py-14 px-6 md:px-20 bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row gap-12"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#EB8317] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                  {current.id}
                </div>
                <h2 className="text-2xl font-bold">{current.title}</h2>
              </div>

              <p className="text-gray-700 text-lg mb-6">{current.subtitle}</p>

              <h3 className="text-xl font-bold mb-2">Solution</h3>
              <p className="text-gray-700 text-justify mb-6">
                {current.solution}
              </p>

              <h3 className="text-xl font-[200] mb-2">Impact</h3>
              <ul className="space-y-3 text-gray-700">
                {current.impact.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    {(current.id === 1 || current.id === 3) && (
                      <GoCheckCircleFill className="text-[#EB8317] mt-1" />
                    )}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 flex justify-center items-start">
              <img
                src={current.image}
                alt="Success Story"
                className="rounded-xl shadow-xl w-full max-w-lg object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-4 justify-center mt-10">
          <button
            onClick={prevSlide}
            className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
          >
            Previous
          </button>
          <button
            onClick={nextSlide}
            className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
