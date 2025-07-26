"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Bell, User, Menu, ShoppingCart, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">Tijaarat</span>
          </Link>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/products"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Products
          </Link>
          <Link
            href="/vendors"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Vendors
          </Link>
          <Link
            href="/categories"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Categories
          </Link>
          <Link
            href="/rfq"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            RFQ
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search products, vendors, categories..."
              className="pl-9 pr-4"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2">
          {/* Mobile Search Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full text-xs flex items-center justify-center text-white">
              3
            </span>
            <span className="sr-only">Notifications</span>
          </Button>

          {/* Cart */}
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full text-xs flex items-center justify-center text-white">
              2
            </span>
            <span className="sr-only">Cart</span>
          </Button>

          {/* User Menu */}
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">User menu</span>
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search products, vendors..."
                className="pl-9 pr-4"
              />
            </div>
            
            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-2">
              <Link
                href="/products"
                className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-accent"
              >
                Products
              </Link>
              <Link
                href="/vendors"
                className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-accent"
              >
                Vendors
              </Link>
              <Link
                href="/categories"
                className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-accent"
              >
                Categories
              </Link>
              <Link
                href="/rfq"
                className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-accent"
              >
                Request for Quote
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}