const clients = [
  { name: "Todo", logo: "/assets/client-logos/todo.png" },
  { name: "Gabe Kunda", logo: "/assets/client-logos/gabekunda.jpg" },
  { name: "ececlare", logo: "/assets/client-logos/mother.jpg" },
  { name: "JudgmentNA", logo: "/assets/client-logos/judgment.jpg" },
  { name: "jords", logo: "/assets/client-logos/jollyjords.jpg" },
  { name: "RozeaVT", logo: "/assets/client-logos/rozeavt.jpg" },
  { name: "okVenn", logo: "/assets/client-logos/okvenn.jpg" },
  { name: "Maroon Esports", logo: "/assets/client-logos/mrnesports.jpg" },
];

export default function Clients({ id }: { id?: string }) {
  return (
    <section id={id} className="py-16 text-center text-background">
      <h2 className="text-2xl font-semibold mb-10">Clients I’ve Worked With</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-4 place-items-center">
        {clients.map((c, i) => (
            <div key={i} className="flex flex-col items-center space-y-2 w-24">
            <div className="w-36 h-36 rounded-full overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <img
                src={c.logo}
                alt={c.name}
                className="w-full h-full object-cover"
                />
            </div>
            <p className="text-sm text-muted text-center leading-tight h-10 flex items-center justify-center">
                {c.name}
            </p>
            </div>
        ))}
      </div>
    </section>
  );
}
