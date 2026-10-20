import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedCollections from "@/components/sections/FeaturedCollections";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CustomProcess from "@/components/sections/CustomProcess";
import WeddingFeature from "@/components/sections/WeddingFeature";
import BrandStory from "@/components/sections/BrandStory";
import Testimonials from "@/components/sections/Testimonials";
import InquiryBand from "@/components/sections/InquiryBand";

export const metadata: Metadata = {
  title: "Maison Artisan - Custom Handmade Bags for Weddings & Luxury Brands",
  description:
    "Bespoke handmade bags for weddings, luxury events, boutique brands, and corporate gifting. Premium materials, artisan craftsmanship, worldwide delivery.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCollections />
      <WhyChooseUs />
      <WeddingFeature />
      <CustomProcess />
      <BrandStory />
      <Testimonials />
      <InquiryBand />
    </>
  );
}
