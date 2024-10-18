import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Teams = () => {
  // Leadership team data
  const leadershipTeamMembers = [
    {
      id: 1,
      name: "Alexander Reinhardt",
      title: "Chief Technology Officer",
      description:
        "Expertise: Cloud Infrastructure, Software Engineering, System Architecture. John leads the technology strategy at Veritas with over 15 years of experience.",
      imgSrc: "/alexander-reinhardt.jpg", 
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      email: "mailto:alexanderreinhardt@veritas.com",
    },
    {
      id: 2,
      name: "Victoria Thompson",
      title: "Chief Executive Officer",
      description:
        "Expertise: Corporate Strategy, Innovation Leadership, Business Growth. As the visionary leader of Veritas, Emily steers the company toward innovation and growth, ensuring we remain at the forefront of industry advancements. Her commitment to excellence fosters a culture of collaboration and continuous improvement.",
      imgSrc: "/victoria-thompson.jpg",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      email: "mailto:victoriathompson@veritas.com",
    },
  ];

  // Membership team data
  const membershipTeamMembers = [
    {
      id: 1,
      name: "Ethan Montgomery",
      title: "Lead Engineer",
      description:
        "Expertise: Full-Stack Development, Systems Architecture, AI-driven Engineering. Ethan spearheads Veritas' engineering division, delivering cutting-edge technology solutions.",
      imgSrc: "/ethan-montgomery.jpg", 
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      email: "mailto:ethanmontgomery@veritas.com",
    },
    {
      id: 2,
      name: "Samantha Brooks",
      title: "Head of Products Development",
      description:
        "Expertise: Product Design, User Experience (UX), Agile Development. Samantha bridges the gap between product vision and reality, leading a cross-functional team to bring innovative products to market.",
      imgSrc: "/samantha-brooks.jpg",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      email: "mailto:samanthabrooks@veritas.com",
    },
    {
      id: 3,
      name: "Michael Jennings",
      title: "Data Science Lead",
      description:
        "Expertise: Machine Learning, Predictive Analytics, Data Strategy. Michael harnesses the power of data to unlock insights that fuel Veritas’ strategic decisions.",
      imgSrc: "/michael-jennings.jpg",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      email: "mailto:michaeljennings@veritas.com",
    },
    {
      id: 4,
      name: "Olivia Rivers",
      title: "Senior Marketing Strategist",
      description:
        "Expertise: Brand Strategy, Digital Marketing, Consumer Engagement. Olivia leads Veritas' global marketing efforts, ensuring that the company’s brand resonates across digital channels.",
      imgSrc: "/olivia-rivers.jpg",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      email: "mailto:oliviarivers@veritas.com",
    },
    {
      id: 5,
      name: "Daniel Cohen",
      title: "Head of Research and Development",
      description:
        "Expertise: Emerging Technologies, Innovation Strategy, R&D. Daniel drives the R&D agenda at Veritas, exploring new technologies that will shape the future of the business.",
      imgSrc: "/daniel-cohen.jpg",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      email: "mailto:danielcohen@veritas.com",
    },
    {
      id: 6,
      name: "Grace Campbell",
      title: "Human Resources Director",
      description:
        "Expertise: Talent Acquisition, Organizational Development, Leadership Coaching. Grace is responsible for cultivating a high-performing team at Veritas.",
      imgSrc: "/grace-campbell.jpg",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      email: "mailto:gracecampbell@veritas.com",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        id="teams"
        className="bg-blue-900 text-white py-16 text-center mt-16"
        style={{
          backgroundImage: `url('/meet-the-team.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          filter: "brightness(90%)",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-shadow">Meet the Veritas Team</h1>
          <p className="text-xl">
            Veritas, our success is driven by our talented and dedicated team.
            Explore the mix of innovation, collaboration, and expertise that drives us forward.
          </p>
        </div>
      </div>

      {/* Leadership Team Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadershipTeamMembers.map((member) => (
              <div key={member.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-25 h-25 rounded-full mb-4 object-cover"
                />
                <h4 className="font-bold mt-4">{member.name}</h4>
                <h5 className="text-gray-500 mt-1">{member.title}</h5>
                <p className="text-gray-600 text-center mt-3">{member.description}</p>
                <div className="flex space-x-4 mt-4">
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-gray-500 hover:text-blue-500" />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-gray-500 hover:text-blue-500" />
                  </a>
                  <a href={member.email} target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="text-gray-500 hover:text-blue-500" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Membership Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Membership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membershipTeamMembers.map((member) => (
              <div key={member.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-25 h-25 rounded-full mb-4 object-cover"
                />
                <h4 className="font-bold mt-4">{member.name}</h4>
                <h5 className="text-gray-500 mt-1">{member.title}</h5>
                <p className="text-gray-600 text-center mt-3">{member.description}</p>
                <div className="flex space-x-4 mt-4">
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-gray-500 hover:text-blue-500" />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-gray-500 hover:text-blue-500" />
                  </a>
                  <a href={member.email} target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="text-gray-500 hover:text-blue-500" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
