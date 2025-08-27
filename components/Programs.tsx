export default function Programs() {
  const items = [
    { title: 'Leadership Program', desc: 'Hands-on coaching, civic projects, and peer mentorship.' },
    { title: 'Advocacy & Policy Change', desc: 'Toolkits and coalition building for equitable policy outcomes.' },
    { title: 'Career Coaching', desc: '1:1 guidance and resources to break ceilings and build ladders.' },
  ];
  return (
    <section className="bg-leadNavy text-white py-16 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold">How We Ignite Leadership & Drive Systemic Change</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-lg bg-white/5 p-6 shadow">
              <h3 className="font-semibold text-leadGold">{it.title}</h3>
              <p className="mt-2 text-white/85">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
