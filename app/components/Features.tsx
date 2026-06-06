const features = [
  {
    icon: "⚡",
    title: "Cepat Secara Default",
    desc: "Optimasi performa otomatis sehingga produk Anda selalu terasa ringan dan responsif.",
  },
  {
    icon: "🎨",
    title: "Desain Fleksibel",
    desc: "Komponen siap pakai yang mudah disesuaikan dengan identitas merek Anda.",
  },
  {
    icon: "🔒",
    title: "Aman & Andal",
    desc: "Enkripsi end-to-end dan infrastruktur dengan uptime 99.9% yang teruji.",
  },
  {
    icon: "🔗",
    title: "Mudah Terintegrasi",
    desc: "Terhubung dengan ratusan tools favorit Anda hanya dalam beberapa klik.",
  },
  {
    icon: "📊",
    title: "Analitik Real-time",
    desc: "Pantau metrik penting secara langsung untuk mengambil keputusan lebih cepat.",
  },
  {
    icon: "🤝",
    title: "Kolaborasi Tim",
    desc: "Bekerja bersama tim dalam satu ruang kerja, kapan saja dan di mana saja.",
  },
];

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="features-head">
          <span className="eyebrow">Fitur</span>
          <h2 className="section-title">Semua yang Anda butuhkan</h2>
          <p className="section-subtitle">
            Perangkat lengkap untuk membantu tim Anda merancang, membangun, dan
            mengembangkan produk tanpa hambatan.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((f) => (
            <article key={f.title} className="feature-card">
              <div className="feature-icon" aria-hidden>
                {f.icon}
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
