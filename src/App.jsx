import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";
import TopBrands from "./components/top-brands";
import OldTopBrands from "./components/old-top-brands";
import Slider from "react-slick";
import HighwayAmenity from "./components/highway-amenity";

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
      name: "https://maps.app.goo.gl/qZogNKw61B25r97f9",
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
        <div className="mx-auto max-w-2xl py-12 sm:py-32 lg:py-48 lg:pr-8">
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
              Shakti Service WSA
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
                  src="https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20230303035008.jpg"
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
          <div className="hidden lg:block min-h-full flex items-center justify-center">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-4">
                <img
                  src="https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20230303035008.jpg"
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
                  src="https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20230303035008.jpg"
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
      <main className="flex-grow mt-6 container mx-auto">
        {/* About Section */}
        {/* <section
          id="about-us"
          className="flex items-center justify-center px-6 pb-6 space-y-12"
        >
          <div className="text-center max-w-3xl">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
            Shakti Service, a name synonymous with quality fuel, is embarking on a new chapter. We're bringing a fresh perspective to wayside amenities, ensuring every stop is a memorable experience. As newcomers to this industry, we're unburdened by the limitations of the past. We're building something extraordinary – a new standard for comfort, convenience, and delight that will redefine your journey.
            </p>
          </div>
        </section> */}

        <section className="bg-white py-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4 text-center">
            About Us {/* Changed text to "About Us" */}
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              {" "}
              {/* Align items to start */}
              <div className="md:w-1/4 mb-8 md:mb-0 md:pr-8">
                <img
                  src="https://media.istockphoto.com/id/1269785368/vector/road-construction-logo-road-maintenance-creative-sign-concept-paving-design-template-vector.jpg?s=612x612&w=0&k=20&c=nsHUDbyjIO1rFRpkgsug51nz-39zPx470CF6vIlcsg8="
                  alt="Shakti Service Logo"
                  className="w-full rounded-lg shadow-lg object-cover h-64 md:h-auto"
                />
              </div>
              <div className="md:w-3/4">
                {/* <div className="mb-4 md:mb-6 flex justify-center md:justify-start">
                 
                  
                  <img
                    src="https://images.pexels.com/photos/63324/california-road-highway-mountains-63324.jpeg" // Replace with your logo path
                    alt="Your Logo"
                    className="h-16 w-auto" // Consistent small logo size
                  />
                </div> */}
                <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed text-center md:text-left">
                  Shakti Service Station, trusted for quality fuel, is now your
                  complete roadside destination. We're setting a new standard
                  for wayside amenities, offering convenient refueling, ample
                  parking, comfortable lodging, and more. Experience the
                  difference - every stop is designed to enhance your journey.
                </p>
                <div className="flex flex-col md:flex-row justify-around md:justify-start items-center md:space-x-8">
                  <div className="text-center md:text-left mb-4 md:mb-0">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                      30+ Years
                    </h3>
                    <p className="text-gray-600 text-sm">
                      of Experience in this industry
                    </p>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                      5+ Projects
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Successful delivered with excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Amenities</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Discover clean, safe, and convenient stops along your route.
              Whether you need fuel, food, or restrooms, we've got you covered.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-purple-700 mb-4">
                  Reliable Locations
                </h3>
                <p className="text-gray-600">
                  Every location is verified to ensure quality services and
                  facilities.
                </p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">
                  Interactive Map
                </h3>
                <p className="text-gray-600">
                  Easily locate amenities on our user-friendly and responsive
                  map.
                </p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-green-700 mb-4">
                  Hygienic Facilities
                </h3>
                <p className="text-gray-600">
                  Find restrooms and food courts that meet the highest hygiene
                  standards.
                </p>
              </div>
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
                      Click here to open the location in Google Maps
                    </a>
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
                  htmlFor="phonenumber"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Phone Number
                </label>
                <input
                  id="phonenumber"
                  name="phonenumber"
                  type="number"
                  placeholder="+91 ..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
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
      {/* 
      <HighwayAmenity /> */}

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
