import { Card } from "@/components/ui/card";
import { Shield, Wifi, Database, Zap } from "lucide-react";

export default function WhatIsSection() {
  const highlights = [
    { icon: Shield, text: "Offline-first architecture" },
    { icon: Wifi, text: "Device-level encryption" },
    { icon: Database, text: "Lightweight document-style data model" },
    { icon: Zap, text: "High performance for mobile & desktop apps" },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center" data-testid="text-what-is-title">
          What Is QutaumDB?
        </h2>
        
        <Card className="p-8 md:p-12 hover-elevate">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8" data-testid="text-what-is-description">
            QutaumDB is a modern, offline database engine designed for developers who want secure, 
            encrypted data storage without relying on external servers or cloud-based systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3"
                data-testid={`highlight-${index}`}
              >
                <item.icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-foreground">{item.text}</span>
              </div>
            ))}
          </div>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-8" data-testid="text-ideal-for">
            QutaumDB is ideal for apps that handle private or sensitive data and need a secure local database.
          </p>
        </Card>
      </div>
    </section>
  );
}
