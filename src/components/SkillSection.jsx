export default function SkillsSection() {
  const skills = [
    { name: "C++", img: "/skills/C++.png" },
    { name: "Java", img: "/skills/java.png" },
    { name: "Python", img: "/skills/python.png" },
    { name: "MySQL", img: "/skills/mysql.png" },
    { name: "Tailwind", img: "/skills/tailwind.png" },
    { name: "Laravel", img: "/skills/laravel.png" },
    { name: "CI4", img: "/skills/ci4.png" },
    { name: "Node.js", img: "/skills/nodejs.png" },
    { name: "React.js", img: "/skills/reactjs.png" },
    { name: "Express.js", img: "/skills/expressjs.png" },
    { name: "Firebase", img: "/skills/firebase.png" },
    { name: "Unity", img: "/skills/unity.png" },
  
  ];

  return (
    <section id="skills" className="bg-[#030712] py-16 px-6 text-white scroll-mt-20">
      <div className="max-w-6xl mx-auto text-center">
      
        <span className="inline-block bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full mb-3">
          Skills
        </span>

     
        <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
          The skills, tools and technologies I am really good at:
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center justify-center">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center space-y-2">
              <img
                src={skill.img}
                alt={skill.name}
                className="w-12 h-12 object-contain"
              />
              <span className="text-sm text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
