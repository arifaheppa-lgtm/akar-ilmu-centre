import { useState } from 'react';
import { MessageCircle, Mail, Calendar, CheckCircle, Loader2 } from 'lucide-react';
import { supabase, type TrialRegistration } from '@/lib/supabase';
import { CuteOwl } from '@/components/Mascots';

const ageOptions = ['4', '5', '6', '7', '8', '9', '10', '11', '12'];
const subjectOptions = ['Bahasa Melayu', 'Mathematics', 'English', 'Iqra', 'All Subjects'];

const defaultForm: TrialRegistration = {
  parent_name: '',
  child_age: '',
  phone_number: '',
  subject: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<TrialRegistration>(defaultForm);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const set = (field: keyof TrialRegistration, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.parent_name || !form.child_age || !form.phone_number || !form.subject) {
      setError('Please fill in all required fields.');
      return;
    }
    setSubmitting(true);
    const { error: dbError } = await supabase.from('trial_registrations').insert([form]);
    setSubmitting(false);
    if (dbError) {
      setError('Something went wrong. Please try WhatsApp instead.');
    } else {
      setSuccess(true);
      setForm(defaultForm);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-amber-50/30 via-white to-emerald-50/40 relative overflow-hidden">
      <div className="absolute -bottom-20 right-0 w-80 h-80 rounded-full bg-emerald-100 opacity-40 blur-3xl" />
      <div className="absolute -top-10 left-0 w-72 h-72 rounded-full bg-rose-100 opacity-40 blur-3xl" />
      <CuteOwl className="absolute top-16 right-10 w-20 h-20 animate-float opacity-80 hidden lg:block" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-[#c9a227] text-sm font-bold mb-3 bg-amber-100 px-3 py-1.5 rounded-full border border-amber-200">
            <MessageCircle size={14} />
            Contact Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a4731] mb-4">
            Let's Talk About Your{' '}
            <span className="bg-gradient-to-r from-rose-400 to-amber-500 bg-clip-text text-transparent">Child's Growth</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Have questions? Not sure which class is right? We're here to help guide you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: contact info */}
          <div className="space-y-6">
            {/* WhatsApp cards */}
            {[
              { name: 'Alia (Pendaftar)', phone: '+60 13-351 3778', number: '60133513778' },
              { name: 'Arifah (Pendaftar)', phone: '+60 17-832 1485', number: '60178321485' },
            ].map((contact) => (
              <a
                key={contact.name}
                href={`https://wa.me/${contact.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border-2 border-emerald-100 shadow-sm hover:shadow-lg hover:border-emerald-300 hover:-translate-y-0.5 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle size={22} className="text-white fill-white" />
                </div>
                <div>
                  <div className="font-bold text-[#1a4731]">{contact.name}</div>
                  <div className="text-gray-500 text-sm">{contact.phone}</div>
                  <div className="text-xs text-emerald-600 font-medium mt-0.5">Chat on WhatsApp →</div>
                </div>
                <div className="ml-auto text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-200 shrink-0">
                  Replies in 1hr
                </div>
              </a>
            ))}

            {/* Email */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border-2 border-amber-100 shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                <Mail size={22} className="text-[#c9a227]" />
              </div>
              <div>
                <div className="font-bold text-[#1a4731]">Email Us</div>
                <div className="text-gray-500 text-sm">akarilmucentre@gmail.com</div>
              </div>
            </div>

            {/* Schedule */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#1a4731] to-[#2d6a4f] text-white shadow-lg">
              <div className="flex items-center gap-2 font-bold mb-3">
                <Calendar size={18} className="text-[#f0d070]" />
                Class Schedule
              </div>
              <ul className="text-sm space-y-1.5 text-white/85">
                <li>📅 <strong className="text-[#f0d070]">Friday:</strong> Bahasa Melayu</li>
                <li>📅 <strong className="text-[#f0d070]">Saturday:</strong> Mathematics · English</li>
                <li>📅 <strong className="text-[#f0d070]">Saturday (opt.):</strong> Iqra</li>
              </ul>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-3xl shadow-xl border-2 border-amber-100 p-8 relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-amber-100 to-rose-100 rounded-full opacity-60" />
            <h3 className="text-xl font-extrabold text-[#1a4731] mb-6">Book a Free Trial Class</h3>

            {success ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <CheckCircle size={52} className="text-emerald-500" />
                <div className="text-xl font-bold text-[#1a4731]">Registration Received!</div>
                <p className="text-gray-500 text-sm max-w-xs">
                  Thank you! We'll reach out via WhatsApp within 1 hour to confirm your free trial
                  class.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-2 text-sm text-[#c9a227] font-semibold underline"
                >
                  Register another child
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Parent name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Parent's Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Puan Aminah"
                    value={form.parent_name}
                    onChange={(e) => set('parent_name', e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
                  />
                </div>

                {/* Child age */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Child's Age <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={form.child_age}
                    onChange={(e) => set('child_age', e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition bg-white"
                  >
                    <option value="">Select Age</option>
                    {ageOptions.map((a) => (
                      <option key={a} value={a}>{a} years old</option>
                    ))}
                  </select>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="013-351 3778"
                    value={form.phone_number}
                    onChange={(e) => set('phone_number', e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Interested Subject <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) => set('subject', e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition bg-white"
                  >
                    <option value="">Select Subject</option>
                    {subjectOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Message <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us a bit about your child's struggles..."
                    value={form.message}
                    onChange={(e) => set('message', e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition resize-none"
                  />
                </div>

                {error && (
                  <p className="text-rose-500 text-sm bg-rose-50 border border-rose-200 rounded-xl px-4 py-2">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#1a4731] to-emerald-500 text-white font-bold text-sm hover:shadow-lg transition-all disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Register Now'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
