import React from 'react';
import { personal } from '../data/portfolio';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.477-.15-.678.15-.2.301-.778.979-.954 1.18-.176.2-.351.226-.652.075-.3-.15-1.267-.467-2.414-1.49-1.049-.935-1.758-2.09-1.964-2.443-.206-.352-.022-.542.128-.692.136-.135.301-.352.452-.527.15-.175.2-.3.301-.502.101-.201.05-.376-.025-.526-.075-.151-.678-1.635-.929-2.239-.245-.588-.493-.508-.678-.518-.175-.009-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.15.201 2.123 3.242 5.143 4.547.718.31 1.279.496 1.716.635.722.23 1.379.197 1.898.12.578-.087 1.78-.727 2.031-1.43.251-.703.251-1.306.176-1.431-.076-.126-.276-.201-.577-.352zm-5.467 7.424h-.007a9.88 9.88 0 0 1-5.032-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.004-5.459 4.446-9.9 9.909-9.9 2.644.001 5.129 1.03 6.994 2.898a9.825 9.825 0 0 1 2.893 6.994c-.004 5.46-4.446 9.901-9.899 9.901zm8.413-18.313A11.82 11.82 0 0 0 12.005 0C5.395 0 .02 5.375.016 11.986a11.95 11.95 0 0 0 1.83 6.353L0 24l5.803-1.522a11.87 11.87 0 0 0 6.2 1.72h.005c6.61 0 11.986-5.376 11.99-11.988a11.89 11.89 0 0 0-3.513-8.498z"/>
  </svg>
);

export const FloatingWhatsApp: React.FC = () => (
  <a
    href={personal.whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-[60] group"
  >
    <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping" />
    <span className="absolute -inset-2 rounded-full bg-[#25D366]/15 blur-md" />
    <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_-6px_rgba(37,211,102,0.55)] group-hover:scale-110 transition-transform duration-300">
      <WhatsAppIcon />
    </span>
  </a>
);

export default FloatingWhatsApp;
