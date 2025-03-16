import React from "react";
import AnimatedTestimonialsDemo from "./ui/animated-testimonials-demo";


const Testimonials = () => {
  return (
    <div className="min-h-screen bg-green-200 flex flex-col items-center justify-center gap-8 px-6 py-16">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-black text-center">
        Join the WellnessWave Community – Hear From Our Users
      </h1>

      {/* Testimonials Component */}
      <AnimatedTestimonialsDemo />
    </div>
  );
};

export default Testimonials;
