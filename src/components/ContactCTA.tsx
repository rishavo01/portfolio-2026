import React, { useState } from 'react';
import { Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { contact } from '../data/portfolio';

export const ContactCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: contact.projectTypes[0],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        
        {/* Main Soft Background Container */}
        <div className="relative bg-background-soft rounded-3xl p-7 sm:p-10 border border-surface overflow-hidden shadow-2xs">
          
          {/* Header */}
          <div className="mb-7 relative z-10 max-w-[650px]">
            <h2 className="text-2xl sm:text-[28px] font-extrabold text-primary tracking-tight mb-1.5">
              {contact.heading}
            </h2>
            <p className="text-[13.5px] sm:text-[14px] text-[#4B5563]">
              {contact.subtitle}
            </p>
          </div>

          {/* 3 Columns Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-center relative z-10">
            
            {/* Column 1: Contact Info List (lg:col-span-3) */}
            <div className="lg:col-span-3 space-y-4">
              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-surface flex items-center justify-center text-primary shrink-0 mt-0.5 shadow-2xs">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11.5px] text-[#6B7280] font-medium">Email</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-[13px] font-semibold text-ink hover:text-accent transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-surface flex items-center justify-center text-primary shrink-0 mt-0.5 shadow-2xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11.5px] text-[#6B7280] font-medium">Location</p>
                  <p className="text-[13px] font-semibold text-ink">
                    {contact.location}
                  </p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-surface flex items-center justify-center text-primary shrink-0 mt-0.5 shadow-2xs">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11.5px] text-[#6B7280] font-medium">Availability</p>
                  <p className="text-[13px] font-semibold text-ink">
                    {contact.availability}
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Interactive Form (lg:col-span-6) */}
            <div className="lg:col-span-6 bg-white p-5 sm:p-6 rounded-2xl border border-surface shadow-xs">
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="w-12 h-12 rounded-full bg-background-soft text-primary flex items-center justify-center mx-auto mb-3">
                    <ArrowRight className="w-6 h-6 -rotate-45" />
                  </div>
                  <h4 className="text-base font-bold text-ink">Thank you for reaching out!</h4>
                  <p className="text-xs text-[#6B7280] mt-1">Rishav will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Top 3 inputs row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-surface rounded-xl px-3.5 py-2.5 text-[12.5px] text-ink placeholder-[#94A3B8] focus:outline-none focus:border-primary focus:ring-2 focus:ring-accent/30"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-surface rounded-xl px-3.5 py-2.5 text-[12.5px] text-ink placeholder-[#94A3B8] focus:outline-none focus:border-primary focus:ring-2 focus:ring-accent/30"
                      />
                    </div>
                    <div>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-white border border-surface rounded-xl px-3.5 py-2.5 text-[12.5px] text-ink focus:outline-none focus:border-primary focus:ring-2 focus:ring-accent/30"
                      >
                        {contact.projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <textarea
                      required
                      rows={3}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-surface rounded-xl px-3.5 py-2.5 text-[12.5px] text-ink placeholder-[#94A3B8] focus:outline-none focus:border-primary focus:ring-2 focus:ring-accent/30 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-accent text-white text-[13px] font-medium px-5 py-2.5 rounded-full transition-all shadow-xs"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Column 3: Futuristic AI Robot Graphic (lg:col-span-3) */}
            <div className="hidden lg:flex lg:col-span-3 justify-center items-center relative">
              <div className="w-[200px] h-[200px] rounded-full overflow-hidden flex items-center justify-center mix-blend-multiply opacity-80">
                <img
                  src="/assets/ai_head_profile.jpg"
                  alt="Futuristic AI Illustration"
                  className="w-full h-full object-contain filter contrast-105"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
