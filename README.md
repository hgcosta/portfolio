# Hugo Costa — Portfolio

Portfólio pessoal de Hugo Costa, Desenvolvedor Web Back-end com foco em Java/Spring Boot, Angular e TypeScript. Construído com React 19, Vite e Tailwind CSS.

## Tecnologias

| Categoria | Libs |
|-----------|------|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Estilo | Tailwind CSS v3 + CSS custom properties |
| Componentes | Radix UI (slot, separator, dialog, tooltip…) |
| Ícones | lucide-react + SVGs inline (GitHub, LinkedIn) |
| Utilitários | clsx · tailwind-merge · class-variance-authority |

## Estrutura

```
src/
├── components/
│   ├── icons/          # SVGs inline para ícones de marca
│   ├── sections/       # Hero · About · Experience · Projects · Contact
│   ├── ui/             # Componentes ShadCN escritos manualmente (Button, Badge, Card…)
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── TechAvatar.tsx  # Editor de código animado (typing effect)
├── contexts/
│   └── ThemeContext.tsx # Dark / light com persistência em localStorage
├── data/
│   └── portfolio.ts    # Fonte única de dados: info pessoal, experiências, projetos, stats
└── index.css           # Variáveis CSS de tema (light + dark)
```

## Funcionalidades

- **Tema dark/light** — detecta preferência do sistema, persiste no localStorage
- **Navbar com scroll-spy** — destaca a seção ativa via IntersectionObserver
- **TechAvatar animado** — simula um editor de código com efeito de digitação linha a linha
- **Filtro de projetos** — categorias: Todos · Sites · Lojas Virtuais · Internacional
- **Layout responsivo** — mobile-first com breakpoints md/lg

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Build para produção

```bash
npm run build
npm run preview
```

## Configuração de conteúdo

Todo o conteúdo do portfólio está centralizado em [src/data/portfolio.ts](src/data/portfolio.ts):

- `personalInfo` — nome, cargo, bio, localização, links
- `experiences` — histórico profissional
- `projects` — projetos com imagem em `public/projects/`
- `skills` — tecnologias por categoria
- `stats` — números de destaque na Hero

## Contato

- Email: hugocosta.oli@gmail.com
- LinkedIn: [hugo-costa-68549b327](https://www.linkedin.com/in/hugo-costa-68549b327/)
- GitHub: [hgcosta](https://github.com/hgcosta)
- WhatsApp: [+55 81 99711-5664](https://wa.me/5581997115664)
