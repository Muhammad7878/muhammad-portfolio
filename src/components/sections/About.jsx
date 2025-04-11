import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "Angular (Basic)",
    "TypeScript",
    "HTML",
    "CSS",
    "JavaScript",
    "TailwindCSS",
    "REST-API",
  ];
  const colabTools = ["Clean Code", "Scrum", "Kanban"];
  return (
    <section
      className="min-h-screen flex md:flex-row flex-col items-center justify-center py-20"
      id="about"
    >
      <RevealOnScroll>

      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About me
        </h2>
      </div>

      <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
        <p className="text-gray-300 mb-6">
          Passionate developer with expertise in building scalable web
          applications and creating innovative solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* FRONTEND SKILLS */}

          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((skill, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Collaboration tools */}
          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Collaboration tools</h3>
            <div className="flex flex-wrap gap-2">
              {colabTools.map((skill, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* EDUCATION / WORK SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* EDUCATION */}
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 🏫 Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                B.Sc. in International Media Computing - HTW Berlin - University
                of Applied Sciences (2019-2022)
              </li>
              <li>Relevant Coursework: Web Development & Design</li>
            </ul>
          </div>
          {/* WORK */}

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 🧑‍💻 Work Experience</h3>
            <div className="space-y-4 text-gray-300">
            {/* WORK 1 */}
              <div>
                <h2 className="font-semibold">
                  IBM Client Innovation Center Germany GmbH (03/2023 - Present)
                </h2>

                <h4 className="font-semibold">Junior Frontend Developer</h4>
                <p>
                  Worked on React-based projects, focusing on performance,
                  accessibility, and responsive design in a collaborative agile
                  environment.
                </p>
              </div>

              {/* WORK 2 */}
              <div>
                <h2 className="font-semibold">
                  ALVDIGITAL Systems (01/2022 - 02/2023)
                </h2>
                <h4 className="font-semibold">Frontend Developer</h4>
                <p>
                  Developed and maintained frontend features using Vue.js,
                  collaborated with designers to implement UI components, and
                  ensured responsive, user-friendly interfaces.
                </p>
              </div>

              {/* WORK 3 */}
              <div>
                <h2 className="font-semibold">
                  ALVDIGITAL Systems (08/2021 - 12/2021){" "}
                </h2>
                <h4 className="font-semibold">Frontend Development Intern</h4>
                <p>
                  Developed a crossplatform app for publishers and label
                  companies in music industry located in Germany
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
