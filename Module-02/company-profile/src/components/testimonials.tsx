const testimonials = [
  {
    id: 1,
    name: "Michael Anderson",
    title: "Senior Software Engineer at Veritas Technologies",
    feedback: "Veritas has transformed my career with their excellent courses! The comprehensive curriculum provided me with a solid foundation in programming and helped me enhance my problem-solving skills significantly. I am now more confident in my abilities and am excited to apply what I've learned in my professional role.",
    imgSrc: "/michael-anderson.jpg", // Add image paths for the circular image
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Web Developer at Innovative Solutions",
    feedback: "The instructors at Veritas are not only very knowledgeable but also genuinely supportive. They went above and beyond to ensure that I grasped complex concepts, and the hands-on projects allowed me to apply what I learned in real-world scenarios. This experience has equipped me with the skills I need to excel in my career.",
    imgSrc: "/jane-smith.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    title: "Data Analyst at Veritas Digital Technology",
    feedback: "Thanks to Veritas, I gained practical skills that helped me land my dream job! The training I received in data analysis and visualization was incredibly valuable. The course was structured in a way that allowed me to build my portfolio while learning, making me a more competitive candidate in the job market.",
    imgSrc: "/alice-johnson.jpg",
  },
  {
    id: 4,
    name: "Ryan Hamilton",
    title: "UI/UX Designer at Design Hub",
    feedback: "I had a fantastic learning experience with real-world applications at Veritas. The UI/UX design course was comprehensive, covering all aspects from user research to prototyping. The project work gave me practical insights and experience that I could immediately apply in my job, leading to increased efficiency in my design process.",
    imgSrc: "/ryan-hamilton.jpg",
  },
  {
    id: 5,
    name: "Tamas Bedo",
    title: "UX Designer at Management Solutions Inc.",
    feedback: "I highly recommend Veritas for anyone looking to upskill. The environment was collaborative and enriching, and I had the opportunity to work alongside talented individuals. The curriculum is well-structured, and the instructors are always ready to help. This has significantly boosted my design thinking and creativity.",
    imgSrc: "/tamas-bedo.jpg",
  },
  {
    id: 6,
    name: "Evelyn Wilson",
    title: "Product Owner at Content Strategist Inc.",
    feedback: "The community support during my learning journey at Veritas was invaluable. I found mentors and peers who motivated me and provided feedback on my work. The skills I gained in product management and agile methodologies have greatly enhanced my ability to lead projects effectively.",
    imgSrc: "evelyn-wilson.jpg",
  },
  {
    id: 7,
    name: "James Robinson",
    title: "CEO at Web Creations Inc.",
    feedback: "As a CEO, I understand the importance of continuous learning in today's fast-paced business environment. Veritas has consistently delivered top-notch training programs that not only enhance individual skills but also align with our organizational goals. The exceptional talent we have hired from Veritas has significantly contributed to our success and innovation.",
    imgSrc: "/james-robinson.jpg",
  },
  {
    id: 8,
    name: "Isabella Smith",
    title: "Marketing Specialist at Media Works Inc.",
    feedback: "Thanks to Veritas, I feel confident in my skills! The marketing training was thorough and included the latest trends and tools in the industry. I learned how to develop effective marketing strategies and campaigns that resonate with target audiences. This has significantly improved my performance in my current role.",
    imgSrc: "/isabella-smith.jpg",
  },
];

const Testimonial: React.FC = () => {
  return (
    <div className="bg-gray-100 py-20"> {/* Increased padding for the title */}
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">What Our Alumnis Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
            >
              <img
                src={testimonial.imgSrc}
                alt={testimonial.name}
                className="w-34 h-34 rounded-full mb-4 object-cover" // Adjust size as needed
              />
              <h4 className="font-bold mt-4">{testimonial.name}</h4>
              <h5 className="text-gray-500 mt-1">{testimonial.title}</h5>
              <p className="text-gray-600 italic text-center mt-5">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
