import React, { useState } from 'react';

// Dynamic Translation Dictionary
const i18n = {
  en: {
    navServices: "Services",
    navCredentials: "Credentials",
    navTrackRecord: "Track Record",
    btnBook: "Book Briefing",
    heroTitleLine1: "Cloud",
    heroTitleLine2: "Architecture.",
    heroLead: "Architecting secure cloud systems, seamless workspace transitions, and high-performance engineering operations.",
    heroSub: "We operate at the intersection of corporate business strategy and core system infrastructure. Whether managing complex cloud operations or executing high-stakes migrations, we guarantee security, compliance, and zero downtime.",
    servicesSectionTag: "Core Framework",
    servicesSectionTitle: "Areas of Engagement",
    capabilitiesTag: "Capabilities",

    // Pillar 1
    p1Title: "Cloud Transitions",
    p1Subtitle: "Tenant-to-Tenant Migrations",
    p1Points: [
      "Microsoft 365 to Google Workspace cutovers",
      "Google Workspace to Microsoft 365 core migrations",
      "Full-fidelity corporate asset & document transfer",
      "Domain authentication & mail coexistence routing"
    ],

    // Pillar 2
    p2Title: "Infrastructure",
    p2Subtitle: "AWS & GCP Cloud Architecture",
    p2Points: [
      "Enterprise cloud network designs and patterns",
      "Cost optimization and resource allocation audits",
      "Identity & Access Management perimeter hardening",
      "Data governance and compliance management solutions"
    ],

    // Pillar 3
    p3Title: "Operational DevOps",
    p3Subtitle: "Reliability & Automation Engineering",
    p3Points: [
      "Automated Infrastructure as Code setups",
      "Full-pipeline continuous integration and delivery",
      "Advanced telemetry logging and cloud monitoring systems",
      "Performance stabilization for modern core services"
    ],

    credTag: "Verified Industry Authority",
    credDevOps: "Certified DevOps Professional",
    credObs: "Certified Observability Professional",

    trackTag: "Proven Engagements",
    trackTitle: "Delivered Outcomes",
    scopeTag: "Scope of Work",
    outcomeTag: "Business Outcome",

    case1Title: "Tenant Productivity Migrations",
    case1Desc: "Orchestrated the high-stakes migration of enterprise messaging systems and collaborative document structures between Google and Microsoft environments without interrupting active business lines.",
    case1Impact: "100% Data Integrity Verified / Zero Interruption to Core Operations",

    case2Title: "Cloud Environment Architecture",
    case2Desc: "Audited and redesigned cloud architecture instances on premium service providers, implementing strict principle-of-least-privilege IAM matrices and reducing monthly footprint overheads.",
    case2Impact: "Enhanced Corporate Compliance & Documented Cost Efficiency",

    case3Title: "DevOps Pipeline Optimization",
    case3Desc: "Designed and deployed robust automated testing pipelines and telemetry logging fabrics, transforming chaotic delivery patterns into stable, predictable deployment flows.",
    case3Impact: "99.9% Pipeline Stability / Elevated System Observability",

    footerTag: "Initiate Corporate Briefing",
    footerCall: "Schedule Call →",
    location: "Brno, Czech Republic",
    modalTag: "System Intake // Secure Connection Protocol",
    modalClose: "Close [X]",
    modalAlt: "Direct Routing Alternative:",
    contactEmail: "e.chetvergov@thursday-engineering.com",
    contactPhone: "+420 725 318 219",
  },
  cs: {
    navServices: "Služby",
    navCredentials: "Certifikace",
    navTrackRecord: "Výsledky",
    btnBook: "Rezervovat konzultaci",
    heroTitleLine1: "Cloudová",
    heroTitleLine2: "Architektura.",
    heroLead: "Architektura zabezpečených cloudových systémů, hladké přechody pracovních prostředí a vysoce výkonný provoz infrastruktury.",
    heroSub: "Pohybujeme se na průsečíku firemní obchodní strategie a klíčové systémové infrastruktury. Ať už spravujeme komplexní cloudový provoz nebo provádíme kritické migrace, garantujeme bezpečnost, compliance a nulové výpadky.",
    servicesSectionTag: "Základní Rámec",
    servicesSectionTitle: "Oblasti Spolupráce",
    capabilitiesTag: "Kompetence",

    // Pillar 1
    p1Title: "Cloudové Přechody",
    p1Subtitle: "Migrace mezi tenanty",
    p1Points: [
      "Přechody z Microsoft 365 na Google Workspace",
      "Migrace z Google Workspace na jádro Microsoft 365",
      "Plnohodnotný přenos firemních dat a dokumentů",
      "Autentizace domén a koexistenční směrování pošty"
    ],

    // Pillar 2
    p2Title: "Infrastruktura",
    p2Subtitle: "AWS & GCP Cloud Architektura",
    p2Points: [
      "Návrhy a vzory podnikových cloudových sítí",
      "Audity optimalizace nákladů a alokace zdrojů",
      "Zabezpečení perimetru Identity & Access Management",
      "Řešení pro správu dat a zajištění compliance"
    ],

    // Pillar 3
    p3Title: "Operativní DevOps",
    p3Subtitle: "Spolehlivost & Automatizace",
    p3Points: [
      "Automatizované nastavení Infrastructure as Code",
      "Kompletní pipeline pro kontinuální integraci a dodávku",
      "Pokročilé telemetrické logování a monitorování cloudu",
      "Stabilizace výkonu pro moderní klíčové služby"
    ],

    credTag: "Ověřená Průmyslová Autorita",
    credDevOps: "Certified DevOps Professional",
    credObs: "Certified Observability Professional",

    trackTag: "Prokázané Projekty",
    trackTitle: "Dosažené Výsledky",
    scopeTag: "Rozsah Práce",
    outcomeTag: "Obchodní Dopad",

    case1Title: "Migrace produktivity tenantů",
    case1Desc: "Řízení rizikových migrací podnikových e-mailových systémů a struktur sdílených dokumentů mezi prostředími Google a Microsoft bez přerušení aktivních obchodních procesů.",
    case1Impact: "Ověřena 100% integrita dat / Nulové narušení klíčového provozu",

    case2Title: "Architektura cloudového prostředí",
    case2Desc: "Audit a přepracování cloudové architektury u předních poskytovatelů služeb, implementace striktních IAM matic s nejnižšími oprávněními a snížení měsíčních provozních nákladů.",
    case2Impact: "Zvýšená firemní compliance & zdokumentovaná úspora nákladů",

    case3Title: "Optimalizace DevOps Pipelines",
    case3Desc: "Návrh a nasazení robustních automatizovaných testovacích nástrojů a telemetrických logovacích struktur, které transformovaly nepředvídatelné nasazování do stabilních toků.",
    case3Impact: "99.9% stabilita pipeline / Zvýšená observabilita systému",

    footerTag: "Zahájit firemní briefing",
    footerCall: "Plánovat hovor →",
    location: "Brno, Česká republika",
    modalTag: "Systémový Příjem // Protokol Zabezpečeného Připojení",
    modalClose: "Zavřít [X]",
    modalAlt: "Alternativní přímé spojení:",
    contactEmail: "e.chetvergov@thursday-engineering.com",
    contactPhone: "+420 123 456 789",
  }
};

const MonolithT = () => (
  <div className="flex flex-col gap-0 select-none flex-shrink-0" aria-hidden="true">
    <div className="w-12 h-3 bg-black"></div>
    <div className="w-3 h-8 bg-black ml-[18px]"></div>
  </div>
);

const ServicePillar = ({ number, title, subtitle, points, capTag }) => (
  <div className="border border-black p-8 flex flex-col justify-between h-full bg-white hover:shadow-[4px_4px_0px_0px_#0047AB] transition-all">
    <div>
      <div className="flex justify-between items-baseline border-b border-black/10 pb-4 mb-6">
        <span className="font-mono text-xs font-bold text-[#0047AB]">{number}</span>
        <span className="text-[9px] font-mono font-bold uppercase text-black/30">{capTag}</span>
      </div>
      <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-2 leading-none">{title}</h3>
      <p className="text-xs font-bold text-black/50 font-mono uppercase tracking-wider mb-6">{subtitle}</p>
      <ul className="flex flex-col gap-3">
        {points.map((pt, i) => (
          <li key={i} className="text-sm text-black/80 font-medium flex items-start gap-2">
            <span className="text-[#0047AB] font-bold">—</span> {pt}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const CaseStudyLog = ({ number, title, description, businessImpact, scopeLabel, outcomeLabel }) => (
  <div className="py-14 border-b border-black/10 last:border-0 hover:bg-black/[0.01] transition-colors px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8 items-start">
      <div className="col-span-12 md:col-span-3">
        <span className="font-mono text-xs font-bold text-[#0047AB] mb-2 block">{number}</span>
        <h3 className="text-xl font-black uppercase tracking-tight leading-tight text-black">{title}</h3>
      </div>
      <div className="col-span-12 md:col-span-5">
        <p className="text-[10px] font-mono uppercase tracking-widest text-black/40 mb-3 font-bold">{scopeLabel}</p>
        <p className="text-base font-normal leading-relaxed text-black/80">{description}</p>
      </div>
      <div className="col-span-12 md:col-span-4">
        <p className="text-[10px] font-mono uppercase tracking-widest text-black/40 mb-3 font-bold">{outcomeLabel}</p>
        <p className="text-base font-bold text-black uppercase tracking-tight">{businessImpact}</p>
      </div>
    </div>
  </div>
);

export default function App() {
  const [lang, setLang] = useState('en');
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = i18n[lang];

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased selection:bg-[#0047AB] selection:text-white">

      {/* HEADER */}
      <header className="py-6 px-8 border-b border-black/10 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-8">

          {/* BRAND */}
          <div className="flex items-center flex-shrink-0">
            <MonolithT />
            <div className="flex flex-col ml-6">
              <span className="text-sm font-black uppercase tracking-tighter leading-none">Thursday</span>
              <span className="text-sm font-bold uppercase tracking-widest leading-none opacity-40 text-[9px] mt-1">Engineering</span>
            </div>
          </div>

          {/* NAVIGATION & CONTROLS */}
          <nav className="flex items-center gap-6 md:gap-12 ml-auto flex-shrink-0">
            <a href="#services" className="group flex flex-col items-start hidden md:flex">
              <span className="text-[10px] font-bold text-[#0047AB] mb-1">01</span>
              <span className="text-xs font-bold uppercase tracking-wider group-hover:underline underline-offset-4">{t.navServices}</span>
            </a>
            <a href="#credentials" className="group flex flex-col items-start hidden md:flex">
              <span className="text-[10px] font-bold text-[#0047AB] mb-1">02</span>
              <span className="text-xs font-bold uppercase tracking-wider group-hover:underline underline-offset-4">{t.navCredentials}</span>
            </a>
            <a href="#track-record" className="group flex flex-col items-start hidden md:flex">
              <span className="text-[10px] font-bold text-[#0047AB] mb-1">03</span>
              <span className="text-xs font-bold uppercase tracking-wider group-hover:underline underline-offset-4">{t.navTrackRecord}</span>
            </a>

            {/* LANGUAGE SWITCHER */}
            <div className="flex items-center border border-black p-1 font-mono text-[10px] font-bold bg-neutral-50">
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-1 transition-all ${lang === 'en' ? 'bg-black text-white' : 'text-black/40 hover:text-black'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('cs')}
                className={`px-2 py-1 transition-all ${lang === 'cs' ? 'bg-black text-white' : 'text-black/40 hover:text-black'}`}
              >
                CS
              </button>
            </div>

            <button
              onClick={() => setIsConnectOpen(true)}
              className="bg-black text-white px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#0047AB] transition-all hidden sm:block"
            >
              {t.btnBook}
            </button>

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex flex-col gap-1.5 md:hidden ml-2"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </nav>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-black/10 mt-4 pt-4 flex flex-col gap-4 px-2">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-[#0047AB] font-mono">01</span>
              <span className="text-xs font-bold uppercase tracking-wider">{t.navServices}</span>
            </a>
            <a href="#credentials" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-[#0047AB] font-mono">02</span>
              <span className="text-xs font-bold uppercase tracking-wider">{t.navCredentials}</span>
            </a>
            <a href="#track-record" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-[#0047AB] font-mono">03</span>
              <span className="text-xs font-bold uppercase tracking-wider">{t.navTrackRecord}</span>
            </a>
            <button
              onClick={() => { setIsConnectOpen(true); setMobileMenuOpen(false); }}
              className="bg-black text-white px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#0047AB] transition-all w-full text-left"
            >
              {t.btnBook}
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="py-40 px-8 max-w-6xl mx-auto">
        <h2 className="text-7xl md:text-[9rem] font-black tracking-tighter leading-[0.85] mb-16 uppercase">
          {t.heroTitleLine1} <br /> {t.heroTitleLine2}
        </h2>
        <div className="max-w-3xl border-l-8 border-[#0047AB] pl-10">
          <p className="text-2xl md:text-3xl font-bold leading-tight mb-6 text-black/90">
            {t.heroLead}
          </p>
          <p className="text-lg font-normal text-black/60 leading-relaxed">
            {t.heroSub}
          </p>
        </div>
      </section>

      {/* SERVICES PILLARS */}
      <section id="services" className="py-32 px-8 border-t border-black/10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="font-mono text-[10px] uppercase tracking-widest font-bold text-black/30 mb-2">{t.servicesSectionTag}</p>
            <h2 className="text-4xl font-black uppercase tracking-tight">{t.servicesSectionTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServicePillar
              number="01"
              title={t.p1Title}
              subtitle={t.p1Subtitle}
              points={t.p1Points}
              capTag={t.capabilitiesTag}
            />
            <ServicePillar
              number="02"
              title={t.p2Title}
              subtitle={t.p2Subtitle}
              points={t.p2Points}
              capTag={t.capabilitiesTag}
            />
            <ServicePillar
              number="03"
              title={t.p3Title}
              subtitle={t.p3Subtitle}
              points={t.p3Points}
              capTag={t.capabilitiesTag}
            />
          </div>
        </div>
      </section>

      {/* CREDENTIALS — only real, verified certs */}
      <section id="credentials" className="py-20 px-8 border-t border-b border-black/10 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] font-mono uppercase tracking-widest font-bold text-white/40 mb-10">{t.credTag}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-1 border-l-2 border-[#0047AB] pl-4">
              <span className="text-[9px] font-mono text-white/40 uppercase">Oracle Cloud Infrastructure</span>
              <span className="font-bold text-base tracking-tight">{t.credDevOps}</span>
              <span className="text-[9px] font-mono text-[#0047AB] font-bold mt-1">VALID // OCT 2027</span>
            </div>
            <div className="flex flex-col gap-1 border-l-2 border-[#0047AB] pl-4">
              <span className="text-[9px] font-mono text-white/40 uppercase">Oracle Cloud Infrastructure</span>
              <span className="font-bold text-base tracking-tight">{t.credObs}</span>
              <span className="text-[9px] font-mono text-[#0047AB] font-bold mt-1">VALID // OCT 2027</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRACK RECORD */}
      <section id="track-record" className="bg-white">
        <div className="max-w-6xl mx-auto py-20 px-6">
          <p className="font-mono text-[10px] uppercase tracking-widest font-bold text-black/30 mb-4 underline decoration-[#0047AB] decoration-4 underline-offset-8">{t.trackTag}</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">{t.trackTitle}</h2>
        </div>

        <CaseStudyLog
          number="01"
          title={t.case1Title}
          description={t.case1Desc}
          businessImpact={t.case1Impact}
          scopeLabel={t.scopeTag}
          outcomeLabel={t.outcomeTag}
        />
        <CaseStudyLog
          number="02"
          title={t.case2Title}
          description={t.case2Desc}
          businessImpact={t.case2Impact}
          scopeLabel={t.scopeTag}
          outcomeLabel={t.outcomeTag}
        />
        <CaseStudyLog
          number="03"
          title={t.case3Title}
          description={t.case3Desc}
          businessImpact={t.case3Impact}
          scopeLabel={t.scopeTag}
          outcomeLabel={t.outcomeTag}
        />
      </section>

      {/* FOOTER */}
      <footer className="py-24 px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          <div className="max-w-xl">
            <p className="text-[10px] font-mono uppercase tracking-widest mb-10 opacity-40">{t.footerTag}</p>
            <div className="flex flex-col gap-6">
              <button onClick={() => setIsConnectOpen(true)} className="text-left text-5xl md:text-7xl font-black hover:text-[#0047AB] transition-colors leading-none tracking-tighter uppercase">
                {t.footerCall}
              </button>
              <a href="https://www.linkedin.com/in/evgeny-chetvergov-29b108203/" target="_blank" rel="noreferrer" className="text-3xl md:text-5xl font-black opacity-30 hover:opacity-100 hover:text-[#0047AB] transition-all leading-none tracking-tighter uppercase">
                LinkedIn Profile
              </a>
              {/* EMAIL */}
              <a
                href={`mailto:${t.contactEmail}`}
                className="text-xl md:text-2xl font-black opacity-30 hover:opacity-100 hover:text-[#0047AB] transition-all leading-none tracking-tighter lowercase"
              >
                {t.contactEmail}
              </a>
              {/* PHONE */}
              <a
                href={`tel:${t.contactPhone.replace(/\s/g, '')}`}
                className="text-xl md:text-2xl font-black opacity-30 hover:opacity-100 hover:text-[#0047AB] transition-all leading-none tracking-tighter"
              >
                {t.contactPhone}
              </a>
            </div>
          </div>
          <div className="text-left md:text-right font-mono text-[10px] uppercase opacity-40 leading-loose tracking-wider font-bold">
            <span>{t.location}</span><br />
            <span>&copy; 2026 Thursday Engineering. All rights reserved.</span>
          </div>
        </div>
      </footer>

      {/* MODAL SYSTEM INTAKE (GOOGLE CALENDAR) */}
      {isConnectOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6" onClick={() => setIsConnectOpen(false)}>
          <div className="bg-white border-2 border-black w-full max-w-2xl h-[85vh] flex flex-col font-sans shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" onClick={(e) => e.stopPropagation()}>

            <div className="flex justify-between items-center border-b-2 border-black px-6 py-4 bg-black text-white">
              <span className="text-xs font-mono font-bold tracking-wider uppercase">{t.modalTag}</span>
              <button onClick={() => setIsConnectOpen(false)} className="text-xs font-mono font-bold bg-white text-black px-3 py-1 hover:bg-[#0047AB] hover:text-white transition-all uppercase">
                {t.modalClose}
              </button>
            </div>

            <div className="flex-1 bg-neutral-50 relative">
              <iframe
                src="https://calendar.app.google/VDCfrp5uHEE5Nw3k9"
                className="w-full h-full border-0"
                title="Scheduling Calendar"
                allowFullScreen
              />
            </div>

            <div className="border-t border-black/10 px-6 py-3 bg-white">
              <p className="text-[10px] font-mono text-black/40 font-bold uppercase text-center">
                {t.modalAlt}{' '}
                <a href={`mailto:${t.contactEmail}`} className="text-[#0047AB] underline">{t.contactEmail}</a>
                {' '}·{' '}
                <a href={`tel:${t.contactPhone.replace(/\s/g, '')}`} className="text-[#0047AB] underline">{t.contactPhone}</a>
              </p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}