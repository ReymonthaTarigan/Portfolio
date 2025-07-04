import { useState } from "react";
import { FaEnvelope, FaPhone, FaCopy, FaGithub, FaTwitter, FaDev, FaCheck, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 1500);
  };

  return (
    <section id="contact" className="bg-[#111826] text-white py-16 px-6 scroll-mt-20 ">
      <div className="max-w-2xl mx-auto text-center ">

      
        <span className="inline-block bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full mb-3">
          Get in touch
        </span>

      
        <p className="text-gray-300 mb-6 text-sm md:text-base">
          What's next? Feel free to reach out to me if you're looking for a developer or simply want to connect.
        </p>

        {/* Contact Info */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-center space-x-2">
            <FaEnvelope className="text-gray-400" />
            <span className="font-semibold text-lg">reymonthatarigan13@gmail.com</span>
            <button onClick={() => handleCopy("reymonthatarigan13@gmail.com", "email")}>
              {copiedField === "email" ? (
                <FaCheck className="text-green-400 cursor-pointer" />
              ) : (
                <FaCopy className="text-gray-400 hover:text-white cursor-pointer" />
              )}
            </button>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <FaPhone className="text-gray-400" />
            <span className="font-semibold text-lg">082275125158</span>
            <button onClick={() => handleCopy("082275125158", "phone")}>
              {copiedField === "phone" ? (
                <FaCheck className="text-green-400 cursor-pointer" />
              ) : (
                <FaCopy className="text-gray-400 hover:text-white cursor-pointer" />
              )}
            </button>
          </div>
        </div>

        {/* Social Icons */}
        <p className="text-gray-400 mb-2 text-sm">You may also find me on these platforms:</p>
        <div className="flex justify-center space-x-6 text-xl">
          <a href="https://github.com/ReymonthaTarigan" className="text-gray-400 hover:text-white transition" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/reymonthatarigann/" className="text-gray-400 hover:text-white transition" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://wa.me/6282275125158" className="text-gray-400 hover:text-white transition" target="_blank">
            <FaWhatsapp />
          </a>
        </div>
      </div>

    </section>
  );
}
