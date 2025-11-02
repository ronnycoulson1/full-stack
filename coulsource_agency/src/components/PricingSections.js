const PricingSection = () => {
  return (
    <div className="mt-28 flex flex-col items-center">
      {/* Section Title */}
      <h1 className="text-center text-6xl max-sm:text-5xl font-bold mb-10">
        Packages
      </h1>

      {/* Responsive Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-4 mb-20">
        {/* Basic Plan */}
        <div className="rounded-xl bg-[#0A0F29] p-8 shadow-lg hover:shadow-xl transition-all border border-[#4E67E5]/40 h-full flex flex-col">
          <div className="text-[#4d66e5] text-2xl font-semibold">Basic</div>
          <div className="text-5xl font-bold text-white my-5">$39 / month</div>
          <p className="text-gray-300">Best for Small businesses</p>
          
          <ul className="text-gray-300 space-y-2 flex-grow">
            <li>✅  1 Landing page Website</li>
            <li>✅  Secure Hosting</li>
            <li>✅  4 sections content</li>
            <li>✅  24/7 Support</li>
          </ul>

          {/* Button is now pushed to the bottom */}
          <button className="mt-5 w-full text-black p-3 rounded-3xl bg-[#4E67E5] text-lg hover:bg-[#8a9dfc] transition-all">
            Contact Us
          </button>
        </div>

        {/* Business Plan */}
        <div className="rounded-xl bg-[#0A0F29] p-8 shadow-lg hover:shadow-xl transition-all border border-[#4E67E5]/40 h-full flex flex-col">
          <div className="text-[#4d66e5] text-2xl font-semibold">Business Plan</div>
          <div className="text-5xl font-bold text-white my-5">$99 / month</div>
          <p className="text-gray-300">Best for growing businesses</p>

          <ul className="text-gray-300 space-y-2 flex-grow">
            <li>✅  10 pages Website</li>
            <li>✅  Monthly Content Updates</li>
            <li>✅  Secure Hosting</li>
            <li>✅  24/7 Support</li>
          </ul>

          {/* Button is now pushed to the bottom */}
          <button className="mt-5 w-full text-black p-3 rounded-3xl bg-[#4E67E5] text-lg hover:bg-[#8a9dfc] transition-all">
            Contact Us
          </button>
        </div>

        {/* Premium Plan */}
        <div className="rounded-xl bg-[#0A0F29] p-8 shadow-lg hover:shadow-xl transition-all border border-[#4E67E5]/40 h-full flex flex-col">
          <div className="text-[#4d66e5] text-2xl font-semibold">Premium Plan</div>
          <div className="text-5xl font-bold text-white my-5">$199 / month</div>
          <p className="text-gray-300">Best for growing businesses</p>

          <ul className="text-gray-300 space-y-2 flex-grow">
            <li>✅  Costumized Software</li>
            <li>✅  +10 pages Website</li>
            <li>✅  Monthly Content Updates</li>
            
            <li>✅  Secure Hosting</li>
            <li>✅  24/7 Support</li>
          </ul>

          {/* Button is now pushed to the bottom */}
          <button className="mt-5 w-full text-black p-3 rounded-3xl bg-[#4E67E5] text-lg hover:bg-[#8a9dfc] transition-all">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
