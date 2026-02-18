import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary" />

      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rotate-45 animate-float opacity-30" />
      <div className="absolute top-40 right-20 w-24 h-24 border border-accent/20 rotate-12 animate-float-slow opacity-20" />
      <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-primary/10 rotate-45 animate-float opacity-20 rounded-sm" />
      <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-gold/15 rounded-full animate-float-slow opacity-25" />
      <div className="absolute bottom-20 right-10 w-40 h-40 border border-primary/10 rounded-full animate-float opacity-15" />

      {/* Purple glow orb */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/8 rounded-full blur-[100px]" />

      {/* Content */}
      <div className="relative m-16 z-10 container mx-auto px-4 text-center">
        {/* <div className="inline-block mb-6 px-4 py-2 glass rounded-full text-sm text-muted-foreground animate-fade-in">
          ✦ Premium Photography & Videography Studio
        </div> */}

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Capture Every
          <br />
          <span className="gradient-text">Moment</span> in
          <br />
          Cinematic Light
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          From aerial drone shots to intimate wedding portraits — we craft
          visual stories that transcend the ordinary.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Button
            size="lg"
            className="gradient-purple-gold border-0 text-background font-semibold px-8 py-6 text-lg hover:opacity-90 glow-purple"
          >
            Book a Shoot <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border bg-transparent text-foreground px-8 py-6 text-lg hover:bg-secondary"
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Play className="mr-2 w-5 h-5" /> Explore Portfolio
          </Button>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          {[
            { value: "500+", label: "Projects" },
            { value: "12+", label: "Years Experience" },
            { value: "50+", label: "Awards" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
