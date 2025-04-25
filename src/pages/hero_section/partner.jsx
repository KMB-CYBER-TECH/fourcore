export default function Partner() {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto xl:max-w-[1200px]">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">
          Our Partners
        </h2>
        <p className="text-[15px] font-semibold text-gray-600 mb-8 text-left">
          We pride ourselves on the partnerships we have across various sectors.
        </p>
      </div>

      <div className="overflow-hidden w-full">
        <div className="flex space-x-10 animate-scroll">
          {[
            "one.webp",
            "two.webp",
            "three.webp",
            "four.webp",
            "flag.jpg",
            "six.webp",
            "trade.jpg",
            "two.webp",
            "army.jpg",
            "three.webp",
            "one.webp",
          ].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Partner ${index + 1}`}
              className="w-36 h-auto object-contain"
            />
          ))}
        </div>
      </div>

      <style>
        {`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  }

  .animate-scroll {
    display: flex;
    animation: scroll 10s ease-in-out infinite;
    width: max-content;
  }
`}
      </style>
    </section>
  );
}
