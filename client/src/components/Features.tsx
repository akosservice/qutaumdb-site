import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, WifiOff, Zap, FileJson, Package, Code } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Every document, collection, and key is encrypted automatically using strong cryptographic standards.",
  },
  {
    icon: WifiOff,
    title: "100% Offline",
    description: "No internet connection required. Perfect for private applications, secure vault apps, productivity tools, and enterprise offline systems.",
  },
  {
    icon: Zap,
    title: "Fast Document Storage",
    description: "Optimized for quick reads, writes, updates, and queries — similar to a MongoDB-like workflow, but offline.",
  },
  {
    icon: FileJson,
    title: "Collections & JSON-like Documents",
    description: "Store flexible data structures with a clean API that developers love.",
  },
  {
    icon: Package,
    title: "Lightweight & Portable",
    description: "QutaumDB uses a compact engine that runs smoothly on mobile, desktop, and embedded devices.",
  },
  {
    icon: Code,
    title: "Developer-Friendly SDKs",
    description: "Easy-to-use APIs for Flutter, Android (Kotlin), iOS (Swift), and JavaScript/Desktop (planned).",
  },
];

export default function Features() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center" data-testid="text-features-title">
          Key Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover-elevate transition-transform duration-300"
              data-testid={`card-feature-${index}`}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl md:text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
