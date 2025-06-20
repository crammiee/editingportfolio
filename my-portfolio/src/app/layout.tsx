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
      <body className="font-sans bg-background text-foreground">
        <nav className="sticky top-0 z-50 mx-auto mt-4 w-fit rounded-xl bg-white/10 border border-white/20 backdrop-blur-md shadow-lg px-6 py-3">
          <ul className="flex gap-3 justify-center">
            {[
              { label: 'Home', href: '#hero' },
              { label: 'Clients', href: '#clients' },
              { label: 'Work', href: '#samples' },
              { label: 'Testimonials', href: '#testimonials' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm md:text-base px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-100 transition font-medium shadow"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}
