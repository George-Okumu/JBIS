import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";
import Button from "../../../components/common/Button";

import JaGedoLogo from "../../../assets/Japageologo.webp"
import Moringa from "../../../assets/Moringa.png";
import Fisibo from "../../../assets/fisibo.jpeg";
import Footer from "../../../components/common/Footer";

import Construction1 from "../../../assets/ConstructionImage.jpeg";

import HeroSlideshow from "../../../components/layout/hero-slideshow";

const whoShouldAttend = [
  {
    icon: "🏗️",
    title: "Builders",
    description:
      "Construction, fundis, professionals and Hardware Owners looking to stay ahead of industry trends and connect with peers.",
    highlights: [
      "Latest construction techniques",
      "Industry best practices",
      "Networking opportunities",
    ],
  },
  {
    icon: "💻",
    title: "Technology Enthusiasts",
    description:
      "Tech innovators, software developers, and digital solution providers interested in construction technology and digital transformation.",
    highlights: [
      "Construction tech innovations",
      "Digital solutions showcase",
      "Tech networking sessions",
    ],
  },
  {
    icon: "👥",
    title: "Clients",
    description:
      "Property developers, homeowners, and businesses seeking construction services and innovative building solutions.",
    highlights: [
      "Service provider discovery",
      "Cost-effective solutions",
      "Quality assurance insights",
    ],
  },
  {
    icon: "💰",
    title: "Investors & Stakeholders",
    description:
      "Angel investors, VCs, and financial institutions looking for investment opportunities in the construction and contech sectors.",
    highlights: ["Investment opportunities", "Market insights", "ROI analysis sessions"],
  },
];

const heroSlides = {
  title: "JBIS: JaGedo Builders Innovation Summit",
  subtitle: "Shaping the Future of African Construction Through Technology & Innovation",
  description:
    "Join 500+ industry leaders and innovators reshaping construction's future through cutting-edge technology.",
};

export default function Jbis({ setActiveTab }) {
  return (
    <>
      <HeroSlideshow slide={heroSlides} image={Construction1} />

      {/* Call to Action Section */}
      <section className="py-8 sm:py-10 md:py-12 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-6 sm:mb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              Ready to Join the Innovation?
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              Don't miss this opportunity to be part of Kenya's premier construction innovation
              summit.
            </p>
          </header>

          {/* Enhanced CTA Buttons - Using Button Component */}
          <div onClick={() => setActiveTab("register")} className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center w-full max-w-md sm:max-w-lg mx-auto">
            <div className="w-full sm:w-auto flex justify-center">
              <Button className="w-full sm:w-48 md:w-56 text-white">
                <span className="flex items-center justify-center text-sm sm:text-base">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="whitespace-nowrap">Register Now</span>
                </span>
              </Button>
            </div>

            <div onClick={() => setActiveTab("sponsor")} className="w-full sm:w-auto flex justify-center">
              <Button className="w-full sm:w-48 md:w-56 text-white" onClick={() => setActiveTab("sponsor")}>
                <span className="flex items-center justify-center text-sm sm:text-base">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                  <span className="whitespace-nowrap">Become a Sponsor</span>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Date and Location Section */}
      <section className="px-4 md:px-20 lg:px-40 py-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              Mark Your Calendar
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Date Section */}
              <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-3">
                  <Calendar className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Event Date</h3>
                <p className="text-xl font-bold text-blue-600 mb-1">October 17 - 18, 2025</p>
                <p className="text-gray-600 text-sm">Two Days of Innovation</p>
              </div>

              {/* Location Section */}
              <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-3">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-xl font-bold text-green-600 mb-1">Nairobi, Kenya</p>
                <p className="text-gray-600 text-sm">Venue TBD</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* About Us Section */}
      <section className="px-6 md:px-20 lg:px-36 py-10 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* About JBIS Text Section */}
          <article className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is <span className="text-indigo-600">JBIS?</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-xl">
              The{" "}
              <span className="font-semibold text-gray-800">
                JaGedo Builders Innovation Summit (JBIS)
              </span>{" "}
              is East Africa's premier construction technology event that unites builders, fundis,
              professionals, tech innovators, and industry leaders. It's more than a summit—it's a
              platform where innovation meets execution.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mt-4 max-w-xl">
              Attendees collaborate, learn, and showcase groundbreaking ideas that redefine
              infrastructure and smart construction, empowering builders to shape the future of the
              built world through technology and innovation.
            </p>
          </article>

          {/* Trusted Partners Section */}
          <aside className="flex flex-col items-center w-full">
            <header className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trusted Partners
              </h2>
              <p className="text-lg text-gray-600 max-w-md mx-auto">
                We collaborate with industry leaders to deliver exceptional experiences
              </p>
              {/* <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-4"></div> */}
            </header>

            {/* Partner logos grid container */}
            <div className="w-full max-w-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {/* Partner 1 - JaGedo */}
                <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-purple-300 hover:shadow-lg w-full max-w-xs">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gray-50 border-2 flex items-center justify-center overflow-hidden hover:border-purple-300 transition-colors duration-300 mb-3">
                    <img
                      src={JaGedoLogo || "/placeholder.svg"}
                      alt="JaGedo Logo"
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  {/* <h4 className="text-sm font-semibold text-gray-800 text-center">JaGedo</h4> */}
                </div>

                {/* Partner 2 - Moringa */}
                <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-purple-300 hover:shadow-lg w-full max-w-xs">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gray-50 border-2 flex items-center justify-center overflow-hidden hover:border-purple-300 transition-colors duration-300 mb-3">
                    <img
                      src={Moringa || "/placeholder.svg"}
                      alt="Moringa Logo"
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                </div>

                {/* Partner 3 - Placeholder */}
                <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-purple-300 hover:shadow-lg w-full max-w-xs">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gray-50 border-2 flex items-center justify-center overflow-hidden hover:border-purple-300 transition-colors duration-300 mb-3">
                    <img
                      src={Fisibo || "/placeholder.svg"}
                      alt="Fisibo Logo"
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  {/* <h4 className="text-sm font-semibold text-gray-800 text-center">Fisibo</h4> */}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Should Attend?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              JBIS brings together diverse professionals from across the construction and technology
              ecosystem.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {whoShouldAttend.map((attendee, index) => (
              <article
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl flex-shrink-0">{attendee.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{attendee.title}</h3>
                    <p className="text-gray-600 mb-4">{attendee.description}</p>
                    <ul className="space-y-2">
                      {attendee.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
