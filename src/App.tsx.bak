import React, { useState, useRef, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, ShieldCheck, Wind, Check, X, ArrowRight, Package, RefreshCw } from 'lucide-react';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── COLOR SLIDER COMPONENT ───────────────────────────────────────

const SLIDER_ITEMS = [
  { id: 'White', label: 'PUTIH', sub: 'Pure White Edition', img: '/real_assets/pack_white.png',   bg: '#F0EFEA' },
  { id: 'Black', label: 'HITAM', sub: 'Pure Black Edition', img: '/real_assets/pack_black.png',   bg: '#2A2A2A' },
  { id: 'Grey',  label: 'ABU',   sub: 'Grey Melange Edition', img: '/real_assets/pack_grey.png', bg: '#DCDCDC' },
  { id: 'Mix',   label: 'MIX',   sub: 'Black & White Mix',  img: '/real_assets/pack_white_b.jpg', bg: '#E8E8E8' },
];

function ColorSlider({ onSelect, selected }: { onSelect: (id: string) => void; selected: string }) {
  const [active, setActive] = React.useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const goTo = useCallback((idx: number) => {
    const next = (idx + SLIDER_ITEMS.length) % SLIDER_ITEMS.length;
    setActive(next);
    onSelect(SLIDER_ITEMS[next].id);
  }, [onSelect]);

  const handlePointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    isDragging.current = true;
  };
  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = e.clientX - startX.current;
    if (Math.abs(diff) > 40) goTo(active + (diff < 0 ? 1 : -1));
  };

  const item = SLIDER_ITEMS[active];
  const isLight = item.id === 'White' || item.id === 'Grey';

  return (
    <div className="relative w-full overflow-hidden border-2 border-ink shadow-[8px_8px_0_#1A1A1A]">
      {/* Main slide */}
      <div
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        className="relative select-none cursor-grab active:cursor-grabbing"
        style={{ background: item.bg }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: [0.16,1,0.3,1] }}
            className="grid grid-cols-1 md:grid-cols-2 min-h-[420px] md:min-h-[480px]"
          >
            {/* Image side */}
            <div className="flex items-center justify-center p-8 md:p-16">
              <img
                src={item.img}
                alt={item.label}
                className="w-full max-w-[320px] md:max-w-[380px] h-auto object-contain drop-shadow-2xl"
                draggable={false}
              />
            </div>

            {/* Text side */}
            <div className="flex flex-col justify-center p-8 md:p-16 gap-6">
              <div className="space-y-3">
                <div className={`text-[11px] font-black tracking-[0.3em] uppercase ${isLight ? 'text-ink/40' : 'text-white/50'}`}>
                  Pure Cotton Rib · 5 Pasang
                </div>
                <h3 className={`font-display font-black text-[clamp(3rem,8vw,6rem)] leading-[0.9] uppercase tracking-tight ${isLight ? 'text-ink' : 'text-white'}`}>
                  {item.label}
                </h3>
                <p className={`text-[15px] font-bold ${isLight ? 'text-ink/60' : 'text-white/70'}`}>{item.sub}</p>
              </div>

              <button
                onClick={() => onSelect(item.id)}
                className={`self-start inline-flex items-center gap-2 px-6 py-3 border-2 font-black text-[13px] uppercase tracking-wider transition-all hover:-translate-y-0.5 ${
                  isLight
                    ? 'bg-ink text-[#D1F242] border-ink shadow-[4px_4px_0_#D1F242]'
                    : 'bg-[#D1F242] text-ink border-ink shadow-[4px_4px_0_rgba(255,255,255,0.3)]'
                }`}
              >
                Pilih Warna Ini
                <ArrowRight size={14} strokeWidth={3} />
              </button>

              {/* Dots */}
              <div className="flex gap-3 mt-2">
                {SLIDER_ITEMS.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => goTo(i)}
                    className={`w-8 h-2 border-2 border-ink transition-all ${i === active ? 'bg-[#D1F242] w-12' : (isLight ? 'bg-ink/20' : 'bg-white/30')}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrow nav */}
      <button
        onClick={() => goTo(active - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-ink border-2 border-ink flex items-center justify-center shadow-[3px_3px_0_#D1F242] hover:-translate-y-[calc(50%+2px)] transition-transform z-10"
        aria-label="Previous"
      >
        <ArrowRight size={18} strokeWidth={3} className="text-[#D1F242] rotate-180" />
      </button>
      <button
        onClick={() => goTo(active + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-ink border-2 border-ink flex items-center justify-center shadow-[3px_3px_0_#D1F242] hover:-translate-y-[calc(50%+2px)] transition-transform z-10"
        aria-label="Next"
      >
        <ArrowRight size={18} strokeWidth={3} className="text-[#D1F242]" />
      </button>

      {/* Thumbnail strip */}
      <div className="grid grid-cols-4 border-t-2 border-ink">
        {SLIDER_ITEMS.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            className={`relative py-4 px-3 flex flex-col items-center gap-2 border-r-2 last:border-r-0 border-ink transition-all ${
              i === active ? 'bg-[#D1F242]' : 'bg-white hover:bg-[#D1F242]/20'
            }`}
          >
            <img src={s.img} alt={s.label} className="w-12 h-12 object-contain" />
            <span className={`text-[10px] font-black uppercase tracking-wider ${i === active ? 'text-ink' : 'text-ink/50'}`}>{s.label}</span>
            {i === active && <div className="absolute top-0 left-0 right-0 h-[3px] bg-ink" />}
          </button>
        ))}
      </div>
    </div>
  );
}

// ── DATA ────────────────────────────────────────────────────────

const FEATURES = [
  { icon: Wind,       title: 'Sirkulasi 360°',    desc: 'Rajutan berpori mikro mengalirkan udara terus-menerus. Kaki sejuk dari pagi hingga malam.' },
  { icon: ShieldCheck,title: '85% Katun Premium', desc: 'Alami dan lembut bahkan di kulit sensitif. Tidak gatal, terasa nyaman sepanjang hari.' },
  { icon: RefreshCw,  title: 'Karet Bebas Bekas', desc: 'Elastis ekstra-lembut mengikuti bentuk kaki tanpa meninggalkan bekas di mata kaki.' },
  { icon: Package,    title: 'Jahitan Ganda',     desc: 'Tumit dan ujung diperkuat double-stitch. Awet meski dipakai dan dicuci berkali-kali.' },
];

const REVIEWS = [
  { name: 'Andi Setiawan', city: 'Jakarta',  stars: 5, text: 'Akhirnya ada kaos kaki yang tidak membuat saya ingin melepas sepatu saat tengah hari. Ventilasi udaranya nyata — bukan sekadar klaim.' },
  { name: 'Siti Rahayu',   city: 'Surabaya', stars: 5, text: 'Saya berjalan 10.000 langkah setiap hari. Kaos kaki ini luar biasa — tidak ada rasa menjepit dan kaki tetap kering sepanjang hari.' },
  { name: 'Budi Hartono',  city: 'Bandung',  stars: 5, text: 'Sangat lembut dan tidak gerah. Karet atasnya pas sempurna. Langsung pesan 10 pasang untuk setahun ke depan.' },
];

const COMPARISON = [
  'Sirkulasi Udara Mikro 360°',
  '85% Katun Premium',
  'Jahitan Ganda Tumit & Ujung',
  'Cepat Kering & Anti Melar',
  'Karet Bebas Meninggalkan Bekas',
];

const BUNDLES = [
  { id: '3',  label: 'Starter',       pairs: '3 Pasang',  price: '50.000', original: '60.000',  save: 'Hemat 15%' },
  { id: '5',  label: 'Paling Populer', pairs: '5 Pasang', price: '70.000', original: '100.000', save: 'Hemat 30%', featured: true },
  { id: '10', label: 'Best Value',    pairs: '10 Pasang', price: '130.000',original: '200.000', save: 'Hemat 40%' },
];

const COLOR_OPTIONS = [
  { id: 'White', label: 'Putih',   swatch: '#F0EFEA', outline: true, preview: '/real_assets/pack_white.png' },
  { id: 'Grey',  label: 'Abu-abu', swatch: '#94A3B8', preview: '/real_assets/pack_grey.png'  },
  { id: 'Black', label: 'Hitam',   swatch: '#1A1A1A', preview: '/real_assets/b_4_opt.jpg'    },
  { id: 'Mix',   label: 'Mix',     gradient: true,    preview: '/real_assets/pack_white_b.jpg' },
];

const PRODUCT_SPECS = [
  { label: 'Material',  value: '85% Katun Premium' },
  { label: 'Ukuran',    value: 'Universal 36–43'   },
  { label: 'Warna',     value: '4 Pilihan'         },
  { label: 'Isi Paket', value: '5 Pasang'          },
];

// ── COMPONENT ────────────────────────────────────────────────────

export default function App() {
  const [bundle, setBundle] = useState('5');
  const [size,   setSize]   = useState('M');
  const [color,  setColor]  = useState('White');
  const [modal,  setModal]  = useState(false);

  const selected      = BUNDLES.find(b => b.id === bundle)!;
  const selectedColor = COLOR_OPTIONS.find(c => c.id === color)!;
  const waMsg = encodeURIComponent(
    `Halo Lomira, saya ingin memesan ${selected.pairs} kaos kaki premium. Ukuran: ${size}. Warna: ${color}.`
  );
  const waUrl = `https://wa.me/6281284477068?text=${waMsg}`;

  return (
    <div className="min-h-screen bg-cream text-ink font-sans antialiased selection:bg-ink selection:text-cream">

      {/* ── ANNOUNCEMENT ─────────────────────────── */}
      <div className="bg-ink text-cream/50 text-center py-2.5 text-[11px] tracking-[0.22em] uppercase font-medium">
        Gratis Ongkir Seluruh Indonesia&nbsp;&nbsp;·&nbsp;&nbsp;Hari Ini Saja
      </div>

      {/* ── NAV ──────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-border bg-cream/92 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 flex items-center justify-between h-[62px]">
          <a href="#">
            <img src="/logo_opt.png" alt="Lomira" className="h-9 sm:h-10 w-auto" fetchpriority="high" decoding="sync" />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {([['Keunggulan','#features'],['Koleksi','#gallery'],['Ulasan','#reviews'],['Harga','#pricing']] as const).map(([l,h]) => (
              <a key={h} href={h} className="text-[12px] font-medium text-ink/42 hover:text-ink transition-colors tracking-[0.04em]">{l}</a>
            ))}
          </nav>
          <a href="#pricing" className="text-[12px] font-black uppercase bg-[#D1F242] text-ink px-5 py-2.5 border-2 border-ink shadow-[4px_4px_0_#1A1A1A] hover:-translate-y-0.5 transition-all tracking-wider">
            Beli Sekarang
          </a>
        </div>
      </header>

      {/* ── HERO ── FULL-WIDTH BANNER ─────────────── */}
      <section className="relative overflow-hidden">
        <picture>
          <source media="(max-width: 767px)" srcSet="/real_assets/Mobile_banner.png" />
          <img src="/real_assets/banner.png" alt="Lomira Premium Ankle Socks"
            fetchPriority="high" decoding="sync"
            className="w-full h-auto block" />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 max-w-6xl mx-auto">
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, ease:EASE }}>
            <a href="#pricing"
              className="group inline-flex items-center gap-3 bg-[#D1F242] text-ink px-8 py-4 border-2 border-ink shadow-[6px_6px_0_#1A1A1A] font-black text-[16px] uppercase tracking-[0.08em] hover:-translate-y-1 hover:shadow-[8px_8px_0_#1A1A1A] transition-all">
              AMANKAN PROMONYA
              <ArrowRight size={18} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── TRUST STRIP ── BRUTALIST ──────────────── */}
      <Reveal>
        <div className="border-y-2 border-ink bg-[#111111]">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 grid grid-cols-2 md:grid-cols-4">
            {[{stat:'5.000+',label:'Pembeli Puas'},{stat:'4.9 ★',label:'Rating Rata-rata'},{stat:'10 Hari',label:'Garansi Nyaman'},{stat:'Gratis',label:'Ongkir Hari Ini'}].map((item,i) => (
              <div key={i} className="flex flex-col items-center gap-1.5 py-7 px-4 border-r border-b md:border-b-0 last:border-r-0 border-white/10 text-center">
                <span className="font-display text-[1.55rem] font-black text-[#D1F242] uppercase">{item.stat}</span>
                <span className="text-[10px] tracking-[0.16em] uppercase text-white/60 font-bold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <main className="max-w-6xl mx-auto px-6 sm:px-10 pb-28 md:pb-0">

        {/* ── PROBLEM / SOLUTION ─── BRUTALIST */}
        <section className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal className="space-y-6">
            <span className="inline-block bg-ink text-[#D1F242] font-black px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] shadow-[4px_4px_0_#D1F242]">Masalah Umum</span>
            <h2 className="font-display font-black text-[clamp(2.5rem,5vw,4rem)] leading-[1] text-ink uppercase tracking-tight">
              KAKI GERAH BUKAN<br />HAL YANG WAJAR.
            </h2>
            <div className="space-y-3.5">
              <p className="text-[15px] text-ink/70 leading-[1.85] font-bold">
                Sebagian besar kaos kaki menjebak panas dan kelembapan karena bahan sintetis. Hasilnya: kaki berkeringat, tidak nyaman, dan bau sebelum hari berakhir.
              </p>
              <p className="text-[15px] text-ink font-black leading-[1.75] uppercase">
                Lomira dirancang ulang dari dasarnya — bahan alami, teknologi yang tepat, kenyamanan yang nyata.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white border-2 border-ink p-7 space-y-4 shadow-[6px_6px_0_#1A1A1A]">
              <div className="w-10 h-10 bg-ink flex items-center justify-center border-2 border-ink"><X size={18} className="text-white" /></div>
              <div className="space-y-2">
                <h4 className="font-black text-ink text-[14px] uppercase">Kaos Kaki Biasa</h4>
                <p className="text-[13px] text-ink/60 leading-relaxed font-bold">Bahan sintetis, panas, mudah melar, berkeringat, dan bau menjelang siang.</p>
              </div>
            </div>
            <div className="bg-[#D1F242] border-2 border-ink p-7 space-y-4 shadow-[6px_6px_0_#1A1A1A]">
              <div className="w-10 h-10 bg-ink flex items-center justify-center border-2 border-ink"><Check size={18} className="text-[#D1F242]" /></div>
              <div className="space-y-2">
                <h4 className="font-black text-ink text-[14px] uppercase">Lomira Air Mesh</h4>
                <p className="text-[13px] text-ink/80 leading-relaxed font-bold">85% katun premium, ventilasi 360°, cepat kering, nyaman seharian penuh.</p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── FEATURES ─── BRUTALIST */}
        <section id="features" className="py-16 md:py-24 space-y-12">
          <Reveal className="max-w-2xl space-y-4">
            <span className="inline-block bg-ink text-[#D1F242] font-black px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] shadow-[4px_4px_0_#D1F242]">Keunggulan</span>
            <h2 className="font-display font-black text-[clamp(2.5rem,5vw,4rem)] leading-[1] text-ink uppercase tracking-tight">
              DIDESAIN UNTUK<br /><span className="text-ink/30">KENYAMANAN MAKSIMAL.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f,i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="group bg-ink border-2 border-ink p-8 space-y-8 hover:-translate-y-2 transition-all duration-300 h-full shadow-[8px_8px_0_#D1F242]">
                  <div className="w-16 h-16 bg-[#D1F242] flex items-center justify-center border-2 border-ink shadow-[4px_4px_0_#1A1A1A] group-hover:scale-110 transition-transform duration-300">
                    <f.icon size={28} strokeWidth={2.5} className="text-ink" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-black text-white text-[17px] uppercase tracking-wide leading-snug">{f.title}</h3>
                    <p className="text-[14px] text-cream/70 leading-relaxed font-bold">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── GALLERY ── BRUTALIST */}
        <section id="gallery" className="py-16 md:py-24">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div className="space-y-4">
              <span className="inline-block bg-ink text-[#D1F242] font-black px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] shadow-[4px_4px_0_#D1F242]">Koleksi</span>
              <h2 className="font-display font-black text-[clamp(2.5rem,4vw,4.5rem)] leading-[1] uppercase text-ink tracking-tight">
                KATUN PREMIUM.<br /><span className="text-ink/30">MINIMALIS & EVERYDAY.</span>
              </h2>
            </div>
            <p className="text-[13px] text-ink/50 max-w-[180px] leading-[1.75] shrink-0 font-bold uppercase">
              4 warna · 5 pasang<br />per paket · Katun premium
            </p>
          </Reveal>

          {/* Bento grid — fixed equal height */}
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 lg:h-[540px]">

              {/* LEFT — grey pack, tall portrait */}
              <div className="lg:col-span-5 relative overflow-hidden bg-[#ECEAE7] group cursor-pointer aspect-[4/5] lg:aspect-auto border-2 border-ink shadow-[8px_8px_0_#1A1A1A]">
                <img src="/real_assets/pack_grey.png" alt="Grey Edition" loading="lazy" decoding="async"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
                <div className="absolute bottom-5 left-6 space-y-1">
                  <p className="text-[10px] font-black tracking-[0.2em] uppercase text-white/60">Pure Cotton Rib</p>
                  <p className="font-display font-black text-white text-[1.4rem] leading-tight uppercase">Grey Edition</p>
                </div>
              </div>

              {/* RIGHT — stacked */}
              <div className="lg:col-span-7 grid grid-rows-[3fr_2fr] gap-3.5 lg:h-[540px]">

                {/* Right top — white pack landscape */}
                <div className="relative overflow-hidden bg-[#F0EFEA] group cursor-pointer aspect-[16/7] lg:aspect-auto border-2 border-ink shadow-[6px_6px_0_#1A1A1A]">
                  <img src="/real_assets/pack_white_b.jpg" alt="White Edition" loading="lazy" decoding="async"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-ink/15 to-transparent" />
                  <div className="absolute left-7 top-1/2 -translate-y-1/2 space-y-1.5">
                    <p className="text-[10px] font-black tracking-[0.2em] uppercase text-white/60">5 Pasang per Pack</p>
                    <p className="font-display font-black text-white text-[1.5rem] leading-[1.15] uppercase">Pure White<br />Edition</p>
                  </div>
                </div>

                {/* Right bottom — 2 equal cards */}
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="relative overflow-hidden bg-[#ECEAE5] group cursor-pointer aspect-square lg:aspect-auto border-2 border-ink shadow-[4px_4px_0_#1A1A1A]">
                    <img src="/real_assets/b_4_opt.jpg" alt="Premium Ankle Fit" loading="lazy" decoding="async"
                      className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700" />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/60 to-transparent" />
                    <div className="absolute bottom-4 left-5">
                      <p className="font-display font-black text-white uppercase text-[0.95rem] leading-tight">Ankle Fit</p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden bg-[#EDE8DF] group cursor-pointer aspect-square lg:aspect-auto border-2 border-ink shadow-[4px_4px_0_#1A1A1A]">
                    <img src="/real_assets/product_stack.png" alt="5 Pasang Kaos Kaki Premium" loading="lazy" decoding="async"
                      className="w-full h-full object-cover object-center group-hover:scale-[1.05] transition-transform duration-700" />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/55 to-transparent" />
                    <div className="absolute bottom-4 left-5">
                      <p className="font-display font-black text-white uppercase text-[0.95rem] leading-tight">Nyaman<br />Seharian</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Spec strip — Uniqlo style */}
          <Reveal delay={0.08} className="mt-3.5">
            <div className="grid grid-cols-2 md:grid-cols-4 overflow-hidden border-2 border-ink bg-[#D1F242] shadow-[4px_4px_0_#1A1A1A]">
              {PRODUCT_SPECS.map((s,i) => (
                <div key={i} className="flex flex-col gap-1.5 px-6 py-5 border-r border-b md:border-b-0 last:border-r-0 border-ink">
                  <span className="text-[10px] font-black tracking-[0.16em] uppercase text-ink/50">{s.label}</span>
                  <span className="text-[14px] font-black text-ink uppercase">{s.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── REVIEWS ── BRUTALIST */}
        <section id="reviews" className="py-16 md:py-24 space-y-12">
          <Reveal className="space-y-4">
            <span className="inline-block bg-ink text-[#D1F242] font-black px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] shadow-[4px_4px_0_#D1F242]">Ulasan</span>
            <h2 className="font-display font-black text-[clamp(2.5rem,5vw,4rem)] leading-[1] text-ink uppercase tracking-tight">APA KATA MEREKA.</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((r,i) => (
              <Reveal key={i} delay={i * 0.09}>
                <div className="bg-[#F4F4F4] border-2 border-ink p-7 space-y-5 h-full flex flex-col shadow-[4px_4px_0_#1A1A1A] hover:-translate-y-1 transition-all duration-300">
                  <div className="flex gap-0.5">{[...Array(r.stars)].map((_,j) => <Star key={j} size={13} className="fill-[#D1F242] text-[#D1F242]" />)}</div>
                  <p className="text-[1.02rem] text-ink/80 leading-[1.72] flex-1 font-bold">"{r.text}"</p>
                  <div className="flex items-center justify-between pt-4 border-t-2 border-ink">
                    <span className="font-black text-ink text-[13px] uppercase">{r.name}</span>
                    <span className="text-[11px] text-ink/40 tracking-wider font-bold uppercase">{r.city}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── COMPARISON ── BRUTALIST ─────────────────── */}
        <section className="py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            <Reveal className="space-y-6 lg:sticky lg:top-24">
              <span className="inline-block bg-ink text-[#D1F242] font-black px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] shadow-[4px_4px_0_#D1F242]">Perbandingan</span>
              <h2 className="font-display font-black text-[clamp(2.5rem,5vw,4rem)] leading-[1] text-ink uppercase tracking-tight">
                LOMIRA VS<br />LAINNYA.
              </h2>
              <p className="text-[15px] text-ink/60 leading-[1.85] max-w-sm font-bold">
                Bukan sekadar klaim. Setiap keunggulan Lomira dirancang dengan bahan dan teknologi yang dapat Anda rasakan sejak hari pertama.
              </p>
              <a href="#pricing"
                className="inline-flex items-center gap-2 bg-[#D1F242] text-ink px-6 py-3 border-2 border-ink shadow-[4px_4px_0_#1A1A1A] font-black text-[13px] uppercase tracking-wider hover:-translate-y-0.5 transition-all group">
                Lihat Penawaran
                <ArrowRight size={13} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-white border-2 border-ink overflow-hidden shadow-[8px_8px_0_#1A1A1A]">
                <div className="grid grid-cols-12 bg-ink px-6 py-4">
                  <div className="col-span-6 text-[10px] font-black tracking-[0.18em] uppercase text-white/60">Fitur</div>
                  <div className="col-span-3 text-center text-[10px] font-black tracking-[0.18em] uppercase text-[#D1F242]">Lomira</div>
                  <div className="col-span-3 text-center text-[10px] font-black tracking-[0.18em] uppercase text-white/30">Biasa</div>
                </div>
                {COMPARISON.map((feat,i) => (
                  <div key={i} className="grid grid-cols-12 px-6 py-4 border-b-2 last:border-b-0 border-ink/10 items-center hover:bg-[#D1F242]/10 transition-colors">
                    <div className="col-span-6 text-[14px] text-ink/80 font-bold">{feat}</div>
                    <div className="col-span-3 flex justify-center">
                      <div className="w-7 h-7 bg-[#D1F242] flex items-center justify-center border-2 border-ink">
                        <Check size={13} strokeWidth={3} className="text-ink" />
                      </div>
                    </div>
                    <div className="col-span-3 flex justify-center">
                      <div className="w-7 h-7 bg-ink/5 flex items-center justify-center border-2 border-ink/20">
                        <X size={13} strokeWidth={3} className="text-ink/30" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── COLOR SLIDER ── BRUTALIST ─────────────── */}
        <section className="py-16 md:py-24">
          <Reveal className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div className="space-y-3">
                <span className="inline-block bg-ink text-[#D1F242] font-black px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] shadow-[4px_4px_0_#D1F242]">Pilih Warna</span>
                <h2 className="font-display font-black text-[clamp(2rem,4vw,3.5rem)] leading-[1] text-ink uppercase tracking-tight">4 PILIHAN WARNA.</h2>
              </div>
              <p className="text-[13px] text-ink/50 font-bold uppercase tracking-wide">Pure Cotton Rib · 5 Pasang per Pack</p>
            </div>

            {/* Slider */}
            <ColorSlider onSelect={(c) => setColor(c)} selected={color} />
          </Reveal>
        </section>

        {/* ── PRICING ── BRUTALIST ───────────────── */}
        <section id="pricing" className="py-16 md:py-24 space-y-12">
          <Reveal className="space-y-4">
            <span className="inline-block bg-ink text-[#D1F242] font-black px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] shadow-[4px_4px_0_#D1F242]">Penawaran</span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
              <h2 className="font-display font-black text-[clamp(2.5rem,5vw,4rem)] leading-[1] text-ink uppercase tracking-tight">PILIH PAKET ANDA.</h2>
              <p className="text-[14px] text-ink/60 max-w-xs leading-relaxed md:text-right font-bold uppercase">
                Semakin banyak, semakin hemat.<br className="hidden md:block" />Gratis ongkir semua paket hari ini.
              </p>
            </div>
          </Reveal>

          {/* Bundle cards — full width */}
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BUNDLES.map(b => (
                <button key={b.id} onClick={() => setBundle(b.id)}
                  className={`relative p-7 border-2 border-ink text-left transition-all duration-300 cursor-pointer hover:-translate-y-1 ${
                    bundle === b.id
                      ? 'bg-ink shadow-[8px_8px_0_#D1F242]'
                      : 'bg-white shadow-[6px_6px_0_#1A1A1A] hover:shadow-[8px_8px_0_#D1F242]'
                  }`}
                >
                  {b.featured && (
                    <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-black tracking-[0.14em] uppercase px-3.5 py-1 whitespace-nowrap border-2 border-ink ${
                      bundle === b.id ? 'bg-[#D1F242] text-ink' : 'bg-ink text-[#D1F242]'
                    }`}>{b.label}</span>
                  )}
                  {!b.featured && (
                    <div className={`text-[10px] font-black tracking-[0.18em] uppercase mb-4 ${bundle === b.id ? 'text-cream/50':'text-ink/40'}`}>{b.label}</div>
                  )}
                  {b.featured && <div className="mb-4" />}
                  <div className={`text-[1.05rem] font-black uppercase mb-1 ${bundle === b.id ? 'text-cream':'text-ink'}`}>{b.pairs}</div>
                  <div className={`text-[12px] mb-3 line-through ${bundle === b.id ? 'text-cream/30':'text-ink/25'}`}>Rp {b.original}</div>
                  <div className={`text-[1.75rem] font-black leading-none tracking-tight mb-2.5 ${bundle === b.id ? 'text-cream':'text-ink'}`}>
                    Rp {b.price}
                  </div>
                  <div className={`text-[12px] font-black uppercase ${bundle === b.id ? 'text-[#D1F242]':'text-ink/50'}`}>{b.save}</div>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Size + Color — full width */}
          <Reveal delay={0.07}>
            <div className="bg-white border-2 border-ink p-7 space-y-7 shadow-[6px_6px_0_#1A1A1A]">

              {/* Size */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[13px] font-semibold text-ink">Ukuran</span>
                  <span className="text-[11px] text-ink/30 font-medium">Kebanyakan pilih M</span>
                </div>
                <div className="flex gap-3 flex-wrap">
                  {['S','M','L','XL'].map(s => (
                    <button key={s} onClick={() => setSize(s)}
                      className={`relative h-11 min-w-[52px] px-4 text-[13px] font-black border-2 border-ink transition-all cursor-pointer uppercase ${
                        size === s
                          ? 'bg-ink text-cream shadow-[3px_3px_0_#D1F242]'
                          : 'bg-white text-ink hover:bg-[#D1F242]/20'
                      }`}
                    >
                      {s}
                      {s === 'M' && size !== 'M' && (
                        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-sage" />
                      )}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-ink/26 font-medium">Universal · Ukuran sepatu 36–43</p>
              </div>

              {/* Color — clean swatches + animated preview */}
              <div className="space-y-5 pt-1 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="text-[13px] font-semibold text-ink">Warna</span>
                  <span className="text-[12px] font-semibold text-sage">{selectedColor.label}</span>
                </div>

                {/* Swatch circles */}
                <div className="flex gap-5 flex-wrap">
                  {COLOR_OPTIONS.map(c => (
                    <button key={c.id} onClick={() => setColor(c.id)}
                      className="flex flex-col items-center gap-2 cursor-pointer group"
                    >
                      <div
                        className={`w-11 h-11 rounded-full transition-all duration-250 ${
                          color === c.id
                            ? 'ring-2 ring-ink ring-offset-2'
                            : 'group-hover:scale-110'
                        } ${c.outline ? 'border border-ink/14' : ''}`}
                        style={{
                          background: c.gradient
                            ? 'linear-gradient(90deg, #1A1A1A 50%, #F0EFEA 50%)'
                            : c.swatch,
                        }}
                      />
                      <span className={`text-[11px] font-medium transition-colors ${
                        color === c.id ? 'text-ink' : 'text-ink/35'
                      }`}>{c.label}</span>
                    </button>
                  ))}
                </div>

              </div>
            </div>
          </Reveal>

          {/* CTA — full width */}
          <Reveal delay={0.1}>
            <div className="space-y-4">
              <motion.a href={waUrl} target="_blank"
                whileHover={{ scale: 1.006 }} whileTap={{ scale: 0.996 }}
                className="group w-full bg-[#D1F242] text-ink py-[18px] border-2 border-ink shadow-[6px_6px_0_#1A1A1A] font-black text-[18px] uppercase tracking-[0.05em] flex items-center justify-center gap-3 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#1A1A1A] transition-all"
              >
                BELI SEKARANG — Rp {selected.price}
                <ArrowRight size={18} strokeWidth={3} className="group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>

              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[12px] text-ink/26 font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-sage" />
                  Garansi 10 Hari
                </span>
                <span className="text-ink/14">·</span>
                <span>Pembayaran Aman</span>
                <span className="text-ink/14">·</span>
                <button onClick={() => setModal(true)}
                  className="hover:text-ink transition-colors cursor-pointer underline underline-offset-2 decoration-ink/18">
                  Syarat & Ketentuan
                </button>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── GUARANTEE ── unified rhythm with top breathing */}
        <Reveal>
          <section className="pt-6 pb-16 md:pt-8 md:pb-24">
            <div className="bg-white border-2 border-ink px-8 md:px-12 py-10 flex flex-col md:flex-row items-center gap-7 text-center md:text-left shadow-[8px_8px_0_#D1F242]">
              <div className="w-16 h-16 min-w-[64px] min-h-[64px] bg-[#D1F242] flex items-center justify-center border-2 border-ink shadow-[4px_4px_0_#1A1A1A]">
                <ShieldCheck size={28} strokeWidth={2.5} className="text-ink" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="font-display font-black text-[1.6rem] text-ink leading-tight uppercase">GARANSI KENYAMANAN 10 HARI</h3>
                <p className="text-[14px] text-ink/60 leading-relaxed max-w-lg font-bold">
                  Coba Lomira selama 10 hari. Jika kaki Anda tidak terasa lebih sejuk dan nyaman, kami kembalikan uang Anda — tanpa banyak pertanyaan.
                </p>
              </div>
              <button onClick={() => setModal(true)}
                className="shrink-0 text-[12px] font-black text-ink border-2 border-ink px-5 py-2.5 uppercase tracking-wider hover:bg-[#D1F242] hover:shadow-[4px_4px_0_#1A1A1A] transition-all duration-300 cursor-pointer">
                Baca S&K
              </button>
            </div>
          </section>
        </Reveal>

      </main>

      {/* ── FOOTER ───────────────────────────────── */}
      <footer className="border-t border-border py-12 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <img src="/logo_opt.png" alt="Lomira" className="h-8 w-auto opacity-40 hover:opacity-65 transition-opacity duration-300" loading="lazy" />
          <p className="text-[11px] tracking-[0.2em] uppercase text-ink/20 font-medium text-center">
            © 2026 Lomira Premium · All Rights Reserved
          </p>
          <nav className="flex gap-6">
            {([['Koleksi','#gallery'],['Ulasan','#reviews'],['Harga','#pricing']] as const).map(([l,h]) => (
              <a key={h} href={h} className="text-[12px] text-ink/26 hover:text-ink transition-colors font-medium">{l}</a>
            ))}
          </nav>
        </div>
      </footer>

      {/* ── STICKY MOBILE BAR ── BRUTALIST ───────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 py-3.5 bg-ink border-t-2 border-[#D1F242]">
        <a href={waUrl} target="_blank"
          className="w-full bg-[#D1F242] text-ink py-4 flex items-center justify-center font-black text-[15px] uppercase tracking-[0.05em] border-2 border-ink shadow-[4px_4px_0_#1A1A1A]">
          BELI SEKARANG — Rp {selected.price}
        </a>
      </div>

      {/* ── MODAL ────────────────────────────────── */}
      <AnimatePresence>
        {modal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/48 backdrop-blur-sm"
            onClick={() => setModal(false)}>
            <motion.div
              initial={{ opacity:0, scale:0.95, y:14 }}
              animate={{ opacity:1, scale:1, y:0 }}
              exit={{ opacity:0, scale:0.95, y:14 }}
              transition={{ duration:0.22, ease:'easeOut' }}
              onClick={e => e.stopPropagation()}
              className="bg-white w-full max-w-md rounded-2xl p-8 md:p-10 border border-border shadow-2xl overflow-y-auto max-h-[88vh] space-y-6"
            >
              <div className="flex justify-between items-start gap-4">
                <h4 className="font-display text-[1.45rem] text-ink leading-tight">Garansi Kenyamanan 10 Hari</h4>
                <button onClick={() => setModal(false)}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-ink/28 hover:text-ink hover:bg-ink/5 transition-all cursor-pointer shrink-0">
                  <X size={15} />
                </button>
              </div>

              <div className="space-y-5 text-[14px] text-ink/50 leading-relaxed">
                <p className="font-semibold text-ink text-[15px] leading-relaxed">Kami sepenuhnya berdiri di balik kualitas produk kami.</p>
                <ul className="space-y-4">
                  {[
                    ['Uji Coba',    'Gunakan satu pasang. Produk lainnya harus tetap dalam kondisi asli dan belum dipakai.'],
                    ['Bukti',       'Foto produk dan penjelasan singkat diperlukan untuk setiap klaim.'],
                    ['Ongkos Kirim','Biaya pengiriman awal tidak termasuk dalam nilai pengembalian dana.'],
                    ['Berlaku Untuk','Garansi hanya berlaku untuk pembelian pertama kali dari pelanggan baru.'],
                  ].map(([title,desc]) => (
                    <li key={title} className="flex gap-3.5">
                      <Check size={13} className="text-sage shrink-0 mt-0.5" />
                      <span><strong className="text-ink font-semibold">{title}:</strong> {desc}</span>
                    </li>
                  ))}
                </ul>
                <p className="pt-3 border-t border-border text-[12px] italic text-ink/28 leading-relaxed">
                  Kami merancang Lomira untuk melampaui ekspektasi Anda — dan kami menjaminnya sepenuhnya.
                </p>
              </div>

              <button onClick={() => setModal(false)}
                className="w-full bg-ink text-cream py-4 rounded-xl font-semibold text-[14px] hover:bg-ink/85 transition-colors cursor-pointer">
                Mengerti
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
