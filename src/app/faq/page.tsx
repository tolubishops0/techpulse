import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navbar } from "@/components/NavBar";

const faqs = [
  {
    q: "Is TechPulse free to read?",
    a: "Yes, our core news feed and standard articles are completely free. We believe critical technology news should be accessible to all developers. We do offer a Pro subscription for deep-dive architectural analysis and premium courses.",
  },
  {
    q: "Do you have a light mode?",
    a: "TechPulse is designed as a dark-mode first experience, optimized for developer environments and reduced eye strain. A light mode is currently in beta and available to Pro subscribers in their account settings.",
  },
  {
    q: "How do bookmarks work?",
    a: "Once you create a free account, you can bookmark any article by clicking the ribbon icon. Bookmarks are synced across all your devices and can be organized into custom folders in your Dashboard.",
  },
  {
    q: "Can I access TechPulse via RSS?",
    a: "Absolutely. We provide comprehensive RSS feeds. You can subscribe to the global firehose at /rss/all, or subscribe to specific categories like /rss/ai or /rss/web-dev.",
  },
  {
    q: "How are the Trending articles selected?",
    a: "Our trending algorithm is based on a mix of recent engagement (likes, comments, read time) and recency. We heavily weight deep reading over superficial clicks to ensure high-quality content surfaces to the top.",
  },
  {
    q: "Can I leave comments on articles?",
    a: "Yes — comments are available to all registered users. We have a community moderation system and a code of conduct to keep discussions technical, respectful, and on-topic.",
  },
  {
    q: "Do you offer API access?",
    a: "Yes, Pro subscribers get access to our read-only GraphQL API. It allows you to programmatically fetch articles, search our archives, and integrate TechPulse content into your internal team dashboards.",
  },
  {
    q: "How do I cancel my Pro subscription?",
    a: "You can cancel anytime from your account settings under Billing. Your Pro access remains active until the end of the current billing period. No questions asked.",
  },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#FF6B6B]/30 pb-24">
      <Navbar showSearch={false} showActions activeLink="faq" />

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


