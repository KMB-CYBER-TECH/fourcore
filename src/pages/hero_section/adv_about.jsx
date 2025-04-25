import React from "react";
import { HiArrowRightEndOnRectangle } from "react-icons/hi2";
//container xl:max-w-[1200px] mx-auto flex justify-between items-center
export default function adv_about() {
  return (
    <div>
      <section className="relative h-screen bg-cover bg-center">
        <div className="absolute inset-0 bg-[url(/shakee.jpg)] bg-transparent bg-no-repeat bg-cover bg-center flex flex-col justify-center items-start text-white text-left px-10 md:px-20 ">
          <h1 className="text-3xl md:text-5xl font-bold max-w-lg leading-tight container xl:max-w-[1200px] mx-auto">
            Advancing good governance <br></br>using innovative ideas and <br></br>technology.
          </h1>
          <p className="mt-4 text-lg max-w-md container xl:max-w-[1200px] mx-auto">
            Bringing government closer to the people through <br></br>transformational
            digital innovation.
          </p>

          <ul className="text-3xl space-y-8 container xl:max-w-[1200px] mx-auto">
            <li>
              <a
                href="SuccessStories"
                className="block text-[#EB8317] font-bold "
              >
                <a href="about" className="block text-[#EB8317] ">
                  <button className="mt-6 bg-[#EB8317] px-6 py-2 rounded-md text-white text-sm cursor-pointer">
                    Learn More  <HiArrowRightEndOnRectangle className="h-5 flex mx-auto items-center w-[15px] ml-27 -mt-5" />
                  </button>
                </a>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="relative z-10 bg-white px-20 py-20 shadow-lg rounded-md -mt-20  xl:max-w-[1200px] mx-auto grid md:grid-cols-2 items-center gap-10 container ">
        <div>
          <h2 className="text-xl font-semibold text-[#EB8317] uppercase">
            FOURCORE
          </h2>

          <h3 className="text-3xl font-bold mb-4 ">About Us</h3>
          <p className="text-gray-600 max-w-md">
            Fourcore is driven by a vision to reform the public sector through
            energizing key economic sectors and translating policies to service
            using technology solutions and sustainable business models with the
            overarching objective of realizing widespread social impact and
            transformation.
          </p>
          <a href="about" className="block text-[#EB8317] font-bold ">
            <button className="mt-4 text-[#EB8317] font-semibold cursor-pointer">
              Read More →
            </button>
          </a>
        </div>
        <div
          className="w-full h-80 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url('/gr.webp')" }}
        ></div>
      </div>
    </div>
  );
}
