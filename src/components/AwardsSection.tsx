import { useEffect, useRef, useState } from "react";
import { Award, Star, Users, Image } from "lucide-react";

const stats = [
  { icon: Image, value: 15000, suffix: "+", label: "Photos Delivered" },
  { icon: Users, value: 500, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 52, suffix: "", label: "Awards Won" },
  { icon: Star, value: 12, suffix: "+", label: "Years of Excellence" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold gradient-text">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function AwardsSection() {
  return (
    <section className="py-24 relative diagonal-top bg-secondary/30">
      <div className="container mx-auto px-4 pt-12">
        <div className="text-center mb-16 reveal">
          <span className="text-accent text-sm font-medium tracking-widest uppercase">Achievements</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Awards & <span className="gradient-text">Recognition</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-8 text-center reveal">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
