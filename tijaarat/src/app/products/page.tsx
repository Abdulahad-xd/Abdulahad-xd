import { Metadata } from "next";
import { Search, Filter, Grid, List, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Products - Browse B2B Marketplace",
  description: "Discover thousands of products from verified suppliers worldwide. Find the best deals for your business needs.",
};

export default function ProductsPage() {
  // Mock data for demonstration
  const products = [
    {
      id: 1,
      name: "Industrial Steel Pipes",
      vendor: "MetalWorks Inc.",
      price: "$45.99",
      minOrder: "100 units",
      leadTime: "2-3 weeks",
      image: "/api/placeholder/300/200",
      category: "Industrial Materials",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "Electronic Components Bundle",
      vendor: "TechSupply Co.",
      price: "$12.50",
      minOrder: "500 units",
      leadTime: "1-2 weeks",
      image: "/api/placeholder/300/200",
      category: "Electronics",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 3,
      name: "Packaging Materials Kit",
      vendor: "PackPro Solutions",
      price: "$8.25",
      minOrder: "1000 units",
      leadTime: "1 week",
      image: "/api/placeholder/300/200",
      category: "Packaging",
      rating: 4.9,
      reviews: 156,
    },
    {
      id: 4,
      name: "Construction Hardware Set",
      vendor: "BuildMax Corp.",
      price: "$78.99",
      minOrder: "50 units",
      leadTime: "3-4 weeks",
      image: "/api/placeholder/300/200",
      category: "Construction",
      rating: 4.7,
      reviews: 98,
    },
    {
      id: 5,
      name: "Office Supplies Bundle",
      vendor: "OfficeHub Ltd.",
      price: "$15.75",
      minOrder: "200 units",
      leadTime: "1 week",
      image: "/api/placeholder/300/200",
      category: "Office Supplies",
      rating: 4.5,
      reviews: 203,
    },
    {
      id: 6,
      name: "Food Processing Equipment",
      vendor: "FoodTech Industries",
      price: "$1,250.00",
      minOrder: "1 unit",
      leadTime: "4-6 weeks",
      image: "/api/placeholder/300/200",
      category: "Food & Beverage",
      rating: 4.8,
      reviews: 67,
    },
  ];

  const categories = [
    "All Categories",
    "Industrial Materials",
    "Electronics",
    "Packaging",
    "Construction",
    "Office Supplies",
    "Food & Beverage",
    "Automotive",
    "Textiles",
    "Chemicals",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Products</h1>
        <p className="text-muted-foreground">
          Discover thousands of products from verified suppliers worldwide
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search products, vendors, or categories..."
              className="pl-9 pr-4"
            />
          </div>
          
          {/* Filter Buttons */}
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Sort
            </Button>
            <Button variant="outline" size="icon">
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All Categories" ? "default" : "outline"}
              size="sm"
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {products.length} of 2,450+ products
        </p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          Sort by:
          <Button variant="ghost" size="sm">
            Relevance
          </Button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {products.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="p-0">
              <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                <div className="text-muted-foreground">Product Image</div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="mb-2">
                <CardTitle className="text-lg mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sm">
                  by {product.vendor}
                </CardDescription>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Price:</span>
                  <span className="font-semibold text-primary">{product.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Min Order:</span>
                  <span>{product.minOrder}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lead Time:</span>
                  <span>{product.leadTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Rating:</span>
                  <span>⭐ {product.rating} ({product.reviews})</span>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <Button className="w-full" size="sm">
                  Request Quote
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center space-x-2">
        <Button variant="outline" size="sm" disabled>
          Previous
        </Button>
        <Button size="sm">1</Button>
        <Button variant="outline" size="sm">2</Button>
        <Button variant="outline" size="sm">3</Button>
        <Button variant="outline" size="sm">...</Button>
        <Button variant="outline" size="sm">10</Button>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>
    </div>
  );
}