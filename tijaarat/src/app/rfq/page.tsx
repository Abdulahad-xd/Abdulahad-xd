import { Metadata } from "next";
import { FileText, Users, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const metadata: Metadata = {
  title: "Request for Quote (RFQ) - Get Custom Quotes",
  description: "Submit your requirements and receive competitive quotes from verified suppliers worldwide.",
};

export default function RFQPage() {
  const benefits = [
    {
      icon: Users,
      title: "Multiple Quotes",
      description: "Receive competitive quotes from verified suppliers"
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Get responses within 24-48 hours"
    },
    {
      icon: Shield,
      title: "Verified Suppliers",
      description: "All suppliers are thoroughly vetted"
    },
    {
      icon: FileText,
      title: "Detailed Proposals",
      description: "Comprehensive quotes with specifications"
    }
  ];

  const recentRFQs = [
    {
      id: "RFQ-001",
      title: "Industrial Steel Pipes - 5000 units",
      category: "Industrial Materials",
      responses: 8,
      deadline: "Jan 25, 2024",
      status: "Active"
    },
    {
      id: "RFQ-002",
      title: "Electronic Components Package",
      category: "Electronics",
      responses: 12,
      deadline: "Jan 28, 2024",
      status: "Active"
    },
    {
      id: "RFQ-003",
      title: "Office Furniture Set - 200 units",
      category: "Office Supplies",
      responses: 15,
      deadline: "Jan 22, 2024",
      status: "Closed"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Request for Quote (RFQ)
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Tell us what you need and receive competitive quotes from our network of verified suppliers. 
          Get the best deals for your business requirements.
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* RFQ Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Submit Your RFQ</CardTitle>
              <CardDescription>
                Provide detailed requirements to receive accurate quotes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">RFQ Title *</Label>
                <Input 
                  id="title" 
                  placeholder="e.g., Industrial Steel Pipes - Bulk Order" 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Input id="category" placeholder="Select or type category" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity Needed *</Label>
                  <Input id="quantity" placeholder="e.g., 500 units, 10 tons" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Detailed Requirements *</Label>
                <textarea
                  id="description"
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Provide detailed specifications, quality requirements, and any special considerations..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Input id="budget" placeholder="e.g., $10,000 - $15,000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deadline">Response Deadline *</Label>
                  <Input id="deadline" type="date" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="delivery">Delivery Location *</Label>
                  <Input id="delivery" placeholder="City, State, Country" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline">Delivery Timeline</Label>
                  <Input id="timeline" placeholder="e.g., 2-3 weeks" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Information</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input id="companyName" placeholder="Company Name" />
                  <Input id="contactPerson" placeholder="Contact Person" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <Input id="email" type="email" placeholder="Email Address" />
                  <Input id="phone" placeholder="Phone Number" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="attachments">Attachments</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Upload specifications, drawings, or other relevant documents
                  </p>
                  <Button variant="outline" size="sm">
                    Choose Files
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="urgent" className="rounded" />
                <Label htmlFor="urgent" className="text-sm">
                  Mark as urgent (additional fees may apply)
                </Label>
              </div>

              <div className="flex gap-4">
                <Button variant="outline" className="flex-1">
                  Save as Draft
                </Button>
                <Button className="flex-1">
                  Submit RFQ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent RFQs */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Your Recent RFQs</CardTitle>
              <CardDescription>
                Track your submitted requests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentRFQs.map((rfq, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-sm">{rfq.title}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          rfq.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {rfq.status}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{rfq.category}</p>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{rfq.responses} responses</span>
                        <span>Due: {rfq.deadline}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All RFQs
              </Button>
            </CardContent>
          </Card>

          {/* Tips Card */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">💡 Tips for Better RFQs</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Be specific about your requirements</li>
                <li>• Include technical specifications</li>
                <li>• Mention quality standards needed</li>
                <li>• Provide realistic timelines</li>
                <li>• Upload relevant documents/drawings</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}