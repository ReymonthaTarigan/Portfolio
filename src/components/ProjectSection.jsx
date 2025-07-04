export default function ProjectSection() {
  const projects = [
    {
      title: "Jurnal Bumil",
      description:
        "A web-based application designed to assist pregnant women in recording, monitoring, and analyzing their health conditions digitally. The application also provides access for midwives to track the pregnancy progress and offer recommendations based on the inputted data.",
      image: "/projects/jurnalbumil.png", 
      tags: [
        "React.js",
        "Express.js",
        "TailwindCSS",
        "Git",
        "Figma",
        "Firebase",
      ],
      link: "https://kel9-ppl-1-jurnal-bumil.vercel.app/",
    },
    {
      title: "FnC Web",
      description:
        "FnC is a program by Himatif Unpad that receives website and application development orders from clients both inside and outside the university. This website is designed to make it easier for clients to access and request development services",
      image: "/projects/fnc.png",
      tags: [
        "PHP",
        "Laravel",
        "TailwindCSS",
        "MySQL",
        "figma",
        "Git",
      ],
      link: "https://fnc.himatif.org/",
    },
    {
      title: "CoralScape",
      description:
        "CoralScape is an AR-based educational project that aims to raise awareness about the importance of coral reef ecosystems and marine conservation. Targeted at students, educators, environmentalists, and tourists, it combines visual technology with immersive human-computer interaction.",
      image: "/projects/coralscape.png",
      tags: [
        "Unity",
        "Blender",
        "git",
        "Vuforia",
        "Figma",
      ],
      link: "https://drive.google.com/drive/folders/1WQLjMsjrhshKoJ_NHQcN1N24vKbo0omO?usp=sharing",
    },
    {
      title: "OLAP : E-Commerce Data",
      description:
        "This project is an implementation of a data warehouse and OLAP in managing e-commerce data. The system utilizes Power BI for data visualization and SQL Server for data storage and processing. Through this project, sales transaction data and customer data from an e-commerce platform are integrated, processed, and analyzed to generate interactive dashboards and reports, enabling stakeholders to gain valuable business insights and make data-driven decisions efficiently.",
      image: "/projects/olap.png",
      tags: [
        "Power BI",
        "SQL Server",
      ],
      link: "https://drive.google.com/drive/folders/1R_EtbI31AuAdtpnABj9Sl36qsqzTnxTW?usp=sharing",
    },
  ];

  return (
    <section id="project" className="bg-[#030712] py-16 px-6 text-white scroll-mt-20">
      <div className="max-w-6xl mx-auto text-center">
      
        <span className="inline-block bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full mb-3">
          Project
        </span>

     
        <p className="text-gray-300 mb-12">
          Some of the  projects I have built:
        </p>

        {/* Project Cards */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-lg p-6 flex flex-col  ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center md:items-start md:space-x-8`}
            >
              {/* Image */}
                <div className="md:w-1/2 w-full">
                <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
                <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-fill"
              />

                </div>


                </div>


              {/* Text */}
              <div className="md:w-1/2 w-full mt-6 md:mt-0 text-left">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 pr-10">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-gray-400 hover:text-white transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 3h7m0 0v7m0-7L10 14"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 5v14h14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
