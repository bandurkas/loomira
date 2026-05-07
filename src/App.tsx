import React, { useState, useRef } from 'react';
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
          <a href="#pricing" className="text-[12px] font-semibold bg-ink text-cream px-5 py-2.5 rounded-full hover:bg-ink/80 transition-colors">
            Beli Sekarang
          </a>
        </div>
      </header>

      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-sage-light/45 pointer-events-none" />
        <div className="absolute -top-32 right-0 w-[520px] h-[520px] bg-sage/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 sm:px-10 w-full py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <motion.div initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.85, ease:EASE }} className="space-y-6">
              <span className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-ink/38 border border-border rounded-full px-4 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                Premium Ankle Socks
              </span>
              <h1 className="font-display text-[clamp(3rem,6.5vw,5.5rem)] leading-[1.0] text-ink">
                Kaki Sejuk.<br /><em>Seharian.</em>
              </h1>
              <p className="text-[15px] md:text-[16px] text-ink/48 leading-[1.85] max-w-[400px]">
                Rajutan 85% katun premium dengan ventilasi 360°. Menjaga kaki tetap sejuk, kering, dan bebas bau — dari pagi hingga malam.
              </p>
            </motion.div>

            <motion.div initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.75, ease:EASE, delay:0.18 }} className="flex flex-col sm:flex-row gap-3">
              <a href={waUrl} target="_blank"
                className="group bg-ink text-cream px-7 py-4 rounded-full font-semibold text-[14px] tracking-[0.02em] hover:bg-ink/85 transition-all flex items-center justify-center gap-2.5">
                Beli 5 Pasang — Rp 70.000
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
              <a href="#gallery"
                className="px-7 py-4 rounded-full font-semibold text-[14px] border border-border hover:bg-ink/5 transition-all flex items-center justify-center text-ink/52 tracking-[0.02em]">
                Lihat Koleksi
              </a>
            </motion.div>

            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.7, delay:0.32 }} className="flex items-center gap-3.5 pt-1">
              <div className="flex">{[...Array(5)].map((_,i) => <Star key={i} size={12} className="fill-amber-400 text-amber-400" />)}</div>
              <span className="text-[12px] text-ink/36 font-medium">4.9 · 5.000+ pembeli terverifikasi</span>
            </motion.div>
          </div>

          <motion.div initial={{ opacity:0, scale:0.97 }} animate={{ opacity:1, scale:1 }} transition={{ duration:1.0, ease:EASE }} className="order-1 lg:order-2 flex justify-center items-center relative">
            <div className="absolute w-3/4 h-3/4 bg-sage/10 rounded-full blur-3xl" />
            <img src="/lomira_hero_ankle_5pack_opt.png" alt="Lomira Premium Ankle Socks 5 Pack"
              fetchpriority="high" decoding="sync"
              className="relative w-full max-w-[360px] lg:max-w-[460px] h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.12)] hover:scale-[1.02] transition-transform duration-700" />
          </motion.div>
        </div>
      </section>

      {/* ── TRUST STRIP ──────────────────────────── */}
      <Reveal>
        <div className="border-y border-border bg-white">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 grid grid-cols-2 md:grid-cols-4">
            {[{stat:'5.000+',label:'Pembeli Puas'},{stat:'4.9 ★',label:'Rating Rata-rata'},{stat:'10 Hari',label:'Garansi Nyaman'},{stat:'Gratis',label:'Ongkir Hari Ini'}].map((item,i) => (
              <div key={i} className="flex flex-col items-center gap-1.5 py-7 px-4 border-r border-b md:border-b-0 last:border-r-0 border-border text-center">
                <span className="font-display text-[1.55rem] font-semibold text-ink">{item.stat}</span>
                <span className="text-[10px] tracking-[0.16em] uppercase text-ink/32 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <main className="max-w-6xl mx-auto px-6 sm:px-10 pb-28 md:pb-0">

        {/* ── PROBLEM / SOLUTION ─── unified rhythm */}
        <section className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal className="space-y-6">
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-ink/30">Masalah Umum</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-ink">
              Kaki Gerah Bukan<br />Hal yang Wajar.
            </h2>
            <div className="space-y-3.5">
              <p className="text-[15px] text-ink/46 leading-[1.85]">
                Sebagian besar kaos kaki menjebak panas dan kelembapan karena bahan sintetis. Hasilnya: kaki berkeringat, tidak nyaman, dan bau sebelum hari berakhir.
              </p>
              <p className="text-[15px] text-ink font-semibold leading-[1.75]">
                Lomira dirancang ulang dari dasarnya — bahan alami, teknologi yang tepat, kenyamanan yang nyata.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#FEF2F2] border border-red-100 rounded-2xl p-7 space-y-4">
              <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center"><X size={16} className="text-red-500" /></div>
              <div className="space-y-2">
                <h4 className="font-semibold text-ink text-[14px]">Kaos Kaki Biasa</h4>
                <p className="text-[13px] text-ink/44 leading-relaxed">Bahan sintetis, panas, mudah melar, berkeringat, dan bau menjelang siang.</p>
              </div>
            </div>
            <div className="bg-sage-light border border-sage/18 rounded-2xl p-7 space-y-4">
              <div className="w-9 h-9 rounded-xl bg-sage/15 flex items-center justify-center"><Check size={16} className="text-sage" /></div>
              <div className="space-y-2">
                <h4 className="font-semibold text-sage text-[14px]">Lomira Air Mesh</h4>
                <p className="text-[13px] text-ink/44 leading-relaxed">85% katun premium, ventilasi 360°, cepat kering, nyaman seharian penuh.</p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── FEATURES ─── unified rhythm */}
        <section id="features" className="py-12 md:py-16 space-y-10">
          <Reveal className="max-w-lg space-y-3">
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-ink/30">Keunggulan</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-ink">
              Direkayasa untuk<br />Kenyamanan Nyata.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURES.map((f,i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="group bg-white border border-border rounded-2xl p-6 space-y-5
                               hover:border-sage/28 hover:shadow-[0_6px_32px_rgba(0,0,0,0.05)]
                               hover:-translate-y-1 transition-all duration-500 h-full">
                  <div className="w-10 h-10 rounded-xl bg-sage-light flex items-center justify-center
                                  group-hover:bg-sage transition-colors duration-500">
                    <f.icon size={18} className="text-sage group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-ink text-[14px] leading-snug">{f.title}</h3>
                    <p className="text-[13px] text-ink/40 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── GALLERY ── unified rhythm */}
        <section id="gallery" className="py-12 md:py-16">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div className="space-y-2.5">
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-ink/30">Koleksi</span>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-ink">
                Pure Cotton Rib.<br /><em className="text-ink/36">Minimalist &amp; Everyday.</em>
              </h2>
            </div>
            <p className="text-[13px] text-ink/32 max-w-[180px] leading-[1.75] shrink-0">
              4 warna · 5 pasang<br />per paket · Katun premium
            </p>
          </Reveal>

          {/* Bento grid — fixed equal height */}
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 lg:h-[540px]">

              {/* LEFT — grey pack, tall portrait */}
              <div className="lg:col-span-5 relative overflow-hidden rounded-2xl bg-[#ECEAE7] group cursor-pointer aspect-[4/5] lg:aspect-auto">
                <img src="/real_assets/pack_grey.png" alt="Grey Edition" loading="lazy" decoding="async"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink/55 via-ink/15 to-transparent" />
                <div className="absolute bottom-5 left-6 space-y-1">
                  <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/48">Pure Cotton Rib</p>
                  <p className="font-display text-white text-[1.4rem] leading-tight italic">Grey Edition</p>
                </div>
              </div>

              {/* RIGHT — stacked */}
              <div className="lg:col-span-7 grid grid-rows-[3fr_2fr] gap-3.5 lg:h-[540px]">

                {/* Right top — white pack landscape */}
                <div className="relative overflow-hidden rounded-2xl bg-[#F0EFEA] group cursor-pointer aspect-[16/7] lg:aspect-auto">
                  <img src="/real_assets/pack_white_b.jpg" alt="White Edition" loading="lazy" decoding="async"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-ink/48 via-ink/12 to-transparent" />
                  <div className="absolute left-7 top-1/2 -translate-y-1/2 space-y-1.5">
                    <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/48">5 Pasang per Pack</p>
                    <p className="font-display text-white text-[1.5rem] leading-[1.15] italic">Pure White<br />Edition</p>
                  </div>
                </div>

                {/* Right bottom — 2 equal cards */}
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="relative overflow-hidden rounded-2xl bg-[#ECEAE5] group cursor-pointer aspect-square lg:aspect-auto">
                    <img src="/real_assets/b_4_opt.jpg" alt="Premium Ankle Fit" loading="lazy" decoding="async"
                      className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700" />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/52 to-transparent" />
                    <div className="absolute bottom-4 left-5">
                      <p className="font-display text-white italic text-[0.95rem] leading-tight">Ankle Fit</p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl bg-[#EDE8DF] group cursor-pointer aspect-square lg:aspect-auto">
                    <img src="/real_assets/product_stack.png" alt="5 Pasang Kaos Kaki Premium" loading="lazy" decoding="async"
                      className="w-full h-full object-cover object-center group-hover:scale-[1.05] transition-transform duration-700" />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/48 to-transparent" />
                    <div className="absolute bottom-4 left-5">
                      <p className="font-display text-white italic text-[0.95rem] leading-tight">Nyaman<br />Seharian</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Spec strip — Uniqlo style */}
          <Reveal delay={0.08} className="mt-3.5">
            <div className="grid grid-cols-2 md:grid-cols-4 overflow-hidden rounded-2xl border border-border bg-white">
              {PRODUCT_SPECS.map((s,i) => (
                <div key={i} className="flex flex-col gap-1.5 px-6 py-5 border-r border-b md:border-b-0 last:border-r-0 border-border">
                  <span className="text-[10px] font-medium tracking-[0.16em] uppercase text-ink/26">{s.label}</span>
                  <span className="text-[14px] font-semibold text-ink">{s.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── REVIEWS ── unified rhythm */}
        <section id="reviews" className="py-12 md:py-16 space-y-10">
          <Reveal className="space-y-3">
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-ink/30">Ulasan</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-ink">Kata Mereka.</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {REVIEWS.map((r,i) => (
              <Reveal key={i} delay={i * 0.09}>
                <div className="bg-white border border-border rounded-2xl p-7 space-y-5 h-full flex flex-col
                               hover:border-ink/12 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300">
                  <div className="flex gap-0.5">{[...Array(r.stars)].map((_,j) => <Star key={j} size={11} className="fill-amber-400 text-amber-400" />)}</div>
                  <p className="font-display text-[1.02rem] text-ink/65 leading-[1.72] flex-1 italic">"{r.text}"</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="font-semibold text-ink text-[13px]">{r.name}</span>
                    <span className="text-[11px] text-ink/26 tracking-wider font-medium">{r.city}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            ── COMPARISON  ─  two-column editorial layout
            Full width — no max-w constraint
        ══════════════════════════════════════════════════ */}
        <section className="py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left: header + context */}
            <Reveal className="space-y-6 lg:sticky lg:top-24">
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-ink/30">Perbandingan</span>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-ink">
                Lomira vs<br />Lainnya.
              </h2>
              <p className="text-[15px] text-ink/44 leading-[1.85] max-w-sm">
                Bukan sekadar klaim. Setiap keunggulan Lomira dirancang dengan bahan dan teknologi yang dapat Anda rasakan sejak hari pertama.
              </p>
              <a href="#pricing"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-sage hover:text-ink transition-colors group">
                Lihat Penawaran
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
            </Reveal>

            {/* Right: table */}
            <Reveal delay={0.1}>
              <div className="bg-white border border-border rounded-2xl overflow-hidden">
                <div className="grid grid-cols-12 bg-ink/[0.02] border-b border-border px-6 py-4">
                  <div className="col-span-6 text-[10px] font-semibold tracking-[0.18em] uppercase text-ink/30">Fitur</div>
                  <div className="col-span-3 text-center text-[10px] font-semibold tracking-[0.18em] uppercase text-sage">Lomira</div>
                  <div className="col-span-3 text-center text-[10px] font-semibold tracking-[0.18em] uppercase text-ink/22">Biasa</div>
                </div>
                {COMPARISON.map((feat,i) => (
                  <div key={i} className="grid grid-cols-12 px-6 py-4 border-b last:border-b-0 border-border items-center hover:bg-ink/[0.013] transition-colors">
                    <div className="col-span-6 text-[14px] text-ink/60 font-medium">{feat}</div>
                    <div className="col-span-3 flex justify-center">
                      <div className="w-6 h-6 rounded-full bg-sage-light flex items-center justify-center">
                        <Check size={11} className="text-sage" />
                      </div>
                    </div>
                    <div className="col-span-3 flex justify-center">
                      <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center">
                        <X size={11} className="text-red-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            ── PRICING  ─  full container width
        ══════════════════════════════════════════════════ */}
        <section id="pricing" className="py-12 md:py-16 space-y-10">
          <Reveal className="space-y-3">
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-ink/30">Penawaran</span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-ink">Pilih Paket Anda.</h2>
              <p className="text-[14px] text-ink/40 max-w-xs leading-relaxed md:text-right">
                Semakin banyak, semakin hemat.<br className="hidden md:block" />Gratis ongkir semua paket hari ini.
              </p>
            </div>
          </Reveal>

          {/* Bundle cards — full width */}
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {BUNDLES.map(b => (
                <button key={b.id} onClick={() => setBundle(b.id)}
                  className={`relative p-7 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                    bundle === b.id
                      ? 'bg-ink border-ink shadow-[0_20px_56px_rgba(14,14,14,0.16)]'
                      : 'bg-white border-border hover:border-ink/22 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
                  }`}
                >
                  {b.featured && (
                    <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-semibold tracking-[0.14em] uppercase px-3.5 py-1 rounded-full whitespace-nowrap ${
                      bundle === b.id ? 'bg-sage text-white' : 'bg-ink text-cream'
                    }`}>{b.label}</span>
                  )}
                  {!b.featured && (
                    <div className={`text-[10px] font-medium tracking-[0.18em] uppercase mb-4 ${bundle === b.id ? 'text-cream/38':'text-ink/26'}`}>{b.label}</div>
                  )}
                  {b.featured && <div className="mb-4" />}
                  <div className={`text-[1.05rem] font-semibold mb-1 ${bundle === b.id ? 'text-cream':'text-ink'}`}>{b.pairs}</div>
                  <div className={`text-[12px] mb-3 line-through ${bundle === b.id ? 'text-cream/26':'text-ink/20'}`}>Rp {b.original}</div>
                  <div className={`text-[1.75rem] font-bold leading-none tracking-tight mb-2.5 ${bundle === b.id ? 'text-cream':'text-ink'}`}>
                    Rp {b.price}
                  </div>
                  <div className={`text-[12px] font-semibold ${bundle === b.id ? 'text-sage-light':'text-sage'}`}>{b.save}</div>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Size + Color — full width */}
          <Reveal delay={0.07}>
            <div className="bg-white border border-border rounded-2xl p-7 space-y-7">

              {/* Size */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[13px] font-semibold text-ink">Ukuran</span>
                  <span className="text-[11px] text-ink/30 font-medium">Kebanyakan pilih M</span>
                </div>
                <div className="flex gap-3 flex-wrap">
                  {['S','M','L','XL'].map(s => (
                    <button key={s} onClick={() => setSize(s)}
                      className={`relative h-11 min-w-[52px] px-4 rounded-xl text-[13px] font-semibold border transition-all cursor-pointer ${
                        size === s
                          ? 'bg-ink text-cream border-ink shadow-[0_3px_12px_rgba(14,14,14,0.14)]'
                          : 'bg-white text-ink border-border hover:border-ink/28'
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
                            ? 'conic-gradient(#1A1A1A 0deg 120deg, #94A3B8 120deg 240deg, #F0EFEA 240deg 360deg)'
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
                className="group w-full bg-ink text-cream py-[18px] rounded-2xl font-semibold text-[16px] tracking-[0.01em] flex items-center justify-center gap-3 hover:bg-ink/87 transition-colors"
              >
                Beli Sekarang — Rp {selected.price}
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
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
          <section className="pt-4 pb-12 md:pt-6 md:pb-16">
            <div className="bg-sage-light border border-sage/14 rounded-2xl px-8 md:px-12 py-10 flex flex-col md:flex-row items-center gap-7 text-center md:text-left">
              <div className="w-13 h-13 min-w-[52px] min-h-[52px] rounded-2xl bg-sage/12 flex items-center justify-center">
                <ShieldCheck size={24} className="text-sage" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="font-display text-[1.6rem] text-ink leading-tight">Garansi Kenyamanan 10 Hari</h3>
                <p className="text-[14px] text-ink/42 leading-relaxed max-w-lg">
                  Coba Lomira selama 10 hari. Jika kaki Anda tidak terasa lebih sejuk dan nyaman, kami kembalikan uang Anda — tanpa banyak pertanyaan.
                </p>
              </div>
              <button onClick={() => setModal(true)}
                className="shrink-0 text-[12px] font-semibold text-sage border border-sage/28 px-5 py-2.5 rounded-full hover:bg-sage hover:text-white hover:border-sage transition-all duration-300 cursor-pointer">
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

      {/* ── STICKY MOBILE BAR ────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 py-3.5 bg-cream/95 backdrop-blur-xl border-t border-border">
        <a href={waUrl} target="_blank"
          className="w-full bg-ink text-cream py-4 rounded-xl flex items-center justify-center font-semibold text-[15px] tracking-[0.01em] hover:bg-ink/85 transition-colors">
          Beli Sekarang — Rp {selected.price}
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
