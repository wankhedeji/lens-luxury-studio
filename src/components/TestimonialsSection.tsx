import { Play, Star } from "lucide-react";

const testimonials = [
  { name: "Sarah & James", type: "Wedding Client", quote: "PhotoStudio captured our wedding day beyond our wildest dreams. Every frame tells a story.", rating: 5 },
  { name: "Luxe Fashion Co.", type: "Brand Partner", quote: "Their creative vision elevated our entire SS24 campaign. The aerial shots were breathtaking.", rating: 5 },
  { name: "TechVision Inc.", type: "Corporate Client", quote: "Professional, punctual, and the quality exceeded every expectation. Our go-to studio.", rating: 5 },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Client <span className="gradient-text">Stories</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-8 relative group hover:glow-purple transition-all duration-500 reveal">
              {/* Video play button mockup */}
              <div className="w-full h-40 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 mb-6 flex items-center justify-center group-hover:from-primary/30 transition-all">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-primary ml-1" />
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm italic mb-4">"{t.quote}"</p>
              <div>
                <p className="text-foreground font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
