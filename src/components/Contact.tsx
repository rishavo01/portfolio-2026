import React, { useState } from 'react';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { contact, personal } from '../data/portfolio';

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const WhatsAppIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.477-.15-.678.15-.2.301-.778.979-.954 1.18-.176.2-.351.226-.652.075-.3-.15-1.267-.467-2.414-1.49-1.049-.935-1.758-2.09-1.964-2.443-.206-.352-.022-.542.128-.692.136-.135.301-.352.452-.527.15-.175.2-.3.301-.502.101-.201.05-.376-.025-.526-.075-.151-.678-1.635-.929-2.239-.245-.588-.493-.508-.678-.518-.175-.009-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.15.201 2.123 3.242 5.143 4.547.718.31 1.279.496 1.716.635.722.23 1.379.197 1.898.12.578-.087 1.78-.727 2.031-1.43.251-.703.251-1.306.176-1.431-.076-.126-.276-.201-.577-.352zm-5.467 7.424h-.007a9.88 9.88 0 0 1-5.032-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.004-5.459 4.446-9.9 9.909-9.9 2.644.001 5.129 1.03 6.994 2.898a9.825 9.825 0 0 1 2.893 6.994c-.004 5.46-4.446 9.901-9.899 9.901zm8.413-18.313A11.82 11.82 0 0 0 12.005 0C5.395 0 .02 5.375.016 11.986a11.95 11.95 0 0 0 1.83 6.353L0 24l5.803-1.522a11.87 11.87 0 0 0 6.2 1.72h.005c6.61 0 11.986-5.376 11.99-11.988a11.89 11.89 0 0 0-3.513-8.498z"/>
  </svg>
);

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 scroll-mt-16">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[11px] font-bold text-primary uppercase tracking-[0.15em]">Contact</span>
          <span className="flex-1 max-w-[48px] h-px bg-primary/30" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left: Heading + links */}
          <div className="lg:col-span-5">
            <h2 className="text-[36px] sm:text-[44px] font-black tracking-[-0.03em] text-ink leading-[1.06] mb-6">
              {contact.heading}
            </h2>
            <p className="text-[15px] text-ink/60 leading-relaxed mb-10 max-w-[400px]">
              {contact.body}
            </p>

            {/* Social link cards */}
            <div className="space-y-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white border border-surface rounded-xl px-5 py-4 hover:border-primary/40 hover:shadow-[0_4px_16px_-4px_rgba(116,180,217,0.15)] transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-ink flex items-center justify-center shrink-0 text-white">
                  <GithubIcon size={16} />
                </div>
                <div className="flex-1">
                  <p className="text-[13.5px] font-semibold text-ink group-hover:text-primary transition-colors">GitHub</p>
                  <p className="text-[12px] text-ink/45">{personal.github}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-ink/30 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white border border-surface rounded-xl px-5 py-4 hover:border-primary/40 hover:shadow-[0_4px_16px_-4px_rgba(116,180,217,0.15)] transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center shrink-0 text-white">
                  <LinkedinIcon size={16} />
                </div>
                <div className="flex-1">
                  <p className="text-[13.5px] font-semibold text-ink group-hover:text-primary transition-colors">LinkedIn</p>
                  <p className="text-[12px] text-ink/45">{personal.linkedin}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-ink/30 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 bg-white border border-surface rounded-xl px-5 py-4 hover:border-primary/40 hover:shadow-[0_4px_16px_-4px_rgba(116,180,217,0.15)] transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-[13.5px] font-semibold text-ink group-hover:text-primary transition-colors">Email</p>
                  <p className="text-[12px] text-ink/45">{contact.email}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-ink/30 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </a>

              <a
                href={personal.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white border border-surface rounded-xl px-5 py-4 hover:border-green-500/40 hover:shadow-[0_4px_16px_-4px_rgba(37,211,102,0.2)] transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#25D366] flex items-center justify-center shrink-0 text-white shadow-sm">
                  <WhatsAppIcon size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-[13.5px] font-semibold text-ink group-hover:text-green-600 transition-colors">WhatsApp</p>
                  <p className="text-[12px] text-ink/45">{personal.phone}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-ink/30 group-hover:text-green-600 group-hover:translate-x-0.5 transition-all" />
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 bg-surface/40 border border-surface rounded-xl px-5 py-3.5">
                <div className="w-9 h-9 rounded-lg bg-white border border-surface flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-ink/60" />
                </div>
                <div>
                  <p className="text-[12px] text-ink/40 font-medium">Location</p>
                  <p className="text-[13.5px] font-semibold text-ink">{contact.destination}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-surface p-7 sm:p-8">
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-6 h-6 text-primary -rotate-45" />
                  </div>
                  <h4 className="text-[18px] font-bold text-ink mb-1">Message sent!</h4>
                  <p className="text-[13px] text-ink/50">I'll get back to you soon.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-[18px] font-bold text-ink mb-1">Send a message</h3>
                  <p className="text-[13px] text-ink/50 mb-6">
                    Or reach out directly via GitHub, LinkedIn, or email.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11.5px] font-semibold text-ink/60 mb-1.5 uppercase tracking-wide">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-cream border border-surface rounded-xl px-4 py-2.5 text-[13.5px] text-ink placeholder-ink/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[11.5px] font-semibold text-ink/60 mb-1.5 uppercase tracking-wide">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-cream border border-surface rounded-xl px-4 py-2.5 text-[13.5px] text-ink placeholder-ink/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11.5px] font-semibold text-ink/60 mb-1.5 uppercase tracking-wide">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="What's on your mind?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-cream border border-surface rounded-xl px-4 py-2.5 text-[13.5px] text-ink placeholder-ink/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none transition-all"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-ink text-cream text-[13.5px] font-medium px-6 py-2.5 rounded-full hover:bg-primary transition-all shadow-sm group"
                    >
                      <span>Send Message</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
