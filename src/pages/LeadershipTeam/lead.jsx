import React from "react";

export default function Lead() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-10 items-start mt-40">
        <div>
          <h2 className="text-4xl font-semibold leading-tight">
            Leadership
            <br />
            Team
          </h2>
        </div>

        <div className="md:col-span-2 space-y-4 text-gray-700 text-lg">
          <p>
            Our leadership team is committed to unleashing the full force of our
            innovation and passion to drive social impact. We have top
            strategists, management consultants, business and financial experts
            with over 30 years of experience on the global and national stage
            with a track record of delivering long-term, sustainable growth
            powered by technology in high impact sectors.
          </p>
          <p>
            They combine deep knowledge of industries and depth of experience
            and are dedicated to a common goal: energizing key economic sectors
            and translating policies to service using technology.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-3xl font-semibold mb-12">Meet Our Team</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              src: "/CEO.webp",
              name: "David Ibahwoh",
              title: "Chief Executive Officer",
            },
            {
              src: "/ED.webp",
              name: "Emeka Onyeokoro",
              title: "Executive Director",
            },
            {
              src: "/COO.webp",
              name: "Dennis Obeto",
              title: "Chief Operating Officer",
            },
            {
              src: "/GM.webp",
              name: "Peter Osigbemhe",
              title: "General Manager, Health-In-A-Box",
            },
            {
              src: "/BD.webp",
              name: "Osayande Osawe",
              title: "Business Development Manager",
            },
            {
              src: "/RRRR.webp",
              name: "Segun Craig",
              title: "Group Research & Project Development",
            },
            {
              src: "/HRR.webp",
              name: "Adetola Abolarinwa",
              title: "Human Resource Manager",
            },
            { src: "/ACCCC.webp", name: "Eze Chukwuma", title: "Accountant" },
            {
              src: "/PM.webp",
              name: "Chinedu Onwuka",
              title: "Project Manager",
            },
          ].map((member, index) => (
            <div className="text-left" key={index}>
              <img
                src={member.src}
                className="mx-auto rounded-lg mb-4 h-135 w-full object-cover filter grayscale hover:grayscale-0 transition duration-300"
              />
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-gray-600">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
