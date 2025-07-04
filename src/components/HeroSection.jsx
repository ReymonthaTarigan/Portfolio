export default function HeroSection() {
  return (
    <section className="w-full bg-[#030712] text-white mt-10 ">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16 relative">

        {/* Teks */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-200">
            Hi, I'm Reymontha 
          </h1>
          <p className="text-gray-300 mb-6 text-sm md:text-base">
            I'm an undergraduate Informatics Engineering student at  Padjadjaran University with a strong dedication and deep interest in software development and computer systems.
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-4 space-y-1 md:space-y-0 text-gray-400 text-sm">
            <span>📍Padjajaran University, Indonesia</span>
            <span>• Available for new projects</span>
          </div>
        </div>

        {/* Gambar */}
        <div className="relative md:w-1/3 w-full flex justify-center md:justify-end">
        
          <div className="relative w-48 h-60 md:w-64 md:h-80">
          
            <div className="absolute top-2 left-2 w-full h-full bg-gray-700 rounded-lg"></div>

         
            <img
              src="/logo/profile.jpeg"
              alt="Profile"
              className="relative rounded-lg shadow-lg object-cover w-full h-full z-10"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
