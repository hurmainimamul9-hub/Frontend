const points = [
  "Setup dalam hitungan menit, bukan minggu.",
  "Skalabel dari startup hingga enterprise.",
  "Dukungan pelanggan 24/7 dari tim ahli.",
  "Tanpa biaya tersembunyi, harga transparan.",
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div>
          <span className="eyebrow">Tentang Nova</span>
          <h2 className="section-title">
            Dibuat untuk tim yang ingin bergerak cepat
          </h2>
          <p className="section-subtitle">
            Kami percaya membangun produk hebat tidak harus rumit. Nova lahir
            dari pengalaman para builder yang lelah dengan tools yang berantakan.
          </p>
          <ul className="about-list">
            {points.map((p) => (
              <li key={p}>
                <span className="check" aria-hidden>
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="about-visual" aria-hidden />
      </div>
    </section>
  );
}
