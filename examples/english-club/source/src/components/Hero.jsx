import { ArrowUpRight } from 'lucide-react';

function SunDoodle() {
  return (
    <svg className="absolute -right-5 top-5 hidden h-24 w-24 text-terracotta md:block" viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <path d="M50 12V2M50 98V88M12 50H2M98 50H88M23 23l-8-8M85 85l-8-8M77 23l8-8M15 85l8-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M69 50c0 10.5-8.5 19-19 19s-19-8.5-19-19 8.5-19 19-19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="page-shell grid min-h-[760px] items-center gap-12 py-14 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16 lg:py-20">
      <div className="reveal relative z-10 lg:py-10">
        <p className="eyebrow">English meetups in Budva</p>
        <div className="relative mt-7">
          <h1 className="max-w-[650px] font-display text-[clamp(3.75rem,6.4vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.055em] text-navy">
            Real People<br />Real Conversations<br /><span className="italic text-ocean">A Brighter You</span>
          </h1>
          <SunDoodle />
        </div>
        <p className="mt-8 max-w-lg text-lg leading-relaxed text-navy/68 md:text-xl">
          Practice English. Meet new people. Explore the world together.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a className="button-primary" href="https://t.me/EnglishSpeakingClubBudva" target="_blank" rel="noreferrer">
            Join the Club <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <a className="button-secondary" href="#events">See next meetup</a>
        </div>
        <p className="mt-6 text-sm font-medium text-navy/55">All levels welcome · come on your own or bring a friend</p>
      </div>

      <div className="reveal relative lg:min-h-[620px]" style={{ transitionDelay: '100ms' }}>
        <div className="absolute -left-7 -top-7 size-28 rounded-full bg-terracotta/30 blur-2xl" aria-hidden="true" />
        <div className="hero-image-frame relative h-[480px] overflow-hidden shadow-lift sm:h-[590px] lg:h-[650px]">
          <img
            src="./images/perast-hero.webp"
            alt="Perast waterfront and the mountains of the Bay of Kotor in warm afternoon light"
            className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.025]"
            width="1600"
            height="1000"
            fetchPriority="high"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-navy/60 to-transparent p-6 pt-28 text-cream sm:p-8">
            <div><p className="text-xs font-bold uppercase tracking-[0.2em]">Budva, Montenegro</p><p className="mt-1 font-display text-2xl">English by the Adriatic</p></div>
            <span className="rounded-full border border-white/35 bg-white/15 px-4 py-2 text-xs font-semibold backdrop-blur-md">Weekly</span>
          </div>
        </div>
        <div className="absolute -bottom-5 -left-4 rounded-2xl border border-navy/10 bg-cream px-5 py-4 shadow-soft sm:left-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-terracotta">Next meetup</p>
          <p className="mt-1 font-display text-xl">Wednesday · 19:00</p>
        </div>
      </div>
    </section>
  );
}
