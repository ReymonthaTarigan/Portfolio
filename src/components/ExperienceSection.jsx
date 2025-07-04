export default function ExperienceSection() {
  const experiences = [
    {
      company: "Himatif Unpad",
      logo: "/logo/himatif.png", 
      position: "Staff - Himatif Unpad Election Committee",
      date: "2022",
      details: [
        "Person in charge of Logistics Division"
      ],
    },
    {
      company: "Himatif Unpad",
      logo: "/logo/himatif.png", 
      position: "Staff of PTI Division - Himatif Unpad",
      date: "2023",
      details: [
        "Served as the person in charge of the Produktif program, responsible for forming a developer team from Informatics students at Unpad to work on various IT projects for both internal and external clients."
      ],
    },
    {
      company: "Ifest Unpad",
      logo: "/logo/ifest.png",
      position: "IT Competition Staff - IFEST Unpad",
      date: "2023",
      details: [
       "Person in charge of DAC (Data Analyst Competition)"
      ],
    },
    {
      company: "Himatif Unpad",
      logo: "/logo/himatif.png",
      position: "Member of DPA - Himatif Unpad",
      date: "2024",
      details: [
       "Joined Commission 4, responsible for gathering and addressing the aspirations and concerns of Informatics students at Unpad."
      ],
    },
  ];

  return (
    <section id="experience" className="bg-[#111826] py-16 px-6 text-white scroll-mt-20">
      <div className="max-w-4xl mx-auto text-center">
       
        <span className="inline-block bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full mb-3">
          Experience
        </span>
       
        <p className="text-gray-300 mb-12">
          This is a quick summary of my organizational and committee experience :
        </p>

        {/* Card List */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between text-left"
            >
              {/* Kiri: Logo dan Posisi */}
              <div className="flex items-start space-x-4 mb-4 md:mb-0 md:w-2/3">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="font-semibold text-white">{exp.position}</h3>
                  <p className="text-gray-300 text-sm mt-2 text-justify">
                    {exp.details.join(" ")}
                  </p>
                </div>
              </div>

              {/* Kanan: Tanggal */}
              <div className="text-gray-400 text-sm md:text-right md:w-1/3">
                {exp.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
