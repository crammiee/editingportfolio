// components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
      <div className="flex justify-center gap-6 py-4">
        <a href="#hero" className="text-sm font-medium hover:text-blue-600">Home</a>
        <a href="#clients" className="text-sm font-medium hover:text-blue-600">Clients</a>
        <a href="#samples" className="text-sm font-medium hover:text-blue-600">Work</a>
        <a href="#testimonials" className="text-sm font-medium hover:text-blue-600">Testimonials</a>
        <a href="#contact" className="text-sm font-medium hover:text-blue-600">Contact</a>
      </div>
    </nav>
  );
}
