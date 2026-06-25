function Timeline() {
  const timeline = [
    {
      year: "2023",
      title: "Frontend Mentorship",
    },

    {
      year: "2024",
      title: "Networking & Infrastructure",
    },

    {
      year: "2025",
      title: "Cloud & Software Engineering",
    },

    {
      year: "2026",
      title: "Building Technology Businesses",
    },
  ];

  return (
    <section className="py-24">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold">
          My Journey
        </h2>

        <div className="mt-12 space-y-6">

          {timeline.map((item) => (
            <div
              key={item.year}
              className="border-l-2 border-blue-500 pl-6"
            >
              <h3 className="text-blue-400">
                {item.year}
              </h3>

              <p className="text-xl mt-2">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Timeline;