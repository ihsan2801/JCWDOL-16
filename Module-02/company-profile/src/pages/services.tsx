const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "We offer innovative web development solutions for your business.",
      imgSrc: "/website-development-banner.jpg",
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        "Creating fast and functional mobile applications to meet business needs.",
      imgSrc: "/mobile-app-development.jpg",
    },
    {
      id: 3,
      title: "SEO Optimization",
      description:
        "Optimizing your website's visibility on search engines with our SEO strategies.",
      imgSrc: "/seo-optimization-banner.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      {/* Hero Section with Background Image */}
      <section
        className="text-center text-white py-20 relative"
        style={{
          backgroundImage: `url('service.jpg')`, // replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Optional for parallax effect
        }}
      >
        {/* Overlay to darken the background */}
     
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="mt-4 text-lg">
            Kami menawarkan berbagai layanan untuk memenuhi kebutuhan bisnis Anda.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                className="w-full h-56 object-cover"
                src={service.imgSrc}
                alt={service.title}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {service.title}
                </h2>
                <p className="text-gray-600 mt-4">{service.description}</p>
                <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className= " text-black py-10 text-center">
        <h3 className="text-2xl font-bold">Ready to work with us?</h3>
        <p className="mt-2 text-lg">Contact us to start your project!</p>
        <button className="mt-4 bg-white text-blue-600 px-6 py-3 rounded hover:bg-gray-200">
          Contact Us 
        </button>
      </section>

    
    </div>
  );
};

export default Services;
