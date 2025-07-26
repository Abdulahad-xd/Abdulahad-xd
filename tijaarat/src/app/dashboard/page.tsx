import { Metadata } from "next";
import { 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Package, 
  AlertTriangle,
  Calendar,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Dashboard - Business Overview",
  description: "Monitor your business performance, track orders, manage inventory, and view analytics.",
};

export default function DashboardPage() {
  // Mock data for demonstration
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      changeType: "positive" as const,
      icon: DollarSign,
    },
    {
      title: "Orders",
      value: "2,350",
      change: "+180.1%",
      changeType: "positive" as const,
      icon: ShoppingCart,
    },
    {
      title: "Active Vendors",
      value: "12,234",
      change: "+19%",
      changeType: "positive" as const,
      icon: Users,
    },
    {
      title: "Inventory Items",
      value: "8,945",
      change: "-4.3%",
      changeType: "negative" as const,
      icon: Package,
    },
  ];

  const recentOrders = [
    {
      id: "ORD-001",
      customer: "Acme Corp",
      product: "Industrial Steel Pipes",
      amount: "$2,450.00",
      status: "Processing",
      date: "2024-01-15",
    },
    {
      id: "ORD-002", 
      customer: "Tech Solutions Ltd",
      product: "Electronic Components",
      amount: "$1,230.50",
      status: "Shipped",
      date: "2024-01-15",
    },
    {
      id: "ORD-003",
      customer: "BuildMax Corp",
      product: "Construction Materials",
      amount: "$5,670.25",
      status: "Delivered",
      date: "2024-01-14",
    },
    {
      id: "ORD-004",
      customer: "FoodTech Industries",
      product: "Packaging Supplies",
      amount: "$890.75",
      status: "Pending",
      date: "2024-01-14",
    },
  ];

  const lowStockItems = [
    { name: "Industrial Bolts", stock: 15, minimum: 50 },
    { name: "Electronic Circuits", stock: 8, minimum: 25 },
    { name: "Packaging Tape", stock: 23, minimum: 100 },
    { name: "Safety Equipment", stock: 5, minimum: 30 },
  ];

  const upcomingTasks = [
    { task: "Review Q1 Budget", due: "Today", priority: "High" },
    { task: "Vendor Performance Review", due: "Tomorrow", priority: "Medium" },
    { task: "Inventory Audit", due: "Jan 20", priority: "High" },
    { task: "Contract Renewal", due: "Jan 22", priority: "Low" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Revenue Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Revenue Overview
            </CardTitle>
            <CardDescription>
              Monthly revenue for the last 6 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-lg">
              <div className="text-muted-foreground">Revenue Chart Placeholder</div>
            </div>
          </CardContent>
        </Card>

        {/* Sales by Category */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Sales by Category
            </CardTitle>
            <CardDescription>
              Top performing product categories
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { category: "Industrial Materials", percentage: 35, value: "$15,432" },
                { category: "Electronics", percentage: 28, value: "$12,654" },
                { category: "Construction", percentage: 20, value: "$9,021" },
                { category: "Office Supplies", percentage: 17, value: "$7,124" },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{item.category}</span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>
              Latest orders from your customers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="space-y-1">
                    <p className="font-medium">{order.id}</p>
                    <p className="text-sm text-muted-foreground">{order.customer}</p>
                    <p className="text-xs text-muted-foreground">{order.product}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="font-medium">{order.amount}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                      order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {order.status}
                    </span>
                    <p className="text-xs text-muted-foreground">{order.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Orders
            </Button>
          </CardContent>
        </Card>

        {/* Low Stock Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              Low Stock Alerts
            </CardTitle>
            <CardDescription>
              Items that need immediate attention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStockItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg border-yellow-200 bg-yellow-50">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Current: {item.stock} | Minimum: {item.minimum}
                    </p>
                  </div>
                  <Button size="sm" variant="outline">
                    Reorder
                  </Button>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Inventory
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Tasks */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Upcoming Tasks
          </CardTitle>
          <CardDescription>
            Important tasks and deadlines
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {upcomingTasks.map((task, index) => (
              <div key={index} className="p-3 border rounded-lg">
                <div className="space-y-2">
                  <p className="font-medium text-sm">{task.task}</p>
                  <p className="text-xs text-muted-foreground">{task.due}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    task.priority === 'High' ? 'bg-red-100 text-red-800' :
                    task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {task.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}