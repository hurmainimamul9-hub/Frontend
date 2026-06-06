export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="brand">
          <span className="brand-mark" aria-hidden />
          Nova
        </div>
        <div className="footer-links">
          <a href="#features">Fitur</a>
          <a href="#about">Tentang</a>
          <a href="#contact">Kontak</a>
          <a href="#">Privasi</a>
        </div>
        <div>© {new Date().getFullYear()} Nova. Semua hak dilindungi.</div>
      </div>
    </footer>
  );
}
