import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-transparent text-zinc-400 text-left pt-12 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08] relative z-10">
      <div className="space-y-8">
        
        {/* Top Header Row: Logo & Social Icons */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-0.5 border border-white/20">
              <img
                src="/assets/logo.png"
                alt="Caliber's Nova"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-white font-black text-sm tracking-tight">
              CALIBER’S NOVA
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-[#FFD21F] transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689-.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-[#FFD21F] transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-[#FFD21F] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* 2-Column Links matching mobile mockup */}
        <div className="grid grid-cols-2 gap-6 text-xs font-semibold text-zinc-300">
          <div className="space-y-3">
            <div>
              <a href="#about" className="hover:text-[#FFD21F] transition-colors">
                About
              </a>
            </div>
            <div>
              <a href="#programs" className="hover:text-[#FFD21F] transition-colors">
                Programs
              </a>
            </div>
            <div>
              <a href="#results" className="hover:text-[#FFD21F] transition-colors">
                Results
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <a href="#faculty" className="hover:text-[#FFD21F] transition-colors">
                Faculty
              </a>
            </div>
            <div>
              <a href="#resources" className="hover:text-[#FFD21F] transition-colors">
                Resources
              </a>
            </div>
            <div>
              <a href="#contact" className="hover:text-[#FFD21F] transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info Items from GMB */}
        <div className="space-y-2.5 text-xs text-zinc-400 pt-2 border-t border-white/[0.08]">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-3.5 h-3.5 text-[#FFD21F] shrink-0 mt-0.5" />
            <div>
              <span>2nd Floor, Zenda Chowk, Natraj Talkies Road, Mahal, Nagpur - 440032</span>
              <span className="text-zinc-500 block text-[11px] mt-0.5">Also at: Sadar Campus, Nagpur</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Phone className="w-3.5 h-3.5 text-[#FFD21F] shrink-0" />
            <div className="flex items-center gap-2">
              <a href="tel:+919595253778" className="hover:text-[#FFD21F]">
                +91 9595253778
              </a>
              <span className="text-zinc-600">|</span>
              <a href="tel:+919527225500" className="hover:text-[#FFD21F]">
                +91 9527225500
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
            <div className="flex items-center gap-2.5">
              <Mail className="w-3.5 h-3.5 text-[#FFD21F] shrink-0" />
              <a href="mailto:info@calibernova.in" className="hover:text-[#FFD21F]">
                info@calibernova.in
              </a>
            </div>

            <a
              href="https://share.google/Dz0KG3WqLJXwz3s6m"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-zinc-400 hover:text-[#FFD21F] transition-colors text-xs font-medium"
            >
              <span>4.9★ on Google Maps (900+ Reviews)</span>
              <span className="text-[#FFD21F]">↗</span>
            </a>
          </div>
        </div>

        {/* Copyright & Tagline */}
        <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-[10px] text-zinc-400">
          <span>© 2007–2026 Caliber’s Nova</span>
          <span className="font-mono uppercase tracking-widest text-[#FFD21F] font-bold">
            KNOW MORE. BE MORE.
          </span>
        </div>

      </div>
    </footer>
  );
};
