'use client';

import {
  Terminal,
  ExternalLink,
  ShieldCheck,
  Cpu,
  Layers,
  Database,
  TestTube2,
} from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-6 w-full text-white z-10 relative scroll-mt-20">

      <div className="mb-12 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Completed Projects
        </h2>
      </div>

      {/* TaskPulse Project Card */}
      <div className="bg-black/60 border border-white/10 rounded-[32px] p-8 md:p-12 flex flex-col lg:flex-row gap-8 items-center backdrop-blur-2xl hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_0_80px_rgba(168,85,247,0.3)] transition-all duration-500 group relative overflow-hidden cursor-default">

        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-blue-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />

        <div className="absolute -left-20 -top-20 w-60 h-60 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-500/20 transition-all duration-500" />

        <div className="flex-1 space-y-6 relative z-10">

          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-xl">
              <Terminal size={22} />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
              Production-oriented Backend
            </span>
          </div>

          <h3 className="text-3xl font-extrabold tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
            TaskPulse
          </h3>

          {/* UPDATED TASKPULSE DESCRIPTION */}
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Production-oriented task management backend built with FastAPI,
            PostgreSQL, Redis and Celery. Implemented JWT authentication with
            HttpOnly cookies, refresh-token rotation, CSRF, RBAC, IDOR
            protection, rate limiting, caching and idempotent background jobs.
            Added N+1 query protection, automated testing and CI/CD with
            production Alembic migrations.
          </p>

          {/* UPDATED TASKPULSE FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">

            <div className="flex items-start space-x-3">
              <ShieldCheck
                className="text-emerald-400 mt-0.5 shrink-0"
                size={18}
              />

              <p className="text-sm text-gray-300">
                JWT, HttpOnly cookies, CSRF, RBAC & IDOR protection
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <Database
                className="text-blue-400 mt-0.5 shrink-0"
                size={18}
              />

              <p className="text-sm text-gray-300">
                PostgreSQL + Redis caching, rate limiting & idempotency
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <Cpu
                className="text-purple-400 mt-0.5 shrink-0"
                size={18}
              />

              <p className="text-sm text-gray-300">
                Celery background processing & asynchronous reports
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <TestTube2
                className="text-orange-400 mt-0.5 shrink-0"
                size={18}
              />

              <p className="text-sm text-gray-300">
                62 tests · 87.03% coverage · N+1 regression protection
              </p>
            </div>

          </div>

          {/* UPDATED TASKPULSE METRICS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">
                62
              </div>

              <div className="text-xs text-gray-400 mt-1">
                Tests passing
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">
                87.03%
              </div>

              <div className="text-xs text-gray-400 mt-1">
                Test coverage
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">
                ≤2
              </div>

              <div className="text-xs text-gray-400 mt-1">
                SELECTs / task list
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">
                20/min
              </div>

              <div className="text-xs text-gray-400 mt-1">
                Requests / IP
              </div>
            </div>

          </div>

          {/* UPDATED TASKPULSE PERFORMANCE */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">

            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-gray-200">
                Local API benchmark
              </span>

              <span className="text-xs text-gray-500">
                100 sequential requests
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">

              <div>
                <div className="text-xs text-gray-500 mb-1">
                  GET /health · P95
                </div>

                <div className="text-xl font-bold text-blue-400">
                  1.56 ms
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-500 mb-1">
                  GET /tasks/ · P95
                </div>

                <div className="text-xl font-bold text-purple-400">
                  4.93 ms
                </div>
              </div>

            </div>

          </div>

          {/* UPDATED TASKPULSE TECHNOLOGIES */}
          <div className="flex flex-wrap gap-2 pt-4">

            {[
              'Python',
              'FastAPI',
              'PostgreSQL',
              'SQLAlchemy',
              'Redis',
              'Celery',
              'Docker',
              'Pytest',
              'Alembic',
              'GitHub Actions',
            ].map((tech) => (
              <span
                key={tech}
                className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl font-medium text-gray-300"
              >
                {tech}
              </span>
            ))}

          </div>

          <div className="pt-4 relative z-10">
            <a href="https://taskpulse-f5zy.onrender.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-white text-black font-semibold px-6 py-3.5 rounded-xl hover:bg-gray-200 transition">
              <span>Live Preview</span>
              <ExternalLink size={16} />
            </a>
          </div>

        </div>

        <div className="w-full lg:w-[45%] h-64 sm:h-80 lg:h-96 rounded-2xl bg-gradient-to-tr from-purple-900/30 to-blue-900/30 border border-white/5 flex flex-col justify-center items-center p-6 text-center">

          <Layers className="text-blue-400/60 mb-4" size={48} />

          <h4 className="text-lg font-bold">
            taskpulse-f5zy.onrender.com
          </h4>

        </div>

      </div>

      {/* Sm1le-Fitnes Project Card */}
      <div className="bg-black/60 border border-white/10 rounded-[32px] p-8 md:p-12 flex flex-col lg:flex-row gap-8 items-center backdrop-blur-2xl hover:-translate-y-2 hover:border-orange-500/30 hover:shadow-[0_0_80px_rgba(249,115,22,0.25)] transition-all duration-500 group relative overflow-hidden cursor-default mt-8">

        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-transparent to-amber-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />

        <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-orange-500/20 transition-all duration-500" />

        <div className="flex-1 space-y-6 relative z-10">

          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-xl">
              <Layers size={22} />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              Production Fitness SaaS
            </span>
          </div>

          <h3 className="text-3xl font-extrabold tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-400 transition-all duration-300">
            Sm1le-Fitnes
          </h3>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Production-oriented fitness SaaS built with FastAPI, PostgreSQL and
            Redis. Includes secure session authentication, CSRF protection,
            email verification and password recovery, Stripe payments,
            personalized training and nutrition plan generation, PDF exports,
            rate limiting and production database migrations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">

            <div className="flex items-start space-x-3">
              <ShieldCheck
                className="text-orange-400 mt-0.5 shrink-0"
                size={18}
              />
              <p className="text-sm text-gray-300">
                Secure sessions, CSRF, email verification & password recovery
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <Database
                className="text-amber-400 mt-0.5 shrink-0"
                size={18}
              />
              <p className="text-sm text-gray-300">
                PostgreSQL + Redis, Alembic migrations & readiness checks
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <Cpu
                className="text-orange-300 mt-0.5 shrink-0"
                size={18}
              />
              <p className="text-sm text-gray-300">
                Personalized training and nutrition plans with PDF export
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <TestTube2
                className="text-yellow-400 mt-0.5 shrink-0"
                size={18}
              />
              <p className="text-sm text-gray-300">
                128 tests · CI/CD · dependency audit · production smoke checks
              </p>
            </div>

          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">
                128
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Tests passing
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">
                7/7
              </div>
              <div className="text-xs text-gray-400 mt-1">
                CI gates passing
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">
                0
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Known vulnerabilities
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="text-2xl font-bold text-white">
                2/2
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Readiness dependencies
              </div>
            </div>

          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">

            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-gray-200">
                Production pipeline
              </span>

              <span className="text-xs text-gray-500">
                GitHub Actions → Render
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">

              <div>
                <div className="text-xs text-gray-500 mb-1">
                  Readiness
                </div>

                <div className="text-xl font-bold text-orange-400">
                  DB + Redis
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-500 mb-1">
                  Deployment verification
                </div>

                <div className="text-xl font-bold text-amber-400">
                  Exact SHA
                </div>
              </div>

            </div>

          </div>

          <div className="flex flex-wrap gap-2 pt-4">
            {[
              'Python',
              'FastAPI',
              'PostgreSQL',
              'SQLAlchemy',
              'Redis',
              'Alembic',
              'Stripe',
              'Resend',
              'Docker',
              'Pytest',
              'GitHub Actions',
              'Render',
            ].map((tech) => (
              <span
                key={tech}
                className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl font-medium text-gray-300 group-hover:border-orange-500/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-4 relative z-10">
            <a
              href="https://sm1le-fitnes-website-pojo.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-orange-500 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-orange-400 transition"
            >
              <span>Live Preview</span>
              <ExternalLink size={16} />
            </a>
          </div>

        </div>

        <div className="w-full lg:w-[45%] h-64 sm:h-80 lg:h-96 rounded-2xl bg-gradient-to-tr from-orange-950/30 to-amber-900/20 border border-orange-500/10 flex flex-col justify-center items-center p-6 text-center group-hover:border-orange-500/20 transition-colors">

          <Terminal className="text-orange-400/70 mb-4" size={48} />

          <h4 className="text-lg font-bold">
            sm1le-fitnes-website-pojo.onrender.com
          </h4>

          <p className="text-sm text-gray-400 mt-2">
            Production fitness platform
          </p>

        </div>

      </div>

    </section>
  );
}