export default function Spark() {
  return (
    <section className="bg-white py-16 px-6 md:px-10">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-lg overflow-hidden shadow">
          <img src="/spark-placeholder.jpg" alt="Leaders collaborating" className="w-full h-auto" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-leadNavy">The Spark of Change</h2>
          <p className="mt-4 text-gray-700">
            Transformation begins when every voice is heard. At LeadWise, we address the leadership pipeline with
            tactical coaching, advocacy, mentorship, and policy change — turning moments into movements and beliefs
            into reality.
          </p>
          <a href="/programs" className="inline-block mt-6">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-leadNavy text-white">
              Explore Programs →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
