import { useEffect, useState } from "react";
import {
  ArrowRight,
  AudioLines,
  Bot,
  Check,
  ChevronRight,
  Lock,
  Mic,
  Play,
  Shield,
  Sparkles,
  Wallet,
  Menu,
  X,
  MessageCircleMore,
} from "lucide-react";
import myllaHeroReal from "@assets/mylla-hero-real.jpg";
import myllaMentoriaReal from "@assets/mylla-mentoria-real.jpg";
import myllaFamilyReal from "@assets/mylla-family-real.jpg";
import myllaDetailReal from "@assets/mylla-detail-real.jpg";
import fotoReciboReal from "@assets/foto-recibo-real.png";
import myllaAvatar from "@assets/mylla-avatar.png";
import myllaEsposoReal from "@assets/mylla-esposo-real.jpg";

const SALES_URL = "https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20entender%20a%20Mentoria%20FOCO%20e%20receber%20a%20proposta.";

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-11 w-11 overflow-hidden rounded-2xl border border-[#c5a059]/30 bg-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
        <img src={myllaAvatar} alt="Avatar da Mylla IA" className="h-full w-full object-cover object-center" />
      </div>
      <div className="leading-none">
        <p
          className="bg-gradient-to-r from-[#ecd9ab] via-[#c5a059] to-[#8b6b2e] bg-clip-text text-xl font-semibold tracking-[0.28em] text-transparent"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          MYLLA IA
        </p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.34em] text-[#d2c7ae]/60">
          Mentoria FOCO
        </p>
      </div>
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    ["Pilares", "#beneficios"],
    ["Estrutura", "#filhos"],
    ["Acompanhamento", "#esposo"],
    ["Planos", "#comparativo"],
    ["Oferta", "#mentoria"],
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => setMobileMenuOpen(false);
    window.addEventListener("hashchange", closeMenu);
    return () => window.removeEventListener("hashchange", closeMenu);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/8 bg-[#101610]/76 py-3 backdrop-blur-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between gap-4">
          <LogoMark />

          <nav className="hidden items-center gap-8 text-sm text-[#e7decb]/72 md:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-[#e6cf97]">
                {label}
              </a>
            ))}
          </nav>

          <a
            href={SALES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-[#c5a059]/30 bg-white/6 px-6 py-3 text-sm font-medium text-[#f2e7cc] transition hover:border-[#c5a059]/55 hover:bg-white/10 sm:inline-flex"
          >
            Solicitar proposta
          </a>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-[#f2e7cc] backdrop-blur-xl md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            mobileMenuOpen ? "max-h-[420px] opacity-100 pt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-[1.75rem] border border-white/10 bg-[#111714]/92 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
            <div className="grid gap-2">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-[#f2e7cc] transition hover:bg-white/10"
                >
                  {label}
                </a>
              ))}
              <a
                href={SALES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-button mt-2 inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold text-[#172017]"
              >
                Solicitar proposta
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeroPhone() {
  return (
    <div className="mx-auto w-full max-w-[360px] rounded-[2.4rem] border border-white/10 bg-[#111714]/85 p-3 shadow-[0_35px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl">
      <div className="rounded-[2rem] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-4">
        <div className="mb-4 flex items-center justify-between text-xs text-[#f3ead7]/70">
          <span>09:41</span>
          <span>Telegram • online</span>
        </div>

        <div className="mb-4 flex items-center gap-3 rounded-2xl border border-white/6 bg-white/5 p-3">
          <div className="h-10 w-10 overflow-hidden rounded-full border border-white/10">
            <img src={myllaAvatar} alt="Avatar da Mylla IA" className="h-full w-full object-cover object-center" />
          </div>
          <div>
            <p className="text-sm font-medium text-white">Mylla IA</p>
            <p className="text-xs text-[#d1c6b0]/65">Concierge financeira pessoal</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="ml-auto max-w-[82%] rounded-[1.4rem] rounded-tr-md bg-[linear-gradient(135deg,#c5a059,#8b6b2e)] p-4 text-[#152015] shadow-[0_18px_40px_rgba(139,107,46,0.35)]">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <Mic className="h-4 w-4" />
              </div>
              <div className="h-1.5 flex-1 rounded-full bg-black/15">
                <div className="h-1.5 w-1/2 rounded-full bg-white/70" />
              </div>
            </div>
            <p className="text-xs font-medium">"Mylla, lança a escola do Lucas e o mercado de hoje."</p>
          </div>

          <div className="max-w-[90%] rounded-[1.4rem] rounded-tl-md border border-white/8 bg-white/7 p-4 text-[#efe7d3] backdrop-blur-xl">
            <p className="mb-3 flex items-center gap-2 text-sm font-medium text-[#e5cb91]">
              <Check className="h-4 w-4" />
              Tudo organizado
            </p>
            <div className="space-y-2 text-xs text-[#d8cfbc]">
              <div className="flex items-center justify-between rounded-xl bg-black/10 px-3 py-2">
                <span>Escola Lucas</span>
                <strong>R$ 3.240</strong>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-black/10 px-3 py-2">
                <span>Mercado</span>
                <strong>R$ 684</strong>
              </div>
              <div className="rounded-xl border border-[#c5a059]/20 bg-[#c5a059]/8 px-3 py-2 text-[#f3ead7]">
                Alerta preventivo: gastos da casa 11% acima da média da semana.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#1a261a] pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(197,160,89,0.18),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(255,255,255,0.06),transparent_22%),linear-gradient(180deg,#1a261a_0%,#0e140f_100%)]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="reveal-up max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#c5a059]/20 bg-white/6 px-5 py-2 text-[11px] uppercase tracking-[0.28em] text-[#e5cb91] backdrop-blur-xl">
            <AudioLines className="h-3.5 w-3.5" />
            Mentoria premium de organização financeira
          </div>

          <h1
            className="max-w-3xl text-5xl leading-[1.02] text-[#f8f3ea] sm:text-6xl md:text-7xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Finanças Organizadas
            <span className="block bg-gradient-to-r from-[#f2dfb2] via-[#c5a059] to-[#8b6b2e] bg-clip-text italic text-transparent">
              para Conquistar Objetivos.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#d7cfbf]/82 md:text-xl">
            A Mentoria FOCO foi criada para tirar você do ciclo da desorganização financeira e te levar para uma vida financeira organizada, leve e próspera.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={SALES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-[#172017] transition hover:scale-[1.02]"
            >
              Solicitar proposta da mentoria
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#beneficios"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/6 px-8 py-4 text-base font-medium text-[#f5edda] backdrop-blur-xl transition hover:bg-white/10"
            >
              Ver apresentação
            </a>
          </div>

          <div className="mt-10 grid gap-4 text-sm text-[#d8cfbc]/78 sm:grid-cols-3">
            {[
              "Clareza sem planilhas impossíveis",
              "Acompanhamento real no processo",
              "Metodologia completa em 6 pilares",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/8 bg-white/5 px-4 py-4 backdrop-blur-xl sm:min-h-[88px]">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-up" style={{ transitionDelay: "120ms" }}>
          <div className="grid gap-6">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_28px_90px_rgba(0,0,0,0.32)]">
              <img
                src={myllaHeroReal}
                alt="Mulher elegante utilizando a Mylla IA no smartphone"
                className="h-[340px] w-full object-cover object-center md:h-[420px]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,21,15,0.08)_0%,rgba(15,21,15,0.18)_34%,rgba(15,21,15,0.54)_100%)]" />
            </div>
            <div className="mx-auto w-full max-w-[360px] -mt-24 md:-mt-32">
              <HeroPhone />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-14 max-w-3xl reveal-up">
      <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#c5a059]">{eyebrow}</p>
      <h2
        className="text-4xl leading-tight text-[#f6f1e7] md:text-5xl"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-[#d3c9b6]/78">{description}</p>
    </div>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      icon: MessageCircleMore,
      title: "FOCO em Organizar.",
      text: "Antes de qualquer mudança financeira acontecer, você precisa criar ordem e entender exatamente para onde seu dinheiro vai.",
    },
    {
      icon: Bot,
      title: "FOCO em Planejar.",
      text: "Depois de organizar, é hora de dar direção e transformar sonhos em metas reais, com prazo, valor e plano claro de execução.",
    },
    {
      icon: Wallet,
      title: "FOCO em Reprogramar.",
      text: "Sua vida financeira não muda só com números. Muda com mentalidade, hábitos e uma nova relação com o dinheiro.",
    },
  ];

  return (
    <section id="beneficios" className="bg-[#121a12] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Pilares"
          title="O começo da transformação é criar clareza, direção e uma nova base mental."
          description="A Mentoria FOCO conduz a aluna por pilares complementares. A primeira camada não é sobre complexidade. É sobre entender, organizar e reposicionar a vida financeira com método."
        />

        <div className="mb-6 reveal-up overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_25px_60px_rgba(0,0,0,0.22)] xl:hidden">
          <img
            src={myllaDetailReal}
            alt="Detalhe sofisticado de uso do smartphone com a Mylla IA"
            className="h-[220px] w-full object-cover object-center sm:h-[260px]"
          />
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr] xl:items-stretch">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="reveal-up rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.11),rgba(255,255,255,0.05))] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.22)] backdrop-blur-2xl md:p-8 xl:min-h-[320px]"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#c5a059]/20 bg-[#c5a059]/10 text-[#e3c987]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3
                    className="text-[1.75rem] leading-tight text-[#f6f1e7] md:text-3xl"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-[#d5ccb9]/78 md:text-base md:leading-8">{item.text}</p>
                </div>
              );
            })}
          </div>

          <div className="reveal-up hidden overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_25px_60px_rgba(0,0,0,0.22)] xl:block xl:min-h-full" style={{ transitionDelay: "180ms" }}>
            <div className="flex h-full min-h-[220px] flex-col">
              <img
                src={myllaDetailReal}
                alt="Detalhe sofisticado de uso do smartphone com a Mylla IA"
                className="h-[220px] w-full object-cover object-center sm:h-[260px] md:h-[320px] xl:h-full xl:min-h-[520px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full rounded-[42px] border border-white/10 bg-[linear-gradient(180deg,#35312b,#151311)] p-2.5 shadow-[0_22px_60px_rgba(0,0,0,0.45)]">
      <div className="relative overflow-hidden rounded-[34px] border border-white/6 bg-[#1d1d1f]">
        <div className="absolute left-1/2 top-3 z-20 h-7 w-[96px] -translate-x-1/2 rounded-full bg-black" />
        <div className="flex items-center justify-between px-6 pb-2 pt-3 text-[11px] text-white/90">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/70" />
            <span className="h-2 w-2 rounded-full bg-white/70" />
            <span className="h-2 w-2 rounded-full bg-white/70" />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

function TelegramChat({ messages }: { messages: Array<{ type: string; time: string; text?: string; align: "left" | "right" }> }) {
  return (
    <div className="flex h-full min-h-[470px] flex-col bg-[#1c1c1e] text-white">
      <div className="flex items-center gap-3 border-b border-white/6 bg-[#2a2a2d]/90 px-4 py-3 backdrop-blur-xl">
        <div className="h-9 w-9 overflow-hidden rounded-full border border-white/10">
          <img src={myllaAvatar} alt="Avatar da Mylla IA" className="h-full w-full object-cover object-center" />
        </div>
        <div>
          <p className="text-sm font-semibold">Mylla IA</p>
          <p className="text-[10px] text-[#cfc5b0]/70">online</p>
        </div>
      </div>

      <div className="flex-1 space-y-4 overflow-hidden px-4 py-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.align === "right" ? "justify-end" : "justify-start"}`}>
            {msg.type === "audio" && (
              <div className="max-w-[85%] rounded-[20px] rounded-tr-[6px] bg-[#4f8df7] px-3 py-2 text-white shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                    <Play className="h-4 w-4 fill-white text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 h-1.5 w-28 rounded-full bg-white/30">
                      <div className="h-1.5 w-1/3 rounded-full bg-white" />
                    </div>
                    <p className="text-[11px] font-medium">{msg.text}</p>
                  </div>
                </div>
                <div className="mt-1 text-right text-[9px] text-blue-100">{msg.time}</div>
              </div>
            )}

            {msg.type === "photo" && (
              <div className="max-w-[70%] rounded-[20px] rounded-tr-[6px] bg-[#4f8df7] p-1 shadow-lg">
                <div className="relative aspect-[3/4] w-24 overflow-hidden rounded-[16px] bg-[#f4f0e8]">
                  <img
                    src={fotoReciboReal}
                    alt="foto_recibo.jpg"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute bottom-1.5 left-1.5 rounded bg-black/35 px-1.5 py-0.5 text-[8px] text-white backdrop-blur-sm">
                    foto_recibo.jpg
                  </div>
                </div>
                <div className="px-2 pt-1 text-right text-[9px] text-blue-100">{msg.time}</div>
              </div>
            )}

            {msg.type === "ai" && (
              <div className="max-w-[90%] rounded-[20px] rounded-tl-[6px] border border-white/6 bg-[#2b2b2e] px-4 py-3 shadow-lg">
                <p className="mb-2 text-[13px] font-semibold text-[#e6cf97]">✓ Transação salva!</p>
                <div className="space-y-1 text-[12px] text-[#ddd4c2]">
                  <div><strong className="text-white">Valor:</strong> R$ 3.000</div>
                  <div><strong className="text-white">Desc:</strong> Mensalidade escolar</div>
                  <div><strong className="text-white">Categ:</strong> Educação</div>
                  <div><strong className="text-white">Conta:</strong> Bradesco</div>
                </div>
                <div className="mt-2 text-right text-[9px] text-[#cfc5b0]/55">{msg.time}</div>
              </div>
            )}

            {msg.type === "ocr" && (
              <div className="max-w-[90%] rounded-[20px] rounded-tl-[6px] border border-white/6 bg-[#2b2b2e] px-4 py-3 shadow-lg">
                <p className="mb-2 text-[13px] font-semibold text-[#e6cf97]">✓ Transação salva!</p>
                <div className="space-y-1 text-[12px] text-[#ddd4c2]">
                  <div><strong className="text-white">Valor:</strong> R$ 45</div>
                  <div><strong className="text-white">Desc:</strong> Padaria / almoço</div>
                  <div><strong className="text-white">Categ:</strong> Alimentação</div>
                  <div><strong className="text-white">Conta:</strong> Itaú</div>
                </div>
                <div className="mt-2 text-right text-[9px] text-[#cfc5b0]/55">{msg.time}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 border-t border-white/6 bg-[#1c1c1e] px-3 py-3">
        <div className="flex-1 rounded-full bg-[#2b2b2e] px-4 py-2 text-[13px] text-[#8b8b90]">Mensagem...</div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4f8df7] text-white">
          <Mic className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}

function AudioSection() {
  return (
    <section className="bg-[#1a261a] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="O mecanismo único"
          title="Sua rotina fala. A Mylla organiza. Você vive."
          description="Áudio, foto e confirmação em segundos. A lógica continua forte porque comunica facilidade instantânea — agora com uma linguagem mais premium, limpa e coerente com a Mylla IA."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {[
            {
              label: "Áudio no Telegram",
              badge: "1",
              messages: [{ type: "audio", time: "14:23", text: "🎙 Mylla, paguei escola, R$ 3.000", align: "right" as const }],
            },
            {
              label: "Foto do comprovante",
              badge: "2",
              messages: [
                { type: "photo", time: "14:45", align: "right" as const },
                { type: "ocr", time: "14:45", align: "left" as const },
              ],
            },
            {
              label: "Confirmação inteligente",
              badge: "3",
              highlight: true,
              messages: [
                { type: "audio", time: "14:23", text: "🎙 Mylla, paguei escola, R$ 3.000", align: "right" as const },
                { type: "ai", time: "14:23", align: "left" as const },
              ],
            },
          ].map((item, index) => (
            <div key={item.badge} className="reveal-up flex flex-col items-center gap-5" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="w-full max-w-[280px]">
                <PhoneMockup>
                  <TelegramChat messages={item.messages} />
                </PhoneMockup>
              </div>
              <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm ${item.highlight ? "bg-[linear-gradient(135deg,#f0ddb0,#c5a059,#8b6b2e)] text-[#172017]" : "border border-[#c5a059]/25 bg-white/6 text-[#f2ead8]"}`}>
                <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${item.highlight ? "bg-[#172017] text-[#f0ddb0]" : "bg-[#c5a059] text-[#172017]"}`}>
                  {item.badge}
                </span>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Perfeito para rotina corrida e tomada de decisão rápida",
            "Nada de fricção com planilhas ou formulários",
            "Sensação de atendimento pessoal e contínuo",
            "Áudio como diferencial central de conversão",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-white/8 bg-white/5 px-5 py-5 text-[#d4ccb9]/78 backdrop-blur-xl">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FamilyCommandSection() {
  const features = [
    {
      title: "Plataforma exclusiva",
      desc: "Acesso imediato a aulas organizadas por módulos, materiais de apoio, exercícios práticos e passo a passo do método FOCO.",
    },
    {
      title: "Aplicativo incluído",
      desc: "Durante toda a mentoria, o aplicativo de controle financeiro faz parte da experiência sem custo adicional.",
    },
    {
      title: "Grupo individual no WhatsApp",
      desc: "Você tem um canal exclusivo para tirar dúvidas, receber orientações e não ficar perdida durante o processo.",
    },
    {
      title: "Reunião individual mensal",
      desc: "Todo mês, a Mylla revisa seu orçamento, suas metas, seus resultados e ajusta a estratégia do próximo ciclo.",
    },
    {
      title: "Transformação completa",
      desc: "A FOCO mistura conteúdo, prática e suporte para gerar resultados reais, não só informação.",
    },
  ];

  return (
    <section className="bg-[#0f150f] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Estrutura da mentoria"
          title="Não é só um curso. É uma estrutura completa de transformação."
          description="Conteúdo, prática, suporte e direção estratégica para que você finalmente tenha clareza, controle e resultados reais mês após mês."
        />

        <div className="reveal-up mb-14 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] shadow-[0_28px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
          <div className="flex items-center gap-2 border-b border-white/8 bg-white/5 px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <div className="ml-4 flex h-6 max-w-xs flex-1 items-center rounded-md bg-[#202a20] px-3 text-[10px] text-[#8f947f]">
              mylla.ai/dashboard
            </div>
          </div>
          <div className="p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#c5a059]">MENTORIA FOCO</p>
                <h3 className="text-2xl text-[#f6f1e7]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Estrutura de acompanhamento
                </h3>
              </div>
              <div className="hidden rounded-xl border border-[#c5a059]/20 bg-[#c5a059]/10 px-4 py-2 text-xs text-[#f1e1be] sm:block">
                Sincronizado agora
              </div>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                ["Conteúdo", "Aulas + materiais", "text-[#e6cf97]"],
                ["Suporte", "Grupo individual", "text-white"],
                ["Sessões", "Encontros mensais", "text-emerald-400"],
                ["Aplicativo", "Incluído", "text-sky-400"],
              ].map(([label, value, color]) => (
                <div key={label} className="rounded-xl border border-white/6 bg-[#151d15] p-4">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#8f947f]">{label}</p>
                  <p className={`mt-2 text-lg font-semibold ${color}`}>{value}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                ["Organizar", "Clareza", "72%", "bg-[#c5a059]"],
                ["Planejar", "Metas", "55%", "bg-sky-500"],
                ["Reprogramar", "Mentalidade", "40%", "bg-violet-500"],
                ["Decidir", "Escolhas", "61%", "bg-emerald-500"],
              ].map(([name, value, pct, color]) => (
                <div key={name} className="rounded-xl border border-white/6 bg-[#151d15] p-4">
                  <p className="mb-2 text-sm text-white">{name}</p>
                  <p className="text-sm font-semibold text-[#f1ead8]">{value}</p>
                  <div className="mt-3 h-1.5 rounded-full bg-white/8">
                    <div className={`h-1.5 rounded-full ${color}`} style={{ width: pct }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={feature.title} className="reveal-up rounded-[1.7rem] border border-white/8 bg-white/5 p-6 backdrop-blur-xl" style={{ transitionDelay: `${index * 80}ms` }}>
              <h3 className="text-xl text-[#f6f1e7]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {feature.title}
              </h3>
              <p className="mt-3 leading-7 text-[#d5ccb9]/76">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section id="filhos" className="bg-[#1a261a] py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="reveal-up overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] shadow-[0_26px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
          <div className="relative min-h-[250px] overflow-hidden border-b border-white/8">
            <img
              src={myllaFamilyReal}
              alt="Mãe e filho em ambiente sofisticado utilizando a Mylla IA no smartphone"
              className="h-[250px] w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,21,15,0.72)_0%,rgba(15,21,15,0.3)_48%,rgba(15,21,15,0.12)_100%)]" />
            <div className="absolute left-8 top-8 max-w-xs">
              <p className="text-xs uppercase tracking-[0.2em] text-[#f1deb0]">Transformação com método</p>
              <h3 className="mt-3 text-3xl text-[#f6f1e7]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Clareza, direção e constância para mudar sua rota financeira.
              </h3>
            </div>
          </div>
          <div className="p-8">
          <div className="mb-8 flex items-center justify-between border-b border-white/8 pb-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#c5a059]">Metodologia FOCO</p>
              <h3 className="mt-2 text-3xl text-[#f6f1e7]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Evolução financeira com clareza
              </h3>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-500 font-semibold text-white">F</div>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/6 bg-white/5 p-5">
              <p className="text-xs text-[#a9ab9f]">Vida financeira</p>
              <p className="mt-2 text-2xl text-white">Mais clara</p>
            </div>
            <div className="rounded-2xl border border-[#c5a059]/20 bg-[#c5a059]/10 p-5">
              <p className="text-xs text-[#e6cf97]">Resultado</p>
              <p className="mt-2 text-2xl text-white">Mais leveza</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              ["FOCO em DECIDIR", "50%", "w-1/2", "Escolhas melhores", "Menos desperdício", "from-sky-500 to-cyan-400"],
              ["FOCO em EVOLUIR", "26%", "w-[26%]", "Mais constância", "Menos recaída", "from-fuchsia-500 to-pink-500"],
            ].map(([title, pct, width, left, right, color]) => (
              <div key={title} className="rounded-2xl border border-white/6 bg-white/5 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-white">{title}</p>
                  <span className="rounded-full bg-white/10 px-2 py-1 text-[11px] text-[#f1ead8]">{pct}</span>
                </div>
                <div className="mb-3 h-2.5 rounded-full bg-[#0f150f]">
                  <div className={`h-2.5 rounded-full bg-gradient-to-r ${color} ${width}`} />
                </div>
                <div className="flex justify-between text-[11px] text-[#a8ab9f]">
                  <span>{left}</span>
                  <span>{right}</span>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>

        <div className="reveal-up" style={{ transitionDelay: "120ms" }}>
          <SectionTitle
            eyebrow="Transformação"
            title="Muito além do controle: clareza, direção e execução com constância."
            description="A Mentoria FOCO não se limita a organizar finanças. Ela reorganiza a forma como a aluna pensa, decide e sustenta resultados ao longo do tempo."
          />

          <div className="space-y-5">
            {[
              ["FOCO em DECIDIR", "Gastar é parte da vida. Decidir bem é a habilidade que faz seu dinheiro render mais sem você ganhar mais."],
              ["FOCO em MULTIPLICAR", "Não adianta só organizar e gastar bem. É preciso fazer o dinheiro crescer com simplicidade e segurança."],
              ["FOCO em EVOLUIR", "A verdadeira liberdade financeira vem da constância, do ajuste de rota e da capacidade de continuar avançando."],
            ].map(([title, text]) => (
              <div key={title} className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/5 px-5 py-5 backdrop-blur-xl">
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border border-[#c5a059]/25 bg-[#c5a059]/10 text-[#e6cf97]">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-lg text-[#f6f1e7]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {title}
                  </h4>
                  <p className="mt-2 leading-7 text-[#d5ccb9]/76">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MentoriaIncludesSection() {
  return (
    <section className="bg-[#101610] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Serviço premium"
          title="O que está incluso na ativação da Mylla IA?"
          description="Essa seção tangibiliza a entrega da Mylla e ajuda a transformar percepção em valor concreto. Ajustei a linguagem para uma promessa mais premium e consultiva."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Diagnóstico e onboarding consultivo", "Uma leitura inicial da rotina financeira, do contexto familiar e da forma ideal de ativar sua concierge financeira."],
            ["Configuração da operação familiar", "Estruturação dos fluxos da casa, categorias, prioridades, membros e lógica de acompanhamento da mentoria."],
            ["Acompanhamento de adaptação", "Suporte próximo nos primeiros dias para garantir adoção simples, elegante e sem atrito na rotina."],
          ].map(([title, text], index) => (
            <div key={title} className="reveal-up rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-8 shadow-[0_26px_60px_rgba(0,0,0,0.22)] backdrop-blur-2xl" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="mb-6 inline-flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#f0ddb0,#c5a059,#8b6b2e)] text-[#172017]">
                  <Check className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#e6cf97]">Incluso</span>
              </div>
              <h3 className="text-3xl text-[#f6f1e7]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {title}
              </h3>
              <p className="mt-4 leading-7 text-[#d5ccb9]/76">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpouseSection() {
  return (
    <section id="esposo" className="bg-[#101610] py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="reveal-up overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_25px_80px_rgba(0,0,0,0.28)]">
          <img
            src={myllaEsposoReal}
            alt="Representação visual da transformação financeira com clareza e leveza"
            className="h-[320px] w-full object-cover object-center md:h-[460px]"
          />
        </div>

        <div className="reveal-up" style={{ transitionDelay: "120ms" }}>
          <SectionTitle
            eyebrow="Transformação"
            title="Muito além do controle: clareza, direção e execução com constância."
            description="A Mentoria FOCO não se limita a organizar finanças. Ela reorganiza a forma como a aluna pensa, decide e sustenta resultados ao longo do tempo."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["FOCO em DECIDIR", "Gastar é parte da vida. Decidir bem é a habilidade que faz seu dinheiro render mais sem você ganhar mais."],
              ["FOCO em MULTIPLICAR", "Não adianta só organizar e gastar bem. É preciso fazer o dinheiro crescer com simplicidade e segurança."],
              ["FOCO em EVOLUIR", "A verdadeira liberdade financeira vem da constância, do ajuste de rota e da capacidade de continuar avançando."],
              ["Resultados reais", "Com estrutura, suporte e acompanhamento, a aluna para de improvisar e começa a construir uma vida financeira mais leve e próspera."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[1.7rem] border border-white/8 bg-white/5 p-5 backdrop-blur-xl">
                <h3 className="text-xl text-[#f6f1e7]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-[#d5ccb9]/78">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const rows = [
    ["Formato", "Base de entrada", "Mentoria gravada + suporte"],
    ["Aplicação", "Mais autônoma", "Mais acompanhada"],
    ["Sessões", "6 encontros", "12 encontros"],
    ["App", "Incluído", "Incluído"],
    ["Profundidade", "Boa", "Máxima"],
  ];

  return (
    <section id="comparativo" className="bg-[#0f150f] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Planos"
          title="Escolha o nível de profundidade e acompanhamento mais adequado ao seu momento."
          description="A oferta da Mentoria FOCO foi organizada para diferentes estágios de comprometimento, mantendo clareza comercial com visual premium."
        />

        <div className="reveal-up overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
          <div className="hidden md:block">
            <div className="grid grid-cols-[1.1fr_0.95fr_0.95fr] border-b border-white/8 bg-white/5 text-sm text-[#e7decb]">
              <div className="px-6 py-5 font-medium">Comparativo</div>
              <div className="border-l border-white/8 px-6 py-5 text-center">FOCO Essential</div>
              <div className="border-l border-[#c5a059]/20 bg-[#c5a059]/10 px-6 py-5 text-center text-[#f2dfb2]">FOCO Private</div>
            </div>

            <div className="grid gap-0">
              <div className="grid grid-cols-[1.1fr_0.95fr_0.95fr] border-b border-white/8">
                <div className="px-6 py-5 text-[#d7cfbf]">Investimento</div>
                <div className="border-l border-white/8 px-6 py-5 text-center text-[#f5eedf]">R$ 5.000</div>
                <div className="border-l border-[#c5a059]/20 bg-[#c5a059]/8 px-6 py-5 text-center font-semibold text-[#f2dfb2]">R$ 18.000</div>
              </div>
              {rows.map(([label, left, right]) => (
                <div key={label} className="grid grid-cols-[1.1fr_0.95fr_0.95fr] border-b border-white/8 last:border-b-0">
                  <div className="px-6 py-5 text-[#d7cfbf]">{label}</div>
                  <div className="border-l border-white/8 px-6 py-5 text-center text-[#cfc5b0]">{left}</div>
                  <div className="border-l border-[#c5a059]/20 bg-[#c5a059]/8 px-6 py-5 text-center text-[#f4ead4]">{right}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 md:hidden">
            <div className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] shadow-[0_18px_40px_rgba(0,0,0,0.2)]">
              <div className="grid grid-cols-3 border-b border-white/8 bg-white/5 text-center text-[10px] uppercase tracking-[0.14em] text-[#d8cfbc]">
                <div className="px-3 py-3 text-left">Critério</div>
                <div className="border-l border-white/8 px-2 py-3">Essential</div>
                <div className="border-l border-[#c5a059]/20 bg-[#c5a059]/10 px-2 py-3 text-[#f2dfb2]">Private</div>
              </div>

              {[['Investimento', 'R$ 5.000', 'R$ 18.000'], ...rows].map(([label, left, right]) => (
                <div key={label} className="grid grid-cols-3 border-b border-white/8 last:border-b-0">
                  <div className="px-3 py-4 text-[12px] leading-5 text-[#f3ead7]">{label}</div>
                  <div className="border-l border-white/8 px-2 py-4 text-center text-[12px] leading-5 text-[#cfc5b0]">{left}</div>
                  <div className="border-l border-[#c5a059]/20 bg-[#c5a059]/8 px-2 py-4 text-center text-[12px] font-medium leading-5 text-[#f4ead4]">{right}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MentoriaSection() {
  return (
    <section id="mentoria" className="bg-[#1a261a] py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal-up">
          <SectionTitle
            eyebrow="Acompanhamento mensal"
            title="O momento mensal que muda a rota da sua vida financeira."
            description="Além do conteúdo e do suporte no dia a dia, a reunião individual mensal aprofunda sua realidade, revisa seus resultados e reposiciona sua estratégia."
          />

          <div className="space-y-4">
            {[
              "Revisão do orçamento com visão prática",
              "Ajuste de metas e prioridades do próximo mês",
              "Plano personalizado com clareza e leveza",
            ].map((item) => (
              <div key={item} className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/5 px-5 py-5 text-[#ddd4c2]/80 backdrop-blur-xl">
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#c5a059]/14 text-[#e6cf97]">
                  <Check className="h-4 w-4" />
                </div>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-up" style={{ transitionDelay: "120ms" }}>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.11),rgba(255,255,255,0.05))] shadow-[0_28px_80px_rgba(0,0,0,0.3)] backdrop-blur-2xl">
            <div className="relative min-h-[260px] overflow-hidden border-b border-white/8">
              <img
                src={myllaMentoriaReal}
                alt="Mulher empreendedora se preparando para uma sessão estratégica com apoio da Mylla IA"
                className="h-[260px] w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,21,15,0.7)_0%,rgba(15,21,15,0.32)_48%,rgba(15,21,15,0.12)_100%)]" />
              <div className="absolute left-8 top-8 max-w-xs">
                <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#f1deb0]">Mentoria estratégica</p>
                <h3 className="text-3xl text-[#f6f1e7]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Nada de resposta genérica. Estratégia certa para o seu momento.
                </h3>
              </div>
            </div>
            <div className="p-8">
              <div className="space-y-4">
                {[
                  "Conteúdo com aplicação prática",
                  "Estrutura completa para não travar",
                  "Acompanhamento real mês após mês",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/8 bg-black/10 px-5 py-4 text-[#f2ebdb]">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.75rem] border border-[#c5a059]/20 bg-[#c5a059]/10 p-6 text-[#f5eedf]">
                <p
                  className="text-2xl"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Transformação com constância.
                </p>
                <p className="mt-3 leading-7 text-[#ede1c7]/82">
                  A mentoria deixa de ser só conteúdo e passa a ser um processo completo de clareza, controle e evolução financeira.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function SecuritySection() {
  const items = [
    {
      icon: Shield,
      title: "Clareza real",
      text: "Você entende com precisão o que acontece com seu dinheiro e para de viver no escuro.",
    },
    {
      icon: Lock,
      title: "Direção prática",
      text: "Metas, prazos e ações deixam de ser vagos e passam a caber na vida real.",
    },
    {
      icon: Sparkles,
      title: "Transformação consistente",
      text: "Não é motivação momentânea. É uma nova estrutura para decidir melhor e evoluir com constância.",
    },
  ];

  return (
    <section className="bg-[#1a261a] py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Clareza"
          title="Clareza, direção e paz para decidir melhor."
          description="A promessa da Mentoria FOCO não é só ensinar. É tirar você do ciclo e te devolver clareza para construir uma vida financeira mais leve."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="reveal-up rounded-[2rem] border border-white/10 bg-white/6 p-7 backdrop-blur-2xl"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#c5a059]/20 bg-[#c5a059]/10 text-[#e6cf97]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl text-[#f6f1e7]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#d4ccb9]/76">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-[#0d120d] py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal-up rounded-[2.5rem] border border-[#c5a059]/20 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.18),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-8 py-14 text-center shadow-[0_35px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:px-14">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c5a059]">Oferta válida por 24 horas</p>
          <h2
            className="text-4xl leading-tight text-[#f8f3ea] md:text-6xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Pare de adiar.
            <span className="block italic text-[#e6cf97]">Mude sua rota financeira.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#d8cfbc]/80">
            A oportunidade está aqui, estruturada e pronta para tirar você do mesmo ciclo. A única decisão que realmente pode te travar é não decidir.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={SALES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-[#162016] transition hover:scale-[1.02]"
            >
              Solicitar proposta da mentoria
              <ChevronRight className="h-4 w-4" />
            </a>
            <div className="rounded-full border border-white/10 bg-white/6 px-5 py-4 text-sm text-[#e7decb]/70 backdrop-blur-xl">
              Clareza, acompanhamento e direção prática
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#0a0f0a] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <LogoMark />
        <p className="text-sm text-[#cfc5b0]/55">© {new Date().getFullYear()} Mylla IA • Apresentação Mentoria FOCO</p>
        <a
          href={SALES_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#e4cb93] transition hover:text-[#f5e3bc]"
        >
          Solicitar proposta
        </a>
      </div>
    </footer>
  );
}

export default function Landing() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#1a261a] text-[#f8f3ea] selection:bg-[#c5a059]/30 selection:text-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            :root { scroll-behavior: smooth; }
            .reveal-up {
              opacity: 0;
              transform: translateY(32px);
              transition: opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1);
            }
            .reveal-up.revealed {
              opacity: 1;
              transform: translateY(0);
            }
            .gold-button {
              background: linear-gradient(135deg, #f0ddb0 0%, #c5a059 45%, #8b6b2e 100%);
              box-shadow: 0 18px 50px rgba(139, 107, 46, 0.28);
              position: relative;
              overflow: hidden;
            }
            .gold-button::after {
              content: "";
              position: absolute;
              inset: 0;
              background: linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.32) 50%, transparent 80%);
              transform: translateX(-130%);
              animation: shimmer 4s infinite;
            }
            @keyframes shimmer {
              0% { transform: translateX(-130%); }
              22% { transform: translateX(130%); }
              100% { transform: translateX(130%); }
            }
            .scrollbar-none {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .scrollbar-none::-webkit-scrollbar {
              display: none;
            }
          `,
        }}
      />
      <Header />
      <HeroSection />
      <BenefitsSection />
      <AudioSection />
      <FamilyCommandSection />
      <EducationSection />
      <SpouseSection />
      <ComparisonSection />
      <MentoriaSection />
      <MentoriaIncludesSection />
      <SecuritySection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
