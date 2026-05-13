import React from "react";
import { motion } from "framer-motion";
import YogeshImg from "../assets/Yogesh_Img.png";
import Python from "../assets/python.png";
import Java from "../assets/java.png";
import JS from "../assets/js.png";
import C from "../assets/C.png";

function About() {
  const languages = [
    { src: Java, alt: "JAVA", label: "Java" },
    { src: Python, alt: "PYTHON", label: "Python" },
    { src: C, alt: "C", label: "C" },
    { src: JS, alt: "JS", label: "JavaScript" }
  ];


  return (
    <div className="min-h-[91.82vh] bg-slate-950 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-yellow-400">Me</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Full Stack Developer passionate about building efficient and
            scalable web applications
          </p>
        </motion.div>

        {/* Bio Section with Image on Left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 "
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8 items-start pb-10">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: -50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center md:justify-start"
            >
              <div
                className="relative p-1 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600"
                style={{
                  boxShadow:
                    "0 0 40px rgba(250, 204, 21, 0.6), inset 0 0 20px rgba(250, 204, 21, 0.3)",
                }}
              >
                <img
                  src={YogeshImg}
                  alt="Yogesh"
                  className="rounded-full object-cover shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="pt-18">
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 30 }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-3xl font-bold text-yellow-400 mb-4">
                  Who Am I?
                </h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  <span className="pl-1">
                    I'm an Electronics and Communication Engineering (ECE)
                    student with a strong
                  </span>{" "}
                  <span className="pl-2">
                    interest in Full Stack Development and modern web
                    technologies. I enjoy
                  </span>{" "}
                  <span className="pl-3">
                    building responsive and user-friendly applications while
                    continuously
                  </span>{" "}
                  <span className="pl-4">
                    learning new tools and frameworks to improve my development
                    skills.
                  </span>
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  <span className="pl-6">
                    I have a strong passion for problem solving and logical
                    thinking. To
                  </span>{" "}
                  <span className="pl-7">
                    strengthen my understanding of Data Structures and
                    Algorithms, I have
                  </span>{" "}
                  <span className="pl-7">
                    solved 100+ problems on LeetCode, which has helped me
                    improve my
                  </span>{" "}
                  <span className="pl-6">
                    coding efficiency and analytical approach to solving
                    real-world challenges.
                  </span>
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <span className="pl-4">
                    I'm also interested in building practical and scalable
                    projects that combine
                  </span>{" "}
                  <span className="pl-3">
                    clean frontend design with functional backend systems.
                    Currently, I'm
                  </span>{" "}
                  <span className="pl-2">
                    {" "}
                    focused on improving my full stack development skills and
                    exploring AI-
                  </span>
                  <span className="pl-1">
                    powered applications through hands-on projects and
                    continuous learning.
                  </span>
                </p>
              </motion.div>
            </div>
          </div>

          {/* Quick Facts Card - Below Who Am I */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg p-8 text-black"
          >
            <h3 className="text-2xl font-bold mb-4 flex justify-center pb-5">
              Quick Facts
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <p>
                  <span className="font-bold">🎓 Education:</span>
                  <br />
                  Pursuing ECE Degree
                </p>
              </div>
              <div>
                <p>
                  <span className="font-bold">💻 Focus:</span>
                  <br />
                  Full Stack Development
                </p>
              </div>
              <div>
                <p>
                  <span className="font-bold">🧠 Problem Solving:</span>
                  <br />
                  Solved 100+ LeetCode Problems
                </p>
              </div>
              <div>
                <p>
                  <span className="font-bold">🚀 Current Goal:</span>
                  <br />
                  Build impactful real-world software.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
            Skills & Expertise
          </h2>
          <div className="py-16">
  <h1 className="text-yellow-400 font-bold text-3xl mb-10 pb-4">
    Programming Languages
  </h1>

  <div className="flex flex-wrap gap-35">
    {languages.map((lang, index) => (
      <div key={index} className="group bg-[#111827] border border-gray-700 rounded-2xl p-6 w-36 flex flex-col items-center transition-all duration-300 hover:-translate-y-3 hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(250,204,21,0.35)] ">
        <img
          src={lang.src}
          alt={lang.alt}
          className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110 flex-wrap gap-10"
        />
        <p className="text-gray-300 mt-4 font-medium group-hover:text-yellow-400 transition-colors duration-300">
          {lang.label}
        </p>
      </div>
    ))}
  </div>
</div>
        </motion.div>
      </div>
    </div>
  );
}
export default About;
