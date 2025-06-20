import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Samples from "../components/Samples";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      {/* Full-width hero section */}
      <Hero id="hero" />

      {/* Card container for all other sections */}
      <main className="relative z-10 max-w-5xl mx-auto bg-white text-foreground rounded-2xl shadow-xl px-6 md:px-12 py-16 space-y-24">
        <Clients id="clients" />
        <Samples id="samples" />
        <Testimonials id="testimonials" />
        <Contact id="contact" />
      </main>
    </>
  );
}
