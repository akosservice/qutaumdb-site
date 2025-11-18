import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search, Menu, X } from "lucide-react";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  // Auto-hide promo banner after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(false);
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  const menuItems = [
    { label: "Features", href: "#features" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "About", href: "#about" },
  ];

  return (
    <>
      {/* 🔥 Promo Banner (Scrolling + Auto Hide + Clickable) */}
      {showBanner && (
        <a
          href="https://qsecurex.space/"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground py-2 overflow-hidden animate-fade-out block"
        >
          <div className="scroll-container whitespace-nowrap flex">
            <span className="scroll-text text-xs sm:text-sm font-medium">
              🔥 QSecureX – Military-grade encryption vault that protects your sensitive files. Tap to learn more. 🔐 &nbsp;&nbsp;&nbsp;
            </span>
            <span className="scroll-text text-xs sm:text-sm font-medium">
              🔥 QSecureX – Military-grade encryption vault that protects your sensitive files. Tap to learn more. 🔐 &nbsp;&nbsp;&nbsp;
            </span>
          </div>
        </a>
      )}

      {/* Main Header */}
      <header
        className={`fixed left-0 right-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-sm transition-all duration-500 ${
          showBanner ? "top-[34px] sm:top-[38px]" : "top-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">

          {/* Brand */}
          <span className="text-lg sm:text-xl font-bold">
            Qutaum<a className="text-primary">DB</a>
          </span>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Search */}
          <div className="relative w-40 sm:w-64 hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-muted/50"
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border/50 px-4 py-3 space-y-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm text-muted-foreground hover:text-foreground py-1"
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Search */}
            <div className="relative mt-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted/50"
              />
            </div>
          </div>
        )}
      </header>
    </>
  );
}
