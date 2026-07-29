import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Method', href: '#method' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/images/6289510264310796238.jpg"
            alt="Akar Ilmu Centre"
            className="w-10 h-10 rounded-full object-cover border-2 border-[#c9a227]"
          />
          <div className="leading-tight">
            <span className={`block font-bold text-sm tracking-wide ${scrolled ? 'text-[#1a4731]' : 'text-white drop-shadow'}`}>
              Akar Ilmu Centre
            </span>
            <span className={`block text-xs ${scrolled ? 'text-[#c9a227]' : 'text-[#f0d070]'}`}>
              Education with Purpose
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#c9a227] ${
                  scrolled ? 'text-[#1a4731]' : 'text-white drop-shadow'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-[#c9a227] text-white text-sm font-semibold shadow hover:bg-[#b8911f] transition-colors"
        >
          Join Now
        </a>

        {/* Hamburger */}
        <button
          className={`md:hidden p-2 rounded-md transition-colors ${scrolled ? 'text-[#1a4731]' : 'text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4 pt-2">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-[#1a4731] font-medium py-1 hover:text-[#c9a227] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center px-5 py-2 rounded-full bg-[#c9a227] text-white text-sm font-semibold mt-1"
              >
                Join Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
