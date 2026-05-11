import { motion } from "framer-motion";
import YogeshImg from "./assets/Yogesh_Img.png";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Hero() {
  return (
    <section className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-yellow-500 pb-2">HELLO, THIS IS</p>
          <h1 className="text-5xl md:text-6xl font-bold pb-1">YOGESH</h1>
          <h2 className="text-2xl text-yellow-500 mb-6">FullStack Developer</h2>
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
          <div className="flex gap-10 text-yellow-500">
            <a
              href="https://github.com/Yogsz"
              className="hover:text-yellow-400 transition flex items-center gap-2"
            >
                <FaGithub size={20}/>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yogesh-p-22964a310/"
              className="hover:text-yellow-400 transition flex items-center gap-2"
            >
                <FaLinkedin sixe={20}></FaLinkedin>
                LinkedIn
            </a>
            <a
              href="mailto:yogeshdeepan15@gmail.com"
              className="hover:text-yellow-400 transition flex items-center gap-2"
            >
              <MdEmail size={20}></MdEmail>
              Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1.5, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={YogeshImg}
            alt="Yogesh"
            className="rounded-full border-4 border-yellow-500 shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
