export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <span className="hero-badge">
          <span className="dot" aria-hidden />
          Baru — Nova 2.0 sudah rilis
        </span>
        <h1>
          Bangun produk digital <span className="grad">lebih cepat</span> dari
          sebelumnya
        </h1>
        <p>
          Nova menyatukan desain, pengembangan, dan peluncuran dalam satu alur
          kerja. Fokus ke ide Anda, biar kami yang urus sisanya.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Coba Gratis 14 Hari
          </a>
          <a href="#features" className="btn btn-ghost">
            Lihat Fitur
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <div className="num">12k+</div>
            <div className="label">Tim aktif</div>
          </div>
          <div className="stat">
            <div className="num">99.9%</div>
            <div className="label">Uptime</div>
          </div>
          <div className="stat">
            <div className="num">4.9/5</div>
            <div className="label">Rating pengguna</div>
          </div>
        </div>
      </div>
    </section>
  );
}
