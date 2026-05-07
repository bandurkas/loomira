import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, 
  ShieldCheck, 
  Wind, 
  Timer, 
  MapPin, 
  Check, 
  Star, 
  X,
  Package,
  Activity,
  ArrowRight,
  Flame,
  ThumbsUp,
  RefreshCw,
  ShoppingBag
} from 'lucide-react';

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function App() {
  const [stock, setStock] = useState(87);
  const [selectedBundle, setSelectedBundle] = useState('5-pairs');
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Ethically dynamic stock counter
    const interval = setInterval(() => {
      setStock(prev => (prev > 12 ? prev - 1 : prev));
    }, 45000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text-p font-sans antialiased pb-24 selection:bg-accent selection:text-white relative">
      
      {/* 1. TOP BAR / SCARCITY HEADER */}
      <div className="w-full bg-accent text-white py-2.5 px-4 text-center text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2.5 z-50">
        <Flame size={14} className="animate-pulse shrink-0" /> 
        <span>Hanya Hari Ini: Gratis Ongkir untuk Semua Pesanan • Promo Spesial Berakhir Malam Ini</span>
      </div>

      {/* 2. NAVIGATION */}
      <nav className="w-full border-b border-border/60 bg-white/70 backdrop-blur-md px-6 py-3 md:py-4 flex justify-between items-center sticky top-0 z-40">
        <div className="flex items-center gap-3 hover:opacity-85 transition-opacity cursor-pointer">
          <img src="/logo_opt.png" alt="Lomira Product" className="h-14 md:h-20 w-auto object-contain" fetchpriority="high" decoding="sync" />
          <span className="text-[9px] font-extrabold bg-accent/10 text-accent px-2 py-0.5 rounded-md tracking-wider">OFFICIAL</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#problem" className="text-xs font-bold uppercase tracking-wider text-text-s hover:text-text-p transition-colors hidden sm:inline-block">Mengapa Kami</a>
          <a href="#reviews" className="text-xs font-bold uppercase tracking-wider text-text-s hover:text-text-p transition-colors hidden sm:inline-block">Ulasan</a>
          <a href="#pricing" className="bg-[#1E293B] text-white text-xs font-black uppercase tracking-wider px-6 py-3 rounded-full hover:bg-black transition-all shadow-md flex items-center gap-2 hover:scale-105">
            <ShoppingBag size={14} /> Beli 5 Pasang
          </a>
        </div>
      </nav>

      {/* MAIN LAYOUT */}
      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1240px] mx-auto px-6 pt-12 md:pt-20 space-y-32"
      >
        
        {/* 3. HERO SECTION */}
        <section className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center min-h-[65vh]">
          <motion.div variants={itemVariants} className="lg:col-span-6 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2.5 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Kaki Gerah & Berkeringat? Tidak Lagi</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-text-p uppercase italic">
              BYE-BYE KAKI GERAH<br/>
              <span className="text-accent font-display not-italic font-bold tracking-tight">NYAMAN</span> SEHARIAN.
            </h1>

            <p className="max-w-xl text-lg md:text-xl text-text-s font-medium leading-relaxed">
              Kaos kaki pendek <span className="font-bold text-text-p">Lomira Air Mesh</span> menjaga kaki tetap sejuk, kering, dan nyaman sepanjang hari. Terbuat dari katun premium 85%, ventilasi 360°, dan pas tanpa rasa menjepit.
            </p>

            {/* CTAs */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a 
                href="#pricing"
                className="w-full sm:w-auto bg-accent text-white px-10 py-5 rounded-2xl font-black uppercase text-base tracking-wide flex items-center justify-center gap-3 hover:bg-accent/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-accent/20 cursor-pointer"
              >
                Beli 5 Pasang – Rp 70.000 ⚡
              </a>
              <a 
                href="#problem"
                className="w-full sm:w-auto bg-white text-text-p border border-border px-8 py-5 rounded-2xl font-black uppercase text-xs tracking-wider text-center flex items-center justify-center gap-2 hover:bg-slate-50 transition-all"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>

            <div className="flex items-center gap-5 border-t border-border/80 w-full pt-6 mt-2">
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={15} className="fill-amber-400 text-amber-400" />)}
              </div>
              <span className="text-xs font-bold text-text-s">4.9/5 dari 5.000+ pembeli terverifikasi</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-6 flex justify-center relative">
            <div className="absolute inset-0 bg-blue-100/40 blur-[120px] rounded-full scale-90 -z-10"></div>
            <img 
              src="/lomira_hero_ankle_5pack_opt.png"
              alt="Paket Kaos Kaki Pendek Lomira"
              fetchpriority="high"
              decoding="sync"
              className="w-full max-w-[480px] h-auto object-contain drop-shadow-[0_45px_70px_rgba(0,0,0,0.14)] select-none hover:scale-102 transition-transform duration-700"
            />
          </motion.div>
        </section>

        {/* 4. PROBLEM AWARENESS SECTION */}
        <section id="problem" className="bg-white border border-border rounded-[3.5rem] p-10 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-accent-light bg-accent/5 px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider">Masalah</div>
            <h2 className="text-3xl md:text-5xl font-black text-text-p italic tracking-tighter uppercase leading-[1]">Pernahkah Kaki Anda<br/>Terasa Terbakar?</h2>
            <p className="text-base text-text-s leading-relaxed font-medium">
              Mari kita jujur. Menjelang tengah hari, kaki Anda terasa seperti dimasak di dalam sepatu. Keringat menumpuk. Bau tak sedap muncul. Dan kaos kaki murah Anda? Melar dan tipis setelah dua kali pencucian.
            </p>
            <p className="text-base text-text-p leading-relaxed font-extrabold italic">
              Anda tidak perlu memikirkan kaos kaki Anda lagi. Seharusnya kaos kaki bekerja secara otomatis untuk kenyamanan Anda.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-3">
              <X className="text-rose-500" size={24} />
              <h4 className="text-lg font-black uppercase text-text-p">Kaos Kaki Biasa</h4>
              <p className="text-sm text-text-s font-medium leading-relaxed">Sirkulasi buruk, panas, berkeringat, cepat melar, dan membuat kaki lecet.</p>
            </div>
            <div className="p-8 bg-accent/5 rounded-3xl border border-accent/10 space-y-3">
              <Check className="text-accent" size={24} />
              <h4 className="text-lg font-black uppercase text-accent">Lomira Air Mesh</h4>
              <p className="text-sm text-text-s font-medium leading-relaxed">Ventilasi 360°, cepat kering, katun premium ramah kulit, dan tahan lama.</p>
            </div>
          </div>
        </section>

        {/* 5. PRODUCT AS SOLUTION (BENEFIT BLOCKS) */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] font-black text-accent-light uppercase tracking-[0.3em]">Mengapa Lomira Berbeda</span>
            <h2 className="text-4xl md:text-6xl font-black text-text-p tracking-tighter uppercase leading-[0.9] italic">Keunggulan Lomira</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { i: Wind, t: "Sirkulasi Udara 360°", d: "Zona ventilasi mikro menjaga udara terus mengalir agar kaki tetap sejuk." },
              { i: ShieldCheck, t: "85% Katun Premium", d: "Tekstur super lembut, sangat sejuk, dan ramah di kulit sensitif." },
              { i: ThumbsUp, t: "Karet Lembut Tidak Ketat", d: "Pas di kaki seharian tanpa rasa sakit atau membekas di mata kaki." },
              { i: Timer, t: "Ujung & Tumit Kuat", d: "Jahitan ganda ekstra kuat, menjamin tidak mudah berlubang." }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white border border-border p-8 rounded-[2.5rem] flex flex-col gap-6 hover:border-accent/30 transition-all shadow-premium hover:-translate-y-1 group duration-500">
                <div className="w-14 h-14 rounded-2xl bg-accent/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <benefit.i size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-text-p uppercase italic tracking-tighter mb-2">{benefit.t}</h3>
                  <p className="text-sm text-text-s font-medium leading-relaxed">{benefit.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. VISUAL PROOF & LIFESTYLE EXHIBIT */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
          <div className="lg:col-span-7 bg-white border border-border rounded-[3.5rem] overflow-hidden min-h-[500px] relative group flex items-center justify-center shadow-premium">
            <img 
              src="/real_assets/b_4_opt.jpg" 
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" 
              alt="Lomira Ankle Fit" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-12 flex flex-col justify-end items-start text-left">
              <span className="text-[10px] font-black text-accent-light uppercase tracking-[0.4em] mb-4">Pas di Bawah Mata Kaki</span>
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-2">Potongan Pendek.<br/>Tidak Menjepit.</h3>
              <p className="text-base text-white/70 max-w-sm">Nyaman untuk sepatu kets, loafers, atau sepatu kerja.</p>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            <div className="bg-white border border-border p-6 md:p-8 rounded-[2.5rem] flex items-center gap-6 shadow-premium hover:border-accent/30 transition-all">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center border border-border shrink-0">
                <img src="/real_assets/b_3_opt.jpg" loading="lazy" decoding="async" className="w-full h-full object-cover select-none" alt="Air Mesh Anti Gerah" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-black uppercase text-text-p italic tracking-tight">Air Mesh Anti Gerah</h4>
                <p className="text-sm text-text-s font-medium leading-relaxed mt-1">Teknologi sirkulasi udara rajutan berpori mikro yang cepat membuang kelembapan. Kaki Anda tetap adem seharian.</p>
              </div>
            </div>

            <div className="bg-white border border-border p-6 md:p-8 rounded-[2.5rem] flex items-center gap-6 shadow-premium hover:border-accent/30 transition-all">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center border border-border shrink-0">
                <img src="/real_assets/pack_opt.jpg" loading="lazy" decoding="async" className="w-full h-full object-cover select-none" alt="5 Pasang Hemat" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-black uppercase text-text-p italic tracking-tight">Paket Hemat</h4>
                <p className="text-sm text-text-s font-medium leading-relaxed mt-1">Paket hemat 5 pasang dengan kualitas rajutan tinggi yang awet, nyaman, dan ramah di kulit.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. SOCIAL PROOF (REAL REVIEWS) */}
        <section id="reviews" className="space-y-12 bg-slate-50/50 border border-border rounded-[3.5rem] p-10 md:p-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] font-black text-accent-light uppercase tracking-[0.3em]">Kepuasan Pelanggan</span>
            <h2 className="text-4xl md:text-6xl font-black text-text-p tracking-tighter uppercase leading-[0.9] italic">Ulasan Pembeli</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: "Andi S.", v: "Pembeli Terverifikasi", t: "Akhirnya ada kaos kaki yang tidak membuat saya ingin melepas sepatu saat tengah hari. Teknologi sirkulasi udaranya nyata." },
              { n: "Siti R.", v: "Pembeli Terverifikasi", t: "Saya berjalan 10.000 langkah setiap hari untuk bekerja. Kaos kaki ini sangat kuat tanpa rasa menjepit sedikit pun." },
              { n: "Budi H.", v: "Pembeli Terverifikasi", t: "Sangat lembut dan tidak gerah sama sekali. Karet atasnya sangat pas tanpa terasa ketat." }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-border shadow-md space-y-4 flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={13} className="fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-base text-text-p italic font-bold leading-relaxed">“{review.t}”</p>
                </div>
                <div className="flex items-center justify-between border-t border-border/80 pt-4 mt-2">
                  <span className="text-sm font-extrabold text-text-p">{review.n}</span>
                  <span className="text-[10px] font-bold uppercase text-accent-light bg-accent/5 px-2.5 py-0.5 rounded-full">{review.v}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. COMPARISON SECTION */}
        <section className="bg-white border border-border rounded-[3.5rem] p-10 md:p-16 max-w-3xl mx-auto space-y-10 shadow-premium">
          <div className="text-center space-y-3">
            <span className="text-[10px] font-black text-accent-light uppercase tracking-[0.3em]">Perbandingan Singkat</span>
            <h2 className="text-3xl md:text-5xl font-black text-text-p tracking-tighter uppercase italic">vs Kaos Kaki Biasa</h2>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-12 gap-4 border-b border-border/80 pb-4 text-xs font-black uppercase text-text-s/70">
              <div className="col-span-6">Keunggulan</div>
              <div className="col-span-3 text-center text-accent">Lomira</div>
              <div className="col-span-3 text-center">Biasa</div>
            </div>
            {[
              { f: "Sirkulasi Udara Mikro 360°", a: true },
              { f: "85% Katun Premium", a: true },
              { f: "Jahitan Ganda Tumit & Ujung", a: true },
              { f: "Cepat Kering & Anti Melar", a: true }
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-12 gap-4 py-4 border-b border-border/40 text-sm items-center font-medium">
                <div className="col-span-6 text-text-p font-bold">{row.f}</div>
                <div className="col-span-3 text-center flex justify-center">
                  <Check className="text-accent" size={18} />
                </div>
                <div className="col-span-3 text-center flex justify-center">
                  <X className="text-rose-400" size={18} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. OFFER / BUNDLES SECTION */}
        <section id="pricing" className="pt-16 flex flex-col items-center">
          <div className="w-full max-w-3xl bg-white border border-border rounded-[4.5rem] p-10 md:p-16 text-center relative shadow-premium overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            
            <div className="inline-flex items-center gap-2 bg-slate-50 px-5 py-2 rounded-full border border-slate-100 mb-8 relative z-10">
              <span className="text-xs font-black text-accent-light uppercase tracking-wider">Pilih Paket Anda</span>
            </div>

            <div className="mb-10 text-center space-y-2">
              <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-text-p">Promo Terbatas</h2>
              <p className="text-sm font-semibold text-rose-500 uppercase tracking-widest flex items-center justify-center gap-2 animate-pulse">
                <Flame size={16} /> ⚡ Hanya tersisa {stock} paket. Promo segera berakhir.
              </p>
            </div>

            {/* Bundle Selector */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
              {[
                { id: "3-pairs", title: "Paket 3 Pasang", price: "50.000", original: "60.000", save: "15%", sub: "Kenyamanan Standar" },
                { id: "5-pairs", title: "Paket 5 Pasang", price: "70.000", original: "100.000", save: "30%", sub: "Paling Populer", featured: true },
                { id: "10-pairs", title: "Paket 10 Pasang", price: "130.000", original: "200.000", save: "40%", sub: "Hemat Maksimal" }
              ].map((bundle) => (
                <div 
                  key={bundle.id}
                  onClick={() => setSelectedBundle(bundle.id)}
                  className={`border p-6 rounded-3xl cursor-pointer flex flex-col justify-between gap-4 transition-all relative ${
                    selectedBundle === bundle.id 
                    ? "border-accent bg-accent/5 ring-4 ring-accent/10 scale-102" 
                    : "border-border bg-white hover:border-slate-300"
                  }`}
                >
                  {bundle.featured && (
                    <div className="absolute -top-3 right-4 bg-accent text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                      🔥 Paling Populer
                    </div>
                  )}
                  <div className="space-y-1">
                    <h3 className="text-lg font-black text-text-p uppercase tracking-tight">{bundle.title}</h3>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-text-s block opacity-70">{bundle.sub}</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-baseline justify-start gap-1">
                      <span className="text-sm font-black text-accent">Rp</span>
                      <span className="text-4xl font-black text-text-p tracking-tighter leading-none">{bundle.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-text-s/50">
                      <span className="line-through">Rp {bundle.original}</span>
                      <span className="text-accent bg-accent/10 font-bold px-2 py-0.5 rounded-md">Hemat {bundle.save}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SIZE & COLOR SELECTORS */}
            <div className="bg-slate-50/70 border border-border/80 rounded-3xl p-6 mb-8 text-left space-y-6">
              {/* SIZE */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-black uppercase tracking-wider text-text-p">Pilih Ukuran</span>
                  <span className="text-[10px] font-bold text-accent">Kebanyakan pembeli memilih M</span>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {['S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-h-[46px] rounded-2xl font-black text-sm uppercase transition-all flex items-center justify-center border cursor-pointer relative ${
                        selectedSize === size
                          ? 'bg-white border-accent text-accent ring-4 ring-accent/5'
                          : 'bg-white border-slate-200 text-text-p hover:border-slate-300'
                      }`}
                    >
                      {size}
                      {size === 'M' && (
                        <span className="absolute -top-1.5 -right-1.5 bg-accent text-white text-[7px] font-black uppercase px-1.5 py-0.5 rounded-full tracking-wider scale-90">
                          Hot
                        </span>
                      )}
                    </button>
                  ))}
                </div>
                <span className="text-[10px] text-text-s font-semibold tracking-wide block">Ukuran standar sesuai ukuran sepatu</span>
              </div>

              {/* COLOR */}
              <div className="space-y-3 border-t border-border/60 pt-5">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-black uppercase tracking-wider text-text-p">Pilih Warna</span>
                  {selectedColor === 'Black' && (
                    <span className="text-[10px] font-bold text-rose-500 animate-pulse">Stok menipis untuk Warna Hitam (Sisa 12)</span>
                  )}
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { id: 'White', name: 'Putih', hex: '#FFFFFF' },
                    { id: 'Grey', name: 'Abu', hex: '#94A3B8' },
                    { id: 'Black', name: 'Hitam', hex: '#1E293B' },
                    { id: 'Mix', name: 'Mix', hex: 'linear-gradient(135deg, #1E293B 50%, #FFFFFF 50%)' }
                  ].map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      className={`min-h-[46px] p-2 rounded-2xl transition-all flex flex-col items-center justify-center gap-1.5 border cursor-pointer ${
                        selectedColor === color.id
                          ? 'bg-white border-accent ring-4 ring-accent/5'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <span 
                        className={`w-5 h-5 rounded-full border border-black/10 shrink-0 ${color.id === 'White' ? 'bg-white' : ''}`}
                        style={{ background: color.id === 'Mix' ? color.hex : color.id === 'White' ? '' : color.hex }}
                      />
                      <span className="text-[9px] font-black text-text-p uppercase tracking-wider">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Massive Add to Cart */}
            <div className="space-y-6">
              <motion.a 
                href={`https://wa.me/6281284477068?text=Halo%20Lomira,%20saya%20ingin%20pesan%20paket%20${selectedBundle}%20kaos%20kaki%20premium%20ankle.%20Ukuran:%20${selectedSize}.%20Warna:%20${selectedColor}.`}
                target="_blank"
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-[#1E293B] text-white py-5 sm:py-6 rounded-2xl flex items-center justify-center gap-4 shadow-xl hover:bg-black transition-all cursor-pointer font-black text-lg sm:text-xl uppercase tracking-wide border-b-4 border-slate-700"
              >
                <ShoppingBag size={24} />
                <span className="tracking-tight">BELI SEKARANG</span>
              </motion.a>

              <div className="flex items-center justify-center gap-6 text-xs font-extrabold text-slate-700 uppercase tracking-widest flex-wrap">
                <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-accent shrink-0" /> Garansi Kenyamanan 10 Hari</span>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="text-accent hover:underline font-extrabold cursor-pointer text-xs"
                >
                  S&K
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 10. RISK REVERSAL: GUARANTEE BLOCK */}
        <section className="bg-slate-50 border border-border rounded-[3.5rem] p-10 md:p-16 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 shadow-md">
          <div className="w-20 h-20 rounded-[2rem] bg-accent/10 flex items-center justify-center text-accent shrink-0">
            <ShieldCheck size={40} />
          </div>
          <div className="space-y-3 flex-1">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h3 className="text-2xl font-black text-text-p uppercase italic tracking-tight">Garansi Kenyamanan 10 Hari</h3>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-accent/10 text-accent font-black text-xs uppercase tracking-wider px-4 py-2 rounded-full hover:bg-accent/20 transition-all cursor-pointer"
              >
                Baca S&K Selengkapnya
              </button>
            </div>
            <p className="text-base text-text-s leading-relaxed font-medium">
              Coba kaos kaki Lomira selama 10 hari. Jika Anda tidak merasakan peningkatan kenyamanan, sirkulasi udara, atau kaki tetap sejuk secara nyata, Anda dapat mengajukan pengembalian dana.
            </p>
          </div>
        </section>

      </motion.main>

      {/* FOOTER */}
      <footer className="mt-48 px-6 text-center space-y-10 border-t border-border pt-16">
        <div className="flex flex-col items-center gap-5">
          <img src="/logo_opt.png" alt="Lomira Product" loading="lazy" decoding="async" className="h-20 md:h-24 w-auto object-contain opacity-90 grayscale hover:grayscale-0 transition-all duration-300" />
          <p className="text-[10px] font-bold text-text-s/40 uppercase tracking-[0.4em]">&copy; 2026 Lomira Premium. Hak Cipta Dilindungi Undang-Undang.</p>
        </div>
      </footer>

      {/* 11. PREMIUM MODAL POPUP (S&K) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-white w-full max-w-lg rounded-[2.5rem] p-8 md:p-10 border border-border shadow-2xl relative overflow-y-auto max-h-[85vh] space-y-6"
            >
              <div className="flex justify-between items-center border-b border-border/60 pb-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={24} className="text-accent" />
                  <h4 className="text-xl font-black text-text-p uppercase tracking-tight">Ketentuan Garansi 10 Hari</h4>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-10 h-10 rounded-full hover:bg-slate-50 border border-border/40 flex items-center justify-center text-text-s hover:text-text-p transition-all cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4 text-sm text-text-s font-medium leading-relaxed">
                <p className="font-bold text-text-p text-base">
                  Coba kaos kaki Lomira selama 10 hari. Jika Anda tidak merasakan peningkatan kenyamanan, sirkulasi udara, atau kaki tetap kering secara nyata, Anda dapat mengajukan pengembalian dana.
                </p>
                <p>Untuk menjaga keadilan bagi semua pembeli:</p>
                <ul className="list-disc pl-5 space-y-3">
                  <li><strong>Uji Coba:</strong> Anda dapat menguji satu pasang dari pesanan Anda. Produk yang tersisa harus belum digunakan dan dalam kondisi asli.</li>
                  <li><strong>Bukti:</strong> Foto produk dan penjelasan singkat diperlukan untuk semua permintaan pengembalian dana.</li>
                  <li><strong>Ongkos Kirim:</strong> Biaya pengiriman awal tidak dapat dikembalikan.</li>
                  <li><strong>Pembeli Pertama:</strong> Pengembalian dana hanya berlaku untuk pembelian pertama kali.</li>
                </ul>
                <p className="pt-2 border-t border-border/40 text-xs italic font-bold">
                  Kami merancang Lomira untuk mengungguli kaos kaki biasa — dan kami menjaminnya sepenuhnya.
                </p>
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-full bg-[#1E293B] hover:bg-black text-white font-black text-base uppercase py-4 rounded-xl transition-all cursor-pointer"
                >
                  SAYA MENGERTI
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
