const projects = [
  { year: "2025", client: "Sharma & Patel", type: "Wedding", location: "Udaipur, India", desc: "A lavish 3-day wedding celebration captured across palace grounds and lakeside venues.", metrics: "500+ photos • 45 min film" },
  { year: "2024", client: "Luxe Fashion Co.", type: "Fashion Editorial", location: "Milan, Italy", desc: "SS24 campaign shot across iconic Milanese architecture with 12 models.", metrics: "3 magazine features • 2M reach" },
  { year: "2024", client: "SkyView Estates", type: "Drone Aerial", location: "Dubai, UAE", desc: "Aerial real estate showcase for a premium beachfront development.", metrics: "8K footage • 200+ aerial shots" },
  { year: "2023", client: "TechVision Summit", type: "Event Coverage", location: "San Francisco, USA", desc: "Full documentation of a 2-day technology conference with 5000+ attendees.", metrics: "1200 photos • Same-day highlights" },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative diagonal-top bg-secondary/20">
      <div className="container mx-auto px-4 pt-12">
        <div className="text-center mb-16 reveal">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Previous <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-8 md:p-10 relative overflow-hidden group hover:glow-purple transition-all duration-500 reveal"
            >
              {/* Year badge */}
              <div className="absolute top-6 right-6 glass px-3 py-1 rounded-full text-xs text-accent font-medium">
                {project.year}
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                {/* Thumbnail placeholder */}
                <div className="w-full md:w-48 h-32 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex-shrink-0 group-hover:scale-105 transition-transform duration-500" />

                <div className="flex-1">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">{project.type}</span>
                  <h3 className="text-2xl font-bold text-foreground mt-1">{project.client}</h3>
                  <p className="text-sm text-muted-foreground mt-1">📍 {project.location}</p>
                  <p className="text-sm text-muted-foreground mt-3">{project.desc}</p>
                  <p className="text-xs text-accent mt-3 font-medium">{project.metrics}</p>
                </div>
              </div>

              {/* Timeline connector */}
              {i < projects.length - 1 && (
                <div className="hidden md:block absolute -bottom-8 left-1/2 w-px h-8 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
