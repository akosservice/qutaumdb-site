import logoImage from "@assets/logo qdb_1763202485095.png";
import { Mail, Github, Linkedin, Instagram, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-accent/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo + Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-bold">
                Qutaum<a className="text-primary">DB</a>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              The offline, encrypted, developer-friendly database engine. Built for privacy-first applications.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
              <li><a href="#use-cases" className="text-muted-foreground hover:text-primary transition-colors">Use Cases</a></li>
              <li><a href="#roadmap" className="text-muted-foreground hover:text-primary transition-colors">Roadmap</a></li>
              <li><a href="#newsletter" className="text-muted-foreground hover:text-primary transition-colors">Join Beta</a></li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">

              <a
                href="mailto:qutaumdb@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                qutaumdb@gmail.com
              </a>

              {/* Social Icons */}
              <div className="flex gap-3 mt-4">

                <a
                  href="https://github.com/qutaumdb"
                  target="_blank"
                  className="w-9 h-9 rounded-md bg-muted flex items-center justify-center hover-elevate"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href="https://x.com/QutaumDB"
                  target="_blank"
                  className="w-9 h-9 rounded-md bg-muted flex items-center justify-center hover-elevate"
                >
                  <X className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/company/qutaumdb"
                  target="_blank"
                  className="w-9 h-9 rounded-md bg-muted flex items-center justify-center hover-elevate"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href="https://instagram.com/"
                  target="_blank"
                  className="w-9 h-9 rounded-md bg-muted flex items-center justify-center hover-elevate"
                >
                  <Instagram className="w-4 h-4" />
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © 2025 QutaumDB. Created by Sanojs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
