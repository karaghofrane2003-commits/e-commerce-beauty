import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Heart, Star } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { WishlistSheet, type WishlistItem } from "./WishlistSheet";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string;
    name: string;
    price: string;
    originalPrice?: string;
    image: string;
    description: string;
    badge?: string;
  } | null;
}

const ProductModal = ({ isOpen, onClose, product }: ProductModalProps) => {
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  const handleAddToWishlist = () => {
    const wishlistItem: WishlistItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    };
    
    const savedWishlist = localStorage.getItem("wishlist");
    const currentWishlist = savedWishlist ? JSON.parse(savedWishlist) : [];
    
    if (!currentWishlist.find((item: WishlistItem) => item.id === product.id)) {
      const newWishlist = [...currentWishlist, wishlistItem];
      localStorage.setItem("wishlist", JSON.stringify(newWishlist));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="relative">
            {product.badge && (
              <Badge className="absolute top-4 left-4 z-10 bg-luxury text-luxury-foreground">
                {product.badge}
              </Badge>
            )}
            <div className="aspect-square overflow-hidden rounded-lg bg-gradient-soft">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{product.name}</h3>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-3xl font-bold text-foreground">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>
              
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">(127 avis)</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Description</h4>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              
              <div className="space-y-2">
                <h4 className="font-semibold">Caractéristiques</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Formule naturelle et bio</li>
                  <li>• Testé dermatologiquement</li>
                  <li>• Sans parabènes ni sulfates</li>
                  <li>• Convient à tous types de peaux</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <Button 
                onClick={handleAddToCart}
                className="w-full" 
                size="lg"
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Ajouter au panier
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full" 
                size="lg"
                onClick={handleAddToWishlist}
              >
                <Heart className="h-4 w-4 mr-2" />
                Ajouter aux favoris
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;