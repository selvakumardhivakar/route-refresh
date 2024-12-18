const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">Route Refresh</h1>
          <p className="text-lg font-medium">
            Your companion for seamless highway travel
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Intro Section */}
        <section className="max-w-4xl mx-auto text-center my-12">
          <h2 className="text-3xl font-bold text-gray-800">Welcome to Route Refresh</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Discover the best places for a pit stop! Gas up, grab a bite, or freshen up
            at the most convenient and hygienic stops along your highway journey.
          </p>
        </section>

        {/* Amenities Section */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Amenities We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Gas Stations */}
            <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="flex justify-center mb-4">
                <span className="bg-blue-100 text-blue-600 p-4 rounded-full">
                  🚗
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Gas Stations</h3>
              <p className="text-gray-500">
                Locate fuel stations nearby to keep your journey moving.
              </p>
            </div>

            {/* Food Courts */}
            <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="flex justify-center mb-4">
                <span className="bg-green-100 text-green-600 p-4 rounded-full">
                  🍴
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Food Courts</h3>
              <p className="text-gray-500">
                Discover delicious meals and snacks to recharge yourself.
              </p>
            </div>

            {/* Restrooms */}
            <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="flex justify-center mb-4">
                <span className="bg-yellow-100 text-yellow-600 p-4 rounded-full">
                  🚻
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Restrooms</h3>
              <p className="text-gray-500">
                Find clean and hygienic restrooms along your route.
              </p>
            </div>
          </div>
        </section>

        {/* Map Integration */}
        <section className="max-w-5xl mx-auto mt-16 bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Interactive Map</h2>
          <p className="text-gray-600 mb-6">
            Use our integrated map to find amenities on your route. Make your journey
            stress-free and enjoyable.
          </p>
          <button className="bg-blue-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 transition">
            Explore Map
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">
            © 2024 Route Refresh. Designed with ❤️ for highway travelers.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
