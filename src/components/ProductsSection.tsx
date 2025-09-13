import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import ProductFilters from "./ProductFilters";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import serumImage from "@/assets/serum-product.jpg";
import creamImage from "@/assets/cream-product.jpg";
import cleanserImage from "@/assets/cleanser-product.jpg";

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const allProducts = [
    {
      id: "serum-vitc",
      name: "Sérum Éclat Vitamine C",
      price: "89€",
      originalPrice: "119€",
      image: serumImage,
      description: "Sérum concentré en vitamine C pure pour illuminer et unifier le teint. Résultats visibles dès 7 jours.",
      badge: "Bestseller",
      category: "serum"
    },
    {
      id: "creme-hydratante",
      name: "Crème Hydratante Précieuse",
      price: "125€",
      image: creamImage,
      description: "Crème nourrissante aux huiles précieuses qui répare et protège la barrière cutanée 24h/24.",
      badge: "Nouveau",
      category: "cream"
    },
    {
      id: "nettoyant-douceur",
      name: "Nettoyant Douceur",
      price: "65€",
      image: cleanserImage,
      description: "Gel nettoyant doux qui purifie en profondeur sans agresser, idéal pour tous types de peaux.",
      category: "cleanser"
    },
    {
      id: "masque-eclat",
      name: "Masque Éclat Instantané",
      price: "95€",
      image: serumImage,
      description: "Masque revitalisant qui redonne éclat et fermeté à votre peau en seulement 15 minutes.",
      category: "mask"
    },
    {
      id: "huile-nuit",
      name: "Huile Régénérante Nuit",
      price: "155€",
      image: creamImage,
      description: "Complexe d'huiles rares qui régénère et répare la peau pendant votre sommeil.",
      badge: "Premium",
      category: "oil"
    },
    {
      id: "tonique-equilibrant",
      name: "Tonique Équilibrant",
      price: "75€",
      image: cleanserImage,
      description: "Lotion tonifiante qui rééquilibre le pH de votre peau et resserre les pores visiblement.",
      category: "tonic"
    }
  ];

  // Filter products based on search and filters
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    
    const price = parseFloat(product.price.replace('€', ''));
    let matchesPrice = true;
    if (priceRange === "0-50") matchesPrice = price <= 50;
    else if (priceRange === "50-100") matchesPrice = price > 50 && price <= 100;
    else if (priceRange === "100-150") matchesPrice = price > 100 && price <= 150;
    else if (priceRange === "150+") matchesPrice = price > 150;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const handleQuickView = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setPriceRange("all");
  };

  return (
    <section id="products" className="py-20 lg:py-32 bg-gradient-soft">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Nos </span>
            <span className="bg-gradient-luxury bg-clip-text text-transparent">
              soins d'exception
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Découvrez notre collection de soins formulés avec les ingrédients les plus purs 
            et les technologies les plus avancées pour révéler la beauté de votre peau.
          </p>
        </div>

        {/* Filters */}
        <ProductFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          onClearFilters={clearFilters}
        />

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                description={product.description}
                badge={product.badge}
                onQuickView={() => handleQuickView(product)}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground text-lg">Aucun produit trouvé</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={clearFilters}
              >
                Effacer les filtres
              </Button>
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="luxury" size="lg">
            Voir toute la collection
          </Button>
        </div>

        {/* Product Modal */}
        <ProductModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={selectedProduct}
        />
      </div>
    </section>
  );
};

export default ProductsSection;