import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";
import Footer from "../../../components/common/Footer";
import Event2 from "../../../assets/Event001.jpg";
import Event5 from "../../../assets/Event5.jpg";
import NavBar2 from "../../../components/layout/Navigation";

export default function UpcomingEvents() {
  const events = [
    {
      id: 1,
      title: "JaGedo Builders Forum",
      date: "October 17th 2025",
      location: "WestLands, Nairobi",
      description: "CONNECT TO INNOVATE",
      Theme: "Forum",
      image: Event2,
      link: '/events/forum'
    },

    {
      id: 2,
      title: "JaGedo Builders Innovation Summit 2026",
      date: "2026",
      location: "Nairobi, Kenya",
      description:
        "The JaGedo Builders Innovation Summit (JBIS) is East Africa’s premier construction technology event, uniting fundis, professionals, contractors, suppliers, innovators, investors, and policymakers.",
      Theme: "Construct the Future",
      image: Event5,
      link: '/events/Jbis'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NavBar */}
      <div>
        <NavBar2 />
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <Link to={event.link} key={event.id}>
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2 cursor-pointer">
                  <div
                    className="relative h-48 bg-cover bg-center overflow-hidden"
                    style={{ backgroundImage: `url(${event.image})` }}>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>

                    {/* Event Type Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                        {event.Theme}
                      </span>
                    </div>
                  </div>

                  {/* Date, Location */}
                  <div className="px-8 pt-6 pb-4">
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border border-purple-100">
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2 text-gray-700">
                          <Calendar className="h-4 w-4 text-purple-600 flex-shrink-0" />
                          <span className="text-sm font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700">
                          <MapPin className="h-4 w-4 text-purple-600 flex-shrink-0" />
                          <span className="text-sm font-medium">{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-8 pb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
