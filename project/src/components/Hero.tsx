import { Sparkles, BookOpen, Star, ArrowDown, Heart, Baby, Palette, Rainbow } from 'lucide-react';

const floatingItems = [
  { icon: Star, className: 'top-[18%] left-[8%] text-amber-300', size: 30, delay: '0s' },
  { icon: Heart, className: 'top-[30%] right-[12%] text-rose-300', size: 26, delay: '1s' },
  { icon: Sparkles, className: 'bottom-[28%] left-[15%] text-amber-200', size: 28, delay: '0.5s' },
  { icon: Baby, className: 'bottom-[35%] right-[18%] text-emerald-200', size: 32, delay: '1.5s' },
  { icon: Palette, className: 'top-[45%] left-[5%] text-teal-200', size: 24, delay: '2s' },
  { icon: Star, className: 'top-[60%] right-[6%] text-amber-300', size: 22, delay: '0.8s' },
  { icon: Heart, className: 'top-[75%] left-[20%] text-rose-200', size: 18, delay: '1.2s' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Colorful gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2d6a4f] via-[#1a4731] to-[#0d2b1a]" />

      {/* Rainbow swirl overlay */}
      <div className="absolute inset-0 opacity-30 bg-[conic-gradient(from_180deg_at_50%_50%,#f97316_0deg,#facc15_60deg,#4ade80_120deg,#22d3ee_180deg,#a78bfa_240deg,#f472b6_300deg,#f97316_360deg)] blur-3xl" />

      {/* Photo overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/8500310/pexels-photo-8500310.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d2b1a]/40 via-transparent to-[#0d2b1a]/60" />

      {/* Soft decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-rose-400/15 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-56 h-56 rounded-full bg-amber-400/15 blur-2xl animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-cyan-400/10 blur-2xl animate-pulse-slow" />

      {/* Floating cute icons */}
      {floatingItems.map((item, i) => {
        const Icon = item.icon;
        return (
          <div
            key={i}
            className={`absolute ${item.className} opacity-80 hidden sm:block animate-float drop-shadow-lg`}
            style={{ animationDelay: item.delay }}
          >
            <Icon size={item.size} />
          </div>
        );
      })}

      {/* Floating badge — top right */}
      <div className="absolute top-28 right-8 hidden lg:flex items-center gap-2 bg-white/95 rounded-2xl px-4 py-3 shadow-xl text-sm font-medium text-[#1a4731] animate-bounce-slow z-20">
        <Heart size={16} className="text-rose-400 fill-rose-400" />
        <span>Trusted by 100+ families</span>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Cute badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 border border-white/40 text-white text-sm font-bold px-4 py-2 rounded-full mb-5 backdrop-blur-sm">
          <Rainbow size={16} className="text-amber-300" />
          Premium Interactive Learning
          <Sparkles size={14} className="text-amber-300" />
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
          Empowering{' '}
          <span className="bg-gradient-to-r from-amber-300 via-rose-300 to-cyan-300 bg-clip-text text-transparent">
            Little Minds
          </span>
          <Heart size={36} className="inline-block text-rose-300 fill-rose-300 ml-2 animate-heartbeat" />
        </h1>

        <p className="text-xl sm:text-2xl text-white/95 font-semibold mb-3">
          Helping Your Child Overcome 3M Learning Difficulties
        </p>
        <p className="text-white/80 max-w-2xl mx-auto mb-8 text-base sm:text-lg">
          We support children who struggle with reading, writing, and counting through simple,
          step-by-step lessons. Our goal is to build confidence and make learning fun.
        </p>

        {/* Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['Literacy & Numeracy', 'Character Growth', 'Online Classes'].map((tag, i) => (
            <span
              key={tag}
              className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm border border-white/40 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <BookOpen size={13} />
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#c9a227] to-amber-400 text-white font-bold text-base shadow-lg hover:shadow-2xl transition-all hover:scale-105 active:scale-95"
          >
            Join Now
          </a>
          <a
            href="#courses"
            className="px-8 py-3.5 rounded-full bg-white/20 border-2 border-white/50 text-white font-semibold text-base backdrop-blur-sm hover:bg-white/30 transition-all"
          >
            Book Free Trial Class
          </a>
        </div>

        {/* Schedule pill */}
        <div className="mt-10 inline-flex flex-wrap justify-center gap-x-6 gap-y-2 bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl px-6 py-3 text-white/90 text-sm shadow-lg">
          <span>📅 <strong className="text-amber-300">Friday:</strong> Bahasa Melayu</span>
          <span>📅 <strong className="text-amber-300">Saturday:</strong> Mathematics · English · Iqra</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce z-20"
      >
        <ArrowDown size={26} />
      </a>
    </section>
  );
}
