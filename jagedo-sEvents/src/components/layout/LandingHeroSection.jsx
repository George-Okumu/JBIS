import { Link } from "react-router-dom";
import video from "../../assets/nature.mp4";

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}>
        <source src={video} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">JaGedo Builders Forum</h1>
        <p className="text-xl md:text-2xl mb-12 text-white/90 text-pretty">CONNECT TO INNOVATE</p>
        <Link
          to="/events/forum"
          className="bg-[rgb(0,0,122)] text-white hover:bg-[#FFD700] hover:text-black py-2 px-4 rounded-full shadow-md hover:scale-105 transition duration-300 ease-in-out w-32 md:w-48 inline-block text-center">
          Register
        </Link>
      </div>
    </div>
  );
}
