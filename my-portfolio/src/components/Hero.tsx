export default function Hero({ id }: { id?: string }) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm [Your Name]</h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-8">
        I craft cinematic stories for brands, creators, and storytellers.
      </p>
      <a
        href="#contact"
        className="mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
         Work With Me
        </a>

      <div className="w-full max-w-2xl aspect-video bg-gray-200 rounded-lg shadow-md">
        <p className="flex items-center justify-center h-full text-gray-500">Showreel coming soon</p>
      </div>
    </section>
  );
}
