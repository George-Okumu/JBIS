import Footer from "../../../components/common/Footer";

export default function ForumRegistration() {
  return (
    <>
      <div className="flex-1 h-screen">
        <div className="h-full bg-white border border-gray-200">
          {/* Iframe Container with proper height */}
          <div className="relative h-full">
            <iframe
              title="JaGedo Builders Innovation Summit Activation"
              aria-label="JaGedo Builders Innovation Summit Activation"
              frameBorder="0"
              className="w-full h-full border-0"
              src="https://forms.zohopublic.com/jagedoinnovationslimited1/form/EventRegistrationForm/formperma/5A63lYmtLqGcuFeoCbwzM3lKsAMKFyDQ_RVQOkl_HLo"
            />

            {/* Loading overlay */}
            <div
              className="absolute inset-0 bg-gray-50 flex items-center justify-center pointer-events-none opacity-0 transition-opacity duration-300"
              id="loading-overlay">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading registration form...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
