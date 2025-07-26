import { Metadata } from "next";
import { Building2, FileCheck, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const metadata: Metadata = {
  title: "Vendor Onboarding - Join Our Marketplace",
  description: "Register as a vendor on Tijaarat and start selling to businesses worldwide. Quick and easy onboarding process.",
};

export default function VendorOnboardingPage() {
  const benefits = [
    {
      icon: Users,
      title: "Global Reach",
      description: "Access to thousands of business buyers worldwide"
    },
    {
      icon: Shield,
      title: "Secure Platform", 
      description: "Enterprise-grade security for all transactions"
    },
    {
      icon: FileCheck,
      title: "Easy Management",
      description: "Intuitive dashboard for orders and inventory"
    },
    {
      icon: Building2,
      title: "Business Growth",
      description: "Tools and analytics to scale your business"
    }
  ];

  const steps = [
    {
      step: 1,
      title: "Company Information",
      description: "Tell us about your business"
    },
    {
      step: 2,
      title: "Business Details",
      description: "Products, services, and capabilities"
    },
    {
      step: 3,
      title: "Verification",
      description: "Document upload and verification"
    },
    {
      step: 4,
      title: "Review & Approval",
      description: "Final review and account activation"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Join Tijaarat as a Vendor
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Connect with business buyers worldwide and grow your revenue through our comprehensive B2B marketplace. 
          Join thousands of verified suppliers already succeeding on our platform.
        </p>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {benefits.map((benefit, index) => (
          <Card key={index} className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{benefit.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Onboarding Process */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Simple Onboarding Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-5 left-1/2 w-full h-0.5 bg-muted transform translate-x-5" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Application Form */}
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Get Started - Step 1 of 4</CardTitle>
          <CardDescription>
            Company Information - Tell us about your business
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name *</Label>
              <Input id="companyName" placeholder="Enter your company name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="businessType">Business Type *</Label>
              <Input id="businessType" placeholder="e.g., Manufacturer, Distributor" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Business Email *</Label>
            <Input id="email" type="email" placeholder="business@company.com" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" placeholder="+1 (555) 123-4567" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input id="website" placeholder="https://www.company.com" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Business Address *</Label>
            <Input id="address" placeholder="Street address" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City *</Label>
              <Input id="city" placeholder="City" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State/Province *</Label>
              <Input id="state" placeholder="State" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="zip">ZIP/Postal Code *</Label>
              <Input id="zip" placeholder="12345" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="country">Country *</Label>
              <Input id="country" placeholder="Country" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="taxId">Tax ID/Registration Number</Label>
              <Input id="taxId" placeholder="Tax ID or business registration" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Company Description</Label>
            <textarea
              id="description"
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Brief description of your company and products/services"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="terms" className="rounded" />
            <Label htmlFor="terms" className="text-sm">
              I agree to the <a href="/terms" className="text-primary hover:underline">Terms of Service</a> and{" "}
              <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
            </Label>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" className="flex-1">
              Save as Draft
            </Button>
            <Button className="flex-1">
              Continue to Next Step
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Support Section */}
      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold mb-2">Need Help?</h3>
        <p className="text-muted-foreground mb-4">
          Our team is here to help you through the onboarding process
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline">
            Contact Support
          </Button>
          <Button variant="outline">
            Schedule Demo
          </Button>
        </div>
      </div>
    </div>
  );
}