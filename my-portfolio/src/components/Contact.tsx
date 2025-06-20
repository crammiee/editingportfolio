import { FaTwitter } from "react-icons/fa";

export default function Contact({ id }: { id?: string }) {
  return (
    <section className="py-16 text-center px-4">
      <h2 className="text-2xl font-semibold mb-4">Let’s Work Together</h2>
      <p className="text-gray-600 mb-6">Reach out via email or connect with me on Twitter.</p>
      <div className="flex justify-center gap-4">
        <a
          href="mailto:your@email.com"
          className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800"
        >
          Email Me
        </a>
        <a
          href="https://twitter.com/yourhandle"
          className="flex items-center gap-2 border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white"
        >
          <FaTwitter /> Twitter
        </a>
      </div>
    </section>
  );
}
