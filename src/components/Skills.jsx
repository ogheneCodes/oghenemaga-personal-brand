function Skills() {
  const skills = [
    "Networking",
    "Cloud Engineering",
    "Software Development",
    "ICT Consulting",
    "Linux",
    "Cybersecurity",
    "React",
    "AWS"
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold">
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          {skills.map((skill) => (
            <div
              key={skill}
            className="
bg-white/5
backdrop-blur-md
border
border-white/10
rounded-2xl
p-6
hover:-translate-y-2
transition
duration-300
"
            >
              <h3 className="font-semibold">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;