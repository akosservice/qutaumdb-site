import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Circle } from "lucide-react";

const phases = [
  {
    title: "Phase 1 – Core Engine",
    status: "completed",
    description: "Concept design, early prototype planning.",
  },
  {
    title: "Phase 2 – Encryption Layer",
    status: "in-progress",
    description: "End-to-end encryption pipeline.",
  },
  {
    title: "Phase 3 – Collections & Document Engine",
    status: "pending",
    description: "MongoDB-style document store.",
  },
  {
    title: "Phase 4 – SDK Development",
    status: "pending",
    description: "Flutter, Kotlin, Swift SDK.",
  },
  {
    title: "Phase 5 – Beta Launch",
    status: "pending",
    description: "Invite early developers to test the platform.",
  },
  {
    title: "Phase 6 – Stable Release",
    status: "pending",
    description: "Public launch with documentation + support.",
  },
];

export default function Roadmap() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center" data-testid="text-roadmap-title">
          Development Roadmap
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phases.map((phase, index) => (
            <Card 
              key={index} 
              className={`hover-elevate ${phase.status === 'in-progress' ? 'border-primary' : ''}`}
              data-testid={`card-phase-${index}`}
            >
              <CardHeader>
                <div className="flex items-start gap-3 mb-2">
                  {phase.status === 'completed' ? (
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  ) : phase.status === 'in-progress' ? (
                    <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                    </div>
                  ) : (
                    <Circle className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                  )}
                  <div>
                    <CardTitle className="text-lg">{phase.title}</CardTitle>
                    {phase.status === 'completed' && (
                      <span className="text-xs text-primary font-medium">Completed</span>
                    )}
                    {phase.status === 'in-progress' && (
                      <span className="text-xs text-primary font-medium">In Progress</span>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {phase.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
