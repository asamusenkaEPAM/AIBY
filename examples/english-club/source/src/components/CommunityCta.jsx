import { ArrowUpRight, MessageCircle } from 'lucide-react';

export default function CommunityCta() {
  return (
    <section id="contact" className="page-shell pb-24 lg:pb-32">
      <div className="reveal relative overflow-hidden rounded-[36px] bg-navy px-6 py-16 text-center text-cream shadow-lift sm:px-12 lg:py-24">
        <div className="absolute -left-20 -top-24 size-72 rounded-full border border-cream/10" aria-hidden="true" />
        <div className="absolute -bottom-28 -right-16 size-80 rounded-full bg-terracotta/20 blur-3xl" aria-hidden="true" />
        <MessageCircle className="relative mx-auto size-9 text-terracotta" strokeWidth={1.4} aria-hidden="true" />
        <p className="relative mt-7 text-xs font-bold uppercase tracking-[0.2em] text-terracotta">Join our community</p>
        <h2 className="relative mx-auto mt-5 max-w-4xl font-display text-5xl leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">The best conversation is the one you decide to join.</h2>
        <p className="relative mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/65">Open Telegram for the latest meetup details, say hello, and we will see you in Budva, Montenegro.</p>
        <a className="relative mt-9 inline-flex min-h-14 items-center gap-2 rounded-full bg-terracotta px-8 text-sm font-bold text-navy transition hover:-translate-y-1 hover:bg-[#efb87d]" href="https://t.me/EnglishSpeakingClubBudva" target="_blank" rel="noreferrer">Join on Telegram <ArrowUpRight className="size-4" /></a>
      </div>
    </section>
  );
}
