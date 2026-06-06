# Nova — Landing Page

Landing page modern berbasis **Next.js 15** (App Router) + **TypeScript**, tanpa dependency UI eksternal.

## Menjalankan

```bash
npm install      # install dependency
npm run dev      # mode development di http://localhost:3000
npm run build    # build produksi
npm start        # jalankan hasil build
```

## Struktur

```
app/
  layout.tsx          # root layout + metadata SEO
  page.tsx            # menyusun seluruh section
  globals.css         # styling + tema (CSS variables)
  components/
    Header.tsx        # navbar sticky
    Hero.tsx          # hero + statistik
    Features.tsx      # grid fitur
    About.tsx         # tentang + poin keunggulan
    Contact.tsx       # form CTA (client component)
    Footer.tsx        # footer
```

## Kustomisasi cepat

- **Warna/tema**: ubah CSS variables di bagian `:root` pada `app/globals.css`.
- **Brand**: ganti teks "Nova" di `Header.tsx`, `Footer.tsx`, dan `layout.tsx`.
- **Konten**: edit array `features` dan `points` di komponen terkait.

Form pada section Kontak saat ini hanya simulasi di sisi klien — hubungkan ke
API/email service Anda di handler `handleSubmit` (`Contact.tsx`).
