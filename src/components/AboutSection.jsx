export default function AboutSection() {
  return (
    <section id="about" className="bg-[#111826] py-16 px-6 text-white scroll-mt-20 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start">

        {/* Gambar dengan shadow */}
        <div className="relative mb-8 md:mb-0 md:w-1/3 w-full flex justify-center md:justify-start">
          <div className="relative w-48 h-60 md:w-64 md:h-80">
            {/* Shadow */}
            <div className="absolute top-2 left-2 w-full h-full bg-gray-700 rounded-lg"></div>

            {/* Gambar */}
            <img 
              src="/logo/profile2.jpg"
              alt="About"
              className="relative rounded-lg shadow-lg object-cover w-full h-full z-10"
            />
          </div>
        </div>

        {/* Teks */}
        <div className="md:w-2/3 md:pl-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Curious about me? Here you have it:
          </h2>
          <p className="text-gray-300 mb-4 text-sm md:text-base">
           I am an undergraduate Computer Science student at Padjadjaran University with a strong dedication to software development, computer systems, and learning new technologies. My main focus is building efficient, scalable, and user-centered applications while continuously sharpening my skills across various tech stacks.
          </p>
          <p className="text-gray-300 text-sm md:text-base">
            
            I enjoy turning complex problems into simple, beautiful, and intuitive solutions. I've actively participated in several organizational activities, balancing my academic life with practical experiences through project development, competitions, and collaborative work.

          </p>
        </div>
      </div>
    </section>
  )
}
