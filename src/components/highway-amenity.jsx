import React from "react";

const HighwayAmenity = () => {
  return (
    <div
      className="flex flex-col space-y-16 p-8 bg-gray-100"
      style={{ fontFamily: "UberMove, sans-serif" }}
    >
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-8">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
            Say Goodbye to Old-School Gas Stations
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Why stick to old-school gas stations where you don’t get services?
            Upgrade your refueling experience with us, offering more than just
            fuel.
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src="https://img.freepik.com/free-photo/thunderstorm-village_23-2151762573.jpg?t=st=1735062400~exp=1735066000~hmac=ac67f1f35c98434bb78050fd32f3679066758a998ca69ade84b61fce9a3af2b6&w=1800"
            alt="Normal gas station"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center bg-white shadow-md rounded-lg p-8">
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
            Experience the New-Gen Highway Amenities
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Come to our new-gen wayside amenity to hang out while filling your
            tanks and stomach. Enjoy car parking, fresh-up centers, hotels, and
            parks designed for a relaxing break on your journey.
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src="https://img.freepik.com/free-photo/modern-concept-art-electric-car-station_1409-7417.jpg?t=st=1735062451~exp=1735066051~hmac=e54364ec2f7214a1307896565df1813018a2896ef097cf213c239b501abdeb27&w=1800"
            alt="Highway amenity gas station"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HighwayAmenity;
