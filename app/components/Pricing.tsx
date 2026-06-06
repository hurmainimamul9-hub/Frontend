const plans = [
  {
    name: "Starter",
    price: "Rp0",
    period: "/bulan",
    desc: "Untuk individu dan proyek kecil.",
    features: ["1 proyek", "Hingga 3 anggota", "Analitik dasar", "Dukungan komunitas"],
    cta: "Mulai Gratis",
    featured: false,
  },
  {
    name: "Pro",
    price: "Rp149rb",
    period: "/bulan",
    desc: "Untuk tim yang sedang berkembang.",
    features: [
      "Proyek tanpa batas",
      "Hingga 20 anggota",
      "Analitik real-time",
      "Integrasi lengkap",
      "Dukungan prioritas",
    ],
    cta: "Coba 14 Hari",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Untuk organisasi skala besar.",
    features: [
      "Semua fitur Pro",
      "Anggota tanpa batas",
      "SSO & kontrol akses",
      "SLA & dukungan khusus",
      "Manajer akun dedikasi",
    ],
    cta: "Hubungi Sales",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <div className="features-head">
          <span className="eyebrow">Harga</span>
          <h2 className="section-title">Harga yang transparan</h2>
          <p className="section-subtitle">
            Mulai gratis, naik kelas kapan pun Anda butuh. Tanpa biaya
            tersembunyi.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`pricing-card${p.featured ? " featured" : ""}`}
            >
              {p.featured && <span className="pricing-badge">Paling Populer</span>}
              <h3 className="plan-name">{p.name}</h3>
              <div className="plan-price">
                <span className="amount">{p.price}</span>
                <span className="period">{p.period}</span>
              </div>
              <p className="plan-desc">{p.desc}</p>
              <ul className="plan-features">
                {p.features.map((f) => (
                  <li key={f}>
                    <span className="check" aria-hidden>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`btn ${p.featured ? "btn-primary" : "btn-ghost"}`}
                style={{ width: "100%" }}
              >
                {p.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
