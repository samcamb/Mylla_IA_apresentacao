import myllaAvatar from "@assets/mylla-avatar.png";
import myllaHeroReal from "@assets/mylla-hero-real.jpg";
import myllaMentoriaReal from "@assets/mylla-mentoria-real.jpg";
import myllaFamilyReal from "@assets/mylla-family-real.jpg";
import { ArrowRight, Check, ChevronRight } from "lucide-react";

const CTA_URL = "https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20entender%20a%20Mentoria%20FOCO%20da%20Mylla.";

const pilares = [
  {
    numero: "01",
    titulo: "FOCO em ORGANIZAR",
    texto:
      "Você entende exatamente para onde seu dinheiro vai, cria um orçamento funcional e constrói a base que sustenta toda a sua evolução financeira.",
  },
  {
    numero: "02",
    titulo: "FOCO em PLANEJAR",
    texto:
      "Seus sonhos deixam de ser intenção solta e viram metas reais, com prazo, valor e rota clara de execução.",
  },
  {
    numero: "03",
    titulo: "FOCO em REPROGRAMAR",
    texto:
      "Você identifica hábitos, crenças e padrões que sabotam sua vida financeira e reconfigura sua relação com o dinheiro.",
  },
  {
    numero: "04",
    titulo: "FOCO em DECIDIR",
    texto:
      "Aprende a parcelar melhor, comprar com inteligência, usar cashback e milhas e tomar decisões financeiras mais maduras.",
  },
  {
    numero: "05",
    titulo: "FOCO em MULTIPLICAR",
    texto:
      "Você entende o básico dos investimentos de forma simples e segura, para fazer o dinheiro trabalhar por você.",
  },
  {
    numero: "06",
    titulo: "FOCO em EVOLUIR",
    texto:
      "Mantém constância, ajusta a rota quando a vida muda e continua avançando sem voltar ao ponto de partida.",
  },
];

const estrutura = [
  "Plataforma exclusiva com aulas gravadas, exercícios e materiais de apoio",
  "Aplicativo de controle financeiro incluído durante a mentoria",
  "Grupo individual no WhatsApp com suporte real e humanizado",
  "Reunião individual mensal com a Mylla para ajustes estratégicos",
];

const planos = [
  {
    nome: "FOCO Essential",
    preco: "R$ 5.000",
    diaria: "R$ 17/dia",
    destaque: false,
    itens: ["Aulas da mentoria", "Hotseat online mensal", "6 sessões", "Aplicativo incluído", "Assessoria exclusiva"],
  },
  {
    nome: "FOCO Direct",
    preco: "R$ 12.000",
    diaria: "R$ 40/dia",
    destaque: true,
    itens: ["Aulas da mentoria", "Hotseat online mensal", "6 sessões", "Aplicativo incluído", "Assessoria exclusiva", "Lançamentos no app"],
  },
  {
    nome: "FOCO Private",
    preco: "R$ 18.000",
    diaria: "R$ 60/dia",
    destaque: false,
    itens: ["Aulas da mentoria", "Hotseat online mensal", "12 sessões", "Aplicativo incluído", "Assessoria exclusiva", "Lançamentos app", "Separação PF e PJ", "Sessão coringa"],
  },
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-11 w-11 overflow-hidden rounded-2xl border border-[#c5a059]/30 bg-white/5">
        <img src={myllaAvatar} alt="Mylla IA" className="h-full w-full object-cover" />
      </div>
      <div>
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
    <div className="mb-12 max-w-4xl">
      <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#c5a059]">{eyebrow}</p>
      <h2 className="text-4xl leading-tight text-[#f8f3ea] md:text-6xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        {title}
      </h2>
      {description ? <p className="mt-5 max-w-3xl text-lg leading-8 text-[#d7cfbf]/80">{description}</p> : null}
    </div>
  );
}

export default function Landing() {
  return (
    <main className="min-h-screen bg-[#0e140f] text-white">
      <section className="relative overflow-hidden bg-[#1a261a] pb-24 pt-12 md:pb-32 md:pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(197,160,89,0.18),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(255,255,255,0.06),transparent_22%),linear-gradient(180deg,#1a261a_0%,#0e140f_100%)]" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-16 flex items-center justify-between">
            <Logo />
            <a href={CTA_URL} target="_blank" rel="noreferrer" className="hidden rounded-full border border-[#c5a059]/30 bg-white/6 px-6 py-3 text-sm font-medium text-[#f2e7cc] md:inline-flex">
              Falar com especialista
            </a>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <div className="mb-8 inline-flex rounded-full border border-[#c5a059]/20 bg-white/6 px-5 py-2 text-[11px] uppercase tracking-[0.28em] text-[#e5cb91] backdrop-blur-xl">
                Mentoria premium de organização financeira
              </div>

              <h1 className="max-w-4xl text-5xl leading-[1.02] text-[#f8f3ea] sm:text-6xl md:text-7xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Finanças Organizadas
                <span className="block bg-gradient-to-r from-[#f2dfb2] via-[#c5a059] to-[#8b6b2e] bg-clip-text italic text-transparent">
                  para Conquistar Objetivos.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#d7cfbf]/82 md:text-xl">
                A apresentação da Mentoria FOCO no universo visual da Mylla IA. Clareza, direção e estrutura para transformar a vida financeira com leveza, inteligência e constância.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#pilares" className="gold-button inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-[#172017]">
                  Ver apresentação
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href={CTA_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/6 px-8 py-4 text-base font-medium text-[#f5edda] backdrop-blur-xl">
                  Solicitar proposta
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/5 shadow-[0_35px_120px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
              <img src={myllaHeroReal} alt="Mulher sofisticada representando a Mylla IA" className="h-[520px] w-full object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#101610] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="A proposta central"
            title="Ganhar dinheiro não é o problema. O problema é não saber exatamente para onde ele vai."
            description="A Mentoria FOCO foi criada para tirar mulheres do ciclo da desorganização financeira e levar para uma vida mais organizada, leve e próspera, mesmo sem intimidade com números."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Clareza", "Entender exatamente o que entra, o que sai e o que precisa mudar."],
              ["Direção", "Transformar sonhos em metas reais com prazo, valor e sequência de execução."],
              ["Estrutura", "Criar um sistema simples, prático e sustentável para não voltar ao caos."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[2rem] border border-white/10 bg-white/6 p-7 backdrop-blur-2xl">
                <h3 className="text-2xl text-[#f6f1e7]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{title}</h3>
                <p className="mt-4 leading-7 text-[#d4ccb9]/76">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pilares" className="bg-[#1a261a] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Os 6 pilares"
            title="Uma jornada completa para reorganizar, decidir melhor e prosperar com consistência."
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

      <section className="bg-[#101610] py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_28px_80px_rgba(0,0,0,0.3)]">
            <img src={myllaMentoriaReal} alt="Sessão estratégica premium" className="h-[520px] w-full object-cover object-center" />
          </div>

          <div>
            <SectionTitle
              eyebrow="Como funciona"
              title="Não é só conteúdo. É uma estrutura completa de transformação."
              description="A Mentoria FOCO combina plataforma, prática, acompanhamento e direção estratégica para garantir aplicação real mês após mês."
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

      <section className="bg-[#1a261a] py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <SectionTitle
              eyebrow="Acompanhamento real"
              title="Reunião individual mensal para ajustar rota, revisar orçamento e evoluir com segurança."
              description="Nada de resposta genérica. A proposta é olhar a fundo a realidade da aluna, revisar resultados, reorganizar metas e desenhar o próximo mês com clareza e leveza."
            />

            <div className="rounded-[2rem] border border-[#c5a059]/20 bg-[#c5a059]/10 p-7 text-[#f5eedf]">
              <p className="text-3xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>É o tipo de encontro que muda a rota da vida financeira mês após mês.</p>
              <p className="mt-4 leading-7 text-[#ede1c7]/82">
                O valor da mentoria não está só em ensinar. Está em manter a aluna em movimento, corrigindo desvios antes que eles virem retrocesso.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_28px_80px_rgba(0,0,0,0.3)]">
            <img src={myllaFamilyReal} alt="Vida financeira com leveza e direcionamento" className="h-[520px] w-full object-cover object-center" />
          </div>
        </div>
      </section>

      <section className="bg-[#101610] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Planos"
            title="Três caminhos para a mesma decisão: sair do ciclo e assumir o controle."
            description="A comparação abaixo mantém clareza comercial, mas dentro de uma apresentação premium, alinhada ao posicionamento da Mylla IA."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {planos.map((plano) => (
              <div key={plano.nome} className={`rounded-[2rem] border p-7 backdrop-blur-2xl ${plano.destaque ? "border-[#c5a059]/30 bg-[linear-gradient(180deg,rgba(197,160,89,0.16),rgba(255,255,255,0.05))] shadow-[0_28px_80px_rgba(0,0,0,0.35)]" : "border-white/10 bg-white/6"}`}>
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-2xl text-[#f6f1e7]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{plano.nome}</h3>
                  {plano.destaque ? <span className="rounded-full bg-[#c5a059] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#172017]">Mais completo</span> : null}
                </div>
                <p className="text-4xl text-[#f8f3ea]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{plano.preco}</p>
                <p className="mt-2 text-sm text-[#e6cf97]">{plano.diaria}</p>

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
      </section>

      <section className="bg-[#0d120d] py-28 md:py-36">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[2.5rem] border border-[#c5a059]/20 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.18),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-8 py-14 text-center shadow-[0_35px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:px-14">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c5a059]">Oferta válida por 24 horas</p>
            <h2 className="text-4xl leading-tight text-[#f8f3ea] md:text-6xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Quem decide agora,
              <span className="block italic text-[#e6cf97]">muda de rota agora.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#d8cfbc]/80">
              A única decisão que realmente pode te travar é não decidir. A oportunidade está aqui, estruturada, completa e pronta para tirar a aluna do mesmo ciclo.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={CTA_URL} target="_blank" rel="noreferrer" className="gold-button inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-[#162016]">
                Solicitar proposta da mentoria
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
