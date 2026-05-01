import { useState } from "react";
import { ExternalLink, Star, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/portfolio";

const categories = ["Todos", "Sites", "Lojas Virtuais", "Internacional"];

const categoryColors: Record<string, string> = {
  Sites:
    "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800",
  "Lojas Virtuais":
    "bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-200 dark:border-violet-800",
  Internacional:
    "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
}

const categoryColorsFeatured: Record<string, string> = {
  Sites: "bg-blue-600/80 text-white border-transparent backdrop-blur-sm",
  "Lojas Virtuais": "bg-violet-600/80 text-white border-transparent backdrop-blur-sm",
  Internacional: "bg-emerald-600/80 text-white border-transparent backdrop-blur-sm",
};

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const featured = projects.filter((p) => p.featured);
  const regular = projects.filter((p) => !p.featured);

  const filtered =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const showFeaturedGrid = activeCategory === "Todos";

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Portfólio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projetos <span className="gradient-text">realizados</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground max-w-xl mx-auto">
            <Briefcase className="w-4 h-4 text-primary flex-shrink-0" />
            <p>
              Trabalhos desenvolvidos como{" "}
              <span className="font-semibold text-foreground">freelancer</span>{" "}
              desenvolvendo sites, lojas virtuais e projetos internacionais
              entregues para clientes de diferentes segmentos.
            </p>
          </div>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {cat}
              <span className="ml-1.5 text-xs opacity-60">
                (
                {cat === "Todos"
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length}
                )
              </span>
            </button>
          ))}
        </div>

        {/* Featured grid (visible only on "Todos") */}
        {showFeaturedGrid && (
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {featured.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="inline-flex items-center gap-1 bg-primary/90 text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
                      <Star className="w-3 h-3 fill-current" /> Destaque
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-white/90 hover:bg-white text-foreground text-xs font-semibold px-3 py-1.5 rounded-full transition-colors shadow"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Ver site
                    </a>
                  </div>
                  <div className="absolute bottom-3 left-4">
                    <h3 className="text-lg font-bold text-white">
                      {project.title}
                    </h3>
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium mt-1 ${categoryColorsFeatured[project.category] ?? ""}`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-5">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Regular grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {(showFeaturedGrid ? regular : filtered).map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-white/90 hover:bg-white text-foreground text-xs font-semibold px-3 py-1.5 rounded-full transition-colors shadow"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Ver site
                  </a>
                </div>
              </div>
              <CardContent className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-foreground">{project.title}</h3>
                  <span
                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ml-2 flex-shrink-0 ${categoryColors[project.category] ?? "border-border text-muted-foreground"}`}
                  >
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
