import React from "react";
import { ArrowRight } from "lucide-react";

export default function LifeAtFourcore() {
  return (
    <section className="w-full py-16 px-6 bg-white text-center">

      <div className="mb-10">
        <p className="text-sm text-orange-600">Spotlight</p>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
          Life At Fourcore
        </h2>
      </div>

      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {[1, 2, 3, 4].map((_, index) => (
          <div
            key={index}
            className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center shadow-sm relative"
          >
           
            <img
              src="https://via.placeholder.com/100"
              alt="Life at Fourcore"
              className="w-20 h-20 opacity-60"
            />

        
            {index === 3 && (
              <div className="absolute top-2 right-2 text-orange-600">
                <ArrowRight size={20} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
