import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import logoImage from "@assets/logo qdb_1763202485095.png";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const menuItems = [
    { label: "Features", href: "#features" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "About", href: "#about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold" data-testid="text-header-brand">Qutaum<a className="text-primary">DB</a></span>
        </div>

        <nav className="hidden md:flex items-center gap-8" data-testid="nav-menu">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid={`link-${item.label.toLowerCase().replace(' ', '-')}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="relative w-64 hidden lg:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-muted/50"
            data-testid="input-search"
          />
        </div>
      </div>
    </header>
  );
}
