import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold bg-gradient-luxury bg-clip-text text-transparent mb-4">
              LUMIÈRE
            </h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Révélez votre beauté naturelle avec nos soins d'exception formulés 
              à partir d'ingrédients purs et précieux.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background hover:text-luxury">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-luxury">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-luxury">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-luxury">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-luxury">Produits</h4>
            <ul className="space-y-3 text-background/80">
              <li><a href="#" className="hover:text-luxury transition-smooth">Sérums</a></li>
              <li><a href="#" className="hover:text-luxury transition-smooth">Crèmes</a></li>
              <li><a href="#" className="hover:text-luxury transition-smooth">Nettoyants</a></li>
              <li><a href="#" className="hover:text-luxury transition-smooth">Masques</a></li>
              <li><a href="#" className="hover:text-luxury transition-smooth">Huiles</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-luxury">Entreprise</h4>
            <ul className="space-y-3 text-background/80">
              <li><a href="#" className="hover:text-luxury transition-smooth">À propos</a></li>
              <li><a href="#" className="hover:text-luxury transition-smooth">Notre mission</a></li>
              <li><a href="#" className="hover:text-luxury transition-smooth">Ingrédients</a></li>
              <li><a href="#" className="hover:text-luxury transition-smooth">Durabilité</a></li>
              <li><a href="#" className="hover:text-luxury transition-smooth">Carrières</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-luxury">Support</h4>
            <ul className="space-y-3 text-background/80">
              <li><a href="#" className="hover:text-luxury transition-smooth">Contact</a></li>
              <li><a href="#" className="hover:text-luxury transition-smooth">FAQ</a></li>
              <li><a href="#" className="hover:text-luxury transition-smooth">Livraison</a></li>
              <li><a href="#" className="hover:text-luxury transition-smooth">Retours</a></li>
              <li><a href="#" className="hover:text-luxury transition-smooth">Guide des tailles</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-xl font-semibold mb-3 text-luxury">
              Restez informé(e)
            </h4>
            <p className="text-background/80 mb-4">
              Recevez nos dernières nouveautés et conseils beauté
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/60 focus:outline-none focus:border-luxury"
              />
              <Button variant="luxury">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; 2024 LUMIÈRE. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;