export type Locale = "pt" | "en";
export type Category = "systems" | "web" | "security";
type Localized<T> = Record<Locale, T>;

export const github = "https://github.com/volpszz";
export const linkedin = "https://www.linkedin.com/in/arthur-volpatoo/";
export const careerAreas: Localized<string[]> = {
  pt: [
    "Analista de Segurança",
    "Blue Team",
    "Red Team",
    "Purple Team",
    "Security Engineering",
  ],
  en: [
    "Security Analyst",
    "Blue Team",
    "Red Team",
    "Purple Team",
    "Security Engineering",
  ],
};
export const toolkit = [
  { id: "languages", items: ["Rust", "Python", "C", "JavaScript"] },
  { id: "web", items: ["HTML", "CSS"] },
  {
    id: "systems",
    items: ["Linux", "Bash", "PowerShell", "Git", "GitHub", "Windows"],
  },
] as const;

export const copy = {
  pt: {
    pageTitle: "Arthur Volpato | Software e Cibersegurança",
    nav: [
      ["Sobre", "about"],
      ["Projetos", "work"],
      ["Tecnologias", "stack"],
      ["Objetivos", "goals"],
      ["Contato", "contact"],
    ],
    navigation: "Navegação principal",
    caseNavigation: "Navegação do projeto",
    skip: "Pular para o conteúdo",
    home: "Página inicial",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    menu: "Menu",
    close: "Fechar",
    language: "Selecionar idioma",
    languageNames: { pt: "Português", en: "English" },
    eyebrow: "Arthur Volpato · Portfólio",
    heroLine: "Software, sistemas",
    heroAccent: "e cibersegurança.",
    heroDescription:
      "Estudante de Engenharia de Software e profissional de suporte de TI. Desenvolvo projetos com Rust, Python, C e JavaScript enquanto construo minha trajetória em Segurança da Informação.",
    viewWork: "Conheça os projetos",
    projectIndex: "EM DESTAQUE",
    indexDescription:
      "Código aberto. Contexto técnico. Aprendizado na prática.",
    workLabel: "Projetos",
    workTitle: "Da ideia à implementação.",
    workDescription:
      "Uma seleção de projetos em sistemas, desenvolvimento e segurança — com os detalhes por trás do código.",
    filters: {
      all: "Todos",
      systems: "Sistemas",
      web: "Web",
      security: "Segurança",
    },
    filterLabel: "Filtrar projetos",
    featured: "PROJETO EM DESTAQUE",
    details: "Saiba mais",
    sourceCode: "Código no GitHub",
    allRepos: "Todos os repositórios",
    aboutLabel: "Sobre",
    aboutTitle: "Fundamentos de software. Direção em segurança.",
    aboutFirst:
      "Estudo Engenharia de Software na UniCesumar e trabalho como Help Desk N1 em uma empresa de ISP/IoT.",
    aboutSecond:
      "Minha stack inclui Rust, Python, C e JavaScript, além de HTML e CSS. Meu objetivo profissional é desenvolver carreira em Segurança da Informação, explorando defesa cibernética, segurança ofensiva autorizada e a colaboração entre essas frentes.",
    careerLabel: "Frentes de interesse",
    careerAria: "Interesses de carreira em cibersegurança",
    stackLabel: "Tecnologias",
    stackTitle: "Ferramentas com propósito.",
    stackDescription:
      "Minha base de programação e as tecnologias que uso e continuo aprendendo.",
    stackNames: {
      languages: "Linguagens",
      web: "Desenvolvimento web",
      systems: "Sistemas e ferramentas",
    },
    goalsLabel: "Objetivos",
    goalsTitle: "O próximo passo é continuar aprendendo.",
    goalsDescription:
      "Formação, prática e projetos como parte da minha trajetória em cibersegurança.",
    goals: [
      {
        title: "Certificações do mercado",
        description:
          "Busco ativamente certificações para fortalecer meus fundamentos. CompTIA Network+ e Security+ são exemplos de objetivos de estudo, enquanto sigo explorando novas certificações alinhadas à minha carreira.",
      },
      {
        title: "Labs e CTFs",
        description:
          "Praticar em ambientes autorizados, explorar ferramentas de segurança e documentar as abordagens e os aprendizados de cada desafio.",
      },
      {
        title: "Conhecimento em projetos",
        description:
          "Construir projetos de segurança que demonstrem conhecimento técnico, com instruções reproduzíveis, resultados e limitações bem documentados.",
      },
    ],
    goalNote:
      "As certificações citadas são objetivos de aprendizado, não credenciais já conquistadas.",
    contactLabel: "Contato",
    contactTitle: "Vamos conversar.",
    contactDescription:
      "Projetos, oportunidades e boas conversas sobre tecnologia e segurança. Você me encontra por aqui.",
    contactButton: "Conectar no LinkedIn",
    footer: "Software, sistemas e aprendizado contínuo.",
    top: "Voltar ao início",
    caseLabel: "Estudo de projeto",
    back: "Voltar aos projetos",
    overview: "Contexto e objetivo",
    features: "O que o projeto faz",
    architecture: "Como funciona",
    decisions: "Decisões técnicas",
    lessons: "O que este projeto exercita",
    limitations: "Limitações e escopo",
    technologies: "Tecnologias",
    category: "Área",
    platform: "Ambiente",
    readme: "Documentação original",
    moreProjects: "Continue explorando",
    sourceNote:
      "Descrição baseada na documentação pública do repositório. Consulte o README para requisitos e instruções atualizados.",
    visualCaption:
      "Diagrama explicativo da arquitetura — não é uma captura de tela nem uma execução ao vivo.",
    artLabels: {
      hardware: "COLETA → IDENTIFICAÇÃO → SENSORES → TERMINAL",
      web: "NAVEGADOR → API → PERSISTÊNCIA",
      scanner: "CONFIGURAÇÃO → TCP / UDP → RESULTADO",
    },
  },
  en: {
    pageTitle: "Arthur Volpato | Software & Cybersecurity",
    nav: [
      ["About", "about"],
      ["Projects", "work"],
      ["Toolkit", "stack"],
      ["Goals", "goals"],
      ["Contact", "contact"],
    ],
    navigation: "Main navigation",
    caseNavigation: "Project navigation",
    skip: "Skip to content",
    home: "Home page",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menu: "Menu",
    close: "Close",
    language: "Select language",
    languageNames: { pt: "Português", en: "English" },
    eyebrow: "Arthur Volpato · Portfolio",
    heroLine: "Software, systems",
    heroAccent: "and cybersecurity.",
    heroDescription:
      "Software Engineering student and IT support professional. I build projects with Rust, Python, C and JavaScript while developing my path into Information Security.",
    viewWork: "Explore my projects",
    projectIndex: "IN FOCUS",
    indexDescription: "Open source. Technical context. Hands-on learning.",
    workLabel: "Projects",
    workTitle: "From idea to implementation.",
    workDescription:
      "Selected projects across systems, development and security — with the thinking behind the code.",
    filters: {
      all: "All",
      systems: "Systems",
      web: "Web",
      security: "Security",
    },
    filterLabel: "Filter projects",
    featured: "FEATURED PROJECT",
    details: "Learn more",
    sourceCode: "Source on GitHub",
    allRepos: "All repositories",
    aboutLabel: "About",
    aboutTitle: "Software foundations. A direction in security.",
    aboutFirst:
      "I study Software Engineering at UniCesumar and work in Help Desk N1 at an ISP/IoT company.",
    aboutSecond:
      "My stack includes Rust, Python, C and JavaScript, along with HTML and CSS. My professional goal is a career in Information Security, exploring cyber defense, authorized offensive security and collaboration between these disciplines.",
    careerLabel: "Career interests",
    careerAria: "Cybersecurity career interests",
    stackLabel: "Toolkit",
    stackTitle: "Tools with a purpose.",
    stackDescription:
      "My programming foundations and the technologies I use and continue learning.",
    stackNames: {
      languages: "Languages",
      web: "Web development",
      systems: "Systems & tools",
    },
    goalsLabel: "Goals",
    goalsTitle: "The next step is to keep learning.",
    goalsDescription:
      "Foundations, practice and projects as part of my cybersecurity journey.",
    goals: [
      {
        title: "Industry certifications",
        description:
          "I actively pursue certifications to strengthen my foundations. CompTIA Network+ and Security+ are examples of learning goals, as I continue exploring credentials aligned with my career.",
      },
      {
        title: "Labs & CTFs",
        description:
          "Practice in authorized environments, explore security tools and document the approaches and lessons learned from each challenge.",
      },
      {
        title: "Knowledge into projects",
        description:
          "Build security-focused projects that demonstrate technical knowledge, with reproducible instructions, clear results and documented limitations.",
      },
    ],
    goalNote:
      "The certifications mentioned are learning goals, not credentials already earned.",
    contactLabel: "Contact",
    contactTitle: "Let’s connect.",
    contactDescription:
      "Projects, opportunities and thoughtful conversations about technology and security. Find me here.",
    contactButton: "Connect on LinkedIn",
    footer: "Software, systems and continuous learning.",
    top: "Back to top",
    caseLabel: "Project case study",
    back: "Back to projects",
    overview: "Context & objective",
    features: "What it does",
    architecture: "How it works",
    decisions: "Technical decisions",
    lessons: "What this project practices",
    limitations: "Limitations & scope",
    technologies: "Technologies",
    category: "Discipline",
    platform: "Environment",
    readme: "Original documentation",
    moreProjects: "Keep exploring",
    sourceNote:
      "Description based on the repository’s public documentation. Read the README for current requirements and setup instructions.",
    visualCaption:
      "An explanatory architecture diagram — not a screenshot or a live execution.",
    artLabels: {
      hardware: "COLLECT → IDENTIFY → SENSORS → TERMINAL",
      web: "BROWSER → API → PERSISTENCE",
      scanner: "CONFIGURE → TCP / UDP → REPORT",
    },
  },
};

export type Project = {
  slug: string;
  repositoryUrl?: string;
  name: string;
  category: Category;
  visual: "hardware" | "web" | "scanner";
  stack: string[];
  platform: Localized<string>;
  summary: Localized<string>;
  overview: Localized<string[]>;
  features: Localized<string[]>;
  flow: Localized<{ title: string; text: string }[]>;
  decisions: Localized<{ title: string; text: string }[]>;
  lessons: Localized<string[]>;
  limitations: Localized<string[]>;
};

export const projects: Project[] = [
  {
    slug: "hardware-monitor",
    name: "Hardware Monitor",
    category: "systems",
    visual: "hardware",
    stack: [
      "Rust",
      "sysinfo",
      "crossterm",
      "DXGI / WMI",
      "PowerShell",
      "LibreHardwareMonitor",
    ],
    platform: {
      pt: "Windows 10/11 · terminal",
      en: "Windows 10/11 · terminal",
    },
    summary: {
      pt: "Um monitor de CPU, RAM e GPU para Windows, construído em Rust com integração a sensores e APIs nativas.",
      en: "A Windows CPU, RAM and GPU monitor, built in Rust with native APIs and hardware sensor integration.",
    },
    overview: {
      pt: [
        "O projeto reúne informações de hardware em uma interface de terminal compacta, inspirada na apresentação de ferramentas como htop e neofetch. O objetivo é acompanhar CPU, memória e GPU sem depender de uma interface gráfica separada.",
        "Além da apresentação, o desafio está na coleta: utilização, temperatura e frequência vêm de fontes diferentes. O programa cruza essas fontes e evita atribuir uma leitura à GPU errada ou inventar valores quando um sensor não está disponível.",
      ],
      en: [
        "This project brings hardware information into a compact terminal interface, inspired by the presentation of tools such as htop and neofetch. Its objective is to inspect CPU, memory and GPU readings without relying on a separate graphical interface.",
        "The challenge goes beyond presentation: utilization, temperature and clock readings come from different sources. The program reconciles those sources and avoids assigning a reading to the wrong GPU or inventing values when a sensor is unavailable.",
      ],
    },
    features: {
      pt: [
        "Modelo da CPU, núcleos físicos, processadores lógicos e utilização geral.",
        "Memória RAM usada e total em GiB.",
        "Nome da GPU, utilização, temperatura do núcleo e frequência atual.",
        "Atualização aproximada de um segundo e modo --once para uma leitura única.",
        "Indicação N/A para sensores indisponíveis ou identificação ambígua.",
      ],
      en: [
        "CPU model, physical cores, logical processors and overall utilization.",
        "Used and total RAM in GiB.",
        "GPU name, utilization, core temperature and current clock.",
        "Approximately one-second refresh and a --once snapshot mode.",
        "N/A for unavailable sensors or ambiguous identification.",
      ],
    },
    flow: {
      pt: [
        {
          title: "Coleta",
          text: "sysinfo fornece informações de CPU e RAM. DXGI identifica GPUs de hardware e seus identificadores locais, excluindo adaptadores de software.",
        },
        {
          title: "Contadores e sensores",
          text: "WMI agrupa contadores de engines da GPU. Um helper persistente em PowerShell carrega o LibreHardwareMonitor e troca snapshots JSON com o processo Rust.",
        },
        {
          title: "Correspondência",
          text: "Identificadores PCI de fabricante, dispositivo e subsistema ajudam a relacionar os sensores aos adaptadores. Correspondências ambíguas não recebem valores arbitrários.",
        },
        {
          title: "Apresentação",
          text: "crossterm reposiciona o cursor para atualizar as medições sem redesenhar continuamente o banner e as informações estáticas.",
        },
      ],
      en: [
        {
          title: "Collection",
          text: "sysinfo supplies CPU and RAM information. DXGI identifies hardware GPUs and their local identifiers, excluding software adapters.",
        },
        {
          title: "Counters & sensors",
          text: "WMI groups GPU engine counters. A persistent PowerShell helper loads LibreHardwareMonitor and exchanges JSON snapshots with the Rust process.",
        },
        {
          title: "Matching",
          text: "PCI vendor, device and subsystem identifiers help relate sensors to adapters. Ambiguous matches are not assigned arbitrary readings.",
        },
        {
          title: "Presentation",
          text: "crossterm restores the cursor position to refresh measurements without repeatedly redrawing the banner and static information.",
        },
      ],
    },
    decisions: {
      pt: [
        {
          title: "Dados ausentes não são zero",
          text: "Zero pode ser uma leitura válida. N/A significa que não existe um valor utilizável — uma distinção importante para não esconder falhas de coleta.",
        },
        {
          title: "Helper persistente",
          text: "A ponte PowerShell/.NET permite usar a biblioteca de sensores a partir de Rust sem iniciar uma nova coleta em um processo separado a cada atualização.",
        },
        {
          title: "Dependências verificadas",
          text: "O setup valida downloads por SHA-256 e verifica a assinatura Authenticode do instalador PawnIO, em vez de confiar apenas no arquivo baixado.",
        },
      ],
      en: [
        {
          title: "Missing data is not zero",
          text: "Zero can be a valid reading. N/A means no usable value is available — an important distinction that keeps collection failures visible.",
        },
        {
          title: "Persistent helper",
          text: "The PowerShell/.NET bridge lets Rust use the sensor library without starting a separate process for every refresh.",
        },
        {
          title: "Verified dependencies",
          text: "Setup checks download SHA-256 values and validates the PawnIO installer’s Authenticode signature, rather than trusting the downloaded file alone.",
        },
      ],
    },
    lessons: {
      pt: [
        "Integração entre Rust, APIs Windows e processos externos.",
        "Identificação de hardware, desserialização JSON e tratamento de dados incompletos.",
        "Separação entre coleta, correspondência de sensores e apresentação no terminal.",
      ],
      en: [
        "Integrating Rust, Windows APIs and external processes.",
        "Hardware identification, JSON deserialization and incomplete-data handling.",
        "Separating collection, sensor matching and terminal presentation.",
      ],
    },
    limitations: {
      pt: [
        "A implementação atual é exclusiva para Windows; Linux está no planejamento, não implementado.",
        "Temperatura da CPU depende de PawnIO e execução com privilégios de administrador. Compatibilidade varia conforme hardware e drivers.",
        "GPUs com identificadores idênticos podem continuar ambíguas. Detecção de hot-plug e layout adaptativo não estão implementados.",
      ],
      en: [
        "The current implementation is Windows-only; Linux support is planned, not implemented.",
        "CPU temperature depends on PawnIO and administrator privileges. Compatibility varies with hardware and drivers.",
        "GPUs with identical identifiers can remain ambiguous. Hot-plug detection and adaptive layout are not implemented.",
      ],
    },
  },
  {
    slug: "cybershield-website",
    name: "CyberShield",
    category: "web",
    visual: "web",
    stack: [
      "HTML / CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "SQLite",
      "scrypt",
    ],
    platform: {
      pt: "Aplicação full-stack local",
      en: "Local full-stack application",
    },
    summary: {
      pt: "Uma aplicação de aprendizado full-stack com autenticação, sessões protegidas e persistência em SQLite.",
      en: "A full-stack learning application with authentication, protected sessions and SQLite persistence.",
    },
    overview: {
      pt: [
        "CyberShield é um projeto de aprendizado que conecta interface, API e banco de dados. A apresentação usa uma marca fictícia de segurança, mas o trabalho técnico está nos fluxos reais de cadastro, login, perfil e histórico de solicitações.",
        "O projeto vai além de uma tela demonstrativa: valida credenciais no backend, persiste dados e restringe o histórico ao usuário autenticado. Não é um serviço de proteção em produção; criar uma conta não ativa monitoramento ou segurança.",
      ],
      en: [
        "CyberShield is a learning project connecting the interface, API and database. Its presentation uses a fictional security brand, while the technical work is in real registration, login, profile and request-history flows.",
        "It goes beyond a demonstration screen: credentials are verified on the backend, data persists and request history is restricted to the authenticated owner. It is not a production protection service; creating an account does not activate monitoring or security.",
      ],
    },
    features: {
      pt: [
        "Cadastro, verificação de senha, login, logout e rotação de sessões.",
        "Dashboard protegido, edição de nome/empresa e histórico por usuário.",
        "Formulário de contato com armazenamento local em SQLite.",
        "Validação de entrada, consultas SQL parametrizadas e verificação de CSRF/origem.",
        "Navegação responsiva, estados de carregamento/erro e controles acessíveis.",
      ],
      en: [
        "Registration, password verification, login, logout and session rotation.",
        "Protected dashboard, editable name/company and owner-scoped history.",
        "Contact form with local SQLite persistence.",
        "Input validation, parameterized SQL and CSRF/origin checks.",
        "Responsive navigation, loading/error states and accessible controls.",
      ],
    },
    flow: {
      pt: [
        {
          title: "Interface",
          text: "HTML, CSS e módulos JavaScript em public/ compõem as páginas. Os módulos usam Fetch para conversar com a API, em vez de simular autenticação apenas no navegador.",
        },
        {
          title: "API e validação",
          text: "Express processa as rotas de sessão, autenticação, perfil e solicitações. As operações de alteração exigem token CSRF e validação no servidor.",
        },
        {
          title: "Autenticação",
          text: "Senhas passam por scrypt assíncrono com salt. Cookies HttpOnly carregam identificadores de sessão; o banco armazena apenas digests dos tokens aleatórios.",
        },
        {
          title: "Persistência",
          text: "SQLite armazena perfis e solicitações. O backend define o proprietário e o estado inicial dos registros, evitando confiar nesses campos enviados pelo cliente.",
        },
      ],
      en: [
        {
          title: "Interface",
          text: "HTML, CSS and JavaScript modules in public/ implement the pages. Fetch connects them to the API instead of pretending authentication happens only in the browser.",
        },
        {
          title: "API & validation",
          text: "Express handles session, authentication, profile and inquiry routes. Mutations require a CSRF token and server-side validation.",
        },
        {
          title: "Authentication",
          text: "Passwords use asynchronous salted scrypt. HttpOnly cookies carry session identifiers; the database stores only digests of random session tokens.",
        },
        {
          title: "Persistence",
          text: "SQLite stores profiles and inquiries. The backend assigns record ownership and initial status rather than trusting those fields from the client.",
        },
      ],
    },
    decisions: {
      pt: [
        {
          title: "Fronteiras de responsabilidade",
          text: "A interface comunica estados; o backend verifica credenciais, valida entradas e controla a autorização. Validação no frontend não substitui esses controles.",
        },
        {
          title: "Dados fora da pasta pública",
          text: "Backend, banco de dados e documentação ficam separados dos arquivos servidos ao navegador. O diretório público é limitado aos recursos da interface.",
        },
        {
          title: "Defesas em camadas",
          text: "Sessões rotacionadas, consultas parametrizadas, CSRF, Helmet/CSP e limites de requisição abordam problemas diferentes. Os testes documentados não equivalem a uma auditoria completa.",
        },
      ],
      en: [
        {
          title: "Responsibility boundaries",
          text: "The interface communicates state; the backend verifies credentials, validates input and controls authorization. Frontend validation does not replace those controls.",
        },
        {
          title: "Data outside the public directory",
          text: "The backend, database and documentation are separate from browser-served files. The public directory contains only interface resources.",
        },
        {
          title: "Layered defenses",
          text: "Rotated sessions, parameterized queries, CSRF, Helmet/CSP and request limits address different problems. The documented tests are not a comprehensive security audit.",
        },
      ],
    },
    lessons: {
      pt: [
        "Fluxo real navegador → HTTP → API → banco de dados.",
        "Autenticação, autorização por proprietário e persistência de sessões.",
        "Testes de integração e limites entre demonstração local e operação em produção.",
      ],
      en: [
        "The real browser → HTTP → API → database flow.",
        "Authentication, owner-scoped authorization and session persistence.",
        "Integration testing and the boundary between a local demo and production operation.",
      ],
    },
    limitations: {
      pt: [
        "Aplicação local de aprendizado, não um serviço de segurança ativo.",
        "Solicitações de contato são salvas, não enviadas por e-mail. MFA, recuperação de senha e verificação de e-mail não estão implementados.",
        "SQLite é síncrono e os limites são por processo. Publicação do backend exige revisão de HTTPS, origem, operação e backup; GitHub Pages não executa esse backend.",
      ],
      en: [
        "A local learning application, not an active security service.",
        "Contact requests are stored, not emailed. MFA, password recovery and email verification are not implemented.",
        "SQLite is synchronous and limits are process-local. Backend deployment requires HTTPS, origin, operational and backup review; GitHub Pages does not run this backend.",
      ],
    },
  },
  {
    slug: "simple-port-scanner",
    repositoryUrl: "https://github.com/volpszz/port-scanner",
    name: "TCP/UDP Port Scanner",
    category: "security",
    visual: "scanner",
    stack: ["Python", "socket", "TCP / UDP", "unittest"],
    platform: {
      pt: "Python 3.10+ · terminal · IPv4",
      en: "Python 3.10+ · terminal · IPv4",
    },
    summary: {
      pt: "Um scanner TCP/UDP educacional em Python, com arquitetura modular, CLI configurável, testes automatizados e guia de estudo.",
      en: "An educational Python TCP/UDP scanner with a modular architecture, configurable CLI, automated tests and a study guide.",
    },
    overview: {
      pt: [
        "O port-scanner explora conexões TCP, sondagens UDP e resolução de nomes IPv4 com a biblioteca padrão do Python, sem dependências externas de execução. O objetivo é estudar redes e interpretar respostas sem confundir silêncio, recusa e confirmação de uma porta aberta.",
        "A implementação foi organizada no pacote port_scanner, separando configuração, sondagens, orquestração e interface. Pode ser usada pelo menu interativo, por argumentos de linha de comando ou como biblioteca. O repositório inclui testes automatizados, documentação de arquitetura e um guia detalhado em português, em Markdown e PDF.",
      ],
      en: [
        "port-scanner explores TCP connections, UDP probes and IPv4 hostname resolution using Python’s standard library, with no third-party runtime dependencies. Its goal is to study networking and interpret responses without confusing silence, refusal and confirmation of an open port.",
        "The implementation is organized in the port_scanner package, separating configuration, probes, orchestration and the interface. It supports an interactive menu, command-line arguments and library use. The repository includes automated tests, architecture documentation and a detailed Portuguese study guide in Markdown and PDF.",
      ],
    },
    features: {
      pt: [
        "Menu interativo e CLI via python main.py ou python -m port_scanner, com TCP, UDP ou ambos.",
        "Alvo IPv4 ou hostname, portas configuráveis por --ports e timeout por --timeout; --protocol seleciona os protocolos.",
        "Resultados no formato porta/protocolo: estado, distinguindo open, closed, filtered/unknown, open|filtered e erros de rede.",
        "Configuração validada antes da resolução do alvo, remoção de portas repetidas sem alterar a ordem e fechamento de sockets por context managers.",
        "Testes com unittest por camada e integração com sockets reais em 127.0.0.1, sem depender de hosts públicos.",
      ],
      en: [
        "Interactive menu and CLI through python main.py or python -m port_scanner, with TCP, UDP or both.",
        "IPv4 address or hostname target, configurable --ports and --timeout; --protocol selects the protocols.",
        "Results formatted as port/protocol: state, distinguishing open, closed, filtered/unknown, open|filtered and network errors.",
        "Configuration validated before target resolution, duplicate ports removed without reordering and sockets closed through context managers.",
        "Layered unittest coverage and integration with real sockets on 127.0.0.1, without relying on public hosts.",
      ],
    },
    flow: {
      pt: [
        {
          title: "Configurar",
          text: "cli.py interpreta argumentos ou o menu e cria ScanConfig em config.py. Alvo, portas, protocolos e timeout são validados; os padrões continuam sendo 53, 22, 80, 111, 139, 443 e 32768, com timeout de 1 segundo por operação de socket.",
        },
        {
          title: "Resolver e orquestrar",
          text: "scanner.py resolve o alvo uma vez para um endereço IPv4 e produz resultados por um gerador. A execução é sequencial: para cada porta, percorre os protocolos solicitados na ordem configurada.",
        },
        {
          title: "Sondar TCP e UDP",
          text: "probes.py usa connect_ex no TCP e envia o datagrama genérico b'probe' no UDP, aguardando resposta. Cada socket recebe seu próprio timeout antes das operações e é fechado mesmo em caso de exceção.",
        },
        {
          title: "Interpretar e apresentar",
          text: "ScanResult reúne endereço, porta, protocolo e estado. A CLI imprime resultados em stdout e erros de configuração, resolução ou interrupção em stderr; um erro de rede individual não interrompe as próximas sondagens.",
        },
      ],
      en: [
        {
          title: "Configure",
          text: "cli.py parses arguments or the menu and creates ScanConfig in config.py. Target, ports, protocols and timeout are validated; defaults remain 53, 22, 80, 111, 139, 443 and 32768, with a 1-second timeout per socket operation.",
        },
        {
          title: "Resolve & orchestrate",
          text: "scanner.py resolves the target once to one IPv4 address and yields results through a generator. Execution is sequential: for each port, it iterates over the requested protocols in configured order.",
        },
        {
          title: "Probe TCP & UDP",
          text: "probes.py uses connect_ex for TCP and sends the generic b'probe' UDP datagram, waiting for a response. Each socket receives its own timeout before operations and is closed even on exceptions.",
        },
        {
          title: "Interpret & present",
          text: "ScanResult holds the address, port, protocol and state. The CLI prints results to stdout and configuration, resolution or interruption errors to stderr; an individual network error does not stop subsequent probes.",
        },
      ],
    },
    decisions: {
      pt: [
        {
          title: "Módulos com responsabilidades claras",
          text: "Configuração e resultados imutáveis separam regras de entrada da execução. O scanner não conhece o terminal; connection.py preserva nomes legados como fachada, sem duplicar sondagens.",
        },
        {
          title: "Estados sem falsa certeza",
          text: "TCP aberto exige conexão aceita; UDP aberto exige resposta. Timeout TCP produz filtered/unknown e silêncio UDP produz open|filtered, sem afirmar que existe firewall ou que a porta está fechada.",
        },
        {
          title: "Simplicidade e testabilidade",
          text: "Biblioteca padrão, execução sequencial e funções substituíveis mantêm o fluxo legível. Os testes isolam configuração, CLI e orquestração, além de exercitar TCP e UDP no loopback.",
        },
      ],
      en: [
        {
          title: "Clear module responsibilities",
          text: "Immutable configuration and results separate input rules from execution. The scanner does not know about the terminal; connection.py preserves legacy names as a facade without duplicating probes.",
        },
        {
          title: "States without false certainty",
          text: "Open TCP requires an accepted connection; open UDP requires a response. A TCP timeout produces filtered/unknown and UDP silence produces open|filtered, without claiming a firewall exists or the port is closed.",
        },
        {
          title: "Simplicity & testability",
          text: "The standard library, sequential execution and replaceable functions keep the flow readable. Tests isolate configuration, CLI and orchestration, and exercise TCP and UDP on loopback.",
        },
      ],
    },
    lessons: {
      pt: [
        "Sockets TCP/UDP, resolução IPv4 e interpretação de recusas, respostas e timeouts.",
        "Arquitetura modular, configuração imutável, geradores e separação entre biblioteca e CLI.",
        "Testes unitários e de integração locais, compatibilidade e documentação técnica reproduzível.",
        "Reconhecimento responsável e limites do que uma sondagem realmente demonstra.",
      ],
      en: [
        "TCP/UDP sockets, IPv4 resolution and interpretation of refusals, responses and timeouts.",
        "Modular architecture, immutable configuration, generators and library/CLI separation.",
        "Local unit and integration tests, compatibility and reproducible technical documentation.",
        "Responsible reconnaissance and the limits of what a probe actually demonstrates.",
      ],
    },
    limitations: {
      pt: [
        "Uso somente em sistemas próprios ou com autorização explícita. O programa não verifica essa autorização; conexões e sondagens podem gerar logs e alertas.",
        "Apenas IPv4 e um endereço por alvo, com execução sequencial. Não há IPv6, SYN scan, descoberta de hosts, varredura de sub-redes ou paralelismo; --ports aceita números separados por vírgulas, não intervalos.",
        "O payload UDP genérico pode ser ignorado por serviços abertos; ausência de resposta não distingue porta aberta de tráfego filtrado. A entrega de recusas UDP depende do sistema operacional.",
        "O timeout vale por operação de socket, não é um prazo global e não limita a resolução DNS. A validação documentada foi feita em Linux com Python 3.14.7; outras versões não foram exercitadas nessa validação.",
        "Não identifica serviços, versões ou vulnerabilidades e não substitui ferramentas especializadas ou uma avaliação de segurança. O portfólio apenas apresenta o projeto; não executa varreduras.",
      ],
      en: [
        "Use only on owned systems or with explicit authorization. The program does not verify that authorization; connections and probes may generate logs and alerts.",
        "IPv4 only, one address per target and sequential execution. No IPv6, SYN scans, host discovery, subnet scans or parallelism; --ports accepts comma-separated numbers, not ranges.",
        "Open services may ignore the generic UDP payload; no response cannot distinguish an open port from filtered traffic. UDP refusal delivery depends on the operating system.",
        "The timeout applies per socket operation, not as a global deadline, and does not bound DNS resolution. Documented validation used Linux with Python 3.14.7; other versions were not exercised in that validation.",
        "It does not identify services, versions or vulnerabilities and does not replace specialized tools or a security assessment. The portfolio only presents the project; it does not run scans.",
      ],
    },
  },
];
