export const personalInfo = {
  name: "Hugo Costa",
  age: 32,
  role: "Desenvolvedor Web",
  tagline: "Construindo sistemas robustos para o mercado financeiro",
  bio: "Desenvolvedor back-end com foco em Java e Spring Boot, atuando em projetos de alta complexidade no setor financeiro. Tenho experiência sólida em APIs RESTful, arquitetura BFF com Angular e TypeScript, sempre prezando por performance, segurança e qualidade de código.",
  location: "Recife, PE — Brasil",
  email: "hugocosta.dev@gmail.com",
  github: "https://github.com/hgcosta",
  linkedin: "https://www.linkedin.com/in/hugo-costa-68549b327/",
  whatsapp: "https://wa.me/5581997115664",
  avatar:
    "https://api.dicebear.com/9.x/adventurer/svg?seed=Hugo&backgroundColor=b6e3f4",
};

export const skills = {
  backend: [
    "Java 17+",
    "Spring Boot",
    "Node.js",
    "TypeScript",
    "Microsserviços",
  ],
  frontend: ["Angular", "TypeScript", "React", "HTML5", "CSS3", "SASS"],
  database: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  devops: ["Git", "Bitbucket", "GitHub", "Docker", "CI/CD", "SonarQube"],
  tools: ["Jira", "Trello", "Figma", "Postman"],
};

export const experiences = [
  {
    id: 1,
    company: "act digital",
    role: "Back-end Developer",
    period: "Out 2025 — Presente",
    location: "Remoto",
    description:
      "Atuando diretamente em projetos voltados à modernização e validação de CNPJ alfanumérico em instituições financeiras. Criação e evolução de serviços back-end responsáveis por tratar, normalizar e validar identificadores híbridos (numérico + alfanumérico), garantindo integridade, segurança e conformidade com as regras internas da corporação. Inclui atuação em atualização e modernização de projetos Java legados, migrando para versões mais recentes e aplicando boas práticas de desenvolvimento.",
    achievements: [
      "Implementei serviços de validação de CNPJ alfanumérico com Java 17+ e Spring Boot, garantindo conformidade com padrões regulatórios",
      "Desenvolvi fluxos de validação no front-end com Angular, integrando corretamente com as APIs back-end criadas",
      "Garantia de performance, padronização e escalabilidade dos serviços de identificação de CNPJs híbridos",
    ],
    tech: ["Java 17+", "Spring Boot", "Angular", "Git", "Jira"],
  },
  {
    id: 2,
    company: "GFT Technologies",
    role: "Back-end Developer",
    period: "Mai 2024 — Out 2025",
    location: "Remoto",
    description:
      "Atuei no desenvolvimento de APIs utilizadas no portal de negócios do segurado da Bradesco Seguros, com foco no aprimoramento da capacidade de processamento de dados e na eficiência das requisições. Participei também da implementação de arquitetura BFF utilizando Angular.",
    achievements: [
      "Desenvolvi e otimizei APIs REST do portal de negócios do segurado da Bradesco Seguros com Java e Spring Boot",
      "Implementei arquitetura BFF com Angular, melhorando a experiência do usuário e a comunicação com os serviços",
      "Garantia de qualidade de código através do SonarQube com métricas consistentes entre sprints",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Angular",
      "SonarQube",
      "Git",
      "Bitbucket",
      "Jira",
    ],
  },
  {
    id: 3,
    company: "SIS Innov & Tech",
    role: "Back-end Developer",
    period: "Ago 2022 — Mai 2024",
    location: "Remoto",
    description:
      "Participei ativamente no desenvolvimento e evolução das APIs responsáveis pelo funcionamento do BIA — Inteligência Artificial da Bradesco Seguros. Atuação voltada ao back-end com foco na criação e melhoria de funcionalidades que aumentaram a performance no processamento de dados e otimizaram o tempo de resposta das requisições.",
    achievements: [
      "Evoluí as APIs do BIA (IA da Bradesco Seguros) com Node.js e TypeScript, reduzindo tempo de resposta das requisições",
      "Colaborei na integração com o front-end em React, garantindo maior consistência e eficiência nas entregas",
      "Otimizei fluxos de processamento de dados críticos do assistente inteligente",
    ],
    tech: ["Node.js", "TypeScript", "React", "Git", "Bitbucket", "Jira"],
  },
  {
    id: 4,
    company: "JAZZZ Agência Digital",
    role: "Desenvolvedor Full Stack",
    period: "Jun 2019 — Jul 2022",
    location: "Recife, PE",
    description:
      "Participei de projetos de desenvolvimento de sites institucionais, landing pages e e-commerce. Desenvolvi expertise em desenvolvimento front-end, atendimento ao cliente e gestão de projetos, lidando com diversas tecnologias e necessidades específicas de cada cliente.",
    achievements: [
      "Desenvolvi sites institucionais, landing pages e e-commerce do zero para clientes de diversos segmentos",
      "Ampliei domínio técnico em múltiplas tecnologias front-end, React e CMS como WordPress",
      "Gerenciei relacionamento com clientes e prazos de entrega em ambiente de agência digital",
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "PHP",
      "React",
      "WordPress",
      "Git",
      "Trello",
    ],
  },
];

export const projects = [
  // Sites
  {
    id: 1,
    title: "NUE Superfícies",
    description:
      "Site institucional para empresa de revestimentos e superfícies, com apresentação de produtos, portfólio e formulário de contato.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
    tech: ["PHP", "HTML", "CSS", "SASS"],
    demo: "https://www.nuesuperficies.com.br/",
    featured: false,
    category: "Sites",
  },
  {
    id: 2,
    title: "Splash Eco Park",
    description:
      "Site completo de parque aquático com sistema de venda de ingressos online e integração com ERP para gestão de capacidade e reservas.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    tech: ["PHP", "HTML", "CSS", "SASS", "ERP"],
    demo: "https://splashecopark.com.br/",
    featured: true,
    category: "Sites",
  },
  {
    id: 3,
    title: "Quality Emp",
    description:
      "Site institucional para empresa de serviços, com páginas de apresentação, serviços oferecidos e canal de contato.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    tech: ["PHP", "HTML", "CSS", "SASS"],
    demo: "https://qualityemp.com.br/",
    featured: false,
    category: "Sites",
  },
  // Lojas Virtuais
  {
    id: 4,
    title: "UArtES",
    description:
      "Loja virtual de artesanato e produtos artísticos, com catálogo completo, carrinho e checkout integrado via Nuvemshop.",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
    tech: ["Nuvemshop", "HTML", "CSS", "JavaScript"],
    demo: "https://www.uartes.com.br/",
    featured: false,
    category: "Lojas Virtuais",
  },
  {
    id: 5,
    title: "Loja Calla",
    description:
      "E-commerce de moda feminina com curadoria de produtos, filtros avançados e experiência de compra otimizada via Nuvemshop.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    tech: ["Nuvemshop", "HTML", "CSS", "JavaScript"],
    demo: "https://www.lojacalla.com.br/",
    featured: false,
    category: "Lojas Virtuais",
  },
  {
    id: 6,
    title: "Donne Jalecos",
    description:
      "Loja virtual especializada em uniformes e jalecos profissionais, com categorias por especialidade e personalização de peças.",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80",
    tech: ["Nuvemshop", "HTML", "CSS", "JavaScript"],
    demo: "https://donnejalecos.com.br/",
    featured: false,
    category: "Lojas Virtuais",
  },
  {
    id: 7,
    title: "Focinho e Cia",
    description:
      "Pet shop online com produtos para animais de estimação, seção de promoções e integração com meios de pagamento via Nuvemshop.",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
    tech: ["Nuvemshop", "HTML", "CSS", "JavaScript"],
    demo: "https://lojafocinhoecia.lojavirtualnuvem.com.br/",
    featured: false,
    category: "Lojas Virtuais",
  },
  // Internacional
  {
    id: 8,
    title: "Light Design",
    description:
      "Site institucional bilíngue para empresa de design e iluminação, com portfólio de projetos nacionais e internacionais.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80",
    tech: ["PHP", "HTML", "CSS", "SASS"],
    demo: "https://lightdesign.com.br/",
    featured: false,
    category: "Internacional",
  },
  {
    id: 9,
    title: "Porto Smile",
    description:
      "Site para clínica odontológica em Portugal, com apresentação de serviços, equipe, agendamento online e conteúdo em português europeu.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
    tech: ["PHP", "HTML", "CSS", "SASS"],
    demo: "https://portosmile.pt/",
    featured: true,
    category: "Internacional",
  },
  {
    id: 10,
    title: "Expedition Boats",
    description:
      "Site para empresa de embarcações de expedição, com catálogo de barcos, especificações técnicas e geração de leads internacionais.",
    image:
      "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=600&q=80",
    tech: ["PHP", "HTML", "CSS", "SASS"],
    demo: "https://expedition-boats.com/",
    featured: false,
    category: "Internacional",
  },
];

export const stats = [
  { label: "Anos de experiência", value: "6+" },
  { label: "Projetos realizados", value: "+70" },
];
