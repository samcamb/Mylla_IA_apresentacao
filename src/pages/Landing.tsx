import myllaAvatar from "@assets/mylla-avatar.png";
import myllaHeroReal from "@assets/mylla-hero-real.jpg";
import myllaMentoriaReal from "@assets/mylla-mentoria-real.jpg";
import myllaFamilyReal from "@assets/mylla-family-real.jpg";
import { ArrowRight, Check, ChevronRight } from "lucide-react";

const CTA_URL = "https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20entender%20a%20Mentoria%20FOCO%20da%20Mylla.";

const pilares = [
  ["FOCO em ORGANIZAR", "Criar ordem, enxergar o fluxo e sair do modo apagar incêndio."],
  ["FOCO em PLANEJAR", "Transformar sonhos em metas reais, com prazos, valores e direção."],
  ["FOCO em REPROGRAMAR", "Mudar crenças e padrões para parar de repetir o mesmo ciclo."],
  ["FOCO em DECIDIR", "Aprender a usar melhor cartão, parcelamento, cashback e escolhas."],
  ["FOCO em MULTIPLICAR", "Fazer o dinheiro crescer com simplicidade e segurança."],
  ["FOCO em EVOLUIR", "Sustentar constância e ajuste de rota ao longo do tempo."],
];

const estrutura = [
  "Plataforma exclusiva com todo o conteúdo gravado",
  "Aplicativo de controle financeiro incluído",
  "Grupo individual no WhatsApp",
  "Reunião mensal individual com a Mylla",
];

const planos = [
  {
    nome: "Essential",
    preco: "R$ 5.000",
    diaria: "R$ 17 por dia",
    frase: "Tem que cortar o cafezinho.",
    itens: ["Mentoria gravada", "Hotseat mensal", "6 sessões", "App incluído", "Assessoria exclusiva"],
  },
  {
    nome: "Direct",
    preco: "R$ 12.000",
    diaria: "R$ 40 por dia",
    frase: "Tem que cortar o almoço fora.",
    itens: ["Mentoria gravada", "Hotseat mensal", "6 sessões", "App incluído", "Assessoria exclusiva", "Lançamentos no app"],
    destaque: true,
  },
  {
    nome: "Private",
    preco: "R$ 18.000",
    diaria: "R$ 60 por dia",
    frase: "Tem que cortar o almoço e o cafezinho.",
    itens: ["Mentoria gravada", "Hotseat mensal", "12 sessões", "App incluído", "Assessoria exclusiva", "Lançamentos", "Separação PF e PJ", "Sessão coringa"],
  },
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-11 w-11 overflow-hidden rounded-2xl border border-[#c5a059]/30 bg-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
        <img src={myllaAvatar} alt="Mylla IA" className="h-full w-full object-cover object-center" />
      </div>
      <div className="leading-none">
        <p className="bg-gradient-to-r from-[#ecd9ab] via-[#c5a059] to-[#8b6b2e] bg-clip-text text-xl font-semibold tracking-[0.28em] text-transparent" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          MYLLA IA
        </p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.34em] text-[#d2c7ae]/60">Apresentação estratégica</p>
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-10 max-w-4xl">
      <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#c5a059]">{eyebrow}</p>
      <h2 className="text-4xl leading-tight text-[#f8f3ea] md:text-6xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        {title}
      </h2>
      {description ? <p className="mt-5 max-w-3xl text-lg leading-8 text-[#d7cfbf]/80">{description}</p> : null}
    </div>
  );
}

function SlideShell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`relative overflow-hidden py-24 md:py-32 ${className}`}>{children}</section>;
}

export default function Landing() {
  return (
    <main className="min-h-screen bg-[#0e140f] text-white">
      <SlideShell className="bg-[#1a261a] pb-20 pt-10 md:pt-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(197,160,89,0.18),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(255,255,255,0.06),transparent_22%),linear-gradient(180deg,#1a261a_0%,#0e140f_100%)]" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-14 flex items-center justify-between">
            <Logo />
            <a href={CTA_URL} target="_blank" rel="noreferrer" className="hidden rounded-full border border-[#c5a059]/30 bg-white/6 px-6 py-3 text-sm font-medium text-[#f2e7cc] md:inline-flex">
              Falar com especialista
            </a>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="max-w-3xl">
              <div className="mb-8 inline-flex rounded-full border border-[#c5a059]/20 bg-white/6 px-5 py-2 text-[11px] uppercase tracking-[0.28em] text-[#e5cb91] backdrop-blur-xl">
                Mentoria FOCO no universo visual da Mylla
              </div>

              <h1 className="text-5xl leading-[1.02] text-[#f8f3ea] sm:text-6xl md:text-7xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Finanças Organizadas
                <span className="block bg-gradient-to-r from-[#f2dfb2] via-[#c5a059] to-[#8b6b2e] bg-clip-text italic text-transparent">
                  para Conquistar Objetivos.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#d7cfbf]/82 md:text-xl">
                Clareza, direção e estrutura para tirar mulheres do caos financeiro e levá-las para uma vida mais leve, organizada e próspera.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#visao" className="gold-button inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-[#172017]">
                  Ver apresentação
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href={CTA_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/6 px-8 py-4 text-base font-medium text-[#f5edda] backdrop-blur-xl">
                  Solicitar proposta
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/5 shadow-[0_35px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
              <img src={myllaHeroReal} alt="Hero Mylla" className="h-[360px] w-full object-cover object-center sm:h-[460px] lg:h-[620px]" />
            </div>
          </div>
        </div>
      </SlideShell>

      <SlideShell id="visao" className="bg-[#101610]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <SectionTitle
                eyebrow="A visão central"
                title="Ganhar dinheiro não é o problema. O problema é não saber exatamente para onde ele vai."
                description="A Mentoria FOCO nasce para romper esse ciclo com uma metodologia simples, prática e inteligente, mesmo para quem nunca foi boa com números."
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Clareza", "Entender o fluxo real do dinheiro."],
                ["Direção", "Transformar sonhos em metas reais."],
                ["Estrutura", "Criar um sistema sustentável."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[1.8rem] border border-white/10 bg-white/6 p-5 backdrop-blur-2xl">
                  <h3 className="text-2xl text-[#f6f1e7]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#d4ccb9]/76">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SlideShell>

      <SlideShell className="bg-[#1a261a]">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Os 6 pilares"
            title="Uma jornada completa para reorganizar, decidir melhor e prosperar com constância."
            description="Em vez de só entregar conteúdo, a mentoria conduz a aluna por uma sequência lógica de transformação." 
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {pilares.map(([titulo, texto], index) => (
              <div key={titulo} className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.04))] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.2)] backdrop-blur-2xl">
                <div className="mb-5 inline-flex rounded-full border border-[#c5a059]/20 bg-[#c5a059]/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#e6cf97]">0{index + 1}</div>
                <h3 className="text-2xl text-[#f6f1e7]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{titulo}</h3>
                <p className="mt-4 leading-7 text-[#d5ccb9]/76">{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </SlideShell>

      <SlideShell className="bg-[#101610]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_28px_80px_rgba(0,0,0,0.3)]">
            <img src={myllaMentoriaReal} alt="Mentoria premium" className="h-[320px] w-full object-cover object-center md:h-[540px]" />
          </div>

          <div>
            <SectionTitle
              eyebrow="Como funciona"
              title="Não é só um curso. É uma estrutura completa de transformação."
              description="Conteúdo, prática, aplicação e acompanhamento real, tudo desenhado para que a aluna não fique perdida nem travada no meio do processo."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {estrutura.map((item) => (
                <div key={item} className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/5 px-5 py-5 text-[#ddd4c2]/80 backdrop-blur-xl">
                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#c5a059]/14 text-[#e6cf97]">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SlideShell>

      <SlideShell className="bg-[#1a261a]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <SectionTitle
              eyebrow="Acompanhamento real"
              title="Reunião individual mensal para revisar orçamento, ajustar metas e mudar a rota certa do próximo mês."
              description="Aqui a mentoria sai do genérico. É onde a vida real entra, os desvios aparecem e a estratégia certa é desenhada com clareza e leveza."
            />

            <div className="rounded-[2rem] border border-[#c5a059]/20 bg-[#c5a059]/10 p-7 text-[#f5eedf]">
              <p className="text-3xl leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                É o tipo de encontro que muda a rota da vida financeira mês após mês.
              </p>
              <p className="mt-4 leading-7 text-[#ede1c7]/82">
                Não é só aprender. É ter acompanhamento para não voltar ao caos.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_28px_80px_rgba(0,0,0,0.3)]">
            <img src={myllaFamilyReal} alt="Direção com leveza" className="h-[320px] w-full object-cover object-center md:h-[540px]" />
          </div>
        </div>
      </SlideShell>

      <SlideShell className="bg-[#101610]">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Oferta"
            title="Três caminhos para a mesma decisão: parar de adiar e finalmente assumir o controle."
            description="Reorganizei os planos como blocos premium, mais próximos da linguagem do site da Mylla e menos com cara de tabela crua."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {planos.map((plano) => (
              <div key={plano.nome} className={`rounded-[2rem] border p-7 backdrop-blur-2xl ${plano.destaque ? "border-[#c5a059]/30 bg-[linear-gradient(180deg,rgba(197,160,89,0.16),rgba(255,255,255,0.05))] shadow-[0_28px_80px_rgba(0,0,0,0.35)]" : "border-white/10 bg-white/6"}`}>
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-3xl text-[#f6f1e7]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{plano.nome}</h3>
                  {plano.destaque ? <span className="rounded-full bg-[#c5a059] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#172017]">Mais indicado</span> : null}
                </div>

                <p className="text-5xl text-[#f8f3ea]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{plano.preco}</p>
                <p className="mt-2 text-sm text-[#e6cf97]">{plano.diaria}</p>
                <p className="mt-2 text-sm text-[#d5ccb9]/76">{plano.frase}</p>

                <div className="mt-6 space-y-3">
                  {plano.itens.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-xl border border-white/8 bg-black/10 px-4 py-3 text-[#ddd4c2]">
                      <Check className="mt-0.5 h-4 w-4 text-[#e6cf97]" />
                      <span className="text-sm leading-6">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SlideShell>

      <SlideShell className="bg-[#0d120d] py-28 md:py-36">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[2.5rem] border border-[#c5a059]/20 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.18),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-8 py-14 text-center shadow-[0_35px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:px-14">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c5a059]">Oferta válida por 24 horas</p>
            <h2 className="text-4xl leading-tight text-[#f8f3ea] md:text-6xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Quem decide agora,
              <span className="block italic text-[#e6cf97]">muda de rota agora.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#d8cfbc]/80">
              A única decisão que realmente trava a transformação é não decidir. A apresentação agora está estruturada para vender clareza, não só informação.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={CTA_URL} target="_blank" rel="noreferrer" className="gold-button inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-[#162016]">
                Solicitar proposta da mentoria
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </SlideShell>
    </main>
  );
}
