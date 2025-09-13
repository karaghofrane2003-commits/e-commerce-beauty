import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Sofia",
      avatar: "/placeholder.svg",
      rating: 5,
      comment: "Des produits exceptionnels ! Ma peau n'a jamais été aussi douce et éclatante. Je recommande vivement le sérum vitamine C.",
      product: "Sérum Éclat Vitamine C",
      date: "Il y a 2 semaines"
    },
    {
      id: 2,
      name: "Maria",
      avatar: "/placeholder.svg",
      rating: 5,
      comment: "La crème hydratante est un véritable miracle ! Texture parfaite, absorption rapide et efficacité prouvée.",
      product: "Crème Hydratante Précieuse",
      date: "Il y a 1 mois"
    },
    {
      id: 3,
      name: "Melissa",
      avatar: "/placeholder.svg",
      rating: 5,
      comment: "Service client exceptionnel et produits de qualité premium. LUMIÈRE est devenue ma marque de référence.",
      product: "Commande complète",
      date: "Il y a 3 semaines"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Ce que disent </span>
            <span className="bg-gradient-luxury bg-clip-text text-transparent">
              nos clientes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Découvrez les témoignages authentiques de femmes qui ont transformé leur routine beauté avec LUMIÈRE.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-card p-8 rounded-2xl border hover:shadow-elegant transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <Quote className="h-8 w-8 text-luxury opacity-60" />
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{review.comment}"
              </p>
              
              <div className="border-t pt-6">
                <div className="flex items-center gap-4 mb-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback className="bg-gradient-luxury text-white">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </div>
                <p className="text-sm text-luxury font-medium">
                  Achat vérifié : {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-luxury">4.9/5</div>
              <div className="text-sm text-muted-foreground">Note moyenne</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-luxury">2,847</div>
              <div className="text-sm text-muted-foreground">Avis clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-luxury">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-luxury">15,432</div>
              <div className="text-sm text-muted-foreground">Clientes fidèles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;