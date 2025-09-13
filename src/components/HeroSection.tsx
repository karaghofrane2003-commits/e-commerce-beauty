import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-skincare.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Produits de soin luxueux"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="block text-foreground">Révélez votre</span>
            <span className="block bg-gradient-luxury bg-clip-text text-transparent">
              beauté naturelle
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Des soins exceptionnels formulés avec les ingrédients les plus purs 
            pour sublimer votre peau jour après jour.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="luxury" size="lg" className="text-lg">
              Découvrir nos produits
            </Button>
            <Button variant="outline" size="lg" className="text-lg">
              Notre histoire
            </Button>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-luxury mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Naturel</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-luxury mb-1">0%</div>
              <div className="text-sm text-muted-foreground">Parabènes</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-luxury mb-1">Testé</div>
              <div className="text-sm text-muted-foreground">Dermatologiquement</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-luxury rounded-full flex justify-center">
            <div className="w-1 h-3 bg-luxury rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;