import { Palette, Layers, RefreshCw, Brain, Shield } from 'lucide-react';
import { CuteStar, CuteCloud } from '@/components/Mascots';

const methods = [
  {
    icon: Palette,
    color: 'bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200 text-rose-600',
    iconBg: 'bg-gradient-to-br from-rose-400 to-pink-400',
    title: 'Visuals, Games & Worksheets',
    desc: 'We replace boring textbooks with colorful visual aids and interactive games to keep attention high.',
  },
  {
    icon: Layers,
    color: 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 text-blue-600',
    iconBg: 'bg-gradient-to-br from-blue-400 to-cyan-400',
    title: 'Step-by-Step Teaching',
    desc: "We break complex concepts into tiny, digestible bites. We don't move to step 2 until step 1 is mastered.",
  },
  {
    icon: RefreshCw,
    color: 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 text-emerald-600',
    iconBg: 'bg-gradient-to-br from-emerald-400 to-teal-400',
    title: 'Repetition without Boredom',
    desc: 'Weak learners need repetition. We practice the same concepts using different fun activities.',
  },
  {
    icon: Brain,
    color: 'bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200 text-amber-600',
    iconBg: 'bg-gradient-to-br from-amber-400 to-yellow-400',
    title: 'Focus on Understanding',
    desc: "We don't force memorization. We build genuine comprehension so knowledge sticks long-term.",
  },
  {
    icon: Shield,
    color: 'bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200 text-violet-600',
    iconBg: 'bg-gradient-to-br from-violet-400 to-purple-400',
    title: 'Safe for Slow Learners',
    desc: 'Mistakes are celebrated as part of learning. No scolding, just encouragement and high-fives.',
  },
];

export default function Method() {
  return (
    <section id="method" className="py-24 bg-gradient-to-b from-white to-cyan-50/30 relative overflow-hidden">
      <CuteStar className="absolute top-20 left-10 w-16 h-16 animate-float opacity-80 hidden lg:block" />
      <CuteCloud className="absolute bottom-32 right-12 w-24 h-16 animate-float opacity-70 hidden lg:block" style={{ animationDelay: '2s' } as React.CSSProperties} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 text-[#c9a227] text-sm font-bold mb-3 bg-amber-100 px-3 py-1.5 rounded-full border border-amber-200">
              <Layers size={14} />
              Our Method
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a4731] mb-4 leading-tight">
              How We Help Struggling Learners{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent">Succeed</span>
            </h2>
            <p className="text-gray-500 mb-8 text-base sm:text-lg leading-relaxed">
              Traditional classrooms move too fast for some children. Our specialized approach slows
              everything down, makes it colorful, and focuses purely on building confidence.
            </p>

            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-cyan-200 to-emerald-200 rounded-3xl opacity-50 blur-lg" />
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="https://images.pexels.com/photos/5093984/pexels-photo-5093984.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Parent and child drawing with crayons"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: method cards */}
          <div className="space-y-4">
            {methods.map(({ icon: Icon, color, iconBg, title, desc }) => (
              <div
                key={title}
                className={`flex gap-4 items-start rounded-2xl border-2 p-4 transition-transform hover:scale-[1.02] hover:shadow-lg ${color}`}
              >
                <div className={`p-2.5 rounded-xl text-white ${iconBg} shrink-0 shadow-md`}>
                  <Icon size={20} />
                </div>
                <div>
                  <div className="font-bold text-[#1a4731] mb-0.5">{title}</div>
                  <div className="text-gray-600 text-sm leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}

            <div className="mt-4 p-5 rounded-2xl bg-gradient-to-r from-[#1a4731] to-emerald-500 text-white flex items-center justify-between shadow-lg">
              <span className="font-semibold text-sm">Want to see our method in action?</span>
              <a
                href="#contact"
                className="ml-4 whitespace-nowrap text-sm font-bold bg-gradient-to-r from-[#c9a227] to-amber-400 px-4 py-2 rounded-full hover:scale-105 transition-transform shrink-0"
              >
                Free Trial →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
