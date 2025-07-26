import { Metadata } from "next";
import { Search, Filter, MapPin, Star, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Verified Vendors - Trusted Business Partners",
  description: "Connect with verified suppliers and manufacturers worldwide. Find the right vendor for your business needs.",
};

export default function VendorsPage() {
  const vendors = [
    {
      id: 1,
      name: "MetalWorks Industrial Co.",
      description: "Leading manufacturer of industrial steel products and metal components",
      location: "Shanghai, China",
      established: 2008,
      employees: "500-1000",
      rating: 4.8,
      reviews: 234,
      verified: true,
      specializations: ["Steel Products", "Metal Fabrication", "Industrial Components"],
      minOrder: "$5,000",
      responseTime: "< 4 hours",
      logo: "/api/placeholder/100/100"
    },
    {
      id: 2,
      name: "TechSupply Electronics",
      description: "Global supplier of electronic components and semiconductor solutions",
      location: "Shenzhen, China",
      established: 2012,
      employees: "200-500",
      rating: 4.6,
      reviews: 189,
      verified: true,
      specializations: ["Electronic Components", "Semiconductors", "Circuit Boards"],
      minOrder: "$1,000",
      responseTime: "< 2 hours",
      logo: "/api/placeholder/100/100"
    },
    {
      id: 3,
      name: "PackPro Solutions Ltd.",
      description: "Innovative packaging solutions for various industries worldwide",
      location: "Mumbai, India",
      established: 2005,
      employees: "100-200",
      rating: 4.9,
      reviews: 156,
      verified: true,
      specializations: ["Packaging Materials", "Custom Packaging", "Eco-friendly Solutions"],
      minOrder: "$2,500",
      responseTime: "< 6 hours",
      logo: "/api/placeholder/100/100"
    },
    {
      id: 4,
      name: "BuildMax Construction",
      description: "Premium construction materials and hardware supplier",
      location: "Istanbul, Turkey",
      established: 1998,
      employees: "1000+",
      rating: 4.7,
      reviews: 298,
      verified: true,
      specializations: ["Construction Materials", "Hardware", "Building Supplies"],
      minOrder: "$10,000",
      responseTime: "< 8 hours",
      logo: "/api/placeholder/100/100"
    },
    {
      id: 5,
      name: "OfficeHub International",
      description: "Complete office solutions and business equipment supplier",
      location: "Dubai, UAE",
      established: 2015,
      employees: "50-100",
      rating: 4.5,
      reviews: 142,
      verified: true,
      specializations: ["Office Supplies", "Business Equipment", "Furniture"],
      minOrder: "$500",
      responseTime: "< 3 hours",
      logo: "/api/placeholder/100/100"
    },
    {
      id: 6,
      name: "FoodTech Industries",
      description: "Food processing equipment and packaging machinery manufacturer",
      location: "São Paulo, Brazil",
      established: 2010,
      employees: "200-500",
      rating: 4.8,
      reviews: 87,
      verified: true,
      specializations: ["Food Processing", "Packaging Machinery", "Industrial Equipment"],
      minOrder: "$15,000",
      responseTime: "< 12 hours",
      logo: "/api/placeholder/100/100"
    }
  ];

  const categories = [
    "All Categories",
    "Manufacturing",
    "Electronics",
    "Construction",
    "Food & Beverage",
    "Packaging",
    "Textiles",
    "Automotive",
    "Chemical",
    "Agriculture"
  ];

  const locations = [
    "All Locations",
    "China",
    "India",
    "USA",
    "Germany",
    "Turkey",
    "Brazil",
    "UAE",
    "South Korea",
    "Vietnam"
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Verified Vendors</h1>
        <p className="text-muted-foreground">
          Connect with trusted suppliers and manufacturers from around the world
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search vendors by name, location, or specialization..."
              className="pl-9 pr-4"
            />
          </div>
          
          {/* Filter Button */}
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Advanced Filters
          </Button>
        </div>

        {/* Category and Location Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.slice(0, 6).map((category) => (
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
          <div className="flex gap-2 overflow-x-auto pb-2">
            {locations.slice(0, 5).map((location) => (
              <Button
                key={location}
                variant={location === "All Locations" ? "default" : "outline"}
                size="sm"
                className="whitespace-nowrap"
              >
                {location}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {vendors.length} of 1,250+ verified vendors
        </p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          Sort by:
          <Button variant="ghost" size="sm">
            Highest Rated
          </Button>
        </div>
      </div>

      {/* Vendors Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {vendors.map((vendor) => (
          <Card key={vendor.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-muted-foreground text-xs">LOGO</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {vendor.name}
                    </CardTitle>
                    {vendor.verified && (
                      <Award className="h-4 w-4 text-blue-600" title="Verified Vendor" />
                    )}
                  </div>
                  <CardDescription className="text-sm line-clamp-2">
                    {vendor.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {vendor.location}
                </div>
                <div className="flex items-center gap-1">
                  <Globe className="h-4 w-4" />
                  Est. {vendor.established}
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{vendor.rating}</span>
                  <span className="text-muted-foreground">({vendor.reviews} reviews)</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {vendor.specializations.slice(0, 3).map((spec, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Min Order:</span>
                  <div className="font-medium">{vendor.minOrder}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Response Time:</span>
                  <div className="font-medium">{vendor.responseTime}</div>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button className="flex-1" size="sm">
                  Send Inquiry
                </Button>
                <Button variant="outline" className="flex-1" size="sm">
                  View Profile
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
        <Button variant="outline" size="sm">15</Button>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center bg-muted/30 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-2">Want to become a vendor?</h2>
        <p className="text-muted-foreground mb-4">
          Join our marketplace and connect with businesses worldwide
        </p>
        <Button size="lg">
          Apply to Become a Vendor
        </Button>
      </div>
    </div>
  );
}