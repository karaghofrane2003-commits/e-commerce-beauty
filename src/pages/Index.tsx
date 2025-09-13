import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import ReviewsSection from "@/components/ReviewsSection";
import NewsletterBanner from "@/components/NewsletterBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NewsletterBanner />
      <Navigation />
      <HeroSection />
      <ProductsSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Index;