import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card/50">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + Description */}
        <div>
          <img
            src="/logo.png"
            alt="INFOTHON 7.0"
            className="h-10 w-auto object-contain rounded-lg border border-primary/20 mb-4 drop-shadow-[0_0_12px_hsl(91_100%_50%/0.7)]"
          />
          <p className="text-muted-foreground text-sm leading-relaxed">
            Innovate. Build. Disrupt. The premier hackathon pushing the boundaries of technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-sm uppercase tracking-wider mb-4 text-foreground">
            Quick Links
          </h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/problems", label: "Problem Statements" },
              { to: "/about", label: "About Us" },
              { to: "/contributors", label: "Contributors" },
              { to: "/sponsors", label: "Sponsors" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="font-display text-sm uppercase tracking-wider mb-4 text-foreground">
            Contact
          </h4>
          <div className="flex flex-col gap-2 text-muted-foreground text-sm">
            <a
              href="mailto:infothon@vvce.ac.in"
              className="hover:text-primary transition-colors"
            >
              infothon@vvce.ac.in
            </a>
            <a href="tel:6361203438" className="hover:text-primary transition-colors">Sukrutha K - +91 63612 03438</a>
            <a href="tel:8123099737" className="hover:text-primary transition-colors">Vasudev S - +91 81230 99737</a>
            <a href="tel:8660164565" className="hover:text-primary transition-colors">Ajay Kumar R - +91 86601 64565</a>
            <a href="tel:9481138912" className="hover:text-primary transition-colors">Abhinav C - +91 94811 38912</a>
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-display text-sm uppercase tracking-wider mb-4 text-foreground">
            Follow Us
          </h4>

          <div className="flex gap-3">
            {[
              { icon: Linkedin, link: "https://www.linkedin.com/school/vvceofficial/" },
              { icon: Instagram, link: "https://www.instagram.com/infothon.vvce/" },
            ].map(({ icon: Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground text-xs">
        © {new Date().getFullYear()} Infothon 7.0. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
