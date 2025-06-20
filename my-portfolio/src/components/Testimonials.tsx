const testimonials = [
  "/assets/testimonials/ss1.png",
  "/assets/testimonials/ss2.png",
];

export default function Testimonials({ id }: { id?: string }) {
  return (
    <section className="py-16 bg-gray-100 text-center px-4">
      <h2 className="text-2xl font-semibold mb-6">What People Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {testimonials.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Testimonial ${i + 1}`}
            className="w-full rounded-lg shadow-md transition-transform duration-200 hover:scale-105"
          />
        ))}
      </div>
    </section>
  );
}
