import "./globals.css";
import "../styles/main.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/ui/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zeyinart.com"),
  title: {
    default: "Zeyin Art Handcrafted 3D Paper Relief Art",
    template: `%s | Zeyin Art Handcrafted 3D Paper Relief Art`,
  },
  description:
    "Discover exquisite 3D paper relief art that breathes life into your walls. Explore our unique collection of handcrafted paper artworks, from nature-inspired designs to custom pieces for art enthusiasts and collectors. Transform your space with our captivating paper creations. Contact us for personalized orders.",
  verification: {
    google: "google-site-verification=123243",
  },
  // openGraph:
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        // style={{ backgroundColor:  }}
        className={`${inter.className} bg-midnightBlue`}
      >
        {children}
      </body>
      <Footer />
    </html>
  );
}
