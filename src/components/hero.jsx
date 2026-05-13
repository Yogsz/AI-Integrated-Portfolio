import { motion } from "framer-motion";
import YogeshImg from "../assets/Yogesh_Img.png";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Hero() {
  return (
    <section className="min-h-[91.82vh] bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center pt-3 ">
        <motion.div
          initial={{ opacity: 0,x:-100 }}
          animate={{ opacity: 1, x:0}}
          transition={{ duration: 1.5 }}
        >
          <p className="text-yellow-500 pb-2">HELLO, THIS IS</p>
          <h1 className="text-5xl md:text-6xl font-bold pb-1">YOGESH</h1>
          <h2 className="text-2xl text-white mb-6 pt-1"> And I'm a <span className="text-4xl font-bold text-yellow-400 ">Full-Stack Developer</span> </h2>
          <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
            Passionate about building efficient solutions with clean code.
            Expertise in DSA and full-stack development.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mb-8 pb-3">
            <button className="bg-yellow-500 text-black px-8 py-3 font-semibold rounded hover:bg-slate-900 hover:text-yellow-500 hover:border-2 hover:border-yellow-500 transition duration-300 rounded-lg">
              View My Work
            </button>
            <button className="border-2 border-yellow-500 text-yellow-500 px-8 py-3 font-semibold rounded hover:bg-yellow-500 hover:text-black transition duration-300 rounded-lg">
              Contact Me
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-8 text-yellow-500">
            <a
              href="https://github.com/Yogsz"
              className="text-yellow-400 transition flex items-center gap-2 hover:scale-125 transition-all duration-300 hover:drop-shadow-[0_0_10px_#ec4899]"
            >
                <FaGithub size={20}/>
              
            </a>
            <a
              href="https://www.linkedin.com/in/yogesh-p-22964a310/"
              className="text-yellow-400 transition flex items-center gap-2 hover:scale-125 transition-all duration-300 hover:drop-shadow-[0_0_10px_#ec4899]"
            >
                <FaLinkedin size={20}></FaLinkedin>
                
            </a>
            <a
              href="mailto:yogeshdeepan15@gmail.com"
              className="text-yellow-400 transition flex items-center gap-2 hover:scale-125 transition-all duration-300 hover:drop-shadow-[0_0_10px_#ec4899]"
            >
              <MdEmail size={20}></MdEmail>
              
            </a>
            <a
              href="https://www.instagram.com/_itzz.yogesh?igsh=MW9wcW96anhnMDA1"
              className="text-yellow-400 transition flex items-center gap-2 hover:scale-125 transition-all duration-300 hover:drop-shadow-[0_0_10px_#ec4899]"
            >
              <FaInstagram size={20}></FaInstagram>
              
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className="relative p-1 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600" style={{ boxShadow: "0 0 40px rgba(250, 204, 21, 0.6), inset 0 0 20px rgba(250, 204, 21, 0.3)" }}>
          <img
            src={YogeshImg}
            alt="Yogesh"
            className="rounded-full object-cover shadow-2xl"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
