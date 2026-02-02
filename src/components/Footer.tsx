import React from 'react';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-6 h-6 text-green-400" />
              <span className="font-mono font-bold text-lg">MAYRTON.DEV</span>
            </div>
            <p className="text-gray-500 text-sm font-mono leading-relaxed">
              Construindo a infraestrutura do mundo digital. Uma API por vez.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-sm text-green-400 mb-4">LINKS RÁPIDOS</h3>
            <ul className="space-y-2 text-sm font-mono">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">→ Início</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-green-400 transition-colors">→ Projetos</a></li>
              <li><a href="https://www.linkedin.com/in/mayrton-eduardo-silva-rocha" className="text-gray-400 hover:text-green-400 transition-colors">→ LinkedIn</a></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="font-mono text-sm text-green-400 mb-4">CONTATO</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Mayrton777"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1A1A1A] border border-white/10 hover:border-green-500/50 rounded-lg transition-all"
              >
                <Github className="w-5 h-5 text-gray-400 hover:text-green-400 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/mayrton-eduardo-silva-rocha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1A1A1A] border border-white/10 hover:border-green-500/50 rounded-lg transition-all"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-green-400 transition-colors" />
              </a>
              <a
                href="mailto:mayrtontrabalho@gmail.com"
                className="p-3 bg-[#1A1A1A] border border-white/10 hover:border-green-500/50 rounded-lg transition-all"
              >
                <Mail className="w-5 h-5 text-gray-400 hover:text-green-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm font-mono">
            © 2026 Mayrton Eduardo. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-xs font-mono text-gray-500">STATUS: OPEN TO WORK</span>
          </div>
        </div>
      </div>
    </footer>
  );
}