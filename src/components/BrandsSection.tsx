const brands = [
  "Vogue", "Canon", "Sony", "DJI", "Nikon", "Adobe",
  "Getty Images", "National Geographic", "Elle", "Harper's Bazaar",
];

export default function BrandsSection() {
  return (
    <section className="py-16 relative overflow-hidden border-t border-b border-border/50">
      <div className="text-center mb-10 reveal">
        <span className="text-muted-foreground text-sm tracking-widest uppercase">Trusted By</span>
      </div>
      <div className="relative">
        <div className="flex animate-scroll-left whitespace-nowrap">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center mx-8 md:mx-12 flex-shrink-0"
            >
              <span className="text-xl md:text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground transition-colors cursor-default">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
