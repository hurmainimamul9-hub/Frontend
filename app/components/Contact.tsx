"use client";

import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section cta">
      <div className="container">
        <div className="cta-box">
          <span className="eyebrow">Mulai Sekarang</span>
          <h2>Siap membangun lebih cepat?</h2>
          <p>
            Bergabunglah dengan ribuan tim yang sudah mempercayai Nova. Coba
            gratis selama 14 hari, tanpa kartu kredit.
          </p>

          {submitted ? (
            <p style={{ color: "var(--accent)", fontWeight: 600 }}>
              Terima kasih! Kami akan menghubungi {email} segera. 🎉
            </p>
          ) : (
            <form className="cta-form" onSubmit={handleSubmit}>
              <input
                type="email"
                required
                placeholder="email@perusahaan.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Alamat email"
              />
              <button type="submit" className="btn btn-primary">
                Daftar
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
