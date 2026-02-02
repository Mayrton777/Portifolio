import React from 'react';
import { Container, Code2, Database, Layers, Server, Terminal } from 'lucide-react';

const engineeringStack = [
  {
    category: 'Backend & .NET',
    skills: [
      { name: 'C# / .NET 9', level: 90, icon: Code2 },
      { name: 'ASP.NET Core', level: 85, icon: Server },
      { name: 'Clean Architecture', level: 85, icon: Layers },
    ],
  },
  {
    category: 'Dados & Python',
    skills: [
      { name: 'Python (Flask/Pandas)', level: 88, icon: Terminal },
      { name: 'SQL Server / PostgreSQL', level: 85, icon: Database },
      { name: 'Redis (Cache)', level: 80, icon: Database },
    ],
  },
  {
    category: 'DevOps & Frontend',
    skills: [
      { name: 'Docker / Compose', level: 80, icon: Container },
      { name: 'Git / GitHub', level: 90, icon: Code2 },
      { name: 'React / JavaScript', level: 75, icon: Layers },
    ],
  },
];

const tools = [
  { name: 'VS Code', color: 'text-blue-400' },
  { name: 'Visual Studio', color: 'text-purple-500' },
  { name: 'Docker', color: 'text-blue-500' },
  { name: 'Postman', color: 'text-orange-400' },
  { name: 'SQL Server', color: 'text-red-400' },
  { name: 'MongoDB', color: 'text-green-400' },
  { name: 'Git', color: 'text-orange-500' },
  { name: 'Figma', color: 'text-purple-400' },
];

export function SkillsSection() {
  return (
    <section className="relative py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-green-500"></div>
            <span className="text-sm font-mono text-green-400">STACK TÉCNICA</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Minhas <span className="text-green-400">Habilidades</span>
          </h2>
          <p className="text-gray-400 font-mono text-lg max-w-2xl">
            Foco em linguagens tipadas, bancos de dados relacionais e não-relacionais, e infraestrutura como código.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {engineeringStack.map((category, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] border-2 border-[#2A2A2A] rounded-lg p-6 hover:border-green-500/30 transition-colors"
            >
              <h3 className="text-lg font-bold mb-6 text-green-400 font-mono">
                {category.category.toUpperCase()}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-mono text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-xs font-mono text-green-400">{skill.level}%</span>
                    </div>
                    
                    <div className="h-1.5 bg-black/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Tools Grid */}
        <div className="bg-[#1A1A1A] border-2 border-[#2A2A2A] rounded-lg p-8">
          <h3 className="text-lg font-bold mb-6 text-green-400 font-mono">
            FERRAMENTAS FAVORITAS
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group relative bg-black/30 border border-white/10 hover:border-green-500/50 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105"
              >
                <div className={`text-sm font-mono font-bold ${tool.color} group-hover:text-green-400 transition-colors`}>
                  {tool.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}