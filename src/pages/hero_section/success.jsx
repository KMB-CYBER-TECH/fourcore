import React from "react";

export default function success() {
  return (
    <div className="mt-16 grid md:grid-cols-2 items-stretch container mx-auto xl:max-w-[1200px]">
      <div
        className="w-full h-80 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/write.avif')" }}
      ></div>

      <div className="bg-[#EB8317] text-white p-18 flex flex-col justify-center h-80 ">
        <h3 className="text-xl font-semibold uppercase">Success Stories</h3>
        <h2 className="text-4xl font-bold mt-2 ">
          Proven Industry <br />
          Leader in <br />
          Creating Social <br /> Impact
        </h2>
        <button className="mt-4 text-white font-semibold -ml-80 cursor-pointer">
          Read More →
        </button>
      </div>
    </div>
  );
}
