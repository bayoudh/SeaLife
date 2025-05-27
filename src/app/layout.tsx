import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Customer/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'AquaFishLife | Sustainable Aquatic Living',
  description: 'Discover AquaFishLife – promoting sustainable fish farming, aquatic care, and ocean-friendly lifestyles.',
  keywords: ['AquaFishLife', 'aquaculture', 'sustainable fish farming', 'aquatic life', 'eco fish care', 'marine sustainability', 'fish tanks', 'freshwater fish', 'saltwater fish', 'aquarium products'],
  authors: [{ name: 'AquaFishLife Team' }],
  creator: 'AquaFishLife',
  openGraph: {
    title: 'AquaFishLife | Sustainable Aquatic Living',
    description: 'Explore eco-conscious fish care and aquatic living with AquaFishLife.',
    //url: 'https://your-domain.com',
    siteName: 'AquaFishLife',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  themeColor: '#00BFFF',
  //metadataBase: new URL('https://your-domain.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
    
        {children}
      </body>
    </html>
  );
}
