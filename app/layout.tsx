import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nova — Bangun produk lebih cepat",
  description:
    "Nova membantu tim Anda merancang, membangun, dan meluncurkan produk digital lebih cepat dengan tooling modern.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
