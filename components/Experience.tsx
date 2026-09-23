'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  ShieldCheck,
  Database,
  Cpu,
  TestTube2,
} from 'lucide-react';

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 max-w-7xl mx-auto px-6 w-full text-white z-10 relative scroll-mt-20"
    >
      <div className="mb-12 text-center lg:text-left">
        <h2
          className="
            text-3xl sm:text-4xl
            font-bold
            tracking-tight
            text-white
            drop-shadow-[0_3px_10px_rgba(0,0,0,0.75)]
            [text-shadow:0_0_22px_rgba(34,211,238,0.18),0_3px_10px_rgba(0,0,0,0.75)]
          "
        >
          Work Experience
        </h2>
      </div>

      <div className="bg-black/60 border border-white/10 rounded-[32px] p-8 md:p-12 flex flex-col lg:flex-row gap-8 items-center backdrop-blur-2xl hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-[0_0_80px_rgba(34,211,238,0.2)] transition-all duration-500 group relative overflow-hidden cursor-default">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-blue-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />

        <div className="absolute -left-20 -top-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-500" />

        <div className="flex-1 space-y-6 relative z-10">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-shadow">
              <Briefcase size={22} />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              Jan 2024 – Present
            </span>
          </div>

          <h3 className="text-3xl font-extrabold tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
            Backend & Full-stack Developer
          </h3>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Built and deployed 2 production-oriented FastAPI applications with
            PostgreSQL and Redis. Developed authentication and session systems,
            Stripe payments, email verification and password recovery, Celery
            background jobs, Alembic migrations, automated testing and CI/CD.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start space-x-3">
              <ShieldCheck
                className="text-emerald-400 mt-0.5 shrink-0"
                size={18}
              />
              <p className="text-sm text-gray-300">
                Secure auth, sessions, CSRF and account recovery
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <Database
                className="text-blue-400 mt-0.5 shrink-0"
                size={18}
              />
              <p className="text-sm text-gray-300">
                PostgreSQL, Redis, SQLAlchemy and Alembic
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <Cpu
                className="text-purple-400 mt-0.5 shrink-0"
                size={18}
              />
              <p className="text-sm text-gray-300">
                Stripe integrations and Celery background processing
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <TestTube2
                className="text-orange-400 mt-0.5 shrink-0"
                size={18}
              />
              <p className="text-sm text-gray-300">
                Pytest, CI/CD, Docker and production deployment
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[45%] rounded-2xl bg-gradient-to-tr from-cyan-900/30 to-blue-900/30 border border-white/5 p-6 sm:p-8 relative overflow-hidden group-hover:border-cyan-500/40 transition-all duration-500 group-hover:shadow-[inset_0_0_40px_rgba(34,211,238,0.1)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />

          <div className="relative z-10">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">
                Production work
              </p>
              <h4 className="text-xl font-bold text-white">
                Systems built & verified
              </h4>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-black/20 border border-white/10 rounded-2xl p-4">
                <div className="text-2xl font-bold text-white">
                  2
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Live applications
                </div>
              </div>

              <div className="bg-black/20 border border-white/10 rounded-2xl p-4">
                <div className="text-2xl font-bold text-white">
                  190
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Automated tests
                </div>
              </div>

              <div className="bg-black/20 border border-white/10 rounded-2xl p-4">
                <div className="text-2xl font-bold text-cyan-300">
                  7/7
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  CI gates passing
                </div>
              </div>

              <div className="bg-black/20 border border-white/10 rounded-2xl p-4">
                <div className="text-2xl font-bold text-blue-300">
                  87.03%
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Test coverage
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
