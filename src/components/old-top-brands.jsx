const OldTopBrands = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-6">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Top Brands</h2>
        <p className="text-gray-600 mb-12">
          Discover the trusted brands that partner with us to make your journey
          comfortable and enjoyable. From globally recognized food chains to
          reliable fuel providers, we bring you the best in class for every
          need. Whether you're refueling your vehicle or recharging yourself,
          our network of top brands ensures quality, convenience, and
          satisfaction.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {/* Partner 1 */}
          <div className="flex flex-col items-center h-20 mb-4 transition-transform transform hover:scale-110">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1e/KFC_logo_wordmark.svg"
              alt="KFC"
              className="h-20 mb-4"
            />
            {/* <p className="text-gray-700 font-medium">KFC</p> */}
          </div>
          {/* Partner 2 */}
          <div className="flex flex-col items-center h-20 mb-4 transition-transform transform hover:scale-110">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/74/Dominos_pizza_logo.svg"
              alt="Domino's Pizza"
              className="h-20 mb-4"
            />
            {/* <p className="text-gray-700 font-medium">Domino's Pizza</p> */}
          </div>
          {/* Partner 3 */}
          <div className="flex flex-col items-center h-20 mb-4 transition-transform transform hover:scale-110">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Indian_Oil_Logo.svg"
              alt="Indian Oil"
              className="h-20 mb-4"
            />
            {/* <p className="text-gray-700 font-medium">Indian Oil</p> */}
          </div>
          {/* Partner 4 */}
          <div className="flex flex-col items-center h-20 mb-4 transition-transform transform hover:scale-110">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/d/db/Jio-bp_logo.svg"
              alt="jio-bp"
              className="h-20 mb-4"
            />
            {/* <p className="text-gray-700 font-medium">Jio-bp</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OldTopBrands;
