import React from "react";

function Footer() {
  const date = new Date();
  return (
    <footer className="border-t border-white/10 py-12 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-[#FF6B6B] flex items-center justify-center font-bold text-white text-xs">
            TP
          </div>
          <span className="font-semibold text-white/70">TechPulse</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-white/50">
          <a href="#" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#" className="hover:text-white transition-colors">
            FAQ
          </a>
          <a
            href="https://github.com/tolubishops0/techpulse
"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
        <div className="text-sm text-white/40">
          © {date.getFullYear()} TechPulse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
