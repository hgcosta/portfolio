import { Mail, MapPin, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

const contacts = [
  {
    label: "WhatsApp",
    value: "+55 (81) 99711-5664",
    href: (personalInfo as typeof personalInfo & { whatsapp: string }).whatsapp,
    icon: WhatsAppIcon,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    cta: true,
  },
  {
    label: "E-mail",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    iconColor: "text-primary",
    bgColor: "bg-primary/10 group-hover:bg-primary/20",
    cta: false,
  },
  {
    label: "LinkedIn",
    value: "Hugo Costa",
    href: personalInfo.linkedin,
    icon: LinkedinIcon,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-500/10 group-hover:bg-blue-500/20",
    cta: false,
  },
  {
    label: "GitHub",
    value: "hgcosta",
    href: personalInfo.github,
    icon: GithubIcon,
    iconColor: "text-foreground",
    bgColor: "bg-muted group-hover:bg-muted/80",
    cta: false,
  },
  {
    label: "Localização",
    value: personalInfo.location,
    href: null,
    icon: MapPin,
    iconColor: "text-rose-500",
    bgColor: "bg-rose-500/10",
    cta: false,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Contato
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Vamos <span className="gradient-text">conversar</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Tem um projeto em mente ou quer trocar uma ideia?
          </p>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Fale comigo no WhatsApp respondo rápido.
          </p>
        </div>

        {/* CTA WhatsApp em destaque */}
        <a
          href={
            (personalInfo as typeof personalInfo & { whatsapp: string })
              .whatsapp
          }
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-4 p-6 rounded-2xl border-2 border-emerald-400/40 bg-emerald-50/60 dark:bg-emerald-950/20 hover:border-emerald-500/60 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 mb-6 group"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-emerald-500/15 flex items-center justify-center group-hover:bg-emerald-500/25 transition-colors flex-shrink-0">
              <WhatsAppIcon className="w-7 h-7 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-0.5">
                WhatsApp
              </p>
              <p className="text-lg font-bold text-foreground">
                +55 (81) 99711-5664
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Clique para abrir conversa
              </p>
            </div>
          </div>
          <Button
            size="sm"
            className="bg-emerald-600 hover:bg-emerald-700 text-white flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            Chamar
          </Button>
        </a>

        {/* Demais contatos */}
        <div className="grid sm:grid-cols-2 gap-3">
          {contacts
            .slice(1)
            .map(({ label, value, href, icon: Icon, iconColor, bgColor }) => {
              const inner = (
                <>
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${bgColor}`}
                  >
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="text-sm font-medium text-foreground truncate">
                      {value}
                    </p>
                  </div>
                </>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all group"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={label}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card"
                >
                  {inner}
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
