import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, ShoppingBag, Search, User, Heart } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import CartSheet from "./CartSheet";
import { WishlistSheet } from "./WishlistSheet";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-luxury bg-clip-text text-transparent">
              LUMIÈRE
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-foreground hover:text-luxury transition-smooth">
              Produits
            </a>
            <a href="#about" className="text-foreground hover:text-luxury transition-smooth">
              À propos
            </a>
            <a href="#ingredients" className="text-foreground hover:text-luxury transition-smooth">
              Ingrédients
            </a>
            <a href="#contact" className="text-foreground hover:text-luxury transition-smooth">
              Contact
            </a>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <WishlistSheet>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
            </WishlistSheet>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <CartSheet>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                {getCartCount() > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs"
                  >
                    {getCartCount()}
                  </Badge>
                )}
              </Button>
            </CartSheet>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col space-y-4">
              <a 
                href="#products" 
                className="text-foreground hover:text-luxury transition-smooth py-2"
                onClick={toggleMenu}
              >
                Produits
              </a>
              <a 
                href="#about" 
                className="text-foreground hover:text-luxury transition-smooth py-2"
                onClick={toggleMenu}
              >
                À propos
              </a>
              <a 
                href="#ingredients" 
                className="text-foreground hover:text-luxury transition-smooth py-2"
                onClick={toggleMenu}
              >
                Ingrédients
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-luxury transition-smooth py-2"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <hr className="border-border" />
              <div className="flex items-center space-x-4 pt-2">
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
                <WishlistSheet>
                  <Button variant="ghost" size="icon">
                    <Heart className="h-5 w-5" />
                  </Button>
                </WishlistSheet>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              <CartSheet>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingBag className="h-5 w-5" />
                  {getCartCount() > 0 && (
                    <Badge 
                      variant="destructive" 
                      className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs"
                    >
                      {getCartCount()}
                    </Badge>
                  )}
                </Button>
              </CartSheet>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;