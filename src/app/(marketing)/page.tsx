import Hero from "@/components/Hero";
import FeatureBlock from "@/components/FeatureBlock";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import ServicesGrid from "@/components/ServicesGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureBlock />
      <Stats />
      <Testimonials />
      <ServicesGrid />
    </>
  );
}
