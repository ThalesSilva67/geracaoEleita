import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Users, Globe, Trophy, ArrowRight, Instagram, Facebook, Youtube, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function App() {
  const VARIABLE_PAYMENT_LINK = "https://buy.stripe.com/test_00w14pcsA1fd7yDbZ99AA04";

  const donationOptions = [
    { name: "Cartão Amarelo", amount: 20, description: "Ajude com equipamentos básicos", color: "var(--gold)", link: "https://buy.stripe.com/test_6oU9AV9goga7bOTd3d9AA03",img: "favicon.png" },
    { name: "Camisa 10", amount: 50, description: "Patrocine o kit mensal de um aluno", color: "var(--gold)", link: "https://buy.stripe.com/test_bJebJ31NW4rp5qvbZ99AA02" ,img: "favicon.png" },
    { name: "Golaço", amount: 100, description: "Apoie taxas de torneio e nutrição", color: "var(--gold)", link: "https://buy.stripe.com/test_cNi4gB9goga7aKP9R19AA01" ,img: "favicon.png" }
  ];

  const leaders = [
    { name: "Naiara Pereira", role: "Fundadora", image: "naiara.png" },
    { name: "Marido de Naiara", role: "Fundador", image: "" }
  ];

  return (
    <div className="w-full min-h-screen bg-white selection:bg-[var(--gold)] selection:text-[var(--navy)]">

      {/* 1. HERO */}
      <section className="relative h-[80vh] flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="banner.png"
            className="w-full h-full object-cover scale-105"
          />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1.5 bg-[var(--gold)] text-[var(--navy)] font-black text-xs uppercase mb-4 rounded-sm">
              Futebol • Educação • Impacto
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.95] uppercase tracking-tighter mb-6">
              Geração <br /> <span className="text-[var(--gold)]">Eleita</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-white/80 mb-8 max-w-xl leading-snug">
              O evangelho transforma. Projeto 100% voluntário
            </p>
            <button onClick={() => window.open(VARIABLE_PAYMENT_LINK, '_blank', 'noopener,noreferrer')} className="group flex items-center gap-3 bg-white text-[var(--navy)] px-8 py-4 rounded-full font-black text-lg transition-all hover:bg-[var(--gold)] cursor-pointer">
              QUERO AJUDAR <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform " />
            </button>
          </div>
        </div>
      </section>

      {/* 2. STATS - Centralizado */}
      <section className="py-20 px-6 bg-[var(--navy)] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
            <div className="border-l-4 border-[var(--gold)] pl-6 flex flex-col justify-center w-fit">
              <h2 className="text-6xl font-black leading-none mb-2 tracking-tighter text-left">
                +70
              </h2>
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white/50 text-left">
                Famílias Impactadas
              </p>
            </div>
            <div className="border-l-4 border-[var(--gold)] pl-6 flex flex-col justify-center w-fit">
              <h2 className="text-6xl font-black leading-none mb-2 tracking-tighter text-left">
                2016
              </h2>
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white/50 text-left">
                Fundação
              </p>
            </div>
            <div className="border-l-4 border-[var(--gold)] pl-6 flex flex-col justify-center w-fit">
              <h2 className="text-6xl font-black leading-none mb-2 tracking-tighter text-left">
                +80
              </h2>
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white/50 text-left">
                Alunos Inscritos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DNA */}
      <section id="historia" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto mb-12 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-black text-[var(--navy)] uppercase tracking-tighter leading-none">
            Nosso <span className="text-[var(--burgundy)]">DNA</span>
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { t: "Missão", d: "Transformar a realidade de jovens através do esporte.", img: "campo.png" },
            { t: "Visão", d: "Ser referência em inclusão social até 2030.", img: "trofeu.png"},
            { t: "Valores", d: "Fé, Disciplina e Respeito acima de tudo.", img: "valores.png" }
          ].map((item, i) => (
            <div key={i} className="relative group h-[400px] overflow-hidden rounded-[32px] shadow-lg">
              <ImageWithFallback src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-[var(--navy)]/20 to-transparent opacity-90" />
              <div className="absolute bottom-8 left-8 right-8">
                <h4 className="text-2xl font-black text-[var(--gold)] uppercase mb-2">{item.t}</h4>
                <p className="text-lg font-bold text-white leading-tight opacity-90">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VERSÍCULO */}
      <section className="py-32 bg-[var(--burgundy)] text-center px-6">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-3xl md:text-5xl font-black text-white leading-tight mb-8 tracking-tight italic">
            "Vocês, porém, são <span className="text-[var(--gold)]">geração eleita</span>, sacerdócio real, nação santa, povo exclusivo de Deus."
          </blockquote>
          <p className="text-xl font-black text-white/50 uppercase tracking-[0.4em]">1 Pedro 2:9</p>
        </div>
      </section>

      {/* 5. RESPONSÁVEIS  */}
      <section id="lideres" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
          <h2 className="text-5xl md:text-7xl font-black text-[var(--navy)] uppercase tracking-tighter leading-none text-center md:text-left">
            Quem Conduz
          </h2>
          <p className="text-xl font-bold text-gray-400 max-w-xs text-center md:text-right">A força por trás da transformação diária.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {leaders.map((leader, i) => (
            <div key={i} className="group text-center md:text-left">
              {/* Removida a classe 'grayscale' e 'group-hover:grayscale-0' */}
              <div className="aspect-[4/5] overflow-hidden rounded-[32px] mb-6 transition-all duration-500 shadow-xl border border-gray-100">
                <ImageWithFallback src={leader.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h4 className="text-2xl font-black text-[var(--navy)] uppercase mb-1">{leader.name}</h4>
              <p className="text-lg font-bold text-[var(--burgundy)] uppercase tracking-widest">{leader.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. DOAÇÕES */}
      <section id="doacoes" className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-[var(--navy)] uppercase tracking-tighter mb-4">
              Mude um <span className="text-[var(--gold)]">Destino</span>
            </h2>
            <p className="text-xl font-bold text-gray-400">Escolha como você quer jogar junto com a gente.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {donationOptions.map((opt, i) => (
            <div key={i} className="relative bg-[var(--navy)] p-12 rounded-[48px] text-center shadow-2xl transition-transform hover:-translate-y-4 duration-300 flex flex-col justify-between h-full overflow-hidden">
              
              {opt.img && (
                <img
                  src={opt.img}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}

              {/* Overlay escuro */}
              <div className="absolute inset-0 bg-[var(--navy)]/40 rounded-[48px]" />

              <div className="relative z-10 space-y-6">
              <span className="text-[var(--gold)] text-lg font-black uppercase tracking-widest block drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {opt.name}
              </span>
              <div className="text-7xl font-black text-white tracking-tighter drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                R$ {opt.amount}
              </div>
              <p className="text-base text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {opt.description}
              </p>
            </div>

      <button onClick={() => window.open(opt.link, '_blank', 'noopener,noreferrer')} className="relative z-10 mt-10 w-full py-5 bg-[var(--gold)] text-[var(--navy)] rounded-2xl font-black text-xl uppercase shadow-lg hover:brightness-110 transition-all cursor-pointer">
        DOAR AGORA
      </button>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* 7. FOOTER - Simplificado */}
      <footer className="bg-[var(--navy)] text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
            {/* Branding & Social */}
            <div className="space-y-8">
              <h3 className="text-4xl font-black uppercase tracking-tighter leading-none">
                Geração <span className="text-[var(--gold)]">Eleita</span>
              </h3>
              <p className="text-white/60 font-bold leading-snug max-w-xs">
                Uma organização sem fins lucrativos focada em transformar realidades através do esporte e da educação desde 2016.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/geracaoeleitafootball?igsh=ZDFsMHBsNGY0Z2Fj" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-[var(--gold)] hover:text-[var(--navy)] transition-all">
                  <Instagram size={20} />
                </a>
                <a href="https://wa.me/SEUNUMERO" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-[#25D366] hover:text-white transition-all">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            {/* Links Rápidos */}
            <div className="space-y-8">
              <h4 className="text-xs font-black uppercase tracking-widest text-[var(--gold)]">Explore</h4>
              <ul className="space-y-4 font-black uppercase text-sm">
                <li><a href="#historia" className="hover:text-[var(--gold)] transition-colors">Nossa História</a></li>
                <li><a href="#lideres" className="hover:text-[var(--gold)] transition-colors">Nossos Lideres</a></li>
                <li><a href="#doacoes" className="hover:text-[var(--gold)] transition-colors">Doações</a></li>
              </ul>
            </div>

            {/* Contato */}
            <div className="space-y-8">
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
                  <span className="font-bold opacity-80 leading-tight italic">Campo do Palmeira - Estrada do Calandú</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
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