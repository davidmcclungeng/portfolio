import { profile } from "@/lib/content";
import { MobileMenu } from "./MobileMenu";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#tooling", label: "AI tooling" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: profile.github, label: "GitHub", external: true },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-[1040px] items-center justify-between px-6 lg:px-10">
        <a
          href="#top"
          className="font-heading text-lg font-semibold text-foreground"
        >
          David McClung<span className="hidden md:inline">, MSc AI in Business</span>
        </a>
        <div className="flex items-center gap-3 md:gap-6">
          <ul className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="text-sm text-foreground transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary">
            Contact
          </a>
          <MobileMenu links={links} />
        </div>
      </nav>
    </header>
  );
}
