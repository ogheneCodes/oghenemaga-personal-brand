import {
  Network,
  Cloud,
  Code2,
  Briefcase,
} from "lucide-react";

function Services() {
  const services = [
    {
      title: "Network Engineering",
      description:
        "Design, troubleshooting and optimization of network infrastructure.",
      icon: Network,
    },

    {
      title: "Cloud Solutions",
      description:
        "Cloud infrastructure, deployment and scalability solutions.",
      icon: Cloud,
    },

    {
      title: "Software Development",
      description:
        "Modern web applications and business software solutions.",
      icon: Code2,
    },

    {
      title: "ICT Consulting",
      description:
        "Technology strategy, procurement and digital transformation.",
      icon: Briefcase,
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold">
          Services
        </h2>

        <p className="text-gray-400 mt-4">
          Solutions I provide through technology and innovation.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:-translate-y-2 transition"
              >
                <Icon size={40} />

                <h3 className="text-xl font-semibold mt-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {service.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Services;