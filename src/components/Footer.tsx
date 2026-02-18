import { Camera, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="py-16 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Camera className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold gradient-text">PhotoStudio</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium photography & videography studio crafting visual stories since 2012.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Wedding Photography", "Fashion Editorial", "Drone Aerial", "Event Coverage", "Equipment Rental"].map((s) => (
                <li key={s} className="hover:text-foreground transition-colors cursor-pointer">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["About Us", "Our Team", "Portfolio", "Blog", "Careers"].map((s) => (
                <li key={s} className="hover:text-foreground transition-colors cursor-pointer">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> hello@photostudio.com</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +1 (555) 123-4567</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> New York, NY 10001</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-xs text-muted-foreground">
          © 2025 PhotoStudio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
