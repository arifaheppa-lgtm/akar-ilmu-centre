import { Target, Heart, Leaf } from 'lucide-react';
import { CuteOwl, CuteStar } from '@/components/Mascots';

const cards = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To help weak 3M students improve basic skills with confidence.',
    color: 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200',
    iconColor: 'text-emerald-600 bg-emerald-100',
  },
  {
    icon: Heart,
    title: 'Our Values',
    text: 'Patience, care, and step-by-step teaching without pressure.',
    color: 'bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200',
    iconColor: 'text-rose-600 bg-rose-100',
  },
  {
    icon: Leaf,
    title: 'Our Approach',
    text: 'Every child just needs to find their roots before they can grow.',
    color: 'bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200',
    iconColor: 'text-amber-600 bg-amber-100',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-amber-50/30 to-emerald-50/30 relative overflow-hidden">
      {/* Floating mascots */}
      <CuteStar className="absolute top-16 right-12 w-20 h-20 animate-float opacity-90 hidden md:block" />
      <CuteOwl className="absolute bottom-10 left-8 w-24 h-24 animate-float opacity-90 hidden md:block" style={{ animationDelay: '1s' } as React.CSSProperties} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image with colorful frame */}
          <div className="relative">
            {/* Decorative rounded shape behind */}
            <div className="absolute -inset-3 bg-gradient-to-br from-rose-200 via-amber-200 to-emerald-200 rounded-[2.5rem] opacity-50 blur-lg" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.pexels.com/photos/4473985/pexels-photo-4473985.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Parent and child drawing together"
                className="w-full h-[420px] object-cover"
              />
            </div>
            {/* Floating sticker */}
            <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-[#c9a227] to-amber-400 text-white rounded-2xl px-5 py-4 shadow-xl rotate-3">
              <div className="text-2xl font-extrabold">100+</div>
              <div className="text-xs font-medium opacity-90">Happy Families</div>
            </div>
            <div className="absolute -top-5 -left-5 bg-white rounded-2xl px-5 py-4 shadow-xl border-2 border-emerald-200 -rotate-3">
              <div className="text-2xl font-extrabold text-[#1a4731]">3M</div>
              <div className="text-xs font-medium text-gray-500">Specialist</div>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <div className="inline-flex items-center gap-2 text-[#c9a227] text-sm font-bold mb-3 bg-amber-100 px-3 py-1.5 rounded-full border border-amber-200">
              <Leaf size={14} />
              Welcome to Akar Ilmu
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a4731] mb-4 leading-tight">
              Every Child Just Needs to Find Their{' '}
              <span className="bg-gradient-to-r from-[#c9a227] to-amber-500 bg-clip-text text-transparent">Roots</span> Before They Can Grow
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-base sm:text-lg">
              At Akar Ilmu Centre, we believe that no child is "too slow". Some children simply
              need a more patient, step-by-step approach to grasp the basics of reading, writing,
              and counting — the 3M skills that form the foundation of all learning.
            </p>

            <div className="flex flex-col gap-4">
              {cards.map(({ icon: Icon, title, text, color, iconColor }) => (
                <div
                  key={title}
                  className={`flex items-start gap-4 rounded-2xl border-2 p-4 ${color} hover:scale-[1.02] transition-transform`}
                >
                  <div className={`p-2.5 rounded-xl ${iconColor} shrink-0`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-[#1a4731] mb-0.5">{title}</div>
                    <div className="text-gray-600 text-sm">{text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
