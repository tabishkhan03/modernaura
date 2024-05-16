import AboutComponent from "@/components/AboutComponent";
import HeroSection from "@/components/HeroSection";
import CTA from "@/components/Cta";
import TestimonialSlider from "@/components/TestimonialSlider";
import GalleryPage from "./services/GalleryPage";
import ScrollToTopArrow from "@/components/ScrollToTopArrow";
import WhatsAppLogo from "@/components/WhatsAppLogo";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutComponent />
      <GalleryPage/>
      <TestimonialSlider/>
      <CTA/>
      <ScrollToTopArrow/>
      <WhatsAppLogo/>
    </>
  );
}
