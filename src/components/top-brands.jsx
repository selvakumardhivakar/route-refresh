import Slider from "react-slick";

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute top-1/2 right-[-25px] transform -translate-y-1/2 bg-gray-200 text-gray-700 rounded-full p-2 shadow-md cursor-pointer hover:bg-gray-300 z-20"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute top-1/2 left-[-25px] transform -translate-y-1/2 bg-gray-200 text-gray-700 rounded-full p-2 shadow-md cursor-pointer hover:bg-gray-300 z-20"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 5l-7 7 7 7"
      />
    </svg>
  </div>
);

const TopBrands = () => {
  const brands = [
    {
      name: "KFC",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/KFC_logo_wordmark.svg",
    },

    {
      name: "Domino's Pizza",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Dominos_pizza_logo.svg",
    },
    {
      name: "Indian Oil",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Indian_Oil_Logo.svg",
    },
    {
      name: "Jio BP",
      logo: "https://upload.wikimedia.org/wikipedia/en/d/db/Jio-bp_logo.svg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Top Brands
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Discover the trusted brands that partner with us to make your journey
          comfortable and enjoyable. From globally recognized food chains to
          reliable fuel providers, we bring you the best in class for every
          need.
        </p>
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <div
              key={index}
              className="grid place-items-center text-center p-4"
            >
              {/* Container for the logo with defined size */}
              <div className="grid place-items-center w-32 h-32">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="object-contain h-20 mb-4 transition-transform transform hover:scale-110"
                />
              </div>
              <p className="mt-4 text-gray-700 font-medium">{brand.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TopBrands;
