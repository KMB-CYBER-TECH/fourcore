import React from "react";

export default function contact() {
  return (
    <div className="bg-white">
      <section className="bg-gray-900 text-white py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-17 items-center ">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to <br /> partner with
              <br /> us?
            </h2>
          </div>

          <div className="text-gray-300 text-sm ">
            <p>
              Thank you for your interest in Fourocre. Reach out to us. Send an
              email to{" "}
              <a
                href="mailto:info@acotech.com"
                className="text-white underline hover:text-gray-400"
              >
                info@acotech.com
              </a>{" "}
              or fill the form below and send it. If you would like to find out
              about job opportunities at Fourocre, please see our careers
              section.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-700"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Enter Email</label>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-700"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Enter Subject</label>
              <input
                type="text"
                placeholder="What is the subject of this message?"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-700"
              />
            </div>
          </div>

          <div className="flex flex-col h-90">
            <label className="block text-gray-700 mb-2">Enter Message</label>
            <textarea
              placeholder="Write your message..."
              className="flex-grow border border-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-700 mb-4"
            ></textarea>
            <button className="bg-orange-500 text-white ml-31 w-[500px] py-3 rounded hover:bg-orange-400 transition">
              Send Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
