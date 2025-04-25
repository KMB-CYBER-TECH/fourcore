import React, { useState } from "react";

export default function Available() {
  const [email, setEmail] = useState("");

  const handleAlert = () => {
    if (email.trim() === "") {
      alert("Please enter a valid email address.");
    } else {
      alert(`We'll notify you at: ${email}`);
      setEmail("");
    }
  };

  return (
    <div className="w-full min-h-screen bg-white px-4 md:px-20 py-12">
   
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8">
        Available Positions
      </h2>

    
      <div className="max-w-md mx-auto text-center border border-gray-100 shadow-sm px-9 py-9">
        <p className="text-lg font-medium text-gray-800 mb-2">
          No available position yet
        </p>
        <p className="text-sm text-gray-600 mb-6">
          When we have an available position, we will be sure to post here.
          <br />
          Keep watching this space or provide your email address to know
          when we have available positions to fill.
        </p>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <button
          onClick={handleAlert}
          className="w-full primary text-white py-2 rounded-md transition"
        >
          Alert me of available positions
        </button>
      </div>
    </div>
  );
}
