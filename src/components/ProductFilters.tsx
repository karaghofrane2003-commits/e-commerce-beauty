import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";

interface ProductFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: string;
  onPriceRangeChange: (range: string) => void;
  onClearFilters: () => void;
}

const ProductFilters = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  onClearFilters
}: ProductFiltersProps) => {
  const hasActiveFilters = searchQuery || selectedCategory !== "all" || priceRange !== "all";

  return (
    <div className="bg-background/80 backdrop-blur-sm border rounded-lg p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="h-5 w-5" />
        <h3 className="font-semibold">Filtres</h3>
        {hasActiveFilters && (
          <Badge variant="secondary" className="ml-auto">
            Filtres actifs
          </Badge>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher un produit..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Category */}
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger>
            <SelectValue placeholder="Catégorie" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes les catégories</SelectItem>
            <SelectItem value="serum">Sérums</SelectItem>
            <SelectItem value="cream">Crèmes</SelectItem>
            <SelectItem value="cleanser">Nettoyants</SelectItem>
            <SelectItem value="mask">Masques</SelectItem>
            <SelectItem value="oil">Huiles</SelectItem>
            <SelectItem value="tonic">Toniques</SelectItem>
          </SelectContent>
        </Select>

        {/* Price Range */}
        <Select value={priceRange} onValueChange={onPriceRangeChange}>
          <SelectTrigger>
            <SelectValue placeholder="Prix" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les prix</SelectItem>
            <SelectItem value="0-50">0€ - 50€</SelectItem>
            <SelectItem value="50-100">50€ - 100€</SelectItem>
            <SelectItem value="100-150">100€ - 150€</SelectItem>
            <SelectItem value="150+">150€+</SelectItem>
          </SelectContent>
        </Select>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button 
            variant="outline" 
            onClick={onClearFilters}
            className="flex items-center gap-2"
          >
            <X className="h-4 w-4" />
            Effacer
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductFilters;