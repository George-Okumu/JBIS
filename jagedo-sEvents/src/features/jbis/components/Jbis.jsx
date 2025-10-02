
import JaGedoLogo from "../../../assets/Japageologo.webp"
import Moringa from "../../../assets/Moringa.png";
import Fisibo from "../../../assets/fisibo.jpeg";
import Footer from "../../../components/common/Footer";
import CalendarShow from "../../../components/common/CalendarShow";
import HeroSlideshow from "../../../components/layout/hero-slideshow";
import ForumSchedule from "../../forum/components/ForumSchedule"
import ForumImage from "../../../assets/forum.jpeg"


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
  title: "JaGedo Builders Innovation Summit (JBIS)",
  subtitle: "ACTIVATION",
  description:
    "Join 500+ industry leaders and innovators reshaping construction's future through cutting-edge technology.",
};

export default function Jbis({ setActiveTab }) {
  return (
    <>
      <HeroSlideshow slide={heroSlides} image={ForumImage} />

      {/* Event Date and Location Section */}
      <CalendarShow event={{date: "October 17", descr: "One Day Event", venue: "West Park Towers, Westlands"}}/>


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

      <ForumSchedule/>

      <Footer />
    </>
  );
}
