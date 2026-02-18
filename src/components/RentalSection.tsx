import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Camera, CircleDot, Flashlight, Plane, TriangleRight, Building } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const equipment = [
  { id: "dslr", icon: Camera, name: "DSLR Camera", base: 150 },
  { id: "lens", icon: CircleDot, name: "Lenses", base: 80 },
  { id: "lighting", icon: Flashlight, name: "Lighting Kit", base: 120 },
  { id: "drone", icon: Plane, name: "Drone Camera", base: 250 },
  { id: "tripod", icon: TriangleRight, name: "Tripod", base: 40 },
  { id: "studio", icon: Building, name: "Studio Setup", base: 300 },
];

const structures = ["Indoor Shoot", "Outdoor Shoot", "Event Coverage", "Wedding Coverage"];
const durations = [
  { label: "Hourly", multiplier: 1 },
  { label: "Half Day", multiplier: 3.5 },
  { label: "Full Day", multiplier: 6 },
  { label: "Multi-day", multiplier: 15 },
];

export default function RentalSection() {
  const [selected, setSelected] = useState<string | null>(null);
  const [structure, setStructure] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);
  const [date, setDate] = useState<Date>();

  const selectedEquip = equipment.find((e) => e.id === selected);
  const selectedDuration = durations.find((d) => d.label === duration);
  const structureMultiplier = structure === "Wedding Coverage" ? 1.5 : structure === "Event Coverage" ? 1.3 : 1;
  const price = selectedEquip && selectedDuration
    ? Math.round(selectedEquip.base * selectedDuration.multiplier * structureMultiplier)
    : 0;

  const step = !selected ? 1 : !structure ? 2 : !duration ? 3 : 4;

  return (
    <section id="rental" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <span className="text-accent text-sm font-medium tracking-widest uppercase">Equipment</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Rent <span className="gradient-text">Pro Gear</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Professional equipment available for rent — cameras, lenses, lighting, drones and full studio setups.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Equipment + Steps */}
          <div className="lg:col-span-2 space-y-8">
            {/* Step 1: Equipment */}
            <div className="reveal">
              <h3 className="text-sm font-medium text-muted-foreground mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full gradient-purple-gold flex items-center justify-center text-xs text-background font-bold">1</span>
                Select Equipment
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {equipment.map((eq) => (
                  <button
                    key={eq.id}
                    onClick={() => setSelected(eq.id)}
                    className={cn(
                      "glass rounded-xl p-5 text-left transition-all duration-300 group",
                      selected === eq.id ? "glow-purple border-primary" : "hover:border-primary/50"
                    )}
                  >
                    <eq.icon className={cn("w-6 h-6 mb-2", selected === eq.id ? "text-primary" : "text-muted-foreground group-hover:text-primary")} />
                    <div className="text-sm font-medium text-foreground">{eq.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">${eq.base}/hr</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Structure */}
            {step >= 2 && (
              <div className="reveal visible">
                <h3 className="text-sm font-medium text-muted-foreground mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full gradient-purple-gold flex items-center justify-center text-xs text-background font-bold">2</span>
                  Shoot Type
                </h3>
                <div className="flex flex-wrap gap-3">
                  {structures.map((s) => (
                    <button
                      key={s}
                      onClick={() => setStructure(s)}
                      className={cn(
                        "glass rounded-lg px-5 py-3 text-sm transition-all",
                        structure === s ? "glow-purple border-primary text-foreground" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Duration */}
            {step >= 3 && (
              <div className="reveal visible">
                <h3 className="text-sm font-medium text-muted-foreground mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full gradient-purple-gold flex items-center justify-center text-xs text-background font-bold">3</span>
                  Duration
                </h3>
                <div className="flex flex-wrap gap-3">
                  {durations.map((d) => (
                    <button
                      key={d.label}
                      onClick={() => setDuration(d.label)}
                      className={cn(
                        "glass rounded-lg px-5 py-3 text-sm transition-all",
                        duration === d.label ? "glow-purple border-primary text-foreground" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Date */}
            {step >= 4 && (
              <div className="reveal visible">
                <h3 className="text-sm font-medium text-muted-foreground mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full gradient-purple-gold flex items-center justify-center text-xs text-background font-bold">4</span>
                  Pick Date
                </h3>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-64 justify-start text-left", !date && "text-muted-foreground")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(d) => d < new Date()}
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            )}
          </div>

          {/* Right: Summary */}
          <div className="reveal">
            <div className="glass rounded-2xl p-8 sticky top-24">
              <h3 className="text-lg font-bold text-foreground mb-6">Booking Summary</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Equipment</span>
                  <span className="text-foreground">{selectedEquip?.name || "—"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shoot Type</span>
                  <span className="text-foreground">{structure || "—"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="text-foreground">{duration || "—"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date</span>
                  <span className="text-foreground">{date ? format(date, "PPP") : "—"}</span>
                </div>
                <div className="border-t border-border pt-4 flex justify-between items-center">
                  <span className="text-muted-foreground font-medium">Total</span>
                  <span className="text-2xl font-bold gradient-text">${price || "—"}</span>
                </div>
              </div>
              <Button
                className="w-full mt-6 gradient-purple-gold border-0 text-background font-semibold"
                disabled={!price || !date}
              >
                Confirm Booking
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
