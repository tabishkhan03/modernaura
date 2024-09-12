// Import Inter using @next/font/google
import { Inter } from 'next/font/google';
import "./globals.css";
import { Footer, Navbar } from "./components";

// Importing other fonts
import { Manjari, Marcellus_SC, Maven_Pro, Merriweather_Sans } from 'next/font/google';

// Use the fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const manjari = Manjari({
  subsets: ['latin'],
  weight: ['100', '400'],
  display: 'swap',
});

const marcellusSC = Marcellus_SC({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

const mavenPro = Maven_Pro({
  subsets: ['latin'],
  weight: ['400', '900'],
  display: 'swap',
});

const merriweatherSans = Merriweather_Sans({
  subsets: ['latin'],
  weight: ['300', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata = {
  title: "Modernaura",
  description: "Interior web designing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${manjari.className} ${marcellusSC.className} ${mavenPro.className} ${merriweatherSans.className}`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
