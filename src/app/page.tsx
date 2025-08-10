import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import NewsletterSignup from "@/components/sections/Newsletter";
import ServicesSection from "@/components/sections/Services";
import SponsorshipsEventsOverview from "@/components/sections/SponsorshipsEvents";
import StatsSection from "@/components/sections/Stats";
import TestimonialCarousel from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import SEO from "@/lib/seo";

export default function Home() {
  return (
    <>
      <SEO
        title="A&P Buyer's Agency - Shaping Futures Through Smarter Buying"
        description="We help clients across Australia secure the best properties on and off the market."
        image="https://www.apbuyersagency.com.au/og-image.jpg"
        url="https://www.apbuyersagency.com.au"
      />
      <Header />
      <Hero />
      <WhyChooseUs />
      <StatsSection />
      <TestimonialCarousel />
      <ServicesSection />
      <SponsorshipsEventsOverview />
      <NewsletterSignup />
      <Footer />
    </>
  );
}
