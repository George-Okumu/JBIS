import { Calendar, Clock, MapPin } from "lucide-react";
import Footer from "../../../components/common/Footer";

export default function ForumSchedule() {
  const schedule = [
    {
      time: "9:00 - 9:30 am",
      title: "ARRIVAL AND REGISTRATION",
    },
    {
      time: "9:30 - 10:30 am",
      title: "COFFEE AND NETWORKING SESSION",
    },
    {
      time: "10:30 - 10:45 am",
      title: "M.C WELCOME THE GUEST AND PROGRAMME OVERVIEW",
    },
    {
      time: "10:45- 11:15 am",
      title: "JAGEDO INTRODUCTION & PRODUCT DEMO",
    },
    {
      time: "11:30- 11:45 am",
      title: "Speed Networking (Guests introduce themselves)",
    },
    {
      time: "11:15 - 11:45 am",
      title: "PANEL DISCUSSION",
    },
    {
      time: "11:45 - 12 Noon",
      title: "GUEST SPEAKER",
    },
    {
      time: "12 Noon",
      title: "CLOSING REMARKS , GUEST LEAVE AT THEIR OWN PLEASURE",
    },
    {
      time: "2:00 - 2:30 pm ",
      title: "ARRIVAL AND REGISTRATION",
    },
    {
      time: "2:30 - 2:45 pm",
      title: "M.C WELCOME GUEST AND PROGRAMME OVERVIEW",
    },
    {
      time: "2:45 - 3:15 pm",
      title: "NETWORKING SESSION & WELCOME BITTINGS",
    },
    {
      time: "3:15- 3:30 pm",
      title: "JAGEDO INTRODUCTION & PRODUCT DEMO",
    },
    {
      time: "3:30- 4:00 pm",
      title: "PANEL DISCUSSION",
    },
    {
      time: "4:00- 4:15 pm",
      title: "ICE BREAKER",
    },
    {
      time: "4:15- 4:45 pm",
      title: "PANEL DISCUSSION",
    },
    {
      time: "4:45- 5:30 pm",
      title: "GUEST SPEAKERS",
    },
    {
      time: "5:30- 6:00 pm",
      title: "CLOSING REMARKS",
    },
    {
      time: "6:00- 8:00 pm",
      title: "TRIVIA NIGHT AND COCKTAILS",
    },
  ];

  const morningSessions = schedule.filter((session) => {
    return session.time.toLowerCase().includes("am") || session.time.toLowerCase().includes("noon");
  });

  const eveningSessions = schedule.filter((session) => {
    return (
      session.time.toLowerCase().includes("pm") && !session.time.toLowerCase().includes("noon")
    );
  });

  return (
    <>
      {/* Program Schedule Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              One day of learning, networking, and innovation in the construction industry.
            </p>
            <div className="flex items-center justify-center mt-4 space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                October 17, 2025
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                West Park Towers, Nairobi, Kenya
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                9:00 AM - 8:00 PM
              </div>
            </div>
          </header>

          <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-6 py-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-10 text-center uppercase">
                Morning Session
              </h3>
              <div className="relative border-l-2 border-blue-100 ml-4 pl-6">
                {morningSessions.map((session, index) => (
                  <div key={index} className="mb-10">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full left-0 top-1.5 -ml-2"></div>
                    <div className="text-sm text-blue-600 font-semibold mb-1">{session.time}</div>
                    <div className="text-lg font-medium text-gray-800">{session.title}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20">
              <h3 className="text-2xl font-bold text-gray-800 mb-10 text-center uppercase">
                Evening Session
              </h3>
              <div className="relative border-l-2 border-purple-100 ml-4 pl-6">
                {eveningSessions.map((session, index) => (
                  <div key={index} className="mb-10">
                    <div className="absolute w-4 h-4 bg-purple-500 rounded-full left-0 top-1.5 -ml-2"></div>
                    <div className="text-sm text-purple-600 font-semibold mb-1">{session.time}</div>
                    <div className="text-lg font-medium text-gray-800">{session.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
