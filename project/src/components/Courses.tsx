import { Check, Video, BookOpen, Calculator, Globe, Moon } from 'lucide-react';
import { CuteBook, CutePencil } from '@/components/Mascots';

const courses = [
  {
    day: 'Friday',
    badge: null,
    icon: BookOpen,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-100',
    borderColor: 'border-emerald-200',
    headerBg: 'from-emerald-500 to-teal-400',
    title: 'Bahasa Melayu',
    subtitle: '(Membaca & Menulis)',
    description:
      'Pelajari kemahiran membaca dan menulis dalam Bahasa Melayu dengan kaedah yang mudah, seronok, dan berperingkat.',
    items: ['Latihan membaca teks mudah', 'Latihan ejaan & tulisan', 'Aktiviti perbendaharaan kata'],
  },
  {
    day: 'Saturday',
    badge: null,
    icon: Calculator,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
    borderColor: 'border-blue-200',
    headerBg: 'from-blue-500 to-cyan-400',
    title: 'Mathematics',
    subtitle: '(Basic Counting)',
    description:
      'Master numbers, simple addition, subtraction, and have fun with math concepts through interactive play and visual learning.',
    items: ['Colorful Worksheets', 'Number Games', 'Simple Visual Explanations'],
  },
  {
    day: 'Saturday',
    badge: null,
    icon: Globe,
    iconColor: 'text-rose-600',
    iconBg: 'bg-rose-100',
    borderColor: 'border-rose-200',
    headerBg: 'from-rose-500 to-pink-400',
    title: 'English',
    subtitle: '(Reading & Writing)',
    description:
      'Build confidence with phonics, simple words, reading aloud, and guided writing practice in a supportive environment.',
    items: ['Phonics Practice', 'Story Time', 'Tracing & Writing'],
  },
  {
    day: 'Saturday',
    badge: 'Optional',
    icon: Moon,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-100',
    borderColor: 'border-amber-200',
    headerBg: 'from-amber-500 to-yellow-400',
    title: 'Iqra',
    subtitle: '(Asas Membaca Al-Quran)',
    description:
      'Belajar membaca huruf-huruf hijaiyah dan asas bacaan Al-Quran dengan cara yang menyeronokkan dan penuh semangat.',
    items: ['Pengenalan huruf hijaiyah', 'Latihan sebutan yang betul', 'Bacaan ayat mudah'],
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 bg-gradient-to-b from-emerald-50/30 via-white to-rose-50/30 relative overflow-hidden">
      {/* Rainbow top stripe */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-400 via-amber-400 via-emerald-400 to-cyan-400" />

      {/* Floating mascots */}
      <CuteBook className="absolute top-24 left-6 w-16 h-16 animate-float opacity-80 hidden lg:block" />
      <CutePencil className="absolute bottom-32 right-8 w-16 h-16 animate-float opacity-80 hidden lg:block" style={{ animationDelay: '1.5s' } as React.CSSProperties} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-[#c9a227] text-sm font-bold mb-3 bg-amber-100 px-3 py-1.5 rounded-full border border-amber-200">
            <BookOpen size={14} />
            Our Classes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a4731] mb-4">
            Gentle Learning Paths for{' '}
            <span className="bg-gradient-to-r from-rose-400 to-amber-500 bg-clip-text text-transparent">Every Child</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg">
            Specialized online classes that build a strong foundation — literacy, numeracy, and
            character growth. No rush, no pressure, just steady progress.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <div
                key={course.title}
                className={`bg-white rounded-3xl border-2 ${course.borderColor} overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col`}
              >
                {/* Header */}
                <div className={`bg-gradient-to-br ${course.headerBg} p-5 text-white relative overflow-hidden`}>
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/15 rounded-full" />
                  <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/10 rounded-full" />
                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <span className="text-xs font-bold bg-white/30 px-2.5 py-1 rounded-full backdrop-blur-sm">
                      {course.day}
                    </span>
                    {course.badge && (
                      <span className="text-xs font-bold bg-white/30 px-2.5 py-1 rounded-full backdrop-blur-sm">
                        {course.badge}
                      </span>
                    )}
                  </div>
                  <div className="relative z-10">
                    <div className={`inline-flex p-2 rounded-xl bg-white/25 mb-2`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-extrabold leading-tight">{course.title}</h3>
                    <p className="text-white/80 text-xs mt-0.5">{course.subtitle}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{course.description}</p>

                  <div className="space-y-2 mb-5">
                    {course.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center shrink-0">
                          <Check size={11} className="text-white stroke-[3]" />
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-1.5 text-xs text-gray-400 border-t pt-3">
                    <Video size={12} />
                    Online via Zoom / Google Meet
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1a4731] to-emerald-500 text-white font-bold shadow-lg hover:shadow-2xl transition-all hover:scale-105"
          >
            Book a Free Trial Class →
          </a>
        </div>
      </div>
    </section>
  );
}
