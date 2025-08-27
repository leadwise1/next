export default function CallToAction() {
  return (
    <section className="bg-leadNavy text-white py-16 px-6 md:px-10 text-center">
      <h2 className="text-2xl md:text-3xl font-bold">Let’s Build Change Together</h2>
      <p className="mt-4 text-white/80">Reach out — your story matters.</p>
      <div className="mt-6 flex justify-center gap-4">
        <a href="/contact" className="px-6 py-3 rounded-md bg-white text-black font-semibold">Get in Touch</a>
        <a href="/volunteer" className="px-6 py-3 rounded-md bg-white/10 text-white font-semibold">Volunteer</a>
      </div>
    </section>
  );
}
