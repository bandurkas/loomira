import { motion } from 'motion/react';
import { Check, Star, Info, ShoppingCart, ShieldCheck, Flame, X, MessageCircle } from 'lucide-react';

import B6 from './b_6.png';
import B7 from './b_7.png';

const IMAGES: Record<string, string> = {
  'b_6.png': B6,
  'b_7.png': B7,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FEATURES = [
  { title: "85% Katun Premium", desc: "Lembut Super Halus" },
  { title: "Air Mesh Tech", desc: "Sirkulasi Udara Bebas" },
  { title: "Karet Elastis", desc: "Nyaman Tidak Berbekas" },
  { title: "Double Reinforce", desc: "Tumit & Ujung Kuat" },
];

const COLORS = [
  { name: 'Putih', class: 'bg-white border-white/20' },
  { name: 'Abu-abu', class: 'bg-gray-400' },
  { name: 'Hitam', class: 'bg-black' },
  { name: 'Mix (B&W)', isMix: true },
];

const SIZE_TABLE = [
  { category: 'Anak', age: '3-7 Thn', size: '20–27 cm' },
  { category: 'Remaja', age: '8-15 Thn', size: '28–35 cm' },
  { category: 'Dewasa', age: 'Umum', size: '36–40 cm' },
];

const COMPARISON = [
  { label: 'Isi Paket', brand: '5 Pasang', others: '1 Pasang' },
  { label: 'Bahan', brand: 'Katun Premium', others: 'Bahan Biasa' },
  { label: 'Ventilasi', brand: 'Air Mesh Tech', others: 'Gerah/Panas' },
  { label: 'Karet', brand: 'Lembut Nyaman', others: 'Ketat Berbekas' },
];

const REVIEWS = [
  { name: "Budi Santoso", text: "Bahannya beneran adem, enak buat kerja seharian.", city: "Jakarta" },
  { name: "Siti Aminah", text: "Beli paket 5 pasang paling untung, buat anak sekolah ok banget.", city: "Bandung" },
  { name: "Andi Wijaya", text: "Kualitasnya jauh beda sama yang biasa, nggak gampang bolong.", city: "Surabaya" },
];

// Image mapping to handle Vite asset bundling
const getImg = (name: string) => IMAGES[name] || name;

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text-p flex justify-center items-start py-12 px-4 sm:px-8 selection:bg-accent selection:text-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-[1280px] grid grid-cols-1 md:grid-cols-12 gap-6"
        id="app-grid"
      >
        {/* --- BRANDING & HEADER --- */}
        <motion.header 
          variants={itemVariants}
          className="md:col-span-12 lg:col-span-7 bg-card border border-border rounded-[3rem] p-8 md:p-14 flex flex-col justify-between relative overflow-hidden group shadow-2xl min-h-[400px]"
        >
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.07] transition-all duration-700 -rotate-12 scale-150">
            <ShieldCheck size={240} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center font-black text-white italic text-2xl shadow-xl shadow-accent/20">L</div>
              <span className="text-2xl font-extrabold tracking-tighter uppercase italic text-white">LOMIRA <span className="font-light opacity-40">PREMIUM</span></span>
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
              <span className="text-[10px] font-bold text-accent-light uppercase tracking-[0.2em]">Elite Tier Performance</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85] text-white">
              SENSASI ADEM<br/>
              <span className="text-accent underline decoration-accent/20 italic">DI SETIAP LANGKAH</span>
            </h1>
            
            <p className="max-w-xl text-text-s text-xl font-medium leading-relaxed mb-10 text-balance">
              Teknologi <span className="text-white">Air Mesh Tech</span> revolusioner menciptakan sirkulasi udara 360°, menjaga kaki tetap dingin bahkan di cuaca tropis ekstrem.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8 relative z-10">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-14 h-14 rounded-2xl border-4 border-card bg-border overflow-hidden rotate-3 hover:rotate-0 transition-transform cursor-pointer">
                  <img src={`https://i.pravatar.cc/100?u=customer_${i}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-14 h-14 rounded-2xl border-4 border-card bg-accent flex items-center justify-center text-xs font-black text-white shadow-lg shadow-accent/20">-3°C</div>
            </div>
            <div className="text-sm font-semibold text-text-s">
              <span className="text-white block text-lg font-bold">Terjual 15,000+ Paket</span>
              Indeks Kepuasan Pelanggan: 4.9/5.0
            </div>
          </div>
        </motion.header>

        {/* --- ELITE SHOWCASE REDESIGN --- */}
        <motion.section 
          variants={itemVariants}
          className="md:col-span-12 lg:col-span-12 bg-white border border-border rounded-[4rem] overflow-hidden relative group shadow-2xl flex flex-col md:flex-row items-center min-h-[700px]"
        >
          {/* Background Gradient Accent */}
          <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-[#f8faf8] to-transparent pointer-events-none"></div>
          
          <div className="relative z-10 w-full md:w-1/2 p-12 md:p-24 flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="inline-flex items-center gap-3 bg-accent/10 px-5 py-2 rounded-2xl mb-8 border border-accent/20">
                <Flame size={16} className="text-accent animate-pulse" />
                <span className="text-[10px] md:text-[12px] font-black text-accent tracking-[0.4em] uppercase italic">Product Intelligence</span>
              </div>

              <span className="block text-slate-500 font-bold text-lg md:text-xl tracking-tight mb-4 uppercase">
                Cocok untuk aktivitas harian
              </span>
              
              <h3 className="text-slate-950 font-black text-6xl md:text-9xl tracking-tighter mb-8 leading-[0.8] uppercase italic drop-shadow-sm">
                Cepat<br/>Kering
              </h3>
              
              <p className="text-slate-600 font-medium text-lg md:text-xl leading-relaxed mb-12 max-w-sm">
                Material micro-ventilasi yang dipatenkan memungkinkan kaki bernapas secara alami, menghilangkan kelembapan dalam hitungan detik.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="fill-accent text-accent" />)}
                </div>
                <span className="text-slate-400 font-bold text-sm tracking-widest uppercase">Elite Studio Edition®</span>
              </div>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 h-full relative p-12 md:p-20 flex justify-center items-center overflow-hidden">
             {/* Dynamic Airflow Lines */}
             <div className="absolute inset-0 pointer-events-none">
                {[1,2,3].map(i => (
                  <motion.div
                    key={i}
                    animate={{
                      x: [-20, 20, -20],
                      y: [-10, 10, -10],
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute w-64 h-64 border border-accent/10 rounded-full blur-3xl"
                    style={{
                      top: `${20 * i}%`,
                      left: `${10 * i}%`,
                    }}
                  />
                ))}
             </div>

             <div className="absolute inset-0 bg-accent/5 rounded-full blur-[120px] scale-75 group-hover:scale-100 transition-transform duration-1000"></div>
             <motion.img 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 }}
                alt="Lomira Lifestyle" 
                className="relative z-10 w-full h-auto max-w-[500px] md:max-w-[600px] object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.15)] group-hover:-translate-y-4 transition-all duration-700 select-none" 
                src={getImg('b_6.png')}
                loading="eager"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Info Tag - Enhanced Positioning */}
              <div className="absolute bottom-12 right-8 md:bottom-20 md:right-24 bg-slate-900 text-white px-6 py-4 rounded-3xl shadow-2xl z-20 flex flex-col gap-1 backdrop-blur-md bg-opacity-95 transform -rotate-6 hover:rotate-0 transition-transform cursor-default">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-accent">Active Tech</span>
                <span className="text-sm font-bold italic truncate">360° Air Circulation</span>
              </div>
          </div>
        </motion.section>

        {/* --- FEATURES GRID --- */}
        <motion.section 
          variants={itemVariants}
          className="md:col-span-6 lg:col-span-4 bg-card border border-border rounded-[3rem] p-10"
        >
          <div className="flex items-center justify-between mb-10">
            <span className="text-[10px] font-black text-accent-light uppercase tracking-[0.3em]">Signature Features</span>
            <div className="w-8 h-[1px] bg-border"></div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {FEATURES.map((feature, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-6 p-6 rounded-[2rem] bg-white/[0.02] border border-white/[0.03] hover:bg-white/[0.04] hover:border-accent/30 transition-all cursor-default"
              >
                <div className="bg-accent rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform">
                  <Check className="text-white w-7 h-7" strokeWidth={4} />
                </div>
                <div>
                  <h4 className="text-base font-black text-white uppercase tracking-tight">{feature.title}</h4>
                  <p className="text-sm font-medium text-text-s mt-1 opacity-60 leading-tight">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* --- COMPARISON & SPECS --- */}
        <motion.section 
          variants={itemVariants}
          className="md:col-span-6 lg:col-span-4 bg-card border border-border rounded-[3rem] p-10 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-10">
              <span className="text-[10px] font-black text-accent-light uppercase tracking-[0.3em]">Quality Audit</span>
              <div className="w-8 h-[1px] bg-border"></div>
            </div>
            <div className="space-y-4">
              {COMPARISON.map((row) => (
                <div key={row.label} className="grid grid-cols-12 items-center pb-4 border-b border-border last:border-0">
                  <div className="col-span-4 text-[10px] font-bold text-text-s uppercase tracking-tighter opacity-50">{row.label}</div>
                  <div className="col-span-4 px-3 py-1.5 rounded-lg bg-accent/10 text-[11px] font-bold text-accent-light text-center border border-accent/20 mx-1">
                    {row.brand}
                  </div>
                  <div className="col-span-4 px-3 py-1.5 rounded-lg bg-white/5 text-[11px] font-medium text-text-s/30 text-center flex items-center justify-center gap-1">
                    <X size={10} /> {row.others}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-10 p-6 bg-accent/5 rounded-3xl border border-accent/10">
            <p className="text-[11px] font-medium text-text-s italic leading-relaxed text-center opacity-80">
              "Kualitas yang melampaui standar industri, dirancang untuk kenyamanan jangka panjang tanpa kompromi."
            </p>
          </div>
        </motion.section>

        {/* --- SIZING UNIT REDESIGN --- */}
        <motion.section 
          variants={itemVariants}
          className="md:col-span-6 lg:col-span-4 bg-card border border-border rounded-[3.5rem] p-10 flex flex-col shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/5 rounded-full blur-[60px]"></div>

          <div className="flex items-center justify-between mb-12 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 bg-accent rounded-full"></div>
              <span className="text-[11px] font-black text-accent-light uppercase tracking-[0.4em] italic">Fit Alignment</span>
            </div>
            <Info size={18} className="text-text-s/20 hover:text-accent/40 transition-colors cursor-pointer" />
          </div>

          <div className="space-y-4 relative z-10">
            {SIZE_TABLE.map((row) => {
              const [range, unit] = row.size.split(' ');
              return (
                <div 
                  key={row.category} 
                  className="flex justify-between items-center p-6 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-accent/30 transition-all duration-500 group"
                >
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-black text-text-s/40 uppercase tracking-[0.2em]">{row.category}</span>
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest opacity-80">
                      Est. {row.age}
                    </span>
                  </div>
                  
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-baseline gap-1.5 leading-none">
                      <span className="text-3xl font-black text-white italic tracking-tighter group-hover:text-accent-light transition-colors">
                        {range}
                      </span>
                      <span className="text-sm font-black text-accent-light/50 uppercase italic tracking-tighter">
                        {unit}
                      </span>
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-text-s/20">EU Standard</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 p-6 bg-white/[0.02] rounded-[2rem] border border-white/5 flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <ShieldCheck size={20} />
             </div>
             <p className="text-[10px] font-bold text-text-s/50 uppercase leading-relaxed tracking-wider">
               Garansi Tukar Ukuran Jika Tidak Fit Di Kaki Anda.
             </p>
          </div>
        </motion.section>

        {/* --- GALLERY UNIT --- */}
        <motion.section 
          variants={itemVariants}
          className="md:col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {[
            { img: 'b_7.png', title: "Elegansi Hitam", desc: "Minimalisme Abadi" },
            { img: 'b_6.png', title: "Premium Cotton", desc: "Kenyamanan Tertinggi" },
          ].map((item, idx) => (
            <div key={idx} className="bg-card border border-border rounded-[3rem] overflow-hidden group relative aspect-video shadow-2xl">
              <img 
                src={getImg(item.img)} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent p-10 flex flex-col justify-end">
                <span className="text-[10px] font-black text-accent-light uppercase tracking-[0.4em] mb-2">{item.desc}</span>
                <span className="text-white font-black text-3xl italic tracking-tighter uppercase leading-none">{item.title}</span>
              </div>
            </div>
          ))}
        </motion.section>

        {/* --- COLOR & VARIANT UNIT --- */}
        <motion.section 
          variants={itemVariants}
          className="md:col-span-12 lg:col-span-4 bg-card border border-border rounded-[3rem] p-10 flex flex-col justify-between shadow-2xl"
        >
          <div>
            <div className="flex items-center justify-between mb-10">
              <span className="text-[10px] font-black text-accent-light uppercase tracking-[0.3em]">Color Palette</span>
              <div className="w-8 h-[1px] bg-border"></div>
            </div>
            <div className="grid grid-cols-4 gap-6 mb-10">
              {COLORS.map((color) => (
                <div key={color.name} className="flex flex-col items-center gap-3 group cursor-pointer">
                  <div className={`w-full aspect-square rounded-2xl shadow-xl border border-white/5 overflow-hidden flex transition-all group-hover:-translate-y-1 group-hover:border-accent/50 ${color.class || ''}`}>
                    {color.isMix && (
                      <div className="w-full h-full grid grid-cols-2">
                         <div className="bg-white"></div>
                         <div className="bg-black"></div>
                      </div>
                    )}
                  </div>
                  <span className="text-[8px] font-black text-text-s tracking-[0.1em] uppercase italic group-hover:text-accent-light transition-colors text-center">{color.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 bg-accent/5 rounded-[2rem] border border-accent/10 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-[0.03] -rotate-12"><Info size={80} className="text-accent" /></div>
             <span className="text-[9px] font-black text-accent-light uppercase tracking-[0.3em]">Special Combo</span>
             <p className="text-xs font-semibold text-text-p mt-2 italic leading-relaxed text-balance">
               Dapatkan <span className="text-accent-light font-black uppercase">Mix Box Exclusive</span>: Kombinasi warna Hitam & Putih paling ikonik.
             </p>
          </div>
        </motion.section>

        {/* --- PRICING RE-DESIGN (MOBILE-FIRST FOCUS) --- */}
        <motion.section 
          id="pricing-section"
          variants={itemVariants}
          className="md:col-span-12 lg:col-span-12 py-10 md:py-20"
        >
          <div className="w-full max-w-[500px] mx-auto bg-card border border-border rounded-[3.5rem] p-8 md:p-14 shadow-[0_50px_100px_-20px_rgba(46,125,50,0.2)] flex flex-col items-center text-center relative overflow-hidden group">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
            <div className="absolute -top-24 -left-24 w-60 h-60 bg-accent/10 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-accent/5 rounded-full blur-[80px]"></div>

            {/* Micro Badge */}
            <div className="inline-flex items-center gap-2 bg-black/40 px-5 py-2 rounded-full border border-white/5 mb-10 relative z-10 transition-transform group-hover:scale-105 duration-500">
              <span className="text-[10px] font-black text-text-s uppercase tracking-[0.3em] italic">Limited Bundle Offer</span>
            </div>

            {/* Pricing Typography Redesign */}
            <div className="flex flex-col items-center mb-12 relative z-10">
              <div className="flex items-center gap-3 text-text-s opacity-40 mb-2">
                <span className="text-xl font-medium tracking-tight italic">Normal Price</span>
                <span className="text-2xl font-bold line-through italic decoration-accent-light/40">Rp 150.000</span>
              </div>
              
              <div className="flex items-start justify-center gap-1.5 mb-6">
                <span className="text-2xl font-black text-accent mt-3 italic">Rp</span>
                <span className="text-8xl md:text-9xl font-black text-white tracking-tighter leading-none italic drop-shadow-2xl">100</span>
                <span className="text-3xl font-black text-white mt-12 italic opacity-60 tracking-tight">.000</span>
              </div>

              {/* Member Badge Implementation */}
              <div className="group/badge relative">
                <div className="absolute inset-0 bg-accent-light blur-2xl opacity-10 group-hover/badge:opacity-25 transition-opacity"></div>
                <div className="relative bg-white text-accent font-black py-3 px-8 rounded-2xl shadow-2xl flex flex-col transform hover:-translate-y-1 transition-transform cursor-default">
                  <span className="text-[10px] uppercase tracking-[0.4em] mb-0.5 leading-none opacity-60">Executive Only</span>
                  <span className="text-xl italic uppercase tracking-tighter leading-tight font-black">HANYA RP 70.000 (MEMBER)</span>
                </div>
              </div>
            </div>

            {/* CTA Button Implementation */}
            <motion.a 
              href="https://wa.me/6281284477068?text=Halo%20Lomira,%20saya%20ingin%20pesan%20paket%205%20pasang%20kaos%20kaki%20premium"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-accent text-white font-black text-2xl py-8 px-10 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(46,125,50,0.5)] hover:shadow-accent/40 transition-all flex items-center justify-center gap-5 border-b-[6px] border-black/20 group/btn relative z-10"
              id="cta-wa"
            >
              <MessageCircle size={32} className="fill-white group-hover/btn:scale-125 transition-transform" />
              <span className="tracking-tight italic uppercase">BELI VIA WA</span>
            </motion.a>

            {/* Footer Trust Element */}
            <div className="mt-10 flex items-center justify-center gap-3 text-text-s opacity-40 group-hover:opacity-70 transition-opacity">
               <ShieldCheck size={18} className="text-accent" />
               <span className="text-[12px] font-bold uppercase tracking-[0.15em] italic">GARANSI KEPUASAN 100%</span>
            </div>

            {/* Delivery Alert Pin */}
            <div className="mt-14 w-full flex items-center justify-center gap-4 py-4 border-t border-border/50">
               <div className="flex -space-x-2">
                 {[1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-full border-2 border-card bg-accent-light/10"></div>)}
               </div>
               <span className="text-[10px] font-bold text-text-s/50 uppercase tracking-widest">+150 Pengiriman Hari Ini</span>
            </div>
          </div>
        </motion.section>

        {/* --- REVIEWS & SOCIAL PROOF --- */}
        <motion.section 
          variants={itemVariants}
          className="md:col-span-12 lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="bg-card border border-border rounded-[2.5rem] p-10 flex flex-col gap-6 relative group hover:border-accent/20 transition-all">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-14 bg-accent/5 rounded-2xl flex items-center justify-center border border-accent/10">
                    <span className="text-xl font-black text-accent italic">{review.name[0]}</span>
                  </div>
                  <div>
                    <span className="block text-white font-extrabold uppercase text-sm tracking-tight">{review.name}</span>
                    <span className="text-[10px] text-text-s uppercase tracking-widest opacity-40">{review.city}</span>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} size={10} className="fill-accent text-accent" />)}
                </div>
              </div>
              <p className="text-lg font-medium text-text-p leading-relaxed italic text-balance">"{review.text}"</p>
              <div className="pt-6 border-t border-border opacity-20 flex justify-between items-center">
                 <span className="text-[9px] uppercase tracking-widest">Verified Purchase</span>
                 <Check size={12} className="text-accent" />
              </div>
            </div>
          ))}
        </motion.section>

        {/* --- FOOTER --- */}
        <footer className="md:col-span-12 lg:col-span-12 py-24 flex flex-col items-center gap-16 border-t border-border mt-12">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
               <div className="w-14 h-14 bg-accent rounded-[1.25rem] flex items-center justify-center font-black text-white italic text-3xl shadow-2xl shadow-accent/20">L</div>
               <span className="text-4xl font-black tracking-tighter uppercase italic text-white">LOMIRA <span className="opacity-30">PREMIUM</span></span>
            </div>
            <div className="flex items-center gap-12 text-[11px] font-black uppercase tracking-[0.4em] text-text-s/50">
              <a href="#" className="hover:text-accent transition-colors">Instagram</a>
              <a href="#" className="hover:text-accent transition-colors">TikTok</a>
              <a href="#" className="hover:text-accent transition-colors">Twitter</a>
            </div>
          </div>
          
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 py-8 border-t border-white/5">
            <span className="text-[10px] font-bold text-text-s/30 uppercase tracking-[0.2em] italic">Crafted for Excellence • 2026 Edition</span>
            <span className="text-[10px] font-bold text-text-s/30 uppercase tracking-[0.2em] italic text-center md:text-right">© LOMIRA STUDIO JAKARTA. ALL RIGHTS RESERVED.</span>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}
