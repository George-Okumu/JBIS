import { useState } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";
import Footer from "../../../components/common/Footer";

const programScheduleDay1 = [
  {
    time: "08:00–09:00",
    title: "Registration & Welcome Coffee",
    description: "Delegate check-in, networking, exhibition hall opens",
    type: "networking",
  },
  {
    time: "09:00–09:30",
    title: "Opening Ceremony",
    description: "National Anthem, keynote welcome from JaGedo Executive & Government Official",
    type: "ceremony",
  },
  {
    time: "09:30–10:15",
    title: "Keynote: The Future of Construction in Africa",
    description: "Visionary talk by a government or industry leader",
    type: "keynote",
  },
  {
    time: "10:15–11:00",
    title: "Panel: Public-Private Partnerships in Infrastructure",
    description: "How collaboration fuels housing, roads, and smart cities",
    type: "panel",
  },
  {
    time: "11:00–11:30",
    title: "Tea Break & Networking in Expo Hall",
    description: "Connect with exhibitors and fellow attendees",
    type: "break",
  },
  {
    time: "11:30–12:30",
    title: "Tech Showcase 1: Smart Building Materials",
    description: "Short demos by top material innovators and manufacturers",
    type: "exhibition",
  },
  {
    time: "12:30–13:30",
    title: "Networking Lunch",
    description: "Buffet + sponsored product showcase tables",
    type: "networking",
  },
  {
    time: "13:30–14:15",
    title: "Fireside Chat: Investor Outlook on African PropTech",
    description: "What VCs and angel investors are looking for in construction innovation",
    type: "pitch",
  },
  {
    time: "14:15–15:00",
    title: "Workshop: Digital Tools for Contractors",
    description: "Intro to project management apps, drones, AR tools, and more",
    type: "workshop",
  },
  {
    time: "15:00–16:00",
    title: "Roundtable: Policy, Regulation & Compliance in Kenya",
    description: "Insights from NCA, NEMA, and county-level regulators",
    type: "panel",
  },
  {
    time: "16:00–17:00",
    title: "Exhibition Walk & Product Demos",
    description: "Booth visits + live demos by exhibitors",
    type: "exhibition",
  },
  {
    time: "17:00–18:00",
    title: "Evening Cocktail & Builders Mixer",
    description: "Chill networking with drinks, music, and partner showcases",
    type: "networking",
  },
];

const programScheduleDay2 = [
  {
    time: "08:30–09:30",
    title: "Coffee & Morning Networking",
    description: "Early connections + giveaways from sponsors",
    type: "networking",
  },
  {
    time: "09:30–10:15",
    title: "Keynote: Disruptive Technologies in Construction",
    description: "How AI, robotics, BIM, and 3D printing are redefining projects",
    type: "keynote",
  },
  {
    time: "10:15–11:00",
    title: "Panel: The Rise of PropTech in Africa",
    description: "Leaders discuss rental apps, construction marketplaces, and smart systems",
    type: "panel",
  },
  {
    time: "11:00–11:30",
    title: "Tea Break in Exhibition Zone",
    description: "Connect with speakers and attendees",
    type: "break",
  },
  {
    time: "11:30–12:15",
    title: "Startup Pitch Session – BuildTech Startup Arena",
    description: "5–7 startups pitch to investors + audience for feedback and funding",
    type: "pitch",
  },
  {
    time: "12:15–13:00",
    title: "Talk: The Skills Gap – Building Talent for the Future",
    description: "Training, TVETs, and capacity building for youth in construction",
    type: "keynote",
  },
  {
    time: "13:00–14:00",
    title: "Networking Lunch",
    description: "Regional dishes + investor-founder lunches",
    type: "networking",
  },
  {
    time: "14:00–15:00",
    title: "Masterclass: Green Building Certifications & Design",
    description: "LEED, EDGE, and sustainable design in the African context",
    type: "workshop",
  },
  {
    time: "15:00–15:45",
    title: "Panel: Women in Construction & Tech",
    description: "Gender inclusion in building, tech, and leadership roles",
    type: "panel",
  },
  {
    time: "15:45–16:30",
    title: "Product Launches & Innovation Announcements",
    description: "New tools, materials, platforms — real-time demos",
    type: "exhibition",
  },
  {
    time: "16:30–17:30",
    title: "Builders Connect: Speed Networking Session",
    description: "Facilitated connections by role: builder ↔ supplier ↔ investor",
    type: "networking",
  },
];

export default function ProgramSchedule() {
  const [activeDay, setActiveDay] = useState("day1");

  const getScheduleTypeColor = (type) => {
    const colors = {
      networking: "bg-green-100 text-green-800",
      ceremony: "bg-purple-100 text-purple-800",
      keynote: "bg-blue-100 text-blue-800",
      break: "bg-gray-100 text-gray-800",
      panel: "bg-orange-100 text-orange-800",
      exhibition: "bg-yellow-100 text-yellow-800",
      workshop: "bg-red-100 text-red-800",
      pitch: "bg-indigo-100 text-indigo-800",
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  const currentSchedule = activeDay === "day1" ? programScheduleDay1 : programScheduleDay2;
  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Summit Program</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Two full days of learning, networking, and innovation in the construction industry.
            </p>
            <div className="flex items-center justify-center mt-4 space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                October 17 - 18, 2025
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                Nairobi, Kenya
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                8:00 AM - 6:00 PM
              </div>
            </div>
          </header>

          <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <nav className="flex items-center justify-center gap-3 p-4 border-b border-gray-200">
              <button
                onClick={() => setActiveDay("day1")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ease-in-out ${
                  activeDay === "day1"
                    ? "bg-yellow-400 text-black shadow-lg transform scale-105"
                    : "bg-[rgb(0,0,122)] text-gray-100 hover:bg-[rgb(0,0,122)] hover:bg-yellow-400 hover:shadow-md border border-gray-700"
                }`}>
                Day 1 - Oct 17
              </button>

              <button
                onClick={() => setActiveDay("day2")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ease-in-out ${
                  activeDay === "day2"
                    ? "bg-yellow-400 text-black shadow-lg transform scale-105"
                    : "bg-[rgb(0,0,122)] text-gray-100 hover:bg-[rgb(0,0,122)] hover:bg-yellow-400 hover:shadow-md border border-gray-700"
                }`}>
                Day 2 - Oct 18
              </button>
            </nav>

            <div className="divide-y divide-gray-200">
              {currentSchedule.map((session, index) => (
                <article key={index} className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between">
                    <div className="flex-1 text-center">
                      <div className="flex items-center justify-center space-x-3 mb-2">
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {session.time}
                        </span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-medium ${getScheduleTypeColor(
                            session.type
                          )}`}>
                          {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{session.title}</h3>
                      <p className="text-gray-600 text-sm">{session.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </article>
        </div>
      </section>
      <Footer/>
    </>
  );
}
