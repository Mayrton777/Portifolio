import React, { useState, useEffect } from 'react';
import { Terminal, Database, Shield } from 'lucide-react';

export function HeroSection() {
  const [currentLine, setCurrentLine] = useState(0);
  
  const codeLines = [
    '// PaymentService.cs - Idempotency Logic',
    'public async Task<PaymentResult> ProcessAsync(Transaction trx)',
    '{',
    '    // 1. Check Idempotency (Redis)',
    '    var cached = await _redis.GetAsync(trx.Id);',
    '    if (cached != null) return cached;',
    '    ',
    '    // 2. Business Rules',
    '    if (trx.Amount > 10000) throw new HighValueException();',
    '    ',
    '    // 3. Persist & Cache',
    '    await _repo.SaveAsync(trx);',
    '    await _redis.SetAsync(trx.Id, result, TimeSpan.FromMinutes(10));',
    '    ',
    '    return PaymentResult.Approved();',
    '}',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % codeLines.length);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <div className="mb-6">
              <span className="text-sm font-mono text-green-400 bg-green-950/20 px-3 py-1 rounded border border-green-900/30">
                {'>'} OPEN TO WORK
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Mayrton
              <br />
              Eduardo
              <br />
              <span className="text-green-400">Full Stack Dev</span>
            </h1>
            
            <p className="text-gray-400 text-lg lg:text-xl mb-8 max-w-xl font-mono leading-relaxed">
              Engenheiro de Software focado em soluções robustas.
              <br />
              Especialista em <span className="text-white">.NET</span>, <span className="text-white">Python</span> e arquiteturas escaláveis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#projects" className="group bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded font-mono font-bold transition-all duration-200 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] text-center">
                <span className="flex items-center justify-center gap-2">
                  VER PROJETOS
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </a>
              
              <a href="https://www.linkedin.com/in/mayrton-eduardo-silva-rocha" target="_blank" rel="noopener noreferrer" className="bg-transparent hover:bg-white/5 text-white px-8 py-4 rounded font-mono font-bold border-2 border-white/20 hover:border-green-400 transition-all duration-200 text-center">
                LINKEDIN
              </a>
            </div>
            
            <div className="flex gap-8 text-sm font-mono">
              <div>
                <div className="text-green-400 text-2xl font-bold">2+</div>
                <div className="text-gray-500">ANOS EXP.</div>
              </div>
              <div>
                <div className="text-green-400 text-2xl font-bold">.NET 9</div>
                <div className="text-gray-500">LATEST TECH</div>
              </div>
              <div>
                <div className="text-green-400 text-2xl font-bold">QA</div>
                <div className="text-gray-500">TEST DRIVEN</div>
              </div>
            </div>
          </div>
          
          {/* Right: VS Code Terminal */}
          <div className="relative">
            <div className="bg-[#1E1E1E] rounded-lg overflow-hidden border border-[#3E3E3E] shadow-2xl">
              {/* VS Code Header */}
              <div className="bg-[#2D2D2D] px-4 py-3 flex items-center justify-between border-b border-[#3E3E3E]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <Shield className="w-4 h-4 text-gray-400" />
                  <span className="text-xs font-mono text-gray-400">PaymentService.cs</span>
                </div>
                <div className="flex gap-4 text-xs font-mono text-gray-500">
                  <span>C#</span>
                  <span>UTF-8</span>
                </div>
              </div>
              
              {/* Code Content */}
              <div className="p-6 font-mono text-sm leading-relaxed min-h-[300px]">
                {codeLines.map((line, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-300 ${
                      index <= currentLine ? 'opacity-100' : 'opacity-20'
                    }`}
                  >
                    <span className="text-gray-600 select-none mr-4">{String(index + 1).padStart(2, ' ')}</span>
                    <span className={getSyntaxColor(line)}>{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
    </section>
  );
}

function getSyntaxColor(line: string): string {
  if (line.includes('//')) return 'text-gray-500 italic';
  if (line.includes('public') || line.includes('class') || line.includes('async') || line.includes('return') || line.includes('throw') || line.includes('if') || line.includes('var')) return 'text-purple-400';
  if (line.includes('PaymentResult') || line.includes('ProcessAsync') || line.includes('HighValueException')) return 'text-yellow-300';
  if (line.includes('Redis') || line.includes('GetAsync') || line.includes('SetAsync') || line.includes('SaveAsync')) return 'text-green-400';
  return 'text-gray-300';
}