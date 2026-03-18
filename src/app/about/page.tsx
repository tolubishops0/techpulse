import { Badge } from "@/components/ui/badge";
import { UserAvatar } from "@/components/UserAvatar";
import { team } from "@/lib/db";
import { NavbarWrapper } from "@/components/NavWrapper";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#FF6B6B]/30 pb-24">
      <NavbarWrapper showSearch={false} showActions activeLink="about" />

      <main className="container mx-auto px-4 pt-16 md:pt-24 max-w-4xl">
        <div className="max-w-2xl">
          <Badge
            variant="outline"
            className="mb-6 text-[#FF6B6B] border-[#FF6B6B]/30 bg-[#FF6B6B]/5"
          >
            Our Mission
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">
            About TechPulse
          </h1>
          <div className="space-y-6 text-white/70 text-lg font-light leading-relaxed">
            <p>
              Founded in 2026, TechPulse was born from a simple observation: the
              technology ecosystem was moving faster than traditional media
              could accurately cover it. We were tired of reading shallow takes
              on deep technical topics, and equally tired of reading dry
              changelogs without understanding the broader industry context.
            </p>
            <p>
              We built TechPulse to be the signal in the noise. Our editorial
              team consists of former engineers, designers, and product leaders
              who understand the nuances of the technologies they write about.
              We don't just report that a new framework was released — we break
              down its architecture, analyze its tradeoffs, and contextualize
              what it means for the future of development.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-20" />

        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center md:text-left">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center md:items-start text-center md:text-left group"
              >
                <div className="mb-6 border-2 border-transparent group-hover:border-[#FF6B6B] rounded-full transition-colors">
                  <UserAvatar name={member.name} size="lg" />
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-[#FF6B6B] transition-colors">
                  {member.name}
                </h3>
                <p className={`text-sm font-medium mb-4 ${member.roleColor}`}>
                  {member.role}
                </p>
                <p className="text-sm text-white/60 leading-relaxed font-light">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
