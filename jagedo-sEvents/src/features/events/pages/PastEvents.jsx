import React, { useState, useEffect } from "react";
import { Calendar, MapPin, Users, Trophy, Star, ArrowRight, Check, Quote } from "lucide-react";
import Footer from "../../../components/common/Footer";
import Event1 from "../../../assets/Event1.jpeg"
import Event2 from "../../../assets/Event001.jpg";
import Event4 from "../../../assets/Event4.jpg";
import Event5 from "../../../assets/Event5.jpg";
import NavBar2 from "../../../components/layout/Navigation";

export default function PastEvents() {
  const [counters, setCounters] = useState({
    events: 0,
    participants: 0,
    satisfaction: 0,
    prizes: 0,
  });

  // Counter animation effect
  useEffect(() => {
    const targets = { events: 4, participants: 500, satisfaction: 98, prizes: 1000 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    const intervals = Object.keys(targets).map((key) => {
      const target = targets[key];
      const increment = target / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(intervals.find((i) => i === interval));
        }
        setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
      }, stepTime);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const events = [
    {
      id: 1,
      title: "Construct The Future",
      date: "May 19-23, 2025",
      location: "WestLands West Park Towers",
      description: "Where Codes Meets Concrete.",
      participants: 40,
      // attendences: 75,
      // prizePool: "100K",
      type: "Hackathon",
      image: Event2,
    },

    {
      id: 2,
      title: "Lauching JaGedo Version Two ",
      date: "December 6 , 2024",
      location: "Westlands, West Park Towers ",
      description:
        " launched JaGedo 2.0, revolutionizing how clients connect with verified fundis, professionals, contractors, and hardware suppliers",
      participants: 40,
      // speakers: 25,
      // satisfaction: "97%",
      type: "Launch Event ",
      image: Event5,
    },
    {
      id: 3,
      title: " Builder's workshop ",
      date: "October 25, 2024",
      location: "WestLands ,West Park Towers",
      description: " Bringing together industry professionals to collaborate and share ideas",
      participants: 60,
      // investors: 50,
      // deals: "5M+",
      type: "Workshop",
      image: Event4,
    },
    {
      id: 4,
      title: "Platform Review Workshop",
      date: "17 August 2024",
      location: "WestLands West Park Towers ",
      description:
        "It brings together key stakeholders—including  service providers , product managers, and other  users—to assess what’s working, identify pain points, and prioritize improvements",
      participants: 50,
      // sessions: 12,
      // completion: "95%",
      type: "Workshop",
      image: Event1,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Lead Developer, TechStart Inc.",
      content:
        "The hackathon was incredibly well-organized. From registration to final presentations, everything ran smoothly. The mentorship and resources provided were top-notch.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Data Scientist, AI Innovations",
      content:
        "I've attended many workshops, but the AI Builders series stands out for its practical approach and expert instructors. I learned more in one session than months of self-study.",
      rating: 5,
    },
    {
      name: "Jennifer Park",
      role: "Partner, Venture Capital Group",
      content:
        "The Investor Connect Summit exceeded expectations. The quality of startups and the caliber of investors created an environment where real deals could happen.",
      rating: 5,
    },
  ];

  const partners = [
    "TechCorp",
    "InnovateLab",
    "CloudVentures",
    "StartupHub",
    "DevTools Pro",
    "FutureVC",
    "BlockchainPro",
    "AIFoundry",
  ];

  const achievements = [
    { icon: Check, text: "ISO 9001 Certified Event Management" },
    { icon: Trophy, text: "Best Tech Event Organizer 2024" },
    { icon: Star, text: "Featured in TechCrunch & Forbes" },
    { icon: Users, text: "98% Average Satisfaction Rate" },
  ];

  const mediaLogos = ["TechCrunch", "Forbes", "Wired", "VentureBeat", "The Verge", "Ars Technica"];

  const services = [
    {
      title: "Hackathons & Competitions",
      description:
        "Multi-day intensive coding competitions with industry mentorship and substantial prize pools.",
      features: [
        "48-72 hour events",
        "Expert mentors",
        "Prize pools up to $100K",
        "Industry partnerships",
      ],
      icon: "💻",
    },
    {
      title: "Professional Workshops",
      description:
        "Hands-on learning experiences covering cutting-edge technologies and industry best practices.",
      features: [
        "Expert instructors",
        "Practical projects",
        "Small group sizes",
        "Certificate programs",
      ],
      icon: "🎓",
    },
    {
      title: "Networking Events",
      description: "Premium gatherings connecting investors, entrepreneurs, and industry leaders.",
      features: [
        "Curated attendee lists",
        "1-on-1 meetings",
        "Demo showcases",
        "Deal facilitation",
      ],
      icon: "🤝",
    },
    {
      title: "Corporate Training",
      description: "Custom-designed training programs for enterprise teams and organizations.",
      features: ["Tailored curriculum", "On-site delivery", "Team building", "Skills assessment"],
      icon: "🏢",
    },
  ];

  const timeline = [
    { year: "2020", event: "Founded with first hackathon", participants: "50" },
    { year: "2021", event: "Expanded to 12 cities", participants: "1,200" },
    { year: "2022", event: "Launched workshop series", participants: "3,500" },
    { year: "2023", event: "International expansion", participants: "8,000" },
    { year: "2024", event: "50+ events milestone", participants: "15,000+" },
  ];

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      experience: "10+ years in event management",
      image: "bg-gradient-to-br from-blue-400 to-purple-600",
    },
    {
      name: "Sarah Kim",
      role: "Head of Operations",
      experience: "Former Google event coordinator",
      image: "bg-gradient-to-br from-pink-400 to-red-600",
    },
    {
      name: "Michael Chen",
      role: "Technical Director",
      experience: "Ex-Microsoft senior engineer",
      image: "bg-gradient-to-br from-green-400 to-teal-600",
    },
    {
      name: "Lisa Rodriguez",
      role: "Community Manager",
      experience: "Built 50+ tech communities",
      image: "bg-gradient-to-br from-yellow-400 to-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NavBar */}
      <div>
        <NavBar2 />
      </div>

      {/* Events Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Signature Events</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2">
                <div
                  className="relative h-48 bg-cover bg-center overflow-hidden"
                  style={{ backgroundImage: `url(${event.image})` }}>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>

                  {/* Event Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                      {event.type}
                    </span>
                  </div>
                </div>

                {/* Date, Location, and Participants - All on same level */}
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
                      <div className="flex items-center space-x-2 text-gray-700">
                        <Users className="h-4 w-4 text-purple-600 flex-shrink-0" />
                        <span className="text-sm font-medium">
                          {event.participants?.toLocaleString()} Participants
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-8 pb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
