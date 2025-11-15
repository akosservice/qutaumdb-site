import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Smartphone, Briefcase, Cpu, HeartPulse } from "lucide-react";

const useCases = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity & Vault Apps",
    description: "Data stays encrypted and stored locally — ideal for secure vault systems.",
  },
  {
    icon: Smartphone,
    title: "Offline-First Mobile Apps",
    description: "Perfect for apps that must work without internet connectivity.",
  },
  {
    icon: Briefcase,
    title: "Enterprise & Field Tools",
    description: "Used in environments with strict privacy rules or limited network access.",
  },
  {
    icon: Cpu,
    title: "AI-Enabled Offline Apps",
    description: "Store vectors, embeddings, and encrypted models for private AI apps.",
  },
  {
    icon: HeartPulse,
    title: "Health, Finance & Legal Apps",
    description: "Where user privacy and data protection are critical.",
  },
];

export default function UseCases() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center" data-testid="text-use-cases-title">
          Use Cases
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <Card 
              key={index} 
              className="hover-elevate"
              data-testid={`card-use-case-${index}`}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
