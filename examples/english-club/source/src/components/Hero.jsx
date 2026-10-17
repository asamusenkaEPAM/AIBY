function ConversationDoodle() {
  return (
    <svg className="absolute -right-2 -top-5 hidden h-20 w-20 text-terracotta md:block lg:-right-8" viewBox="0 0 88 88" fill="none" aria-hidden="true">
      <path d="M45 12 42 2M61 17l6-9M71 31l10-3M22 22l-7-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M58 27c-12 4-17 15-12 26 4 8 13 12 22 9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="page-shell grid items-center gap-10 pb-5 pt-10 lg:min-h-[450px] lg:grid-cols-[0.82fr_1.18fr] lg:gap-0 lg:py-6">
      <div className="reveal relative z-10 lg:pl-3 lg:pr-10">
        <div className="relative w-fit">
          <h1 className="hero-title font-display font-medium leading-[0.96] tracking-[-0.048em] text-navy">
            <span className="block whitespace-nowrap">Real People</span>
            <span className="block whitespace-nowrap">Real Conversations</span>
            <span className="block whitespace-nowrap">A Brighter You</span>
          </h1>
          <ConversationDoodle />
        </div>
        <p className="mt-7 max-w-[420px] text-lg leading-relaxed text-navy/68">
          Practice English. Meet new people. Explore the world together.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <a className="button-primary" href="https://t.me/EnglishSpeakingClubBudva" target="_blank" rel="noreferrer">
            Join the Club
          </a>
        </div>
      </div>

      <div className="reveal relative" style={{ transitionDelay: '100ms' }}>
        <div className="absolute -left-6 -top-6 size-24 rounded-full bg-terracotta/25 blur-2xl" aria-hidden="true" />
        <div className="hero-image-frame relative h-[410px] overflow-hidden shadow-lift sm:h-[500px] lg:h-[420px]">
          <img
            src="./images/budva-old-town-hero.webp"
            alt="Budva Old Town with its stone walls, terracotta roofs, church tower, and the Adriatic Sea"
            className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
            width="1600"
            height="1000"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
