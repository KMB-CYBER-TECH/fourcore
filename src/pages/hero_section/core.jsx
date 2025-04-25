import React, { useState } from "react";

export default function Core() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    text: "",
    image: "",
  });
  const [selectedIndex, setSelectedIndex] = useState(null);

  const coreData = [
    {
      title: "Government revenue actualization through transparency",
      text: "This division is focused on optimizing government revenues and tax administration, providing a robust platform for online real-time monitoring and analysis of government revenues, receivables, expenditure, payables and cashflow across all income and expenditure streams.",
      image: "/cash.jpg",
    },
    {
      title: "Ease of doing business and trade interactions",
      text: "We simplify trade through digital tools, reducing bottlenecks and improving regulatory compliance for businesses.",
      image: "/talkkkk.avif",
    },
    {
      title: "Digital solutions for improved healthcare delivery",
      text: "We provide digital health tools to enhance patient outcomes, streamline workflows, and improve data accessibility.",
      image: "/graphh.avif",
    },
    {
      title: "Enhancing revenue generation and security through asset tracking",
      text: "We enable real-time monitoring of assets to reduce theft and improve utilization.",
      image: "/weld.jpg",
    },
    {
      title: "Bringing social contracts/welfare closer to the people",
      text: "We implement tech that improves access to welfare programs and tracks distribution for accountability.",
      image: "/doc.webp",
    },
    {
      title:
        "Advancing affordable and competitive financial services to workers",
      text: "Our platform improves financial inclusion and provides better access to savings and credit facilities.",
      image: "/flag.jpg",
    },
    {
      title: "Strengthening security through technology",
      text: "We deploy smart surveillance and response systems to enhance national and local security.",
      image: "/army.jpg",
    },
  ];

  const handleOpenModal = (item, index) => {
    setModalContent(item);
    setSelectedIndex(index);
    setShowModal(true);
  };

  return (
    <section className="px-6 py-16 container mx-auto xl:max-w-[1200px]">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-left">
        Our Core Areas
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 container mx-auto lg:h-200">
        {coreData.map((item, index) => (
          <div
            key={index}
            className={`relative ${
              index === 0 || index === 4 ? "row-span-2" : ""
            } bg-cover bg-center brightness-75  hover:brightness-100 flex items-end p-4 text-white rounded-md cursor-pointer`}
            style={{ backgroundImage: `url('${item.image}')` }}
            onClick={() => handleOpenModal(item, index)}
          >
            <p className="text-bold text-white p-2 rounded text-[20px]">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
          <div className="relative bg-white w-[90%] md:w-[800px] h-[400px] flex rounded-lg overflow-hidden shadow-lg">
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-1 -right-1 bg-white rounded-full shadow-lg w-10 h-10 flex items-center justify-center text-gray-700 text-2xl hover:text-black z-50"
            >
              &times;
            </button>

            <div className="w-1/2 p-6 flex flex-col justify-center">
              <div className="mb-4">
                <div className="w-6 h-6 rounded-full bg-[#EB8317] text-white text-sm flex items-center justify-center mb-2">
                  {selectedIndex + 1}
                </div>
                <h3 className="text-xl font-bold">{modalContent.title}</h3>
              </div>
              <p className="text-gray-700 text-sm">{modalContent.text}</p>
            </div>

            <div className="w-1/2 h-full">
              <img
                src={modalContent.image}
                alt="Modal Visual"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
