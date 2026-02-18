import { useState, useEffect, useRef } from "react";

const gridImages = Array.from(
  { length: 10 },
  (_, i) => `/grid${i + 1}.jpeg`
);

const projects = [
  { year: "2025", client: "Sharma & Patel", type: "Wedding", location: "Udaipur, India", desc: "A lavish 3-day wedding celebration captured across palace grounds and lakeside venues.", metrics: "500+ photos • 45 min film", image: gridImages[0]
 },
  { year: "2024", client: "Luxe Fashion Co.", type: "Fashion Editorial", location: "Milan, Italy", desc: "SS24 campaign shot across iconic Milanese architecture with 12 models.", metrics: "3 magazine features • 2M reach", image: gridImages[1] },
  { year: "2024", client: "SkyView Estates", type: "Drone Aerial", location: "Dubai, UAE", desc: "Aerial real estate showcase for a premium beachfront development.", metrics: "8K footage • 200+ aerial shots", image: gridImages[2], },
  { year: "2023", client: "TechVision Summit", type: "Event Coverage", location: "San Francisco, USA", desc: "Full documentation of a 2-day technology conference with 5000+ attendees.", metrics: "1200 photos • Same-day highlights" },
  { year: "2025", client: "Sharma & Patel", type: "Wedding", location: "Udaipur, India", desc: "A lavish 3-day wedding celebration captured across palace grounds and lakeside venues.", metrics: "500+ photos • 45 min film" },
  { year: "2024", client: "Luxe Fashion Co.", type: "Fashion Editorial", location: "Milan, Italy", desc: "SS24 campaign shot across iconic Milanese architecture with 12 models.", metrics: "3 magazine features • 2M reach" },
  { year: "2024", client: "SkyView Estates", type: "Drone Aerial", location: "Dubai, UAE", desc: "Aerial real estate showcase for a premium beachfront development.", metrics: "8K footage • 200+ aerial shots" },
  { year: "2023", client: "TechVision Summit", type: "Event Coverage", location: "San Francisco, USA", desc: "Full documentation of a 2-day technology conference with 5000+ attendees.", metrics: "1200 photos • Same-day highlights" },
  { year: "2023", client: "Greenfield Weddings", type: "Wedding", location: "Kerala, India", desc: "Traditional South Indian wedding with intricate rituals and cultural elements.", metrics: "600+ photos • 60 min film" },
  { year: "2022", client: "Vogue India", type: "Fashion", location: "Mumbai, India", desc: "Exclusive editorial shoot for the anniversary edition cover story.", metrics: "Cover feature • 3M reach" },
  { year: "2022", client: "Desert Oasis Resort", type: "Drone Aerial", location: "Jaisalmer, India", desc: "Aerial cinematography for luxury resort promotional campaign.", metrics: "4K HDR • 3-min highlight" },
  { year: "2021", client: "Global Music Fest", type: "Event", location: "Goa, India", desc: "Multi-stage music festival coverage with artist spotlights.", metrics: "2000+ photos • 20 artists" },
  { year: "2021", client: "Heritage Palace", type: "Pre-Wedding", location: "Jaipur, India", desc: "Royal pre-wedding shoot at a heritage palace with traditional attire.", metrics: "300+ edited photos • Album" },
];

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const gridRef = useRef(null);
  
  // Items per page (3x3 grid)
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  
  // Auto swipe effect
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
      }, 4000); // Change slide every 4 seconds
      
      return () => clearInterval(interval);
    }
  }, [isHovered, totalPages]);

  // Handle manual navigation
  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      nextPage();
    } else if (isRightSwipe) {
      prevPage();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Get current page items
  const startIndex = currentIndex * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);
  
  // Fill remaining grid cells if needed
  const displayProjects = [...currentProjects];
  while (displayProjects.length < itemsPerPage) {
    displayProjects.push(null); // Add empty placeholders
  }

  return (
    <section id="projects" className="py-24 relative diagonal-top bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4 pt-12">
        <div className="text-center mb-12 reveal">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Previous <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Swipe or watch our portfolio auto-scroll through featured projects
          </p>
        </div>

        {/* 3x3 Grid Container */}
        <div 
          ref={gridRef}
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevPage}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full glass hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 glow group"
            aria-label="Previous page"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextPage}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full glass hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 glow group"
            aria-label="Next page"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* 3x3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {displayProjects.map((project, index) => (
              <div
                key={index}
                className={`transform transition-all duration-500 ease-in-out ${
                  project ? 'opacity-100 scale-100' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {project ? (
                  <div
                    className="glass rounded-xl p-6 relative overflow-hidden group hover:glow-purple transition-all duration-500 h-full flex flex-col"
                  >
                    {/* Year badge */}
                    <div className="absolute top-4 right-4 glass px-2 py-0.5 rounded-full text-[10px] text-accent font-medium">
                      {project.year}
                    </div>

                    {/* Thumbnail placeholder */}
                    <div className="w-full h-32 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 group-hover:scale-105 transition-transform duration-500 mb-4" />

                    <div className="flex-1">
                      <span className="text-[10px] text-primary font-medium uppercase tracking-wider">{project.type}</span>
                      <h3 className="text-lg font-bold text-foreground mt-1 line-clamp-1">{project.client}</h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-1">📍 {project.location}</p>
                      <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{project.desc}</p>
                      <p className="text-[10px] text-accent mt-2 font-medium">{project.metrics}</p>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
                  </div>
                ) : (
                  <div className="h-full min-h-[280px]" /> // Empty placeholder
                )}
              </div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-8 h-2 bg-primary glow'
                    : 'w-2 h-2 bg-border hover:bg-primary/50'
                } rounded-full`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-scroll indicator */}
          <div className="text-center mt-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <span className={`w-2 h-2 rounded-full ${!isHovered ? 'bg-primary animate-pulse' : 'bg-border'}`} />
              {!isHovered ? 'Auto-scrolling' : 'Paused'}
            </span>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow group">
            <span className="flex items-center gap-2">
              View All Projects
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}