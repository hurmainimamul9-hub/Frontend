const testimonials = [
  {
    quote:
      "Sejak pakai Nova, waktu rilis produk kami turun setengahnya. Tim jadi jauh lebih fokus ke fitur, bukan ke konfigurasi.",
    name: "Sarah Wijaya",
    role: "CTO, Tokoku",
    initial: "SW",
  },
  {
    quote:
      "Onboarding-nya cepat banget. Dalam satu hari seluruh tim sudah produktif. Dukungannya juga responsif.",
    name: "Budi Santoso",
    role: "Lead Engineer, Finlytic",
    initial: "BS",
  },
  {
    quote:
      "Analitik real-time-nya membantu kami mengambil keputusan dengan data, bukan tebakan. Game changer.",
    name: "Maya Putri",
    role: "Product Manager, Ruangkerja",
    initial: "MP",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="features-head">
          <span className="eyebrow">Testimoni</span>
          <h2 className="section-title">Dipercaya tim hebat</h2>
          <p className="section-subtitle">
            Ribuan tim mengandalkan Nova setiap hari untuk membangun produk yang
            mereka banggakan.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <article key={t.name} className="testimonial-card">
              <p className="testimonial-quote">“{t.quote}”</p>
              <div className="testimonial-author">
                <span className="avatar" aria-hidden>
                  {t.initial}
                </span>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
