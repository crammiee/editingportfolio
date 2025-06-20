const videos = [
  {
    title: "Project 1",
    description: "A social media promo for a brand.",
    videoUrl: "https://www.youtube.com/embed/yourID",
  },
  {
    title: "Project 2",
    description: "A narrative edit for a travel creator.",
    videoUrl: "https://www.youtube.com/embed/yourID2",
  },
];

export default function Samples({ id }: { id?: string }) {
  return (
    <section className="py-16 px-4 space-y-16">
      {videos.map((v, i) => (
        <div key={i} className={`flex flex-col md:flex-row ${i % 2 ? "md:flex-row-reverse" : ""} items-center gap-8`}>
          <div className="w-full md:w-1/2 aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src={v.videoUrl}
              title={v.title}
              allowFullScreen
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
            <p className="text-gray-600">{v.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
