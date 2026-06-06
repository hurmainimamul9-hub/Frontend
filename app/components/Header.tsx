import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="brand">
          <span className="brand-mark" aria-hidden />
          Nova
        </a>
        <nav className="nav">
          <div className="nav-links" style={{ display: "flex", gap: 28 }}>
            <a href="#features">Fitur</a>
            <a href="#pricing">Harga</a>
            <a href="#testimonials">Testimoni</a>
            <a href="#contact">Kontak</a>
          </div>
          <div className="nav-cta">
            <ThemeToggle />
            <a href="#contact" className="btn btn-ghost">
              Masuk
            </a>
            <a href="#contact" className="btn btn-primary">
              Mulai Gratis
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
