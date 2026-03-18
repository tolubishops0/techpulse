import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/db";
import { NavbarWrapper } from "@/components/NavWrapper";

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#FF6B6B]/30 pb-24">
      <NavbarWrapper showSearch={false} showActions activeLink="faq" />

      <main className="container mx-auto px-4 pt-16 md:pt-20 max-w-3xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-white/50 font-light">
            Everything you need to know about TechPulse.
          </p>
        </div>

        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl shadow-black/50">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className={`border-white/10 ${i === faqs.length - 1 ? "border-b-0" : ""}`}
              >
                <AccordionTrigger className="text-lg hover:text-[#FF6B6B] transition-colors hover:no-underline font-medium py-5 [&[data-state=open]]:text-[#FF6B6B]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/60 text-base leading-relaxed pb-6 font-light">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm">
            Still have questions?{" "}
            <a href="#" className="text-[#FF6B6B] hover:underline">
              Contact our support team.
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
