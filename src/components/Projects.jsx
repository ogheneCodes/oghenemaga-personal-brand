function Projects() {
  const projects = [
    {
      title: "Personal Brand Website",
      description:
        "My professional digital identity and content platform.",
    },

    {
      title: "ICT Hardware-as-a-Service",
      description:
        "Subscription-based ICT infrastructure solution.",
    },

    {
      title: "Networking Lab",
      description:
        "Hands-on networking projects and CCNA learning journey.",
    },
  ];

  return (
    <section  id="projects" className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {projects.map((project) => (
            <div
              key={project.title}
              className="
bg-white/5
backdrop-blur-md
border
border-white/10
rounded-2xl
p-6
hover:-translate-y-2
hover:border-blue-500/30
transition
duration-300
"
            >
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {project.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;