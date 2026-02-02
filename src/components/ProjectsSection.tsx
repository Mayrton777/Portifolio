import React from 'react';
import { Database, Shield, Smartphone, Map, Globe, Github } from 'lucide-react';

const projects = [
  {
    id: 'BACK-01',
    title: 'Payment Gateway Simulator',
    description: 'API de processamento de pagamentos resiliente. Focada em consistência financeira usando Redis para garantir idempotência.',
    tech: ['.NET 9', 'Redis', 'SQL Server', 'Docker', 'xUnit'],
    metrics: [
      { label: 'Arquitetura', value: 'Clean Arch' },
      { label: 'Segurança', value: 'Idempotency' },
      { label: 'Testes', value: '100% Core' },
    ],
    icon: Shield,
    status: 'CONCLUÍDO',
    link: 'https://github.com/Mayrton777/Payment-Gateway-Simulator' 
  },
  {
    id: 'DATA-02',
    title: 'API de Cálculo de Área Negada',
    description: 'Solução geoespacial para análise de intensidade de sinal. Processa dados complexos para delimitar bordas de células.',
    tech: ['Python', 'MongoDB', 'Pandas', 'GeoPandas', 'NumPy'],
    metrics: [
      { label: 'Dados', value: 'Geoespacial' },
      { label: 'Database', value: 'NoSQL' },
      { label: 'Foco', value: 'Analytics' },
    ],
    icon: Map,
    status: 'CONCLUÍDO',
    link: 'https://github.com/Mayrton777/Espaco_Geometrico_Negado'
  },
  {
    id: 'MOB-03',
    title: 'App Exposição Eletromagnética',
    description: 'Aplicativo móvel que calcula a exposição humana a campos eletromagnéticos utilizando mapas interativos.',
    tech: ['React Native', 'JavaScript', 'Google Maps API'],
    metrics: [
      { label: 'Plataforma', value: 'Mobile' },
      { label: 'UX/UI', value: 'Maps' },
      { label: 'Tipo', value: 'Utilitário' },
    ],
    icon: Smartphone,
    status: 'CONCLUÍDO',
    link: 'https://github.com/Mayrton777/Android-Anatel'
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-green-500"></div>
            <span className="text-sm font-mono text-green-400">PORTFÓLIO TÉCNICO</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Projetos em <span className="text-green-400">Destaque</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#1A1A1A] border-2 border-[#2A2A2A] hover:border-green-500/50 rounded-lg p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] flex flex-col h-full"
            >
              {/* Header - ID REMOVIDO E ALTURA FIXA PARA O TÍTULO */}
              <div className="flex items-start justify-between mb-4 h-14">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/10 rounded border border-green-500/30">
                    <project.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    {/* ID foi removido daqui */}
                    <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors line-clamp-2 leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
              
              {/* Description - ALTURA FIXA (h-20) PARA ALINHAR O QUE VEM ABAIXO */}
              <p className="text-gray-400 text-sm mb-6 leading-relaxed h-20 overflow-hidden line-clamp-3">
                {project.description}
              </p>
              
              {/* Metrics - SEMPRE NA MESMA POSIÇÃO GRAÇAS AO BLOCO ACIMA */}
              <div className="grid grid-cols-3 gap-2 mb-6 p-3 bg-black/30 rounded border border-white/5 h-20 items-center">
                {project.metrics.map((metric, index) => (
                  <div key={index} className="text-center flex flex-col justify-center h-full">
                    <div className="text-green-400 font-mono text-xs font-bold truncate w-full">{metric.value}</div>
                    <div className="text-gray-600 text-[10px] font-mono uppercase truncate w-full">{metric.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Tech Stack - CONTAINER COM ALTURA MÍNIMA PARA ALINHAR */}
              <div className="flex flex-wrap gap-2 mb-6 min-h-[3rem] content-start">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono bg-black/50 text-gray-400 px-3 py-1.5 rounded border border-white/10 hover:border-green-500/50 hover:text-green-400 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Footer */}
              <div className="mt-auto pt-4 border-t border-white/5">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm font-mono text-gray-400 hover:text-green-400 transition-colors group/btn flex items-center gap-2"
                >
                  VER CÓDIGO
                  <Github className="w-4 h-4" /> {/* Ícone aqui */}
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}