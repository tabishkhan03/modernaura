import Footer from "../app/components/Footer";
import Header from "../app/components/Header";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "modern aura",
  description: "modern aura interior desingers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SpeedInsights/>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
