import React from "react";

export default function Our() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center  p-0">
      <div className="w-screen bg-gray-100 py-27 text-center mb-18 ">
        <h4 className="text-sm text-[#EB8317] uppercase mb-1 mt-13">Company</h4>
        <h1 className="text-3xl font-semibold text-gray-800">Our Affiliates</h1>
      </div>

      <div className="flex flex-col md:flex-row text-left md:items-start max-w-5xl w-full space-y-8 md:space-y-0 md:space-x-12 px-6 mb-16">
        <div className="flex-1 text-gray-700">
          <h2 className="text-lg text-[#EB8317] font-semibold mb-3 -ml-30">
            Outsource Global
          </h2>
          <p className="mb-4 -ml-30">
            Nigeria's foremost health-tech company employing winning business
            models and excellent execution in deploying technologies providing
            added Hospital Management Information & Revenue Assurance Services
            to hospitals across Nigeria.<br></br>
            Outsource Global is the first ISO-compliant commercial delivery
            center in West Africa, and the first Nigerian international contact
            center serving the US, UK, and Japan markets.
          </p>
         
          <a
            href="https://www.outsourceglobal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline block mt-4 -ml-30"
          >
            https://www.outsourceglobal.com
          </a>
        </div>

        <div className="flex-1 flex justify-center mt-18">
          <img src="out.webp" className="h-22 object-contain" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start max-w-5xl w-full space-y-8 md:space-y-0 md:space-x-12 px-6 mb-16">
        <div className="flex-1 text-gray-700">
          <h2 className="text-lg text--[#EB8317] font-semibold mb-3 -ml-30">
            Parkway Projects
          </h2>
          <p className="mb-4 -ml-30">
            Parkway is a Central Bank of Nigeria (CBN) licensed financial
            technology provider with a wealth of experience spanning almost two
            decades in solving payment and banking value chain problems for
            small/medium businesses and making financial services accessible to
            unserved and underserved areas through mobile agency banking
            services.
          </p>

          <a
            href="https://www.parkwayprojects.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline block mt-4 -ml-30"
          >
            https://www.parkwayprojects.com
          </a>
        </div>

        <div className="flex-1 flex justify-center mt-18">
          <img
            src="park.webp"
            alt="Affiliate Two Logo"
            className="h-22 object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start max-w-5xl w-full space-y-8 md:space-y-0 md:space-x-12 px-6 mb-16">
        <div className="flex-1 text-gray-700">
          <h2 className="text-lg text-[#EB8317] font-semibold mb-3 -ml-30">
            HealthStation
          </h2>
          <p className="mb-4 -ml-30">
            Nigeria’s foremost health-tech company employing winning business
            models and excellent execution in deploying technologies providing
            added Hospital Management Information & Revenue Assurance Services
            to hospitals across Nigeria.
          </p>

          <a
            href="https://www.healthstation.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline block mt-4 -ml-30"
          >
            https://www.healthstation.com
          </a>
        </div>

        <div className="flex-1 flex justify-center mt-18">
          <img
            src="health.webp"
            alt="Affiliate Three Logo"
            className="h-22 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
