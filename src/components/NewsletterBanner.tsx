import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Mail, Gift } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const NewsletterBanner = () => {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Inscription réussie !",
        description: "Vous recevrez bientôt votre code de réduction de 10%",
      });
      setEmail("");
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-luxury text-white py-4 px-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Gift className="h-5 w-5" />
          <span className="text-sm font-medium">
            Inscrivez-vous à notre newsletter et obtenez <strong>10% de réduction</strong> sur votre première commande !
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <Input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-64 bg-white/10 border-white/20 text-white placeholder:text-white/70"
              required
            />
            <Button type="submit" variant="secondary" size="sm">
              <Mail className="h-4 w-4 mr-1" />
              S'inscrire
            </Button>
          </form>
          
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-white hover:bg-white/10"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterBanner;