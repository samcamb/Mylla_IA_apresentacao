import { ArrowRight, AudioLines, Check, ChevronRight } from "lucide-react";
import myllaHeroReal from "@assets/mylla-hero-real.jpg";
import myllaMentoriaReal from "@assets/mylla-mentoria-real.jpg";
import myllaFamilyReal from "@assets/mylla-family-real.jpg";
import myllaAvatar from "@assets/mylla-avatar.png";

const SALES_URL = "https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20entender%20a%20Mentoria%20FOCO%20e%20receber%20a%20proposta.";

const pilares = [
  {
    numero: "01",
    titulo: "FOCO em ORGANIZAR",
    texto: "Antes de qualquer mudança financeira acontecer, você precisa criar ordem e entender com clareza para onde seu dinheiro vai.",
  },
  {
    numero: "02",
    titulo: "FOCO em PLANEJAR",
    texto: "Transformamos sonhos em metas reais, com prazos, valores e um mapa claro de execução.",
  },
  {
    numero: "03",
    titulo: "FOCO em REPROGRAMAR",
    texto: "Você identifica crenças, hábitos e padrões que te sabotam para construir uma nova relação com o dinheiro.",
  },
  {
    numero: "04",
    titulo: "FOCO em DECIDIR",
    texto: "Aprende a usar melhor cartão, parcelamento, cashback, milhas e decisões que fazem seu dinheiro render mais.",
  },
  {
    numero: "05",
    titulo: "FOCO em MULTIPLICAR",
    texto: "Você entende o básico dos investimentos de forma simples, segura e consistente, sem complicação desnecessária.",
  },
  {
    numero: "06",
    titulo: "FOCO em EVOLUIR",
    texto: "A liberdade financeira vem da constância. Aqui, você aprende a manter a organização e ajustar a rota ao longo do tempo.",
  },
];

const estrutura = [
  "Plataforma exclusiva com todo o conteúdo gravado",
  "Aplicativo de controle financeiro incluído durante a mentoria",
  "Grupo individual no WhatsApp para dúvidas e direcionamento",
  "Reunião individual mensal com a Mylla para revisão e estratégia",
];

const planos = [
  {
    nome: "FOCO Essential",
    preco: "R$ 5.000",
    diaria: "R$ 17 por dia",
    frase: "Tem que cortar o cafezinho.",
    destaque: false,
    itens: ["Aulas da mentoria", "Hotseat online mensal", "6 sessões", "Aplicativo incluído", "Assessoria exclusiva"],
  },
  {
    nome: "FOCO Direct",
    preco: "R$ 12.000",
    diaria: "R$ 40 por dia",
    frase: "Tem que cortar o almoço fora de casa.",
    destaque: true,
    itens: ["Aulas da mentoria", "Hotseat online mensal", "6 sessões", "Aplicativo incluído", "Assessoria exclusiva", "Lançamentos no app"],
  },
  {
    nome: "FOCO Private",
    preco: "R$ 18.000",
    diaria: "R$ 60 por dia",
    frase: "Tem que cortar o almoço e o cafezinho.",
    destaque: false,
    itens: ["Aulas da mentoria", "Hotseat online mensal", "12 sessões", "Aplicativo incluído", "Assessoria exclusiva", "Lançamentos no app", "Separação PF e PJ", "Sessão coringa"],
  },
];

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-11 w-11 overflow-hidden rounded-2xl border border-[#c5a059]/30 bg-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
        <img src={myllaAvatar} alt="Avatar da Mylla IA" className="h-full w-full object-cover object-center" />
      </div>
      <div className="leading-none">
        <p className="bg-gradient-to-r from-[#ecd9ab] via-[#c5a059] to-[#8b6b2e] bg-clip-text text-xl font-semibold tracking-[0.28em] text-transparent" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          MYLLA IA
        </p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.34em] text-[#d2c7ae]/60">Mentoria FOCO</p>
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-12 max-w-4xl">
      <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#c5a059]">{eyebrow}</p>
      <h2 className="text-4xl leading-tight text-[#f8f3ea] md:text-6xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        {title}
      </h2>
      {description ? <p className="mt-5 max-w-3xl text-lg leading-8 text-[#d7cfbf]/80">{description}</p> : null}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#1a261a] pb-24 pt-20 md:pb-32 md:pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(197,160,89,0.18),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(255,255,255,0.06),transparent_22%),linear-gradient(180deg,#1a261a_0%,#0e140f_100%)]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-14 flex items-center justify-between">
          <LogoMark />
          <a href={SALES_URL} target="_blank" rel="noopener noreferrer" className="hidden rounded-full border border-[#c5a059]/30 bg-white/6 px-6 py-3 text-sm font-medium text-[#f2e7cc] transition hover:border-[#c5a059]/55 hover:bg-white/10 md:inline-flex">
            Solicitar proposta
          </a>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#c5a059]/20 bg-white/6 px-5 py-2 text-[11px] uppercase tracking-[0.28em] text-[#e5cb91] backdrop-blur-xl">
              <AudioLines className="h-3.5 w-3.5" />
              Mentoria premium de organização financeira
            </div>

            <h1 className="max-w-4xl text-5xl leading-[1.02] text-[#f8f3ea] sm:text-6xl md:text-7xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Finanças Organizadas
              <span className="block bg-gradient-to-r from-[#f2dfb2] via-[#c5a059] to-[#8b6b2e] bg-clip-text italic text-transparent">
                para Conquistar Objetivos.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#d7cfbf]/82 md:text-xl">
              Clareza, direção e estrutura para tirar mulheres do caos financeiro e levá-las para uma vida mais leve, organizada e próspera, com o mesmo nível visual premium da Mylla IA.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href={SALES_URL} target="_blank" rel="noopener noreferrer" className="gold-button inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-[#172017] transition hover:scale-[1.02]">
                Solicitar proposta da mentoria
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#pilares" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/6 px-8 py-4 text-base font-medium text-[#f5edda] backdrop-blur-xl transition hover:bg-white/10">
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

          <div className="relative">
            <div className="absolute -left-12 top-1/2 hidden h-40 w-40 -translate-y-1/2 rounded-full bg-[#c5a059]/20 blur-3xl lg:block" />
            <div className="absolute -right-8 top-12 hidden h-28 w-28 rounded-full bg-[#f4e0b3]/10 blur-3xl lg:block" />

            <div className="overflow-hidden rounded-[2.6rem] border border-white/10 bg-white/5 shadow-[0_40px_140px_rgba(0,0,0,0.42)] backdrop-blur-2xl">
              <div className="relative min-h-[320px] overflow-hidden border-b border-white/8 sm:min-h-[420px] lg:min-h-[540px]">
                <img src={myllaHeroReal} alt="Mulher sofisticada representando a Mentoria FOCO no universo Mylla" className="absolute inset-0 h-full w-full object-cover object-[center_18%]" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,12,8,0.82)_0%,rgba(8,12,8,0.42)_38%,rgba(8,12,8,0.08)_70%)]" />
                <div className="absolute bottom-0 left-0 right-0 bg-[linear-gradient(180deg,transparent_0%,rgba(8,12,8,0.72)_100%)] px-6 pb-8 pt-24 sm:px-8 lg:px-10">
                  <div className="max-w-sm rounded-[1.8rem] border border-white/10 bg-[#111714]/68 p-5 backdrop-blur-2xl sm:p-6">
                    <p className="mb-2 text-[11px] uppercase tracking-[0.26em] text-[#e6cf97]">Apresentação premium</p>
                    <p className="text-base leading-7 text-[#efe7d3]/84">
                      O conteúdo da Mentoria FOCO apresentado com o mesmo design system premium, sofisticado e elegante do site da Mylla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PilaresSection() {
  return (
    <section id="pilares" className="bg-[#101610] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Os 6 pilares"
          title="Uma jornada completa para reorganizar, decidir melhor e prosperar com constância."
          description="A metodologia FOCO conduz a aluna por seis etapas complementares, combinando organização, mentalidade, decisões melhores e evolução contínua."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pilares.map((pilar) => (
            <div key={pilar.numero} className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.04))] p-7 shadow-[0_22px_60px_rgba(0,0,0,0.2)] backdrop-blur-2xl">
              <div className="mb-5 inline-flex rounded-full border border-[#c5a059]/20 bg-[#c5a059]/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#e6cf97]">{pilar.numero}</div>
              <h3 className="text-2xl text-[#f6f1e7]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{pilar.titulo}</h3>
              <p className="mt-4 leading-7 text-[#d5ccb9]/76">{pilar.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EstruturaSection() {
  return (
    <section className="bg-[#1a261a] py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_28px_80px_rgba(0,0,0,0.3)]">
          <img src={myllaMentoriaReal} alt="Sessão estratégica premium" className="h-[320px] w-full object-cover object-center md:h-[560px]" />
        </div>

        <div>
          <SectionTitle
            eyebrow="Como funciona"
            title="Não é só um curso. É uma estrutura completa de transformação."
            description="Conteúdo, prática, aplicação e acompanhamento real para que a aluna não fique perdida nem travada no processo."
          />

          <div className="space-y-4">
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
    </section>
  );
}

function AcompanhamentoSection() {
  return (
    <section className="bg-[#101610] py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <SectionTitle
            eyebrow="Acompanhamento real"
            title="Reunião individual mensal para revisar orçamento, ajustar metas e reposicionar a rota do próximo mês."
            description="Nada de respostas genéricas. É o momento exclusivo para olhar a fundo a vida financeira, analisar resultados e desenhar a estratégia certa para continuar evoluindo."
          />

          <div className="rounded-[2rem] border border-[#c5a059]/20 bg-[#c5a059]/10 p-7 text-[#f5eedf]">
            <p className="text-3xl leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              É o tipo de encontro que muda a rota da vida financeira mês após mês.
            </p>
            <p className="mt-4 leading-7 text-[#ede1c7]/82">
              A diferença não está só em ensinar. Está em acompanhar, corrigir e sustentar evolução real ao longo do tempo.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_28px_80px_rgba(0,0,0,0.3)]">
          <img src={myllaFamilyReal} alt="Vida financeira com leveza e direcionamento" className="h-[320px] w-full object-cover object-center md:h-[560px]" />
        </div>
      </div>
    </section>
  );
}

function PlanosSection() {
  return (
    <section className="bg-[#1a261a] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Oferta"
          title="Três caminhos para a mesma decisão: sair do ciclo e assumir o controle."
          description="A comparação abaixo foi reorganizada em blocos premium, mantendo o padrão visual da landing da Mylla e trazendo mais força comercial para a oferta."
        />

        <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {planos.map((plano) => (
            <div key={plano.nome} className={`rounded-[2rem] border p-7 backdrop-blur-2xl ${plano.destaque ? "border-[#c5a059]/30 bg-[linear-gradient(180deg,rgba(197,160,89,0.16),rgba(255,255,255,0.05))] shadow-[0_28px_80px_rgba(0,0,0,0.35)] lg:-translate-y-3" : "border-white/10 bg-white/6"}`}>
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-3xl text-[#f6f1e7]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{plano.nome}</h3>
                {plano.destaque ? <span className="rounded-full bg-[#c5a059] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#172017]">Mais indicado</span> : null}
              </div>

              <p className="text-5xl text-[#f8f3ea]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{plano.preco}</p>
              <p className="mt-2 text-sm text-[#e6cf97]">{plano.diaria}</p>
              <p className="mt-2 text-sm text-[#d5ccb9]/76">{plano.frase}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent" />

              <div className="mt-6 space-y-3">
                {plano.itens.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-white/8 bg-black/10 px-4 py-3 text-[#ddd4c2]">
                    <Check className="mt-0.5 h-4 w-4 text-[#e6cf97]" />
                    <span className="text-sm leading-6">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.4rem] border border-white/8 bg-white/5 px-4 py-4 text-sm text-[#efe7d3]/78">
                Escolha ideal para quem quer sair do improviso e construir clareza com método.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-[#0d120d] py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-[2.5rem] border border-[#c5a059]/20 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.18),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-8 py-14 text-center shadow-[0_35px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:px-14">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c5a059]">Oferta válida por 24 horas</p>
          <h2 className="text-4xl leading-tight text-[#f8f3ea] md:text-6xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Quem decide agora,
            <span className="block italic text-[#e6cf97]">muda de rota agora.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#d8cfbc]/80">
            A única decisão que realmente trava a transformação é não decidir. Clareza, acompanhamento e direção já estão prontos. O próximo passo é seu.
          </p>

          <div className="mx-auto mt-8 grid max-w-3xl gap-4 text-sm text-[#d8cfbc]/74 md:grid-cols-3">
            {[
              "Conteúdo com aplicação prática",
              "Acompanhamento individual real",
              "Oferta estruturada por 24 horas",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/8 bg-white/5 px-4 py-4 backdrop-blur-xl">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={SALES_URL} target="_blank" rel="noopener noreferrer" className="gold-button inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-[#162016] transition hover:scale-[1.02]">
              Solicitar proposta da mentoria
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Landing() {
  return (
    <main className="min-h-screen bg-[#0e140f] text-white">
      <HeroSection />
      <PilaresSection />
      <EstruturaSection />
      <AcompanhamentoSection />
      <PlanosSection />
      <FinalCTA />
    </main>
  );
}
