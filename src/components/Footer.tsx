import { Send } from 'lucide-react';
import { footer } from '../data/portfolio';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-14 pb-10 bg-white border-t border-[#EEF3F1]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">

        {/* Main 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">

          {/* Column 1: Brand (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <a href="#home" className="text-xl font-bold tracking-tight text-[#15191B] flex items-baseline gap-0.5 mb-3">
              <span>{footer.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#75C8B7] inline-block"></span>
            </a>
            <p className="text-[13px] text-[#6B7477] leading-relaxed max-w-[280px] font-normal">
              {footer.description}
            </p>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-[13.5px] font-bold text-[#15191B] mb-4 tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footer.quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[13px] text-[#6B7477] hover:text-[#15191B] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-[13.5px] font-bold text-[#15191B] mb-4 tracking-tight">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {footer.resources.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[13px] text-[#6B7477] hover:text-[#15191B] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter (lg:col-span-3) — doubles as the Blog anchor */}
          <div id="blog" className="lg:col-span-3 scroll-mt-20">
            <h4 className="text-[13.5px] font-bold text-[#15191B] mb-4 tracking-tight">
              Newsletter
            </h4>
            <p className="text-[13px] text-[#6B7477] leading-relaxed mb-4">
              Get updates on new projects and what I'm building.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#F6FAF8] border border-[#D5EBE6] rounded-xl pl-3.5 pr-10 py-2.5 text-[12.5px] text-[#15191B] placeholder-[#94A3B8] focus:outline-none focus:border-[#75C8B7]"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1.5 w-7 h-7 rounded-lg bg-[#75C8B7] hover:bg-[#62baaa] text-white flex items-center justify-center transition-colors"
              >
                <Send className="w-3.5 h-3.5 -rotate-45" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-[#EEF3F1] text-center">
          <p className="text-[12px] text-[#8C9699]">
            © 2026 {footer.name}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
