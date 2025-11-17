import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

export default function AboutCreator() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 bg-accent/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center" data-testid="text-about-title">
          About the Creator
        </h2>

        <Card className="hover-elevate">
          <CardHeader className="text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <User className="w-10 h-10 text-primary" />
            </div>
            <CardTitle className="text-2xl">SanojS</CardTitle>
            <p className="text-muted-foreground">Creator & Developer</p>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed" data-testid="text-creator-bio">
              QutaumDB is built by SanojS, the creator of{" "}
              <a 
                href="https://qsecurex.space" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
                data-testid="link-qsecurex"
              >
                QSecureX
              </a>
              , a secure offline vault app. Passionate about privacy, encryption, and developing efficient developer tools.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
