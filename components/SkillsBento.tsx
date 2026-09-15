'use client';

import { Users, Database, Layout, Languages, Workflow, TestTube, GitBranch } from 'lucide-react';

export default function SkillsBento() {

  // Массивы с оригинальными иконками и фирменными цветами технологий
  const frontendSkills = [
    {
      name: 'HTML5',
      color: 'text-[#E34F26] border-[#E34F26]/10 hover:border-[#E34F26]/40 hover:bg-[#E34F26]/10 hover:shadow-[0_0_15px_rgba(227,79,38,0.2)]',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M12 2l2.4 27.2L24 26.8l3.2-24.8H12z" fill="#E44D26" transform="scale(0.6) translate(8, 8)" />
          <path d="M12 2l-2.4 27.2L0 26.8 3.2 2h8.8z" fill="#F16529" transform="scale(0.6) translate(8, 8)" />
          <path d="M12 5.5h6.6L17.5 13H12V5.5z" fill="#EBEBEB" transform="scale(0.6) translate(8, 8)" />
          <path d="M12 18.5l.3 3.5-5.3 1.4-5.3-1.4-.4-4.5h3.6l.2 2.1 1.9.5 1.9-.5.2-2.1H12z" fill="#EBEBEB" transform="scale(0.6) translate(8, 8)" />
        </svg>
      )
    },
    {
      name: 'React',
      color: 'text-[#61DAFB] border-[#61DAFB]/10 hover:border-[#61DAFB]/40 hover:bg-[#61DAFB]/10 hover:shadow-[0_0_15px_rgba(97,218,251,0.2)]',
      icon: <svg viewBox="-11.5 -10.2 23 20.4" className="w-4 h-4"><circle cx="0" cy="0" r="2.05" fill="currentColor" /><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" /></g></svg>
    },
    {
      name: 'JavaScript',
      color: 'text-[#F7DF1E] border-[#F7DF1E]/10 hover:border-[#F7DF1E]/40 hover:bg-[#F7DF1E]/10 hover:shadow-[0_0_15px_rgba(247,223,30,0.2)]',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
          <path d="M1.5 1.5h21v21h-21V1.5z" fill="none" />
          <path d="M7.5 18.577c.47.456 1.09.73 1.766.73.664 0 1.21-.267 1.636-.78.432-.52.648-1.26.648-2.217V8.576h2.576v8.106c0 1.68-.454 2.94-1.36 3.774-.91.834-2.148 1.252-3.714 1.252-1.33 0-2.39-.37-3.18-1.11L6.1 19.34c.48.45 1.06.677 1.74.677.61 0 1.1-.19 1.47-.57l-.81-1.37zM16.96 19.196c.64-.64.96-1.52.96-2.65V8.577h2.576v7.834c0 2.21-.57 3.86-1.71 4.95-1.14 1.09-2.73 1.63-4.76 1.63-1.92 0-3.41-.53-4.47-1.59l1.45-1.46c.77.75 1.78 1.13 3.02 1.13.97 0 1.75-.25 2.34-.76z" />
        </svg>
      )
    },
    {
      name: 'Tailwind CSS',
      color: 'text-[#38BDF8] border-[#38BDF8]/10 hover:border-[#38BDF8]/40 hover:bg-[#38BDF8]/10 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]',
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6C13.7 10.6 15 12 18 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9.2-1.6-.9-2.3-1.6C16.3 6.2 15 4.8 12 4.8zM6 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6 1.2 1.2 2.5 2.6 5.5 2.6 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C10.3 13.4 9 12 6 12z" /></svg>
    }
  ];

  const backendSkills = [
    {
      name: 'FastAPI',
      color: 'text-[#009688] border-[#009688]/10 hover:border-[#009688]/40 hover:bg-[#009688]/10 hover:shadow-[0_0_15px_rgba(0,150,136,0.2)]',
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 14h-1v-4h-2l3-6v4h2l-2 6z" /></svg>
    },
    {
      name: 'Python',
      color: 'text-[#FFD43B] border-[#FFD43B]/10 hover:border-[#FFD43B]/40 hover:bg-[#FFD43B]/10 hover:shadow-[0_0_15px_rgba(255,212,59,0.2)]',
      icon: (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
          <path
            fill="#3776AB"
            d="M12 2.4c-4.9 0-5 .2-5 2.3v2h5v1H6.7c-2 0-3.3.9-3.3 2.9v2.2c0 2.2 1.1 3 3.1 3H8v-1.7c0-2 1.8-3.5 3.8-3.5h2.8V8.1c0-1.8-1.4-2.8-3.2-2.8-1.1 0-2.3-.1-2.3-.1v1.1c0 .2-.2.4-.4.4H8c-.2 0-.4-.2-.4-.4V5.1c0-.9 1-1.3 4-1.3s4.6.4 4.6 1.4v.8h1.2v-.8c0-1.9-1.2-2.8-5.4-2.8zm-1.8 1.9c-.4 0-.8.3-.8.7s.4.7.8.7.8-.3.8-.7-.4-.7-.8-.7z"
          />
          <path
            fill="#FFD43B"
            d="M12 21.6c4.9 0 5-.2 5-2.3v-2h-5v-1h5.3c2 0 3.3-.9 3.3-2.9v-2.2c0-2.2-1.1-3-3.1-3H16v1.7c0 2-1.8 3.5-3.8 3.5H9.4v2.5c0 1.8 1.4 2.8 3.2 2.8 1.1 0 2.3.1 2.3.1v-1.1c0-.2-.2-.4-.4-.4h-.8c-.2 0-.4-.2-.4-.4v2.2c0 .9 1 1.3 4 1.3s4.6-.4 4.6-1.4v-.8h1.2v.8c0 1.9-1.2 2.8-5.4 2.8zm1.8-1.9c-.4 0-.8.3-.8.7s.4.7.8.7.8-.3.8-.7-.4-.7-.8-.7z"
          />
        </svg>
      )
    },
    {
      name: 'PostgreSQL',
      color: 'text-[#F29111] border-[#F29111]/10 hover:border-[#F29111]/40 hover:bg-[#F29111]/10 hover:shadow-[0_0_15px_rgba(242,145,17,0.2)]',
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2C6.5 2 2 4.2 2 7v10c0 2.8 4.5 5 10 5s10-2.2 10-5V7c0-2.8-4.5-5-10-5zm0 18c-4.4 0-8-1.8-8-4v-1c1.5 1.5 4.5 2.5 8 2.5s6.5-1 8-2.5v1c0 2.2-3.6 4-8 4zm8-6c-1.5 1.5-4.5 2.5-8 2.5S4 15.5 4 14V9.5C5.5 11 8.5 12 12 12s6.5-1 8-2.5V14zm0-6.5C18.5 9 15.5 10 12 10S5.5 9 4 7.5 7.6 5 12 5s8 1.5 8 2.5z" /></svg>
    },
    {
      name: 'SQLAlchemy',
      color: 'text-[#D71F00] border-[#D71F00]/10 hover:border-[#D71F00]/40 hover:bg-[#D71F00]/10 hover:shadow-[0_0_15px_rgba(215,31,0,0.2)]',
      icon: <Database className="w-4 h-4" />
    },
    {
      name: 'Redis',
      color: 'text-[#DC382D] border-[#DC382D]/10 hover:border-[#DC382D]/40 hover:bg-[#DC382D]/10 hover:shadow-[0_0_15px_rgba(220,56,45,0.2)]',
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M21.2 10.2l-8.7-3.4a1.4 1.4 0 00-1 0L2.8 10.2a1 1 0 000 1.8l8.7 3.4a1.4 1.4 0 001 0l8.7-3.4a1 1 0 000-1.8zM4.5 14.2v3.1c0 .5.3.9.8 1.1l7.2 2.8 7.2-2.8c.5-.2.8-.6.8-1.1v-3.1l-7.2 2.8a3.4 3.4 0 01-2 0l-6.8-2.8z" /></svg>
    },
    {
      name: 'Celery',
      color: 'text-[#37814A] border-[#37814A]/10 hover:border-[#37814A]/40 hover:bg-[#37814A]/10 hover:shadow-[0_0_15px_rgba(55,129,74,0.2)]',
      icon: <Workflow className="w-4 h-4" />
    },
    {
      name: 'Docker',
      color: 'text-[#2496ED] border-[#2496ED]/10 hover:border-[#2496ED]/40 hover:bg-[#2496ED]/10 hover:shadow-[0_0_15px_rgba(36,150,237,0.2)]',
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M13.98 12.274V10.14h-2.14v2.134h2.14zm-2.674 0V10.14H9.17v2.134h2.136zm-2.673 0V10.14H6.5v2.134h2.133zm5.347-2.673V7.467h-2.14v2.134h2.14zm-2.674 0V7.467H9.17v2.134h2.136zm-2.673 0V7.467H6.5v2.134h2.133zm0-2.674V4.793H6.5v2.134h2.133zM22.25 11.83c-.06-.516-.546-2.45-2.605-3.033-.11-.03-.23-.007-.315.06-.827.675-1.895 1.05-3.036 1.077h-1.207v3.4h11.252c0-.287.03-.89-.09-1.503zM2.87 13.882c-1.258 0-2.28 1.022-2.28 2.28s1.022 2.28 2.28 2.28 2.28-1.022 2.28-2.28-1.022-2.28-2.28-2.28zm8.568.04c-1.258 0-2.28 1.02-2.28 2.28 0 1.257 1.022 2.28 2.28 2.28 1.257 0 2.28-1.023 2.28-2.28 0-1.26-1.023-2.28-2.28-2.28z" /></svg>
    },
    {
      name: 'Git',
      color: 'text-[#F05032] border-[#F05032]/10 hover:border-[#F05032]/40 hover:bg-[#F05032]/10 hover:shadow-[0_0_15px_rgba(240,80,50,0.2)]',
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M23.5 11L13 .5c-.6-.6-1.5-.6-2.1 0l-1.9 1.9 2.5 2.5c.5-.2 1.2-.1 1.6.3.5.5.5 1.2.1 1.7L15 8.6c.5-.1 1.2 0 1.6.4.6.6.6 1.6 0 2.1-.6.6-1.6.6-2.1 0-.4-.4-.5-1-.3-1.5l-1.9-1.9v4.2c.2.1.4.3.5.6.6.6.6 1.6 0 2.1-.6.6-1.6.6-2.1 0-0.6-.6-0.6-1.6 0-2.1.2-.2.4-.4.6-.5V6.7c-.2-.1-.4-.3-.5-.6-.3-.6-.2-1.4.3-1.9.6-.6 1.6-.6 2.1 0L3.1 9.4c-.6.6-.6 1.5 0 2.1l10.5 10.5c.6.6 1.5.6 2.1 0l7.9-7.9c.5-.6.5-1.5-.1-2.1z" /></svg>
    },
    {
      name: 'Alembic',
      color: 'text-[#8B5CF6] border-[#8B5CF6]/10 hover:border-[#8B5CF6]/40 hover:bg-[#8B5CF6]/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]',
      icon: <Database className="w-4 h-4" />
    },
    {
      name: 'Pytest',
      color: 'text-[#0B9ED9] border-[#0B9ED9]/10 hover:border-[#0B9ED9]/40 hover:bg-[#0B9ED9]/10 hover:shadow-[0_0_15px_rgba(11,158,217,0.2)]',
      icon: <TestTube className="w-4 h-4" />
    },
    {
      name: 'CI/CD',
      color: 'text-[#2ea44f] border-[#2ea44f]/10 hover:border-[#2ea44f]/40 hover:bg-[#2ea44f]/10',
      icon: <GitBranch className="w-4 h-4" />
    }
  ];

  const languages = [
    {
      name: 'English',
      level: 'B1',
      color: 'hover:border-blue-500/40 hover:bg-blue-500/5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] text-blue-400',
      flag: (
        <svg viewBox="0 0 50 30" className="w-full h-full object-cover">
          <rect width="50" height="30" fill="#012169" />
          <path d="M0,0 L50,30 M50,0 L0,30" stroke="#fff" strokeWidth="6" />
          <path d="M0,0 L50,30 M50,0 L0,30" stroke="#C8102E" strokeWidth="4" />
          <path d="M25,0 V30 M0,15 H50" stroke="#fff" strokeWidth="10" />
          <path d="M25,0 V30 M0,15 H50" stroke="#C8102E" strokeWidth="6" />
        </svg>
      )
    },
    {
      name: 'Czech',
      level: 'A2',
      color: 'hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] text-cyan-400',
      flag: (
        <svg viewBox="0 0 30 20" className="w-full h-full object-cover">
          <rect width="30" height="20" fill="#fff" />
          <rect width="30" height="10" y="10" fill="#D7141A" />
          <polygon points="0,0 0,20 15,10" fill="#11457E" />
        </svg>
      )
    },
    {
      name: 'Russian',
      level: 'Native',
      color: 'hover:border-red-500/40 hover:bg-red-500/5 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)] text-red-400',
      flag: (
        <svg viewBox="0 0 30 20" className="w-full h-full object-cover">
          <rect width="30" height="20" fill="#fff" />
          <rect width="30" height="13.33" y="6.67" fill="#0039A6" />
          <rect width="30" height="6.67" y="13.33" fill="#D52B1E" />
        </svg>
      )
    },
    {
      name: 'Ukrainian',
      level: 'Native',
      color: 'hover:border-yellow-500/40 hover:bg-yellow-500/5 hover:shadow-[0_0_15px_rgba(234,179,8,0.2)] text-yellow-400',
      flag: (
        <svg viewBox="0 0 30 20" className="w-full h-full object-cover">
          <rect width="30" height="10" fill="#4B92DB" />
          <rect width="30" height="10" y="10" fill="#FFD700" />
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-6 w-full text-white z-10 relative">
      <div className="mb-12 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 text-white">
          Technical Arsenal
        </h2>
        <p className="text-gray-300 drop-shadow-md max-w-xl text-base">
          Tools and technologies I use to design systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-auto items-start isolate">

        {/* Languages */}
        <div className="md:col-span-2 bg-black/60 border border-white/10 rounded-[32px] p-6 backdrop-blur-2xl hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_0_50px_rgba(34,211,238,0.12)] transition-all duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl">
              <Languages size={20} />
            </div>

            <h3 className="text-lg font-bold text-white">
              Languages
            </h3>
          </div>

          <div className="space-y-3">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className={`flex items-center gap-2 px-2.5 py-2 rounded-xl border border-white/5 bg-white/[0.02] transition-all duration-300 ${lang.color}`}
              >
                <div className="shrink-0 w-8 h-[21px] overflow-hidden rounded-md border border-white/10 shadow-sm">
                  {lang.flag}
                </div>

                <div className="min-w-0">
                  <div className="font-medium text-white text-xs truncate">
                    {lang.name}
                  </div>

                  <div className="text-[11px] text-gray-400">
                    {lang.level}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CARD: FRONTEND */}
        <div className="md:col-span-3 group relative overflow-hidden bg-black/75 border border-white/10 rounded-[24px] p-6 backdrop-blur-md hover:-translate-y-2 hover:shadow-[0_0_80px_rgba(239,68,68,0.3)] transition-all duration-500 flex flex-col justify-between cursor-default min-h-[180px]">

          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="relative z-10 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 group-hover:bg-red-500/20 transition-all duration-300">
              <Layout size={20} className="text-red-400 group-hover:text-red-300" />
            </div>
            <span className="font-bold uppercase text-[10px] tracking-[0.15em] text-gray-400 group-hover:text-red-300 transition-colors">
              Frontend
            </span>
          </div>

          <div className="relative z-10 flex flex-wrap gap-2 mt-3">
            {frontendSkills.map(skill => (
              <div
                key={skill.name}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-transparent bg-white/5 transition-all duration-300 cursor-pointer ${skill.color}`}
              >
                {skill.icon}
                <span className="text-xs font-semibold">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CARD: BACKEND */}
        <div className="md:col-span-4 group relative overflow-hidden bg-black/75 border border-white/10 rounded-[24px] p-6 backdrop-blur-md hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between cursor-default min-h-[180px]">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="relative z-10 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-all duration-300">
              <Database size={20} className="text-emerald-400 group-hover:text-emerald-300" />
            </div>
            <span className="font-bold uppercase text-[10px] tracking-[0.15em] text-gray-400 group-hover:text-emerald-400 transition-colors">
              Backend & Infrastructure
            </span>
          </div>

          <div className="relative z-10 flex flex-wrap gap-2 mt-3">
            {backendSkills.map(skill => (
              <div
                key={skill.name}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-transparent bg-white/5 transition-all duration-300 cursor-pointer ${skill.color}`}
              >
                {skill.icon}
                <span className="text-xs font-semibold">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CARD: SOFT SKILLS */}
        <div className="md:col-span-3 group relative overflow-hidden bg-black/75 border border-white/10 rounded-[32px] p-5 backdrop-blur-md hover:-translate-y-2 transition-all duration-500 flex flex-col justify-center cursor-default">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="relative z-10 flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500/20 transition-all duration-300">
              <Users size={18} className="text-amber-400 group-hover:text-amber-300" />
            </div>
            <span className="font-bold uppercase text-[10px] tracking-[0.15em] text-gray-400 group-hover:text-amber-400 transition-colors">
              Soft Skills
            </span>
          </div>

          <div className="relative z-10 flex flex-col gap-2 w-full">
            {[
              { label: 'Teamwork', desc: 'Agile/Scrum collaboration' },
              { label: 'Communication', desc: 'Technical articulation' },
              { label: 'Openness', desc: 'Networking & contribution' },
            ].map((skill) => (
              <div
                key={skill.label}
                className="flex items-center justify-between px-3 py-2 rounded-xl border border-white/5 bg-white/[0.02] hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300 cursor-default group/item"
              >
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-gray-200 group-hover/item:text-amber-300 transition-colors">
                    {skill.label}
                  </span>
                  <span className="text-[9px] text-gray-500 italic group-hover/item:text-gray-400">
                    {skill.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}