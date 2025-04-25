import React from "react";

const Footer = () => {
  return (
    <section className="bg-gray-100"><div className="mx-auto xl:max-w-[1200px]">
    <div className="pt-16 items-center text-center space-y-4 container">
      <div className="bg-[#0B192C] px-60 py-20 rounded-md ">
        <h1 className="text-4xl text-white">Reach out to us</h1>

        <p className="text-white max-w-2xl pt-5 text-center mx-auto">
          At Fourcore, we envision a world where key economic sectors and
          services are connected within a healthy digital infrastructure. Over
          the years, we have successfully built solutions with widespread
          impact, exponential growth and outcomes in efficiency as well as
          financial and economic returns
        </p>
        <a href="contact" className="">
          <button className="mt-6 bg-white px-6 py-3 rounded-md text-black font-semibold">
            Contact Us
          </button>
        </a>
      </div>
    </div>

    <div>
      <div className="p-3 container xl:max-w-[1200px] mx-auto text-stone-600 md:grid-cols-2 grid grid-cols">
        <ul className="mt-3 space-y-7 text-sm">
          <div>
            <img src="core.webp" alt="About Us" />
          </div>

          <li>
            37 Libreville Crescent, off Aminu Kano Crescent, Wuse 2, Abuja
          </li>
          <li>
            Email: info@4coretech.com<br></br>
            <a href="contact" className="">
              <button className="mt-6 bg-[#EB8317] px-6 py-3 rounded-md text-white font-semibold">
                Contact Us
              </button>
            </a>
          </li>

          <li></li>
        </ul>

        <div className="grid grid-cols md:grid-cols-3 text-nowrap text-center md:text-left gap-50">
          <div>
            <h3 className="font-semibold text-black">Company</h3>
            <ul className="mt-5 text-sm space-y-4">
              <li>About Us</li>
              <li>Leadership Team</li>
              <li>Certificates and Compliance</li>
              <li>Our Affliates</li>
              <li> </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black">Insights</h3>
            <ul className="mt-3 text-sm space-y-2">
              <li>Success Stories</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black">Others</h3>
            <ul className="mt-3 text-sm space-y-2">
              <li>Career</li>
              <a href="contact" className="">
                Contact Us
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <p className="text-center text-stone-600 border-t border-gray-200 py-2 text-sm -mt-5">
      <p className="text-left"> Copyright2023© </p> Fourcore Integrated
      Services. All Rights Reserved.
    </p>
  </div></section>
  );
};

export default Footer;
