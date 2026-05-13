// import React from "react";
// import { motion } from "framer-motion";
// import YogeshImg from "../assets/Yogesh_Img.png";

// function About() {
//   const skills = [
//     {
//       category: "Frontend",
//       items: ["React", "JavaScript", "Tailwind CSS", "HTML/CSS"],
//     },
//     {
//       category: "Backend",
//       items: ["Node.js", "Express", "MongoDB", "REST APIs"],
//     },
//     { category: "Tools", items: ["Git", "VS Code", "Postman", "GitHub"] },
//     {
//       category: "Other",
//       items: [
//         "Data Structures",
//         "Algorithms",
//         "Problem Solving",
//         "Responsive Design",
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-[91.82vh] bg-slate-950 text-white py-20 px-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-5xl md:text-6xl font-bold mb-4">
//             About <span className="text-yellow-400">Me</span>
//           </h1>
//           <p className="text-gray-300 text-lg max-w-2xl mx-auto">
//             Full Stack Developer passionate about building efficient and
//             scalable web applications
//           </p>
//         </motion.div>

//         {/* Bio Section with Image on Left */}
//         <motion.div
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="grid md:grid-cols-3 gap-8 mb-16 items-start"
//         >
//           {/* Profile Image */}
//           <motion.div
//             initial={{ opacity: 0, x: -100 }}
//             animate={{ opacity: 1, x: -40 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="flex justify-center md:justify-start"
//           >
//             <div className="relative">
//               <img
//                 src={YogeshImg}
//                 alt="Yogesh"
//                 className="rounded-full object-cover shadow-2xl border-4 border-yellow-400"
//               />
//               <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent"></div>
//             </div>
//           </motion.div>

//           {/* Text Content */}
//           <div className="md:col-span-1">
//             <h2 className="text-3xl font-bold text-yellow-400 mb-4">
//               Who Am I?
//             </h2>
//             <p className="text-gray-300 mb-4 leading-relaxed">
//               I'm an Electronics and Communication Engineering (ECE) student
//               with a strong interest in Full Stack Development and modern web
//               technologies. I enjoy building responsive and user-friendly
//               applications while continuously learning new tools and frameworks
//               to improve my development skills.
//             </p>
//             <p className="text-gray-300 mb-4 leading-relaxed">
//               I have a strong passion for problem solving and logical thinking.
//               To strengthen my understanding of Data Structures and Algorithms,
//               I have solved 100+ problems on LeetCode, which has helped me
//               improve my coding efficiency and analytical approach to solving
//               real-world challenges.
//             </p>
//             <p className="text-gray-300 leading-relaxed">
//               I'm also interested in building practical and scalable projects
//               that combine clean frontend design with functional backend
//               systems. Currently, I'm focused on improving my full stack
//               development skills and exploring AI-powered applications through
//               hands-on projects and continuous learning.
//             </p>
//           </div>

//           {/* Quick Facts Card */}
//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg p-8 text-black h-fit"
//           >
//             <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
//             <div className="space-y-3">
//               <p>
//                 <span className="font-bold">🎓 Education:</span> Pursuing ECE
//                 Degree
//               </p>
//               <p>
//                 <span className="font-bold">💻 Focus:</span> Full Stack
//                 Development
//               </p>
//               <p>
//                 <span className="font-bold">🧠 Problem Solving:</span> Solved 100+ LeetCode Problems
//               </p>
//               <p>
//                 <span className="font-bold">🚀 Current Goal:</span> Building AI-Powered Web Applications
//               </p>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Skills Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="mb-16"
//         >
//           <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
//             Skills & Expertise
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {skills.map((skill, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-slate-900 border-2 border-yellow-500 rounded-lg p-6"
//               >
//                 <h3 className="text-xl font-bold text-yellow-400 mb-4">
//                   {skill.category}
//                 </h3>
//                 <ul className="space-y-2">
//                   {skill.items.map((item, idx) => (
//                     <li
//                       key={idx}
//                       className="text-gray-300 flex items-center gap-2"
//                     >
//                       <span className="text-yellow-400">•</span> {item}
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Stats Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//           className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg p-8 border border-yellow-500"
//         >
//           <div className="grid md:grid-cols-4 gap-8 text-center">
//             <div>
//               <h3 className="text-4xl font-bold text-yellow-400 mb-2">10+</h3>
//               <p className="text-gray-300">Projects Completed</p>
//             </div>
//             <div>
//               <h3 className="text-4xl font-bold text-yellow-400 mb-2">100%</h3>
//               <p className="text-gray-300">Dedication</p>
//             </div>
//             <div>
//               <h3 className="text-4xl font-bold text-yellow-400 mb-2">500+</h3>
//               <p className="text-gray-300">Hours of Code</p>
//             </div>
//             <div>
//               <h3 className="text-4xl font-bold text-yellow-400 mb-2">8+</h3>
//               <p className="text-gray-300">Technologies</p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
// export default About;

import React from "react";
import { motion } from "framer-motion";
import YogeshImg from "../assets/Yogesh_Img.png";

function About() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "JavaScript", "Tailwind CSS", "HTML/CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "REST APIs"],
    },
    { category: "Tools", items: ["Git", "VS Code", "Postman", "GitHub"] },
    {
      category: "Other",
      items: [
        "Data Structures",
        "Algorithms",
        "Problem Solving",
        "Responsive Design",
      ],
    },
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
              <div className="relative p-1 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600" style={{ boxShadow: "0 0 40px rgba(250, 204, 21, 0.6), inset 0 0 20px rgba(250, 204, 21, 0.3)" }}>
                <img
                  src={YogeshImg}
                  alt="Yogesh"
                  className="rounded-full object-cover shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="pt-13">
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 30 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-bold text-yellow-400 mb-4">
                Who Am I?
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm an Electronics and Communication Engineering (ECE) student
                with a strong interest in Full Stack Development and modern
                web technologies. I enjoy building responsive and
                user-friendly applications while continuously learning new
                tools and frameworks to improve my development skills.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I have a strong passion for problem solving and logical
                thinking. To strengthen my understanding of Data Structures
                and Algorithms, I have solved 100+ problems on LeetCode, which
                has helped me improve my coding efficiency and analytical
                approach to solving real-world challenges.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm also interested in building practical and scalable
                projects that combine clean frontend design with functional
                backend systems. Currently, I'm focused on improving my full
                stack development skills and exploring AI-powered applications
                through hands-on projects and continuous learning.
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
            <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
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
                  Building AI-Powered Web Applications
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const logos = {
                Frontend: "⚛️",
                Backend: "🔧",
                Tools: "🛠️",
                Other: "💡",
              };

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 border border-slate-700 hover:border-yellow-400 transition-all duration-300 group"
                >
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-600/0 group-hover:from-yellow-500/10 group-hover:to-yellow-600/10 transition-all duration-300"></div>

                  {/* Top Border Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="text-4xl">{logos[skill.category]}</div>
                      <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                        {skill.category}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {skill.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 text-gray-300 hover:text-yellow-300 transition-colors duration-300 cursor-default"
                        >
                          <div className="w-2 h-2 bg-yellow-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                          <span className="text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default About;
