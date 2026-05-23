import { useState } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import {
  ArrowRight, Instagram, MessageCircle,
  Mail, Phone, MapPin, X
} from 'lucide-react';
import { useReveal } from "./components/hooks/useReveal"

export default function App() {
  const [popupDNA, setPopupDNA] = useState<{
    t: string;
    d: string;
    fullText: string;
    img: string;
    ref: any;
  } | null>(null);

  const VARIABLE_PAYMENT_LINK = "https://buy.stripe.com/test_00w14pcsA1fd7yDbZ99AA04";

    // ── Hero refs
  const heroTag   = useReveal({ direction: 'up', delay: 0 });
  const heroTitle = useReveal({ direction: 'up', delay: 120 });
  const heroCta   = useReveal({ direction: 'up', delay: 240 });
  const heroLine  = useReveal({ direction: 'up', delay: 360 });

  // ── Stats refs
  const stat1 = useReveal({ direction: 'up', delay: 0 });
  const stat2 = useReveal({ direction: 'up', delay: 700 });
  const stat3 = useReveal({ direction: 'up', delay: 700 });

  // ── DNA refs
  const dnaTitle = useReveal({ direction: 'left' });
  const dnaCard1 = useReveal({ direction: 'up', delay: 0 });
  const dnaCard2 = useReveal({ direction: 'up', delay: 150 });
  const dnaCard3 = useReveal({ direction: 'up', delay: 300 });

  // ── Versículo refs
  const versQuote = useReveal({ direction: 'fade' });
  const versRef   = useReveal({ direction: 'up', delay: 200 });

  // ── Líderes refs
  const leadTitle = useReveal({ direction: 'left' });
  const leadSub   = useReveal({ direction: 'right', delay: 100 });
  const lead1     = useReveal({ direction: 'up', delay: 0 });
  const lead2     = useReveal({ direction: 'up', delay: 180 });

  // ── Doações refs
  const doaTitle  = useReveal({ direction: 'up' });
  const doaSub    = useReveal({ direction: 'up', delay: 120 });
  const doaCard1  = useReveal({ direction: 'up', delay: 0 });
  const doaCard2  = useReveal({ direction: 'up', delay: 150 });
  const doaCard3  = useReveal({ direction: 'up', delay: 300 });

  // ── Footer refs
  const footBrand   = useReveal({ direction: 'up', delay: 0 });
  const footLinks   = useReveal({ direction: 'up', delay: 120 });
  const footContact = useReveal({ direction: 'up', delay: 240 });


  const donationOptions = [
    { name: "Cartão Amarelo", amount: 20, description: "Ajude com equipamentos básicos", link: "https://buy.stripe.com/test_6oU9AV9goga7bOTd3d9AA03", img: "favicon.png" },
    { name: "Camisa 10", amount: 50, description: "Patrocine o kit mensal de um aluno", link: "https://buy.stripe.com/test_bJebJ31NW4rp5qvbZ99AA02", img: "favicon.png" },
    { name: "Golaço", amount: 100, description: "Apoie taxas de torneio e nutrição", link: "https://buy.stripe.com/test_cNi4gB9goga7aKP9R19AA01", img: "favicon.png" },
  ];

  const leaders = [
    { name: "Jones Kleber & Naiara Pereira", role: "Fundadores", image: "fundadores.jpeg" },
    { name: "Voluntários",role: "Voluntários",  image: "voluntarios.jpeg" },
  ];

  const sponsors = [
    { name: "Patrocinador1", image: "" },
    { name: "Patrocinador2",  image: "" },
  ];

  const dnaData = [
    { 
      t: "Missão", 
      d: "Transformar a realidade de jovens através do esporte.", 
      fullText: "Nossa missão é usar o esporte como uma poderosa ferramenta de transformação social. Buscamos resgatar jovens de situações de vulnerabilidade, oferecendo oportunidades reais de desenvolvimento físico, mental e espiritual, preparando-os não apenas para o campo, mas para o jogo da vida.",
      img: "campo.png", 
      ref: dnaCard1 
    },
    { 
      t: "Visão",  
      d: "Ser referência em inclusão social até 2030.", 
      fullText: "Almejamos ser reconhecidos nacionalmente como um modelo de excelência em projetos sociais esportivos. Queremos expandir nosso impacto para abraçar cada vez mais famílias, formando cidadãos conscientes e criando uma rede de apoio sólida e duradoura nas comunidades onde atuamos.",
      img: "trofeu.png",  
      ref: dnaCard2 
    },
    { 
      t: "Valores",
      d: "Fé, Disciplina e Respeito acima de tudo.", 
      fullText: "Pautamos nossas ações nos princípios cristãos. Acreditamos que a fé move montanhas e transforma destinos, a disciplina constrói o caráter e o respeito ao próximo é a base fundamental de qualquer equipe vencedora e de uma sociedade mais justa.",
      img: "valores.png", 
      ref: dnaCard3 
    },
  ];



  return (
    <div className="w-full min-h-screen bg-white selection:bg-[var(--gold)] selection:text-[var(--navy)]">

      {/* ── 1. HERO ───────────────────────────────────── */}
      <section className="relative h-[80vh] flex items-center justify-start overflow-hidden">
        
        {/*
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="banner.png"
            className="w-full h-full object-cover scale-105"
          />
        </div>
      */}
        <div className="absolute inset-0 z-0 overflow-hidden">

          {/* Vídeo */}
          <video autoPlay muted loop playsInline className="w-full h-full object-cover scale-105 blur-[2px] brightness-[0.55]"
          >
            <source src="videoMascote.mp4" type="video/mp4" />
          </video>

        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">

            <span
              ref={heroTag}
              className="inline-block px-3 py-1.5 bg-[var(--gold)] text-[var(--navy)] font-black text-xs uppercase mb-4 rounded-sm"
            >
              Futebol • Educação • Impacto
            </span>

            <h1
              ref={heroTitle}
              className="text-6xl md:text-8xl font-black text-white leading-[0.95] uppercase tracking-tighter mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
            >
              Geração <br />
              <span className="text-[var(--gold)] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Eleita
              </span>
            </h1>

            <button
              ref={heroCta}
              onClick={() => window.open(VARIABLE_PAYMENT_LINK, '_blank', 'noopener,noreferrer')}
              className="group flex items-center gap-3 bg-white text-[var(--navy)] px-8 py-4 rounded-full font-black text-lg transition-all hover:bg-[var(--gold)] cursor-pointer"
            >
              QUERO AJUDAR{' '}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

        <p
          ref={heroLine}
          className="absolute bottom-8 left-6 text-xl font-bold text-white max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,1)] border-l-4 border-[var(--gold)] pl-4"
        >
          O evangelho transforma vidas. Projeto 100% voluntário
        </p>
      </section>

      {/* ── 2. STATS ──────────────────────────────────── */}
      <section className="py-10 px-4 bg-[var(--navy)] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">

            <div ref={stat1} className="border-l-4 border-[var(--gold)] pl-6 flex flex-col justify-center w-fit">
              <h2 className="text-6xl font-black leading-none mb-2 tracking-tighter">+70</h2>
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white/50">Famílias Impactadas</p>
            </div>

            <div ref={stat2} className="border-l-4 border-[var(--gold)] pl-6 flex flex-col justify-center w-fit">
              <h2 className="text-6xl font-black leading-none mb-2 tracking-tighter">2016</h2>
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white/50">Fundação</p>
            </div>

            <div ref={stat3} className="border-l-4 border-[var(--gold)] pl-6 flex flex-col justify-center w-fit">
              <h2 className="text-6xl font-black leading-none mb-2 tracking-tighter">+80</h2>
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white/50">Alunos Inscritos</p>
            </div>

          </div>
        </div>
      </section>

        {/* ── 3. DNA ────────────────────────────────────── */}
        <section id="historia" className="py-24 px-6 bg-white relative">
          <div className="max-w-7xl mx-auto mb-12 text-center md:text-left">
            <h2
              ref={dnaTitle}
              className="text-5xl md:text-7xl font-black text-[var(--navy)] uppercase tracking-tighter leading-none mb-8"
            >
              Nosso <span className="text-[var(--burgundy)]">DNA</span>
            </h2>
            
            <div className="max-w-4xl mx-auto md:mx-0 border-l-4 border-[var(--gold)] pl-6 text-left">
              <p className="text-lg md:text-xl font-bold text-gray-500 italic leading-relaxed">
                "Mas vós sois a geração eleita, o sacerdócio real, a nação santa, o povo adquirido, para que anuncieis as virtudes daquele que vos chamou das trevas para a sua maravilhosa luz."
              </p>
              <p className="text-[var(--navy)] font-black uppercase tracking-widest mt-3 text-sm">
                1 Pedro 2:9
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Usando a variável dnaData e adicionando onClick */}
            {dnaData.map((item) => (
              <div
                key={item.t}
                ref={item.ref}
                onClick={() => setPopupDNA(item)} 
                className="relative group h-[400px] overflow-hidden rounded-[32px] shadow-lg cursor-pointer"
              >
                <ImageWithFallback
                  src={item.img}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-[var(--navy)]/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h4 className="text-2xl font-black text-[var(--gold)] uppercase mb-2 flex items-center justify-between">
                    {item.t}
                    <ArrowRight className="w-5 h-5 text-[var(--gold)] opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
                  </h4>
                  <p className="text-lg font-bold text-white leading-tight opacity-90">{item.d}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── CÓDIGO DO POPUP (MODAL) ── */}
          {popupDNA && (
            <div 
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setPopupDNA(null)} // Fecha ao clicar fora
            >
              <div 
                className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full relative shadow-2xl animate-fade-in-up"
                onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar dentro do card
              >
                <button 
                  className="absolute top-6 right-6 p-2 text-gray-400 hover:text-[var(--burgundy)] hover:bg-gray-100 rounded-full transition-all"
                  onClick={() => setPopupDNA(null)}
                >
                  <X size={24} className='cursor-pointer'/>
                </button>
                
                <h3 className="text-3xl md:text-4xl font-black text-[var(--navy)] uppercase mb-6 border-b-4 border-[var(--gold)] pb-2 inline-block">
                  {popupDNA.t}
                </h3>
                
                <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
                  {popupDNA.fullText}
                </p>
              </div>
            </div>
          )}
        </section>

      {/* ── 4. Frase ──────────────────────────────── */}
      <section className="relative w-full overflow-hidden text-center">
  
        {/* Imagem de fundo ocupando 100% da section */}
        <ImageWithFallback
          src="allInCampo.png"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay escuro para dar contraste ao texto */}
        <div className="absolute inset-0 bg-black/45"/>

        {/* Container do texto - Mantém a largura máxima para não esticar em telas gigantes */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:px-20 md:py-20 flex flex-col justify-center items-center">
          
          <blockquote
            ref={versQuote}
            className="text-3xl md:text-5xl font-black italic text-white leading-tight tracking-tight drop-shadow-2xl"
          >
            “Grandes conquistas não nascem das condições perfeitas,
            mas da coragem de continuar acreditando mesmo diante das dificuldades.”
          </blockquote>

          <p
            ref={versRef}
            className="text-xl font-black text-white/70 uppercase tracking-[0.4em] mt-8"
          >
            Ayrton Senna
          </p>

        </div>
      </section>

      
      {/* ── 6. DOAÇÕES ────────────────────────────────── */}
      <section id="doacoes" className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2
              ref={doaTitle}
              className="text-5xl md:text-7xl font-black text-[var(--navy)] uppercase tracking-tighter mb-4"
            >
              Mude um <span className="text-[var(--gold)]">Destino</span>
            </h2>
            <p ref={doaSub} className="text-xl font-bold text-gray-400">
              Escolha como você quer jogar junto com a gente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donationOptions.map((opt, i) => (
              <div
                key={opt.name}
                ref={i === 0 ? doaCard1 : i === 1 ? doaCard2 : doaCard3}
              >
                <div className="group relative bg-[var(--navy)]
                    p-12
                    rounded-[48px]
                    text-center
                    shadow-2xl
                    flex
                    flex-col
                    justify-between
                    h-full
                    overflow-hidden
                    will-change-transform
                    transition-all
                    duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    hover:-translate-y-3
                    hover:scale-[1.015]
                    hover:shadow-[0_35px_80px_rgba(0,0,0,0.22)]
                  ">
                {opt.img && (
                  <img
                    src={opt.img}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt=""
                  />
                )}
                <div className="absolute inset-0 bg-[var(--navy)]/40 rounded-[48px]" />

                <div className="relative z-10 space-y-6">
                  <span className="text-[var(--gold)] text-lg font-black uppercase tracking-widest block drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {opt.name}
                  </span>
                  <div className="text-7xl font-black text-white tracking-tighter drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    R$&nbsp;{opt.amount}
                  </div>
                  <p className="text-base text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {opt.description}
                  </p>
                </div>

                <button
                  onClick={() => window.open(opt.link, '_blank', 'noopener,noreferrer')}
                  className="relative z-10 mt-10 w-full py-5 bg-[var(--gold)] text-[var(--navy)] rounded-2xl font-black text-xl uppercase shadow-lg hover:brightness-110 transition-all cursor-pointer"
                >
                  DOAR AGORA
                </button>
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. RESPONSÁVEIS ───────────────────────────── */}
      <section id="lideres" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
          <h2
            ref={leadTitle}
            className="text-5xl md:text-7xl font-black text-[var(--navy)] uppercase tracking-tighter leading-none text-center md:text-left"
          >
            Quem Conduz
          </h2>
          <p
            ref={leadSub}
            className="text-xl font-bold text-gray-400 max-w-xs text-center md:text-right"
          >
            A força por trás da transformação diária.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {leaders.map((leader, i) => (
            <div
              key={leader.name}
              ref={i === 0 ? lead1 : lead2}
              className="group text-center md:text-left"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[32px] mb-6 transition-all duration-500 shadow-xl border border-gray-100">
                <ImageWithFallback
                  src={leader.image}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h4 className="text-2xl font-black text-[var(--navy)] uppercase mb-1">{leader.name}</h4>
              <p className="text-lg font-bold text-[var(--burgundy)] uppercase tracking-widest">{leader.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. Patrocinadores ───────────────────────────── */}
      <section id="patrocinadores" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
          <h2
            ref={leadTitle}
            className="text-5xl md:text-7xl font-black text-[var(--navy)] uppercase tracking-tighter leading-none text-center md:text-left"
          >
            Patrocinadores
          </h2>
          
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
          {sponsors.map((Sponsors, i) => (
            <div
              key={Sponsors.name}
              ref={i === 0 ? lead1 : lead2}
              className="group text-center md:text-left"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[32px] mb-6 transition-all duration-500 shadow-xl border border-gray-100">
                <ImageWithFallback
                  src={Sponsors.image}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h4 className="text-2xl font-black text-[var(--navy)] uppercase mb-1">{Sponsors.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. FOOTER ─────────────────────────────────── */}
      <footer className="bg-[var(--navy)] text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">

            <div ref={footBrand} className="space-y-8">
              <h3 className="text-4xl font-black uppercase tracking-tighter leading-none">
                Geração <span className="text-[var(--gold)]">Eleita</span>
              </h3>
              <p className="text-white/60 font-bold leading-snug max-w-xs">
                Uma organização sem fins lucrativos focada em transformar realidades
                através do esporte e da educação desde 2016.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/geracaoeleitafootball?igsh=ZDFsMHBsNGY0Z2Fj"
                  target="_blank" rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-full hover:bg-[var(--gold)] hover:text-[var(--navy)] transition-all"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://wa.me/SEUNUMERO"
                  target="_blank" rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-full hover:bg-[#25D366] hover:text-white transition-all"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            <div ref={footLinks} className="space-y-8">
              <h4 className="text-xs font-black uppercase tracking-widest text-[var(--gold)]">Explore</h4>
              <ul className="space-y-4 font-black uppercase text-sm">
                <li><a href="#historia" className="hover:text-[var(--gold)] transition-colors">Nossa História</a></li>
                <li><a href="#lideres"  className="hover:text-[var(--gold)] transition-colors">Nossos Líderes</a></li>
                <li><a href="#doacoes"  className="hover:text-[var(--gold)] transition-colors">Doações</a></li>
              </ul>
            </div>

            <div ref={footContact} className="space-y-8">
              <h4 className="text-xs font-black uppercase tracking-widest text-[var(--gold)]">Contato</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Mail className="text-[var(--gold)] shrink-0" size={20} />
                  <span className="font-bold opacity-80 italic">contato@geracaoeleita.org</span>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="text-[var(--gold)] shrink-0" size={20} />
                  <span className="font-bold opacity-80">(XX) XXXXX-XXXX</span>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="text-[var(--gold)] shrink-0" size={20} />
                  <span className="font-bold opacity-80 leading-tight italic">Campo do Palmeira – Estrada do Calandú</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10 text-center">
            <p className="text-xs font-bold text-white/40 uppercase tracking-widest">
              © 2026 E.F Geração Eleita Football. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}