import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Heart, Eye } from "lucide-react";
import { useCart } from "@/hooks/useCart";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  description: string;
  badge?: string;
  onQuickView: () => void;
}

const ProductCard = ({ 
  id,
  name, 
  price, 
  originalPrice, 
  image, 
  description, 
  badge,
  onQuickView
}: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      image,
    });
  };
  return (
    <Card className="group overflow-hidden border-border hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        {badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-luxury text-luxury-foreground px-3 py-1 rounded-full text-xs font-medium">
              {badge}
            </span>
          </div>
        )}
        
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2">
          <Button variant="ghost" size="icon" className="bg-background/80 backdrop-blur-sm">
            <Heart className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="bg-background/80 backdrop-blur-sm"
            onClick={onQuickView}
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        <div className="aspect-square overflow-hidden bg-gradient-soft">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-luxury transition-colors">
          {name}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-foreground">{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
          </div>
        </div>

        <Button 
          className="w-full" 
          variant="outline"
          onClick={handleAddToCart}
        >
          <ShoppingBag className="h-4 w-4 mr-2" />
          Ajouter au panier
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;