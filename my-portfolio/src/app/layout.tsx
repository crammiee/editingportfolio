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
        <main>{children}</main>
      </body>
    </html>
  );
}
