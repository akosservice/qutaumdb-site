import { Card } from "@/components/ui/card";

const steps = [
  "Your app sends data to QutaumDB.",
  "QutaumDB encrypts it using a device-specific key.",
  "The encrypted document is stored on the device.",
  "When needed, QutaumDB decrypts only the required data.",
  "All operations stay offline — fast and private.",
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 bg-accent/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center" data-testid="text-how-it-works-title">
          How QutaumDB Works
        </h2>

        <Card className="p-8 md:p-12">
          <p className="text-lg text-muted-foreground mb-8">Simple Explanation:</p>
          <ol className="space-y-4">
            {steps.map((step, index) => (
              <li 
                key={index} 
                className="flex items-start gap-4"
                data-testid={`step-${index}`}
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold">{index + 1}</span>
                </div>
                <p className="text-foreground mt-1">{step}</p>
              </li>
            ))}
          </ol>
        </Card>
      </div>
    </section>
  );
}
