import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Samples from "../components/Samples";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <main className="space-y-24">
        <Hero id="hero" />
        <Clients id="clients" />
        <Samples id="samples" />
        <Testimonials id="testimonials" />
        <Contact id="contact" />
      </main>
    </>
  );
}
