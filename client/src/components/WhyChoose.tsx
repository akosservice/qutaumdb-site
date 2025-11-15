import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Building2, ShieldCheck } from "lucide-react";

const audiences = [
  {
    icon: Code2,
    title: "For Developers",
    points: [
      "Simple to integrate",
      "Zero server setup",
      "Great for prototypes and production apps",
      "Works across multiple platforms",
    ],
  },
  {
    icon: Building2,
    title: "For Businesses",
    points: [
      "Secure offline data storage",
      "Zero cloud dependency",
      "No monthly cloud bills",
      "Works perfectly even in restricted or non-network environments",
    ],
  },
  {
    icon: ShieldCheck,
    title: "For Security Apps",
    points: [
      "Local vaults",
      "Password managers",
      "Confidential file storage apps",
      "Encrypted notes & offline AI data storage",
    ],
  },
];

export default function WhyChoose() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 bg-accent/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center" data-testid="text-why-choose-title">
          Why Choose QutaumDB?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <Card 
              key={index} 
              className="hover-elevate"
              data-testid={`card-audience-${index}`}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <audience.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl md:text-2xl">{audience.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {audience.points.map((point, pointIndex) => (
                    <li 
                      key={pointIndex} 
                      className="flex items-start gap-2"
                      data-testid={`point-${index}-${pointIndex}`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
