import { Code2 } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Code2 className="w-4 h-4 text-primary" />
          <span>
            © {new Date().getFullYear()}
            <span className="font-medium text-foreground ml-1">
              {personalInfo.name}
            </span>
          </span>
        </div>
        <p className="text-xs text-muted-foreground"></p>
      </div>
    </footer>
  );
}
