import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter signup:', email);
      setSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="newsletter" className="py-16 md:py-24 lg:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <Card className="hover-elevate">
          <CardHeader className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl md:text-3xl">QutaumDB Is In Development</CardTitle>
            <p className="text-muted-foreground text-base md:text-lg">
              A new offline encrypted database engine designed for privacy-focused apps.
              <br />
              Stay updated and join the early community!
            </p>
          </CardHeader>
          <CardContent>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                  data-testid="input-newsletter-email"
                />
                <Button type="submit" className="gap-2" data-testid="button-join-newsletter">
                  Join Mail List
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            ) : (
              <div className="text-center py-4">
                <p className="text-primary font-semibold text-lg" data-testid="text-newsletter-success">
                  Thank you for joining! We'll keep you updated.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
