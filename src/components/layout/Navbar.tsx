import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isHomePage = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On non-home pages, always treat navbar as "scrolled" (light style)
  const useDarkStyle = isHomePage && !isScrolled;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        useDarkStyle
          ? "bg-transparent py-5"
          : "bg-background/95 backdrop-blur-xl border-b border-border/50 py-3 shadow-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}images/logo-icon.png`}
              alt="Techway Solution Logo"
              className="w-7 h-7 object-contain brightness-0 invert"
            />
          </div>
          <span
            className={cn(
              "font-bold text-xl tracking-tight transition-colors duration-300",
              useDarkStyle ? "text-white" : "text-foreground"
            )}
          >
            Techway Solution
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-semibold transition-colors duration-200",
                location === link.href
                  ? "text-primary"
                  : useDarkStyle
                  ? "text-white/80 hover:text-white"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact">
            <Button className="group gap-2 ml-2">
              Get Started
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 transition-colors",
            useDarkStyle ? "text-white" : "text-foreground"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-full bg-background border-b border-border/50 shadow-xl transition-all duration-300 overflow-hidden md:hidden",
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 border-transparent"
        )}
      >
        <nav className="flex flex-col p-4 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "p-4 rounded-xl text-base font-semibold transition-colors",
                location === link.href
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-muted text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="p-4 pt-2">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full">Get Started</Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
