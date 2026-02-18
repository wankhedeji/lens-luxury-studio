import { Badge } from "@/components/ui/badge";

const team = [
  { name: "Alex Rivera", role: "Lead Photographer", specs: ["Wedding", "Fashion"], exp: "12 years" },
  { name: "Mia Chen", role: "Drone Specialist", specs: ["Aerial", "Real Estate"], exp: "8 years" },
  { name: "Jordan Brooks", role: "Cinematographer", specs: ["Cinematic", "Events"], exp: "10 years" },
  { name: "Priya Sharma", role: "Fashion Photographer", specs: ["Editorial", "Product"], exp: "6 years" },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Our Team</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Meet the <span className="gradient-text">Artists</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="glass rounded-2xl p-8 text-center group hover:glow-purple transition-all duration-500 reveal"
            >
              <div className="w-24 h-24 rounded-full mx-auto mb-6 bg-gradient-to-br from-primary/30 to-accent/20 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
              <p className="text-sm text-primary mt-1">{member.role}</p>
              <p className="text-xs text-muted-foreground mt-1">{member.exp} experience</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {member.specs.map((s) => (
                  <Badge key={s} variant="secondary" className="text-xs bg-secondary/80 text-muted-foreground">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
