import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check, Leaf, ShieldCheck, Sparkles, Star, Wind, X } from 'lucide-react';

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
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── DATA ────────────────────────────────────────────────────────

const WA_NUMBER = '6281284477068';
const PRICE = 75000;
const PER_PAIR = Math.round(PRICE / 5 / 500) * 500;
const fmtIDR = (n: number) => 'Rp ' + n.toLocaleString('id-ID');

const BENEFITS = [
  { icon: Leaf,        title: '85% Katun Premium',    desc: 'Tekstur ekstra lembut, menyerap keringat dengan sempurna. Nyaman bahkan di kulit sensitif.' },
  { icon: Wind,         title: 'Air Mesh Technology',  desc: 'Sirkulasi udara lancar — kaki tetap adem dan bebas gerah meski aktif seharian.' },
  { icon: Sparkles,     title: 'Karet Bebas Bekas',    desc: 'Elastis lembut, mencengkeram pas tanpa meninggalkan bekas kemerahan di mata kaki.' },
  { icon: ShieldCheck,  title: 'Jahitan Diperkuat',    desc: 'Area tumit dan ujung diperkuat double-stitch agar tidak mudah bolong dan lebih awet.' },
];

const COLORS = [
  { id: 'Hitam',   swatch: '#181818',                                     img: '/photos/IMG_0984_sq.jpg' },
  { id: 'Putih',   swatch: '#F2EFE6', outline: true,                      img: '/photos/IMG_0986_sq.jpg' },
  { id: 'Abu-abu', swatch: '#C9C4B6',                                     img: '/photos/IMG_0989_sq.jpg' },
  { id: 'Mix',     swatch: 'linear-gradient(90deg,#181818 50%,#F2EFE6 50%)', img: '/photos/IMG_0990_sq.jpg' },
];

const SIZES = [
  { cat: 'Anak',   eu: '20–27', cm: '12–17 cm' },
  { cat: 'Remaja', eu: '28–35', cm: '18–23 cm' },
  { cat: 'Dewasa', eu: '36–40', cm: '24–26 cm' },
];

const REVIEWS = [
  { name: 'Andi Setiawan', city: 'Jakarta',  stars: 5, text: 'Akhirnya ada kaos kaki yang tidak membuat saya ingin melepas sepatu saat tengah hari. Sirkulasi udaranya nyata — bukan sekadar klaim.' },
  { name: 'Siti Rahayu',   city: 'Surabaya', stars: 5, text: 'Saya berjalan 10.000 langkah setiap hari. Kaos kaki ini luar biasa — tidak menjepit dan kaki tetap kering sepanjang hari.' },
  { name: 'Budi Hartono',  city: 'Bandung',  stars: 5, text: 'Sangat lembut dan tidak gerah. Karet atasnya pas sempurna. Fotonya sesuai aslinya — langsung pesan lagi untuk keluarga.' },
];

const STATS = [
  { stat: '5.000+', label: 'Pembeli Puas' },
  { stat: '4.9 ★',  label: 'Rating Rata-rata' },
  { stat: '10 Hari', label: 'Garansi Nyaman' },
  { stat: 'Gratis',  label: 'Ongkir Hari Ini' },
];

// ── COMPONENT ────────────────────────────────────────────────────

export default function App() {
  const [color, setColor] = useState('Hitam');
  const [size, setSize] = useState('Dewasa');

  const waMsg = encodeURIComponent(
    `Halo Lomira, saya ingin memesan paket 5 pasang kaos kaki premium (${fmtIDR(PRICE)}). Warna: ${color}. Ukuran: ${size}.`
  );
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${waMsg}`;

  return (
    <div className="min-h-screen bg-cream text-ink font-sans antialiased selection:bg-sage selection:text-cream">

      {/* ── ANNOUNCEMENT ─────────────────────────── */}
      <div className="bg-ink text-mint text-center py-2.5 text-[11px] tracking-[0.2em] uppercase font-bold">
        Gratis Ongkir Seluruh Indonesia&nbsp;&nbsp;·&nbsp;&nbsp;Hari Ini Saja
      </div>

      {/* ── NAV ──────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-line bg-cream/92 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 flex items-center justify-between h-[74px]">
          <a href="#">
            <img src="/logo_opt.png" alt="Lomira" className="h-9 sm:h-10 w-auto" fetchPriority="high" decoding="sync" />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {([['Keunggulan', '#keunggulan'], ['Warna', '#warna'], ['Ulasan', '#ulasan'], ['Ukuran', '#ukuran']] as const).map(([l, h]) => (
              <a key={h} href={h} className="text-[13px] font-semibold text-ink-soft hover:text-ink transition-colors">{l}</a>
            ))}
          </nav>
          <a href="#pesan" className="text-[13px] font-bold text-white bg-sage px-6 py-2.5 rounded-full shadow-[0_8px_24px_rgba(11,122,67,0.28)] hover:bg-sage-bright hover:-translate-y-0.5 transition-all">
            Pesan Sekarang
          </a>
        </div>
      </header>

      {/* ── HERO ─────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 pt-14 md:pt-20 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
        <Reveal className="flex flex-col gap-7">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="bg-sage-light text-sage text-[12px] font-bold px-4 py-2 rounded-full tracking-wide">Paket 5 Pasang</span>
            <span className="bg-white border border-line text-ink-soft text-[12px] font-semibold px-4 py-2 rounded-full">Foto produk 100% asli</span>
          </div>
          <h1 className="font-display font-semibold text-[clamp(2.6rem,5.2vw,4rem)] leading-[1.04] tracking-tight text-ink">
            Kaki adem &amp; bebas bau,<br />
            <span className="italic text-sage">seharian penuh.</span>
          </h1>
          <p className="text-[17px] text-ink-soft leading-[1.7] max-w-[440px]">
            Kaos kaki 85% katun premium dengan teknologi Air Mesh. Karet lembut tanpa bekas, tumit diperkuat agar tidak mudah bolong.
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            <a href="#pesan" className="group inline-flex items-center gap-2.5 bg-sage text-white px-8 py-4 rounded-full font-bold text-[16px] shadow-[0_10px_28px_rgba(11,122,67,0.3)] hover:bg-sage-bright hover:-translate-y-1 transition-all">
              Pesan — {fmtIDR(PRICE)}
              <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex flex-col">
              <span className="text-[15px] font-bold text-ink">{fmtIDR(PER_PAIR)} / pasang</span>
              <span className="text-[12px] text-muted font-medium">isi 5 pasang per paket</span>
            </div>
          </div>
          <div className="flex gap-x-6 gap-y-2.5 pt-1 flex-wrap">
            {['Garansi nyaman 10 hari', '4 pilihan warna', 'Anak – Dewasa'].map((t) => (
              <div key={t} className="flex items-center gap-2 text-[13px] font-semibold text-ink-soft">
                <Check size={15} className="text-sage" strokeWidth={3} /> {t}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <div className="rounded-[2rem] overflow-hidden shadow-[0_30px_70px_rgba(20,20,15,0.18)] rotate-[0.4deg]">
            <img src="/photos/IMG_0983_sq.jpg" alt="Kaos kaki hitam Lomira paket 5 pasang — foto asli" className="w-full aspect-square object-cover" fetchPriority="high" decoding="sync" width={1000} height={1000} />
          </div>
          <div className="absolute -bottom-6 -left-5 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-4 border-cream shadow-[0_16px_40px_rgba(20,20,15,0.22)] -rotate-6 hidden sm:block">
            <img src="/photos/IMG_0986_sq.jpg" alt="Kaos kaki putih Lomira" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute top-5 left-5 bg-ink/85 text-cream rounded-full px-4 py-2 text-[13px] font-bold backdrop-blur-sm">
            Foto produk asli — tanpa filter
          </div>
          <div className="absolute -bottom-6 right-6 sm:right-8 bg-cream border-2 border-ink rounded-3xl px-6 py-4 flex flex-col shadow-[0_16px_40px_rgba(20,20,15,0.16)]">
            <span className="text-[24px] sm:text-[26px] font-display font-semibold tracking-tight text-ink">{fmtIDR(PRICE)}</span>
            <span className="text-[12px] font-bold text-sage">Paket hemat 5 pasang</span>
          </div>
        </Reveal>
      </section>

      {/* ── TRUST STRIP ──────────────────────────── */}
      <Reveal>
        <div className="border-y border-line bg-white">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 grid grid-cols-2 md:grid-cols-4">
            {STATS.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5 py-8 px-4 border-r border-b md:border-b-0 last:border-r-0 border-line text-center">
                <span className="font-display font-semibold text-[1.7rem] text-sage">{item.stat}</span>
                <span className="text-[10px] tracking-[0.16em] uppercase text-muted font-bold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <main className="max-w-6xl mx-auto px-6 sm:px-10">

        {/* ── PROBLEM / SOLUTION (dark) ───────────── */}
        <Reveal>
          <section className="-mx-6 sm:-mx-10 my-16 md:my-24 bg-ink grain rounded-[2.5rem]">
            <div className="px-6 sm:px-10 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="flex flex-col gap-5">
                <span className="self-start bg-white/8 text-mint text-[11px] font-bold px-4 py-2 rounded-full tracking-[0.14em] uppercase">Masalah Umum</span>
                <h2 className="font-display font-semibold text-[clamp(1.9rem,4vw,2.6rem)] leading-[1.12] text-cream tracking-tight">
                  Lelah dengan kaos kaki yang panas dan cepat melar?
                </h2>
                <p className="text-[15.5px] text-cream/55 leading-[1.75]">
                  Kebanyakan kaos kaki sintetis menjebak panas dan keringat. Hasilnya: kaki gerah, lembap, dan bau sebelum hari berakhir — lalu melar setelah beberapa kali cuci.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-3xl p-7 flex flex-col gap-4">
                  <span className="w-10 h-10 rounded-full bg-white/10 text-white/50 flex items-center justify-center"><X size={18} strokeWidth={2.5} /></span>
                  <span className="text-cream font-bold text-[16px]">Kaos kaki biasa</span>
                  <span className="text-cream/45 text-[13.5px] leading-relaxed">Sintetis, panas, mudah melar, meninggalkan bekas karet di kaki.</span>
                </div>
                <div className="bg-sage rounded-3xl p-7 flex flex-col gap-4">
                  <span className="w-10 h-10 rounded-full bg-sage-bright text-white flex items-center justify-center"><Check size={18} strokeWidth={3} /></span>
                  <span className="text-white font-bold text-[16px]">Lomira Air Mesh</span>
                  <span className="text-white/80 text-[13.5px] leading-relaxed">85% katun premium, sirkulasi udara lancar, cepat kering, nyaman seharian.</span>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ── BENEFITS ─────────────────────────────── */}
        <section id="keunggulan" className="py-8 md:py-12">
          <Reveal className="flex flex-col gap-3.5 mb-10 max-w-xl">
            <span className="self-start bg-sage-light text-sage text-[11px] font-bold px-4 py-2 rounded-full tracking-[0.14em] uppercase">Mengapa Lomira</span>
            <h2 className="font-display font-semibold text-[clamp(1.9rem,4vw,2.6rem)] leading-[1.1] text-ink tracking-tight">Didesain untuk kenyamanan maksimal.</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.07}>
                <div className="group bg-white border border-line rounded-3xl p-7 flex flex-col gap-5 h-full hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(20,20,15,0.10)] transition-all duration-300">
                  <span className="w-12 h-12 rounded-full bg-sage-light text-sage flex items-center justify-center group-hover:bg-sage group-hover:text-white transition-colors duration-300">
                    <b.icon size={22} strokeWidth={2.2} />
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-ink text-[15.5px]">{b.title}</h3>
                    <p className="text-[13.5px] text-ink-soft leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── COLOR GALLERY (real photos) ─────────── */}
        <section id="warna" className="py-16 md:py-24">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div className="flex flex-col gap-3.5">
              <span className="self-start bg-sage-light text-sage text-[11px] font-bold px-4 py-2 rounded-full tracking-[0.14em] uppercase">Pilihan Warna</span>
              <h2 className="font-display font-semibold text-[clamp(1.9rem,4vw,2.6rem)] leading-[1.1] text-ink tracking-tight">Yang difoto, itu yang kamu terima.</h2>
            </div>
            <p className="text-[13.5px] text-ink-soft max-w-[260px] leading-[1.7]">Semua foto adalah foto produk asli, tanpa filter berlebihan — agar yang datang sesuai ekspektasi.</p>
          </Reveal>
          <Reveal delay={0.08} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {COLORS.map((c) => (
              <button key={c.id} onClick={() => setColor(c.id)} className={`group text-left rounded-3xl overflow-hidden border bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(20,20,15,0.12)] ${color === c.id ? 'border-sage ring-2 ring-sage/25' : 'border-line'}`}>
                <div className="aspect-[0.92] overflow-hidden">
                  <img src={c.img} alt={`Kaos kaki ${c.id} Lomira`} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                </div>
                <div className="flex items-center gap-2.5 px-4.5 py-4">
                  <span className="w-5 h-5 rounded-full border-2 border-line inline-block" style={{ background: c.swatch }} />
                  <span className="font-bold text-[14px] text-ink">{c.id}</span>
                </div>
              </button>
            ))}
          </Reveal>
        </section>

        {/* ── REVIEWS ──────────────────────────────── */}
        <section id="ulasan" className="py-16 md:py-24">
          <Reveal className="flex flex-col gap-3.5 mb-10">
            <span className="self-start bg-sage-light text-sage text-[11px] font-bold px-4 py-2 rounded-full tracking-[0.14em] uppercase">Ulasan</span>
            <h2 className="font-display font-semibold text-[clamp(1.9rem,4vw,2.6rem)] leading-[1.1] text-ink tracking-tight">Apa kata mereka.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.09}>
                <div className="bg-white border border-line rounded-3xl p-7 flex flex-col gap-5 h-full hover:-translate-y-1 transition-all duration-300">
                  <div className="flex gap-0.5">{[...Array(r.stars)].map((_, j) => <Star key={j} size={14} className="fill-sage text-sage" />)}</div>
                  <p className="text-[15px] text-ink-soft leading-[1.7] flex-1">&ldquo;{r.text}&rdquo;</p>
                  <div className="flex items-center justify-between pt-4 border-t border-line">
                    <span className="font-bold text-ink text-[13.5px]">{r.name}</span>
                    <span className="text-[12px] text-muted font-semibold">{r.city}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── SIZE GUIDE ───────────────────────────── */}
        <section id="ukuran" className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal className="flex flex-col gap-4">
            <span className="self-start bg-sage-light text-sage text-[11px] font-bold px-4 py-2 rounded-full tracking-[0.14em] uppercase">Panduan Ukuran</span>
            <h2 className="font-display font-semibold text-[clamp(1.9rem,4vw,2.6rem)] leading-[1.1] text-ink tracking-tight">Pas untuk seluruh keluarga.</h2>
            <p className="text-[15px] text-ink-soft leading-[1.7]">Pilih kategori sesuai ukuran sepatu atau panjang kaki kamu.</p>
            <div className="bg-sage-light rounded-2xl px-5 py-4 text-sage font-bold text-[13.5px] mt-1">Tips: jika ragu, pilih satu ukuran lebih besar.</div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border-2 border-ink rounded-3xl overflow-hidden">
              <div className="grid grid-cols-3 bg-ink text-cream font-bold text-[13px]">
                <div className="px-5 py-4">Kategori</div>
                <div className="px-5 py-4">Sepatu (EU)</div>
                <div className="px-5 py-4">Panjang Kaki</div>
              </div>
              {SIZES.map((s) => (
                <div key={s.cat} className="grid grid-cols-3 bg-white border-t border-line text-[13.5px]">
                  <div className="px-5 py-4 font-bold">{s.cat}</div>
                  <div className="px-5 py-4 text-ink-soft">{s.eu}</div>
                  <div className="px-5 py-4 text-ink-soft">{s.cm}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      </main>

      {/* ── OFFER / ORDER ────────────────────────── */}
      <section id="pesan" className="bg-sage grain">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal className="flex flex-col gap-5">
            <span className="self-start bg-white/15 text-mint text-[11px] font-bold px-4 py-2 rounded-full tracking-[0.14em] uppercase">Penawaran Paket</span>
            <h2 className="font-display font-semibold text-[clamp(2rem,4.4vw,2.9rem)] leading-[1.08] text-white tracking-tight">
              Paket 5 pasang, {fmtIDR(PRICE)}.
            </h2>
            <div className="flex flex-col gap-2.5 pt-1">
              {[`5 pasang kaos kaki premium (${fmtIDR(PER_PAIR)}/pasang)`, 'Pilih warna: Hitam, Putih, Abu-abu, atau Mix', 'Garansi nyaman 10 hari — uang kembali'].map((t) => (
                <div key={t} className="flex items-center gap-2.5 text-white text-[15px] font-medium">
                  <Check size={16} strokeWidth={3} className="text-mint shrink-0" /> {t}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="bg-cream rounded-[1.75rem] p-7 sm:p-8 flex flex-col gap-6 shadow-[0_28px_70px_rgba(0,0,0,0.24)]">
            <div className="flex items-baseline justify-between">
              <span className="font-bold text-[17px] text-ink">Pesan sekarang</span>
              <span className="font-display font-semibold text-[26px] text-sage">{fmtIDR(PRICE)}</span>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="text-[11px] font-bold text-ink-soft tracking-[0.1em] uppercase">Warna — {color}</span>
              <div className="flex gap-3">
                {COLORS.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setColor(c.id)}
                    title={c.id}
                    className="w-11 h-11 rounded-full transition-all"
                    style={{
                      background: c.swatch,
                      border: `3px solid ${color === c.id ? 'var(--color-sage)' : 'var(--color-line)'}`,
                      boxShadow: color === c.id ? '0 0 0 3px rgba(11,122,67,0.22)' : 'none',
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="text-[11px] font-bold text-ink-soft tracking-[0.1em] uppercase">Ukuran — {size}</span>
              <div className="flex gap-2.5">
                {SIZES.map((s) => (
                  <button
                    key={s.cat}
                    onClick={() => setSize(s.cat)}
                    className={`px-5 py-2.5 rounded-full font-bold text-[13.5px] border-2 transition-all ${size === s.cat ? 'bg-sage border-sage text-white' : 'bg-white border-line text-ink hover:border-sage/40'}`}
                  >
                    {s.cat}
                  </button>
                ))}
              </div>
            </div>

            <a href={waUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2.5 bg-sage text-white font-bold text-[16px] py-4.5 rounded-full hover:bg-sage-bright hover:-translate-y-0.5 transition-all">
              Pesan via WhatsApp <ArrowRight size={18} strokeWidth={2.5} />
            </a>
            <span className="text-center text-[12px] text-muted font-medium">Balasan cepat di jam kerja · Bisa juga lewat Shopee &amp; Tokopedia</span>
          </Reveal>
        </div>
      </section>

      {/* ── GUARANTEE ────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 py-16 md:py-20">
        <Reveal className="bg-white border border-line rounded-[2rem] px-7 sm:px-10 py-9 flex items-center gap-8 flex-wrap">
          <span className="w-16 h-16 min-w-16 rounded-2xl bg-sage-light text-sage flex items-center justify-center">
            <ShieldCheck size={30} strokeWidth={2} />
          </span>
          <div className="flex-1 min-w-[240px] flex flex-col gap-1.5">
            <span className="font-display font-semibold text-[21px] text-ink tracking-tight">Garansi kenyamanan 10 hari</span>
            <span className="text-ink-soft text-[14px] leading-[1.65] max-w-[560px]">Coba Lomira selama 10 hari. Jika tidak terasa lebih adem dan nyaman, uang kembali — cukup kirim foto produk dan penjelasan singkat.</span>
          </div>
          <a href="#pesan" className="whitespace-nowrap border-2 border-ink text-ink text-[13.5px] font-bold px-6 py-3 rounded-full hover:bg-ink hover:text-cream transition-all">Pesan Sekarang</a>
        </Reveal>
      </section>

      {/* ── FOOTER ───────────────────────────────── */}
      <footer className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-10 pb-28 md:pb-10 flex items-center justify-between gap-5 flex-wrap">
          <img src="/logo_opt.png" alt="Lomira" className="h-7 opacity-50" />
          <span className="text-[11px] text-muted font-semibold tracking-[0.1em] uppercase">© 2026 Lomira Product · Kaos kaki katun premium</span>
          <div className="flex gap-6">
            {([['Keunggulan', '#keunggulan'], ['Warna', '#warna'], ['Harga', '#pesan']] as const).map(([l, h]) => (
              <a key={h} href={h} className="text-[12.5px] text-ink-soft font-semibold hover:text-ink transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </footer>

      {/* ── MOBILE STICKY CTA ────────────────────── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-ink px-4 py-3 flex items-center gap-3.5" style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}>
        <div className="flex flex-col text-cream">
          <span className="text-[15px] font-bold">{fmtIDR(PRICE)}</span>
          <span className="text-[10.5px] text-cream/50 font-medium">5 pasang · gratis ongkir</span>
        </div>
        <a href={waUrl} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center bg-sage-bright text-white font-bold text-[14.5px] py-3.5 rounded-full">
          Pesan via WhatsApp
        </a>
      </div>
    </div>
  );
}
