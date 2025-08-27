export default function ImpactStats() {
  const stats = [
    { k: '2024', v: 'Milestones' },
    { k: '50+', v: 'Leaders Coached' },
    { k: '372', v: 'Community Hours' },
    { k: '80%', v: 'Program Satisfaction' },
  ];
  return (
    <section className="bg-white py-16 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-leadNavy">Your Voice, Our Impact</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.k} className="rounded-lg border border-gray-200 p-6 text-center">
              <div className="text-3xl font-extrabold text-leadNavy">{s.k}</div>
              <div className="text-gray-600 mt-2">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
