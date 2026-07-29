import { Star, Quote } from 'lucide-react';
import { CuteStar } from '@/components/Mascots';

const testimonials = [
  {
    quote:
      'Before Akar Ilmu, Adam used to cry when doing his math homework. He couldn\'t grasp simple addition. Now, he eagerly logs into his online class and proudly shows me his correct answers. The teachers are so, so patient.',
    name: 'Puan Nora',
    role: 'Parent of Adam, 8 years old',
    subject: 'Mathematics Class',
    avatar: 'PN',
    color: 'bg-gradient-to-br from-emerald-500 to-teal-400',
  },
  {
    quote:
      'My daughter was left behind in standard 1 because she couldn\'t read basic words. After 3 months in the 3M Foundation class, she\'s starting to sound out words confidently. The step-by-step method really works for slow learners.',
    name: 'Encik Hafiz',
    role: 'Parent of Sara, 7 years old',
    subject: '3M Foundation',
    avatar: 'EH',
    color: 'bg-gradient-to-br from-blue-500 to-cyan-400',
  },
  {
    quote:
      "I was worried about online classes being ineffective, but the interactive games and colorful worksheets keep Irfan completely engaged. His handwriting has improved drastically and he no longer hates English.",
    name: 'Puan Siti',
    role: 'Parent of Irfan, 9 years old',
    subject: 'English Class',
    avatar: 'PS',
    color: 'bg-gradient-to-br from-rose-500 to-pink-400',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-cyan-50/30 via-white to-amber-50/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-emerald-400 to-amber-400" />
      <CuteStar className="absolute top-24 right-10 w-14 h-14 animate-float opacity-70 hidden lg:block" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-[#c9a227] text-sm font-bold mb-3 bg-amber-100 px-3 py-1.5 rounded-full border border-amber-200">
            <Star size={14} className="fill-[#c9a227]" />
            Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a4731] mb-4">
            Hear From{' '}
            <span className="bg-gradient-to-r from-rose-400 to-amber-500 bg-clip-text text-transparent">Other Parents</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg">
            Nothing makes us happier than seeing a child find their confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl p-7 shadow-md border-2 border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col relative"
            >
              <div className="absolute -top-4 left-7 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#c9a227] to-amber-400 flex items-center justify-center shadow-lg">
                <Quote size={22} className="text-white" />
              </div>

              <p className="text-gray-700 text-sm leading-relaxed flex-1 italic mb-6 mt-4">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 border-t pt-5">
                <div
                  className={`w-11 h-11 rounded-full ${t.color} text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-md`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-[#1a4731] text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
                <span className="ml-auto text-[10px] bg-emerald-50 text-emerald-700 font-semibold px-2.5 py-1 rounded-full border border-emerald-200 shrink-0">
                  {t.subject}
                </span>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
