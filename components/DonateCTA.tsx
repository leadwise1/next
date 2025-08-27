export default function DonateCTA() {
  return (
    <section className="bg-white py-16 px-6 md:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-leadNavy">Your Gift Opens Doors</h2>
        <p className="mt-4 text-gray-700">
          Give to fund coaching, advocacy, and opportunities for tomorrow’s leaders.
        </p>
        <a href="/donate" className="inline-block mt-6">
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-leadGold text-black font-semibold">
            Donate
          </span>
        </a>
      </div>
    </section>
  );
}
