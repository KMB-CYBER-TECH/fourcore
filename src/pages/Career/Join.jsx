import React from "react";

export default function Join() {
  return (
    <div>
      <div
        className="relative w-full h-100 bg-cover bg-center text-white flex flex-col justify-center px-67"
        style={{ backgroundImage: "url('/too.avif')" }}
      >
        <div className="relative z-10">
          <h4 className="uppercase  mb-9 text-[#EB8317] mt-20">
            Careers
          </h4>
          <p className="text-4xl font-bold max-w-5xl mb-5 ">
            Feel empowered to make a <br></br>difference. Together at <br></br>
            Fourcore, we can make it <br></br>happen.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-12">
        <div className="mt-6 text-center">
          <h3 className="text-3xl font-bold">Join Us</h3>
          <p className="text-gray-600 mt-2">
            We are building a future where technology can be leveraged to create
            social impact and we’re looking for people like you to achieve this
            vision.
          </p>
          <p className="text-gray-600 mt-4">
            Are you innovative, tenacious, and ambitious? See if there is an
            open position that is right for you!
          </p>
        </div>
      </div>
    </div>
  );
}
