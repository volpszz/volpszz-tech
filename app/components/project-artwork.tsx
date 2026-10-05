import type { Locale, Project } from "../content";
import { copy } from "../content";

export function ProjectArtwork({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  const t = copy[locale];
  const toolbar = {
    hardware:
      locale === "pt"
        ? "hardware-monitor / arquitetura"
        : "hardware-monitor / architecture",
    web:
      locale === "pt"
        ? "cybershield / fluxo HTTP"
        : "cybershield / request flow",
    scanner: "port-scanner / TCP",
  };
  return (
    <figure className={`project-artwork artwork-${project.visual}`}>
      <div className="artifact-frame" aria-hidden="true">
        <div className="artifact-toolbar">
          <span className="window-dots">
            <i />
            <i />
            <i />
          </span>
          <span>{toolbar[project.visual]}</span>
          <span className="artifact-language">{project.stack[0]}</span>
        </div>
        {project.visual === "hardware" ? (
          <div className="hardware-diagram">
            <div className="diagram-title">
              Hardware Monitor<span>CPU / RAM / GPU</span>
            </div>
            <div className="diagram-row">
              <span>sysinfo</span>
              <i>→</i>
              <strong>Rust</strong>
              <i>→</i>
              <span>crossterm</span>
            </div>
            <div className="diagram-row lower">
              <span>DXGI + WMI</span>
              <i>↗</i>
              <span>JSON</span>
              <i>↖</i>
              <span>PowerShell</span>
            </div>
            <div className="diagram-foot">
              {locale === "pt"
                ? "APIs nativas. Sensores reais. Valores ausentes explícitos."
                : "Native APIs. Real sensors. Explicit missing values."}
            </div>
          </div>
        ) : project.visual === "web" ? (
          <div className="web-diagram">
            <div className="diagram-title">
              CyberShield<span>HTTP / SESSIONS / SQLITE</span>
            </div>
            <div className="request-line">
              <b>POST</b>
              <code>/api/auth/login</code>
            </div>
            <div className="request-line">
              <b>GET</b>
              <code>/api/session</code>
            </div>
            <div className="flow-chips">
              <span>{locale === "pt" ? "Navegador" : "Browser"}</span>
              <i>→</i>
              <span>Express</span>
              <i>→</i>
              <span>SQLite</span>
            </div>
          </div>
        ) : (
          <div className="scanner-diagram">
            <div className="diagram-title">
              TCP Port Scanner<span>PYTHON / SOCKET</span>
            </div>
            <pre>
              <code>
                <span className="code-muted">
                  # {locale === "pt" ? "Conceito central" : "Core concept"}
                </span>
                {"\n"}result = s.connect_ex((rHostIP, ports))
              </code>
            </pre>
            <div className="scan-flow">
              <span>{locale === "pt" ? "Resolver" : "Resolve"}</span>
              <i>→</i>
              <span>TCP</span>
              <i>→</i>
              <span>{locale === "pt" ? "Reportar" : "Report"}</span>
            </div>
            <div className="diagram-foot">
              {locale === "pt"
                ? "Somente alvos autorizados."
                : "Authorized targets only."}
            </div>
          </div>
        )}
      </div>
      <figcaption>{t.artLabels[project.visual]}</figcaption>
    </figure>
  );
}
