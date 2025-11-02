"use client";
import dynamic from "next/dynamic"; //load client server

const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then((mod) =>mod.Player),{
ssr: false,                         //prevents server-side rendering
                                    //ssr: ensure that the lottie is only loaded on the client side
});

export default function LetsTalk() {
  const animationPath = "/animations/jelly.json";

  return (
    <section className="bg-brand-navy text-center py-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Lottie Animation */}
        <div className="flex-1">
          <Player
            autoplay
            loop
            src={animationPath} // Correct file path
            className="w-85 h-85 mx-auto"
          />
        </div>

        {/* Text and Button */}
        <div className="text-center">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
            Let's Talk!
        </h2>

          <p className="text-lg font-bold   text-white mt-4">
            Reach out to us today, and let's discuss how we can bring your ideas to life.
          </p>
          <button className="mt-6 px-6 py-3 bg-brand-orange text-white rounded-lg text-lg hover:bg-orange-600">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
