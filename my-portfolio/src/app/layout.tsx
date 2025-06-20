import './globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'A video editing portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur p-4 border-b shadow-sm">
          <ul className="flex gap-4 justify-center">
            <li><a href="#hero">Home</a></li>
            <li><a href="#clients">Clients</a></li>
            <li><a href="#samples">Work</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
