import Link from "next/link";
import { ArrowRight, Users, ShoppingCart, TrendingUp, Award, Shield, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  const features = [
    {
      icon: Users,
      title: "Multi-Vendor Marketplace",
      description: "Connect with verified suppliers and buyers from around the world in our comprehensive B2B marketplace.",
    },
    {
      icon: ShoppingCart,
      title: "Streamlined Procurement",
      description: "Simplify your purchasing process with automated workflows, RFQ management, and bulk ordering capabilities.",
    },
    {
      icon: TrendingUp,
      title: "ERP Integration",
      description: "Manage inventory, invoicing, purchase orders, and analytics all in one integrated platform.",
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Enterprise-grade security with verified vendors, secure payment processing, and comprehensive protection.",
    },
    {
      icon: Globe,
      title: "Global Supply Chain",
      description: "Access suppliers and buyers worldwide with multi-currency support and international shipping solutions.",
    },
    {
      icon: Zap,
      title: "Real-Time Updates",
      description: "Stay informed with live notifications, inventory tracking, and order status updates across your organization.",
    },
  ];

  const stats = [
    { label: "Active Vendors", value: "10,000+" },
    { label: "Products Listed", value: "2M+" },
    { label: "Orders Processed", value: "500K+" },
    { label: "Countries Served", value: "150+" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background to-muted/20 py-20 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              The Future of B2B Commerce
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Streamline your supply chain, connect with global suppliers, and manage your business operations 
              with our comprehensive B2B e-commerce and ERP platform.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/register">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/demo">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need for B2B success
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our platform provides all the tools and features you need to streamline your business operations 
              and scale your B2B commerce.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Why businesses choose Tijaarat
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Verified Suppliers</h3>
                    <p className="text-muted-foreground">All vendors go through our rigorous verification process ensuring quality and reliability.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Data-Driven Insights</h3>
                    <p className="text-muted-foreground">Make informed decisions with comprehensive analytics and reporting tools.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Automated Workflows</h3>
                    <p className="text-muted-foreground">Streamline operations with automated procurement, invoicing, and inventory management.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Customer Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to transform your B2B operations?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of businesses already using Tijaarat to streamline their supply chain and grow their revenue.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/register">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
