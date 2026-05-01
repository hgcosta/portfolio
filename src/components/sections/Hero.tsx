import { Mail, MapPin, ArrowDown, Code2 } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TechAvatar } from "@/components/TechAvatar"
import { personalInfo, stats } from "@/data/portfolio"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-violet-50/30 dark:from-neutral-950 dark:via-neutral-900/50 dark:to-neutral-950"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 flex flex-col lg:flex-row items-center gap-16">
        {/* Left content */}
        <div className="flex-1 animate-slide-up">
          <div className="flex items-center gap-2 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <span className="text-sm text-muted-foreground font-medium">Disponível para projetos</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight mb-4 text-foreground">
            Olá, eu sou{" "}
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <div className="flex items-center gap-3 mb-6">
            <Code2 className="w-5 h-5 text-primary" />
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">{personalInfo.role}</p>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
            {personalInfo.bio}
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{personalInfo.location}</span>
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            <Button size="lg" asChild>
              <a href="#contact">
                <Mail className="w-4 h-4" />
                Entre em contato
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">Ver projetos</a>
            </Button>
            <Button size="icon" variant="ghost" asChild>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="w-5 h-5" />
              </a>
            </Button>
            <Button size="icon" variant="ghost" asChild>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right content - Tech Avatar */}
        <div className="flex-shrink-0 animate-fade-in">
          <div className="relative">
            <TechAvatar />
            {/* Floating badges */}
            <div className="absolute -bottom-4 -left-4 glass-card border border-border rounded-xl px-4 py-2 shadow-lg">
              <p className="text-xs text-muted-foreground">Stack principal</p>
              <div className="flex gap-1 mt-1">
                {["Java", "Angular", "TS"].map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                ))}
              </div>
            </div>
            <div className="absolute -top-4 -right-4 glass-card border border-border rounded-xl px-4 py-2 shadow-lg">
              <p className="text-xs font-semibold text-foreground">6 anos de xp</p>
              <p className="text-xs text-muted-foreground">Back-end Dev</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
      >
        <span className="text-xs">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </a>
    </section>
  )
}
