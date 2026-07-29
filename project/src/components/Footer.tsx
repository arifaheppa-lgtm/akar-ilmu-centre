import { MessageCircle, Mail, Calendar } from 'lucide-react';
import { CuteBook } from '@/components/Mascots';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Teaching Method', href: '#method' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Register', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d2b1a] text-white relative overflow-hidden">
      {/* Rainbow top stripe */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-rose-400 via-amber-400 via-emerald-400 to-cyan-400" />
      <CuteBook className="absolute bottom-24 right-12 w-16 h-16 opacity-20 hidden lg:block" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/6289510264310796238.jpg"
                alt="Akar Ilmu Centre"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#c9a227]"
              />
              <div>
                <div className="font-extrabold text-lg leading-tight">Akar Ilmu Centre</div>
                <div className="text-[#c9a227] text-xs">Education with Purpose</div>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-3">
              Membina Akar, Melahirkan Kecemerlangan.
            </p>
            <p className="text-white/40 text-xs">
              Premium interactive learning for literacy, numeracy, and character growth.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-sm text-[#c9a227] mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-[#c9a227] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm text-[#c9a227] mb-4 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3">
              {[
                { name: 'Alia', phone: '+60 13-351 3778', number: '60133513778' },
                { name: 'Arifah', phone: '+60 17-832 1485', number: '60178321485' },
              ].map((c) => (
                <li key={c.name}>
                  <a
                    href={`https://wa.me/${c.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/60 hover:text-[#c9a227] transition-colors text-sm"
                  >
                    <MessageCircle size={13} />
                    <span>
                      <strong className="text-white/80">{c.name}</strong> — {c.phone}
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:akarilmucentre@gmail.com"
                  className="flex items-center gap-2 text-white/60 hover:text-[#c9a227] transition-colors text-sm"
                >
                  <Mail size={13} />
                  akarilmucentre@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h4 className="font-bold text-sm text-[#c9a227] mb-4 uppercase tracking-wider">Schedule</h4>
            <div className="flex items-start gap-2 text-white/60 text-sm mb-3">
              <Calendar size={14} className="mt-0.5 shrink-0 text-[#c9a227]" />
              <div>Online Classes — Available Anywhere</div>
            </div>
            <ul className="space-y-2 text-sm text-white/60">
              <li>📅 <span className="text-[#c9a227] font-semibold">Friday:</span> Bahasa Melayu</li>
              <li>📅 <span className="text-[#c9a227] font-semibold">Saturday:</span> Math · English · Iqra</li>
            </ul>

            <a
              href="#contact"
              className="inline-block mt-5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#c9a227] to-amber-400 text-white text-sm font-bold hover:scale-105 transition-transform"
            >
              Book Free Trial
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <span>© 2026 Akar Ilmu Centre. All rights reserved.</span>
          <span className="italic">Membina Akar, Melahirkan Kecemerlangan</span>
        </div>
      </div>
    </footer>
  );
}
