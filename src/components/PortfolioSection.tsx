import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = ["All", "Wedding", "Pre-Wedding", "Fashion", "Product", "Event", "Drone", "Cinematic"];

const mockImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  category: categories[1 + (i % 7)],
  title: `Project ${i + 1}`,
  photographer: ["Alex Rivera", "Mia Chen", "Jordan Brooks", "Priya Sharma"][i % 4],
  aspect: i % 3 === 0 ? "tall" : i % 3 === 1 ? "wide" : "square",
}));

const placeholderColors = [
  "from-primary/30 to-accent/20",
  "from-accent/30 to-primary/20",
  "from-primary/20 to-secondary",
  "from-secondary to-primary/30",
  "from-accent/20 to-secondary",
  "from-primary/40 to-accent/10",
];

export default function PortfolioSection() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? mockImages : mockImages.filter((img) => img.category === active);

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Our <span className="gradient-text">Creative</span> Work
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Explore our curated collection across wedding, fashion, drone aerial, and cinematic categories.
          </p>
        </div>

        <div className="flex justify-center mb-10 reveal">
          <Tabs value={active} onValueChange={setActive}>
            <TabsList className="bg-secondary/50 flex-wrap h-auto gap-1">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs md:text-sm"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img) => (
            <div
              key={img.id}
              className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer reveal"
            >
              <div
                className={`bg-gradient-to-br ${placeholderColors[img.id % placeholderColors.length]} ${
                  img.aspect === "tall" ? "h-80" : img.aspect === "wide" ? "h-48" : "h-64"
                } w-full transition-transform duration-500 group-hover:scale-110`}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">{img.category}</span>
                  <h3 className="text-lg font-bold text-foreground mt-1">{img.title}</h3>
                  <p className="text-sm text-muted-foreground">by {img.photographer}</p>
                </div>
              </div>
              {/* Flash effect */}
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none group-hover:animate-pulse" style={{ animationIterationCount: 1, animationDuration: "0.3s" }} />
            </div>
          ))}
        </div>

        {/* Before/After Slider */}
        <div className="mt-20 reveal">
          <h3 className="text-2xl font-bold text-center mb-8">
            Before & <span className="gradient-text">After</span> Editing
          </h3>
          <BeforeAfterSlider />
        </div>
      </div>
    </section>
  );
}

function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);

  return (
    <div className="relative max-w-2xl mx-auto h-80 rounded-xl overflow-hidden glass border border-border cursor-ew-resize select-none">
      {/* "Before" side */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
        <span className="text-muted-foreground text-lg font-medium">Before</span>
      </div>
      {/* "After" side */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <span className="text-foreground text-lg font-medium">After</span>
      </div>
      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-primary glow-purple cursor-ew-resize z-10"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold glow-purple">
          ↔
        </div>
      </div>
      {/* Invisible drag area */}
      <div
        className="absolute inset-0 z-20"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setPosition(((e.clientX - rect.left) / rect.width) * 100);
        }}
        onTouchMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const touch = e.touches[0];
          setPosition(((touch.clientX - rect.left) / rect.width) * 100);
        }}
      />
      <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs text-muted-foreground z-30">Before</div>
      <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs text-muted-foreground z-30">After</div>
    </div>
  );
}
