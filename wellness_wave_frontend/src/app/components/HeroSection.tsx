import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#40BFFA] to-[#8AED8F] text-center p-10 text-white w-full h-[800px] mx-auto flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Ride the Wave to Better Health – Your Journey Starts Here!</h1>
      <h2 className="text-2xl mt-2">Track your fitness, unlock personalized recommendations,<br /> 
      and join a community that motivates you to thrive.</h2>
      <Link href="/register">
      <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200">
        Get Started For Free
      </button>
      </Link>
    </div>
  );
};

export default HeroSection;