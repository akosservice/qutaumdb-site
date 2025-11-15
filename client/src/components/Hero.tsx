import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import logoImage from "@assets/logo qdb_1763202485095.png";
import heroBackground from "@assets/generated_images/Dark_tech_hero_background_aa9921f1.png";

export default function Hero() {
  const handleJoinMailList = () => {
    const newsletterSection = document.getElementById('newsletter');
    newsletterSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFollowUpdates = () => {
    console.log('Follow updates clicked');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-background"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="flex justify-center mb-8">
          <img 
            src={logoImage} 
            alt="QutaumDB Logo" 
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
            data-testid="img-logo"
          />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-white to-white bg-clip-text text-transparent" data-testid="text-hero-title">
          QutaumDB
        </h1>

        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-foreground" data-testid="text-hero-subtitle">
          The Offline, Encrypted, Developer-Friendly Database Engine
        </p>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed" data-testid="text-hero-description">
          A fast, secure, and flexible database built for apps that need privacy-first offline storage. 
          <span className="text-primary font-semibold"> Fully encrypted. Zero internet required. Simple to integrate.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="gap-2 text-base md:text-lg px-8"
            onClick={handleJoinMailList}
            data-testid="button-join-mail-list"
          >
            <Mail className="w-5 h-5" />
            Join Mail List
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="gap-2 text-base md:text-lg px-8 bg-background/20 backdrop-blur-sm"
            onClick={handleFollowUpdates}
            data-testid="button-follow-updates"
          >
            Follow Updates
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground">
          <div className="flex items-center gap-2" data-testid="status-coming-soon">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span>Coming Soon</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground"></div>
          <div className="flex items-center gap-2" data-testid="status-developer-beta">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span>Developer Beta Opening Shortly</span>
          </div>
        </div>
      </div>
    </section>
  );
}
