import Link from "next/link";

const CTA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-500 flex flex-col items-center justify-center text-center px-6 py-16 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-snug">
        Ready to Transform Your Wellness Journey?
      </h1>
      <h3 className="text-lg md:text-xl text-gray-100 mb-6 max-w-2xl">
        Join us today and take the first step towards a healthier, happier you!
      </h3>

      {/* Corrected Navigation */}
      <Link href="/register">
        <button className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-500">
          Get Started Now For Free
        </button>
      </Link>
    </div>
  );
};

export default CTA;
