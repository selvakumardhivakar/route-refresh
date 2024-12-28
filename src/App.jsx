import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";
import TopBrands from "./components/top-brands";
import OldTopBrands from "./components/old-top-brands";
import Slider from "react-slick";

// Fix default Leaflet marker icon URLs
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = defaultIcon;

const App = () => {
  // Amenities data
  const amenities = [
    {
      id: 1,
      name: "https://maps.app.goo.gl/qZogNKw61B25r97f9",
      position: [26.122064, 76.251082],
      type: "WSA",
    },
    {
      id: 2,
      name: "https://maps.app.goo.gl/qZogNKw61B25r97f9",
      position: [25.199346, 76.100841],
      type: "WSA",
    },
    {
      id: 3,
      name: "https://maps.app.goo.gl/uz2KMpMRQpVaF6RH6",
      position: [24.925012, 75.968874],
      type: "WSA",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gray-50 flex flex-col"
    >
      {/* Header */}

      <header className="w-full bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-600">Shakti Service</div>
          <nav className="space-x-6 hidden sm:block">
            <a href="#about-us" className="text-gray-700 hover:text-blue-600">
              About US
            </a>
            <a href="#partners" className="text-gray-700 hover:text-blue-600">
              Partners
            </a>
            <a href="#maps" className="text-gray-700 hover:text-blue-600">
              Maps
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-blue-600">
              Gallery
            </a>
            <a href="#ratings" className="text-gray-700 hover:text-blue-600">
              Ratings
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section*/}
      <section className="container mx-auto pt-6 px-4 lg:flex lg:items-start">
        {/* Text Section */}
        <div className="mx-auto max-w-2xl py-16 sm:py-32 lg:py-48 lg:pr-8">
          <div className="hidden sm:flex sm:justify-center mb-8">
            <div className="relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Give your valuable feedback{" "}
              <a href="#ratings" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" /> Here{" "}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Shakti Service Wayside Amenities
            </h1>
            <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
              Find the best stops for food, fuel, and relaxation on your highway
              journey. Explore new experiences tailored for travelers like you.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 lg:pl-8 mt-12 lg:mt-0">
          {/* Carousel for sm and md screens */}
          <div className="sm:block lg:hidden">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
            >
              <div>
                <img
                  src="https://www.sundayguardianlive.com/wp-content/uploads/2022/02/Dib-pic-3.jpeg"
                  alt="Highway stop 1"
                  className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img
                  src="https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2022%2F08%2F25%2Froad-dh-1139345-1661446762.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=400&dpr=2"
                  alt="Highway stop 2"
                  className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img
                  src="https://scontent.fcjb3-3.fna.fbcdn.net/v/t39.30808-6/444482087_773098941678777_5702959502943968742_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6Moyd1_TX6YQ7kNvgF76zxR&_nc_zt=23&_nc_ht=scontent.fcjb3-3.fna&_nc_gid=AlcuDwMJDn-gIc0Wwz_sw3r&oh=00_AYDZlmQQB0hCpLdq1Xq-zvcR2c2lvvZ6W5csP7N1UkORbg&oe=676F236A"
                  alt="Highway stop 3"
                  className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img
                  src="https://static.toiimg.com/thumb/msid-111040240,width-1070,height-580,imgsize-102908,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
                  alt="Highway stop 4"
                  className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </Slider>
          </div>

          {/* Grid for lg screens */}
          <div className="hidden lg:block min-h-screen flex items-center justify-center">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-4">
                <img
                  src="https://scontent.fcjb3-3.fna.fbcdn.net/v/t39.30808-6/444482087_773098941678777_5702959502943968742_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6Moyd1_TX6YQ7kNvgF76zxR&_nc_zt=23&_nc_ht=scontent.fcjb3-3.fna&_nc_gid=AlcuDwMJDn-gIc0Wwz_sw3r&oh=00_AYDZlmQQB0hCpLdq1Xq-zvcR2c2lvvZ6W5csP7N1UkORbg&oe=676F236A"
                  alt="Highway stop 3"
                  className="w-full sm:w-1/3 rounded-lg shadow-lg"
                />
                <img
                  src="https://static.toiimg.com/thumb/msid-111040240,width-1070,height-580,imgsize-102908,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
                  alt="Highway stop 4"
                  className="w-full sm:w-3/5 rounded-lg shadow-lg"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <img
                  src="https://www.sundayguardianlive.com/wp-content/uploads/2022/02/Dib-pic-3.jpeg"
                  alt="Highway stop 1"
                  className="w-full sm:w-1/2 rounded-lg shadow-lg"
                />
                <img
                  src="https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2022%2F08%2F25%2Froad-dh-1139345-1661446762.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=400&dpr=2"
                  alt="Highway stop 2"
                  className="w-full sm:w-1/3 rounded-lg shadow-lg"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-4">
                <img
                  src="https://scontent.fcjb3-3.fna.fbcdn.net/v/t39.30808-6/444482087_773098941678777_5702959502943968742_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6Moyd1_TX6YQ7kNvgF76zxR&_nc_zt=23&_nc_ht=scontent.fcjb3-3.fna&_nc_gid=AlcuDwMJDn-gIc0Wwz_sw3r&oh=00_AYDZlmQQB0hCpLdq1Xq-zvcR2c2lvvZ6W5csP7N1UkORbg&oe=676F236A"
                  alt="Highway stop 3"
                  className="w-full sm:w-1/3 rounded-lg shadow-lg"
                />
                <img
                  src="https://static.toiimg.com/thumb/msid-111040240,width-1070,height-580,imgsize-102908,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
                  alt="Highway stop 4"
                  className="w-full sm:w-3/5 rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow container mx-auto">
        {/* About Section */}
        <section
          id="about-us"
          className="flex items-center justify-center px-6 pb-6 space-y-12"
        >
          <div className="text-center max-w-3xl">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
            Shakti Service, a name synonymous with quality fuel, is embarking on a new chapter. We're bringing a fresh perspective to wayside amenities, ensuring every stop is a memorable experience. As newcomers to this industry, we're unburdened by the limitations of the past. We're building something extraordinary – a new standard for comfort, convenience, and delight that will redefine your journey.
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Why we are the best?
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Discover clean, safe, and convenient stops along your route. Whether
            you need fuel, food, or restrooms, we've got you covered.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-purple-700 mb-4">
                Reliable Locations
              </h3>
              <p className="text-gray-600">
                Every location is verified to ensure quality services and
                facilities.
              </p>
            </div>
            <div className="bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Interactive Map
              </h3>
              <p className="text-gray-600">
                Easily locate amenities on our user-friendly and responsive map.
              </p>
            </div>
            <div className="bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                Hygienic Facilities
              </h3>
              <p className="text-gray-600">
                Find restrooms and food courts that meet the highest hygiene
                standards.
              </p>
            </div>
          </div>
        </section>

        {/* Top Brands Section */}
        {/* <OldTopBrands /> */}
        <TopBrands />

        {/* Map Section */}
        <section
          id="maps"
          className="bg-gradient-to-br from-indigo-50 to-white shadow-xl rounded-lg p-8"
        >
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-6">
            Explore the Map
          </h2>
          <div className="h-[500px] rounded-lg overflow-hidden shadow-md">
            <MapContainer
              center={[25.199346, 76.100841]} // WSA
              zoom={7}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {amenities.map((amenity) => (
                <Marker key={amenity.id} position={amenity.position}>
                  <Popup>
                    {/* <strong>{amenity.name}</strong> */}
                    <a href={amenity.name} target="_blank">
                      {" "}
                      Gmaps link
                    </a>
                    <br />
                    {amenity.type} Available
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </section>

        <section
          id="ratings"
          className="bg-gradient-to-b from-white to-gray-50 py-12"
        >
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
              Rate Us
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Your feedback helps us improve! Please rate your experience and
              let us know how we can make your journey better.
            </p>
            <form className="space-y-6">
              {/* Site Selection */}
              <div>
                <label
                  htmlFor="site"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Select a Site
                </label>
                <select
                  id="site"
                  name="site"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="site1">Site 1 - Highway Rest Stop</option>
                  <option value="site2">Site 2 - Fuel Station</option>
                  <option value="site3">Site 3 - Food Plaza</option>
                </select>
              </div>

              {/* Rating */}
              <div>
                <label
                  htmlFor="rating"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Rate your experience
                </label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <label
                      key={rating}
                      className="text-yellow-500 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="rating"
                        value={rating}
                        className="hidden"
                      />
                      <span className="text-2xl">
                        {rating <= 3 ? "⭐" : "🌟"}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Feedback Textarea */}
              <div>
                <label
                  htmlFor="feedback"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Share your feedback
                </label>
                <textarea
                  id="feedback"
                  name="feedback"
                  rows="4"
                  placeholder="Write your feedback here..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; 2024 <span className="font-bold">Route Refresh</span>. Built
            with ❤️ for a better journey.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default App;
