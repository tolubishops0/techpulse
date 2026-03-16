// app/page.tsx
// 100% SSG — no "use client", no hooks, no data fetching
// Pure static HTML generated at build time

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/NavBar";
import { features, stats, steps, testimonials } from "@/lib/db";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#FF6B6B]/30">
      <Navbar showSearch={false} showActions={false} activeLink="home" />

      <main className="container mx-auto px-4 pb-24">
        {/* ── Hero ── */}
        <section className="py-24 md:py-32 flex flex-col items-center text-center max-w-4xl mx-auto">
          <Badge
            variant="outline"
            className="mb-8 border-[#FF6B6B]/30 text-[#FF6B6B] px-3 py-1 text-sm bg-[#FF6B6B]/10"
          >
            TechPulse 2.0 is now live
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6">
            The pulse of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-orange-400">
              modern tech
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 mb-10 max-w-2xl font-light">
            Breaking stories, deep analysis, and developer tools — delivered
            daily.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-[#FF6B6B] text-white hover:bg-[#FF6B6B]/90 h-12 px-8 text-base"
            >
              Read Latest News
            </Button>
            <Button
              size="lg"
              variant="outlinen"
              className="h-12 px-8 text-base border-white/20 hover:bg-white/10 hover:text-white"
            >
              Sign In
            </Button>
          </div>

          <div className="w-full mt-24 aspect-[21/9] rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl shadow-[#FF6B6B]/5">
            <img
              src="/images/tech-hero.png"
              alt="TechPulse Hero"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="mb-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-10 px-4 bg-[#0a0a0a] text-center"
              >
                <span className="text-4xl font-bold tracking-tight text-white mb-2">
                  {stat.value}
                </span>
                <span className="text-sm text-white/40">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Features ── */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Everything a developer needs
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Built by developers, for developers. No fluff, no paywalls, no
              noise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              How it works
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Get up and running in minutes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            {steps.map((step) => (
              <div
                key={step.step}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-[#FF6B6B]">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-semibold text-white text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Loved by developers
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Don't take our word for it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col gap-4"
              >
                <p className="text-white/70 text-sm leading-relaxed flex-1">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-9 h-9 rounded-full bg-[#FF6B6B]/20 border border-[#FF6B6B]/30 flex items-center justify-center text-[#FF6B6B] text-xs font-bold shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{t.name}</p>
                    <p className="text-xs text-white/40">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section>
          <div className="rounded-2xl border border-[#FF6B6B]/20 bg-gradient-to-br from-[#FF6B6B]/10 to-transparent p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Stay ahead of the curve
            </h2>
            <p className="text-white/50 text-lg mb-8 max-w-lg mx-auto">
              Join thousands of developers who read TechPulse every day.
            </p>
            <Button
              size="lg"
              className="bg-[#FF6B6B] text-white hover:bg-[#FF6B6B]/90 h-12 px-10 text-base"
            >
              Start Reading — It's Free
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
