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
  title: "Handmade Leather Goods",
  description:
    "Shop handmade leather totes, crossbody bags, wallets, and small goods from Maison Artisan. Sold directly, ready to add to your bag.",
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
