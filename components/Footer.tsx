export default function Footer() {
  return (
    <footer className="bg-leadNavy text-white py-10 px-6 md:px-10">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="LeadWise" className="h-8 w-auto" />
          <span className="font-semibold">LeadWise Foundation</span>
        </div>
        <nav className="flex gap-6 text-white/80">
          <a href="/about" className="hover:text-white">About</a>
          <a href="/programs" className="hover:text-white">Programs</a>
          <a href="/donate" className="hover:text-white">Donate</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
      <div className="mt-6 text-center text-white/60 text-sm">© {new Date().getFullYear()} LeadWise Foundation. All rights reserved.</div>
    </footer>
  );
}
