export default function Hero({ id }: { id?: string }) {
  return (
    <section id={id} className="py-16 bg-gradient-to-b from-[#000000] to-[#2b2b2b] text-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-12 max-w-6xl mx-auto text-center md:text-left">
        {/* Left Side: Text */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
            Hi, I'm Crammiee
          </h1>
          <p className="text-lg md:text-xl text-muted mb-6 max-w-xl">
            Let's turn your ideas to life, frame by frame.
          </p>
          <a
            href="#contact"
            className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Work With Me
          </a>
        </div>

        {/* Right Side: Showreel Placeholder */}
        <div className="flex-1 max-w-xl w-full aspect-video bg-gray-200 rounded-lg shadow-md">
          <div className="flex items-center justify-center h-full text-gray-500">
            Showreel coming soon
          </div>
        </div>
      </div>
    </section>
  );
}
