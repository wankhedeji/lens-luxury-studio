import { Camera, Video, Plane, Sparkles, Heart, Building } from "lucide-react";

const services = [
  { icon: Heart, title: "Wedding Photography", desc: "Timeless moments captured with cinematic elegance and emotion.", price: "From $2,500" },
  { icon: Camera, title: "Fashion & Editorial", desc: "High-end fashion shoots with creative direction and styling.", price: "From $1,800" },
  { icon: Building, title: "Product Photography", desc: "Clean, compelling product imagery for brands and e-commerce.", price: "From $800" },
  { icon: Video, title: "Cinematic Videos", desc: "4K cinematic videography for events, brands, and storytelling.", price: "From $3,000" },
  { icon: Sparkles, title: "Event Coverage", desc: "Full event documentation from corporate galas to private celebrations.", price: "From $1,500" },
  { icon: Plane, title: "Drone Aerial", desc: "Breathtaking aerial perspectives with licensed drone operators.", price: "From $1,200" },
];

const droneSpecs = [
  { label: "Flight Duration", value: "45 min", detail: "Extended battery for long sessions" },
  { label: "Camera Resolution", value: "8K / 48MP", detail: "Ultra-high resolution capture" },
  { label: "Coverage Area", value: "10 km²", detail: "Wide-area aerial mapping" },
  { label: "Pilot Experience", value: "8+ Years", detail: "FAA certified commercial pilots" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative diagonal-top bg-secondary/30">
      <div className="container mx-auto px-4 pt-12">
        <div className="text-center mb-16 reveal">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            What We <span className="gradient-text">Offer</span>
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="glass rounded-2xl p-8 group hover:glow-purple transition-all duration-500 cursor-pointer reveal"
            >
              <div className="w-14 h-14 rounded-xl gradient-purple-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svc.icon className="w-7 h-7 text-background" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{svc.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{svc.desc}</p>
              <span className="text-primary font-semibold text-sm">{svc.price}</span>
            </div>
          ))}
        </div>

        {/* Drone section */}
        <div className="reveal">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-medium tracking-widest uppercase">Drone Services</span>
            <h3 className="text-3xl md:text-4xl font-bold mt-2">
              Aerial <span className="gradient-text">Photography</span> & Videography
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {droneSpecs.map((spec) => (
              <div
                key={spec.label}
                className="glass rounded-xl p-6 text-center group hover:glow-gold transition-all duration-300"
              >
                <div className="text-3xl font-bold gradient-text mb-1">{spec.value}</div>
                <div className="text-foreground font-medium text-sm">{spec.label}</div>
                <div className="text-muted-foreground text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">{spec.detail}</div>
              </div>
            ))}
          </div>

          {/* Drone packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { title: "Starter Aerial", price: "$1,200", features: ["30 min flight", "50 edited photos", "1080p video", "5km range"] },
              { title: "Pro Aerial", price: "$2,800", features: ["60 min flight", "150 edited photos", "4K video", "10km range", "Cinematic edit"] },
              { title: "Enterprise Aerial", price: "$5,000+", features: ["Full day coverage", "Unlimited photos", "8K video", "Custom flight plan", "Licensed survey"] },
            ].map((pkg) => (
              <div key={pkg.title} className="glass rounded-2xl p-8 relative overflow-hidden group hover:glow-purple transition-all duration-300">
                <h4 className="text-lg font-bold text-foreground mb-2">{pkg.title}</h4>
                <div className="text-3xl font-bold gradient-text mb-4">{pkg.price}</div>
                <ul className="space-y-2">
                  {pkg.features.map((f) => (
                    <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
