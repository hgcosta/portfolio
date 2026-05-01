import { User, Zap, Shield, Coffee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { skills } from "@/data/portfolio";

const skillCategories = [
  {
    label: "Back-end",
    items: skills.backend,
    color:
      "bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-200 dark:border-violet-800",
  },
  {
    label: "Front-end",
    items: skills.frontend,
    color:
      "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800",
  },
  {
    label: "Banco de Dados",
    items: skills.database,
    color:
      "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800",
  },
  {
    label: "DevOps & Versionamento",
    items: skills.devops,
    color:
      "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
  },
  {
    label: "Ferramentas",
    items: skills.tools,
    color:
      "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-800",
  },
];

const highlights = [
  {
    icon: Zap,
    title: "Performance back-end",
    desc: "APIs otimizadas para alta carga e baixa latência",
  },
  {
    icon: Shield,
    title: "Setor financeiro",
    desc: "Experiência em sistemas críticos com segurança e conformidade",
  },
  {
    icon: Coffee,
    title: "Clean code",
    desc: "Código legível, bem testado e fácil de manter",
  },
  {
    icon: User,
    title: "Colaborativo",
    desc: "Trabalho bem em equipe e gosto de compartilhar conhecimento",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Sobre mim
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Quem está por trás do <span className="gradient-text">código</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Bio + highlights */}
          <div>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
              <p>
                Sou desenvolvedor back-end com 6 anos de experiência,
                especializado em Java, Spring Boot e Angular. Minha trajetória
                começou em 2019 em uma agência digital, onde desenvolvi a base
                técnica que me levou a atuar em projetos de grande escala no
                mercado financeiro.
              </p>
              <p>
                Atualmente na act digital, trabalho na modernização de sistemas
                críticos para instituições financeiras, com foco em validação de
                CNPJ alfanumérico. Antes disso, atuei na GFT Technologies e SIS
                Innov & Tech contribuindo para produtos da Bradesco Seguros no
                portal do segurado ao BIA (Inteligência Artificial do Bradesco).
              </p>
              <p>
                Acredito que bom software começa com comunicação clara, design
                de API cuidadoso e cobertura de testes honesta. Fora do
                trabalho, gosto de explorar novas tecnologias e aprender coisas
                que ainda não sei.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-3 p-4 rounded-lg border border-border bg-muted/30 hover:bg-muted/60 transition-colors"
                >
                  <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Skills */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Stack técnica
            </h3>
            {skillCategories.map(({ label, items, color }) => (
              <Card key={label}>
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-semibold text-foreground">
                      {label}
                    </span>
                    <Separator className="flex-1" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${color}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
