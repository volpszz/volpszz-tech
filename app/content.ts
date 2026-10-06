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
      scanner: "RESOLUÇÃO → CONEXÃO TCP → RESULTADO",
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
      scanner: "RESOLVE → TCP CONNECT → REPORT",
    },
  },
};

export type Project = {
  slug: string;
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
    name: "TCP Port Scanner",
    category: "security",
    visual: "scanner",
    stack: ["Python", "socket", "TCP/IP"],
    platform: {
      pt: "Ferramenta de terminal · uso educacional",
      en: "Terminal tool · educational use",
    },
    summary: {
      pt: "Um scanner TCP educacional para praticar sockets, resolução de nomes e fundamentos de redes.",
      en: "An educational TCP scanner for practicing sockets, hostname resolution and networking fundamentals.",
    },
    overview: {
      pt: [
        "Este projeto usa o módulo socket da biblioteca padrão do Python para investigar como uma conexão TCP pode indicar que uma porta aceita conexões. É um exercício direto de programação e fundamentos de reconhecimento de rede.",
        "A implementação recebe um alvo, resolve seu endereço IPv4 e percorre uma lista definida de portas. O foco é entender o mecanismo e tratar os resultados, não oferecer um scanner completo ou realizar uma auditoria de vulnerabilidades.",
      ],
      en: [
        "This project uses Python’s standard-library socket module to investigate how a TCP connection can indicate that a port accepts connections. It is a focused programming and network-reconnaissance fundamentals exercise.",
        "The implementation receives a target, resolves its IPv4 address and iterates over a predefined port list. The focus is understanding the mechanism and handling results, not providing a complete scanner or a vulnerability audit.",
      ],
    },
    features: {
      pt: [
        "Resolução de hostname para endereço IPv4.",
        "Tentativas de conexão TCP com socket.connect_ex().",
        "Detecção de portas que aceitam conexão e timeout padrão definido no código.",
        "Interrupção por teclado e resultado no terminal.",
      ],
      en: [
        "Hostname resolution to an IPv4 address.",
        "TCP connection attempts using socket.connect_ex().",
        "Identification of ports accepting connections and a default timeout set in code.",
        "Keyboard interruption and terminal output.",
      ],
    },
    flow: {
      pt: [
        {
          title: "Resolver o alvo",
          text: "O hostname ou endereço informado é convertido em um endereço IPv4 antes das tentativas de conexão.",
        },
        {
          title: "Percorrer as portas",
          text: "A lista documentada contém 53, 22, 80, 111, 139, 443 e 32768. A ferramenta percorre essas portas sequencialmente.",
        },
        {
          title: "Testar a conexão",
          text: "socket.connect_ex() devolve um código de resultado. Uma conexão aceita é reportada como uma porta aberta; timeout e falhas precisam ser tratados como resultados distintos de uma confirmação de serviço.",
        },
        {
          title: "Reportar",
          text: "O terminal mostra as portas que aceitaram conexão. A presença de uma porta aberta, sozinha, não prova uma vulnerabilidade.",
        },
      ],
      en: [
        {
          title: "Resolve the target",
          text: "The supplied hostname or address is resolved to an IPv4 address before connection attempts.",
        },
        {
          title: "Iterate over ports",
          text: "The documented list contains 53, 22, 80, 111, 139, 443 and 32768. The tool iterates over these ports sequentially.",
        },
        {
          title: "Attempt a connection",
          text: "socket.connect_ex() returns a result code. An accepted connection is reported as an open port; timeouts and failures must not be confused with confirmation of a service.",
        },
        {
          title: "Report",
          text: "The terminal reports ports accepting connections. An open port alone does not establish a vulnerability.",
        },
      ],
    },
    decisions: {
      pt: [
        {
          title: "Biblioteca padrão",
          text: "O módulo socket mantém a implementação pequena e deixa o funcionamento de TCP visível, sem esconder o exercício atrás de uma ferramenta externa.",
        },
        {
          title: "Escopo intencionalmente simples",
          text: "Uma lista de portas e testes sequenciais deixam o fluxo fácil de acompanhar. A simplicidade ajuda a estudar resolução, conexão, timeout e tratamento de erros.",
        },
      ],
      en: [
        {
          title: "Standard library",
          text: "The socket module keeps the implementation small and makes TCP behavior visible instead of hiding the exercise behind an external tool.",
        },
        {
          title: "Deliberately limited scope",
          text: "A port list and sequential checks make the flow easy to follow. This simplicity supports studying resolution, connections, timeouts and error handling.",
        },
      ],
    },
    lessons: {
      pt: [
        "Programação com sockets, códigos de retorno e timeout em Python.",
        "Conexões TCP e resolução de nomes em redes IPv4.",
        "Reconhecimento responsável e interpretação cuidadosa de resultados.",
      ],
      en: [
        "Socket programming, return codes and timeouts in Python.",
        "TCP connections and hostname resolution in IPv4 networks.",
        "Responsible reconnaissance and careful interpretation of results.",
      ],
    },
    limitations: {
      pt: [
        "Uso somente em sistemas próprios ou com autorização explícita.",
        "A implementação usa IPv4, uma lista fixa de portas e verificações sequenciais.",
        "Tratamento de erros de rede e fechamento consistente de sockets são pontos de evolução. O timeout padrão é definido após criar o socket, por isso sua aplicação à primeira conexão precisa de revisão.",
        "Não identifica versões de serviços, não verifica vulnerabilidades e não substitui ferramentas especializadas ou uma avaliação de segurança.",
      ],
      en: [
        "Use only on owned systems or with explicit authorization.",
        "The implementation uses IPv4, a fixed port list and sequential checks.",
        "Network error handling and consistent socket cleanup are areas for improvement. The default timeout is set after socket creation, so its application to the first connection needs review.",
        "It does not identify service versions, verify vulnerabilities or replace specialized tools or a security assessment.",
      ],
    },
  },
];
