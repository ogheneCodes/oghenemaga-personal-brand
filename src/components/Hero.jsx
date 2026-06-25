function Hero() {
  return (
    <section className="min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto px-6">

        <span className="px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300">
          Technology Builder • Problem Solver
        </span>

        <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">

          Building Digital
          <br />
          Infrastructure
          <br />
          For The Future

        </h1>

        <p className="mt-8 text-gray-400 text-lg md:text-xl max-w-3xl">

          Hi, I'm Oghenemaga Ebobo.

          Network Engineer, Software Developer,
          Cloud Engineer and ICT Entrepreneur
          helping businesses leverage technology,
          infrastructure and innovation.

        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">

          <button className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 transition">
            View My Work
          </button>

          <button className="px-8 py-4 rounded-xl border border-white/10 hover:bg-white/5 transition">
            Contact Me
          </button>

        </div>
        <div className="mt-6">

  <a
    href="https://github.com/ogheneCodes"
    target="_blank"
    rel="noreferrer"
    className="text-blue-400"
  >
    View My GitHub →
  </a>

</div>

      </div>

    </section>
  );
}

export default Hero;