const clients = [
  { name: "Client A", logo: "/assets/client-a.png" },
  { name: "Client B", logo: "/assets/client-b.png" },
];

export default function Clients({ id }: { id?: string }) {
  return (
    <section className="py-16 text-center">
      <h2 className="text-2xl font-semibold mb-6">Clients I’ve Worked With</h2>
      <div className="flex flex-wrap justify-center items-center gap-6 px-4">
        {clients.map((c, i) => (
          <img key={i} src={c.logo} alt={c.name} className="w-24 h-24 object-contain" />
        ))}
      </div>
    </section>
  );
}
