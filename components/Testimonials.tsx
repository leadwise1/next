export default function Testimonials() {
  const items = [
    { name: 'Ava Jackson', text: 'This program gave me a voice and the tools to lead with impact.' },
    { name: 'Mia Perez', text: 'Tangible skills. Real-world projects. Community that doesn’t quit.' },
    { name: 'Morgan Patel', text: 'The mentorship was key to landing my first leadership role.' },
  ];
  return (
    <section className="bg-leadNavy text-white py-16 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold">We Don’t Just Talk About Change — We Create It.</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <div key={t.name} className="rounded-lg bg-white/5 p-6">
              <p className="italic">“{t.text}”</p>
              <p className="mt-4 font-semibold text-leadGold">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
