import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const timeline = [
  {
    year: '2022 - 2026 (Previsto)',
    role: 'Ciência da Computação',
    company: 'Universidade Paulista (UNIP)',
    description: 'Bacharelado com foco em Engenharia de Software e Sistemas Distribuídos.',
    icon: GraduationCap
  },
  {
    year: '2024 - 2025',
    role: 'Estagiário de Desenvolvimento',
    company: 'ANATEL (Agência Nacional de Telecomunicações)',
    description: 'Desenvolvimento Full Stack, automação de processos com Python e otimização de sistemas internos.',
    icon: Briefcase
  },
  {
    year: '2024 - Atual',
    role: 'Desenvolvedor Full Stack',
    company: 'Projetos Pessoais & Freelance',
    description: 'Foco em arquitetura .NET, APIs RESTful resilientes e integração com Cloud/Docker.',
    icon: Briefcase
  },
];

export function About() {
  return (
    <section className="py-20 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
         <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Minha <span className="text-green-400">Jornada</span>
          </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {timeline.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-[#1A1A1A] border-2 border-[#2A2A2A] hover:border-green-500/50 rounded-lg p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] flex flex-col"
            >
              {/* Header do Card */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {/* Ícone com fundo verde igual aos projetos */}
                  <div className="p-2 bg-green-500/10 rounded border border-green-500/30">
                    <item.icon className="w-5 h-5 text-green-400" />
                  </div>
                  
                  <div>
                    <span className="text-xs font-mono text-green-400 bg-green-950/30 px-2 py-0.5 rounded border border-green-900/50 mb-1 inline-block">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors leading-tight">
                      {item.role}
                    </h3>
                  </div>
                </div>
              </div>
              
              {/* Empresa */}
              <p className="text-sm font-mono text-gray-400 mb-4 border-b border-white/5 pb-2">
                {item.company}
              </p>

              {/* Descrição */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Efeito visual de canto (opcional, igual ao dos projetos) */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-green-500 to-transparent"></div>
                <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-green-500 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}