import { Calendar, MapPin } from "lucide-react";

export default function CalendarShow({ event }) {
  return (
    <div className="max-w-4xl mx-auto pt-4">
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
              <p className="text-xl font-bold text-blue-600 mb-1">{event.date}</p>
              <p className="text-gray-600 text-sm">{event.descr}</p>
            </div>

            {/* Location Section */}
            <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-3">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-xl font-bold text-green-600 mb-1">Nairobi, Kenya</p>
              <p className="text-gray-600 text-sm">Venue:  {event.venue}</p>
            </div>
          </div>
        </article>
      </div>
  );
}
