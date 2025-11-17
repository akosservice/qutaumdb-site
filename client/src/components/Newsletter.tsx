import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export default function Newsletter() {
  const handleRedirect = () => {
    // Redirect to LinkedIn
    window.location.href = "https://www.linkedin.com/in/YOUR-LINKEDIN-ID"; 
  };

  return (
    <section id="newsletter" className="py-16 md:py-24 lg:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <Card className="hover-elevate">
          <CardHeader className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl md:text-3xl">
              QutaumDB Is In Development
            </CardTitle>
            <p className="text-muted-foreground text-base md:text-lg">
              A new offline encrypted database engine designed for privacy-focused apps.
              <br />
              Join the community for updates!
            </p>
          </CardHeader>

          <CardContent>
            <div className="flex justify-center">
              <Button
                onClick={handleRedirect}
                className="gap-2"
                data-testid="button-join-newsletter"
              >
                Join Now
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
