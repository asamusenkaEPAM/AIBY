const steps = [
  ['01', 'Open Telegram', 'Find the latest announcement with the exact venue and any updates.'],
  ['02', 'Come as you are', 'No registration form, placement test, or perfect introduction required.'],
  ['03', 'Start with hello', 'Listen, join a topic, and let the next sentence come naturally.'],
];

export default function HowItWorks() {
  return (
    <section className="page-shell py-24 lg:py-32">
      <div className="reveal text-center"><p className="eyebrow justify-center">How it works</p><h2 className="section-title mx-auto mt-6 max-w-3xl">Three small steps to a much bigger conversation.</h2></div>
      <div className="relative mt-14 grid gap-5 md:grid-cols-3">
        <div className="absolute left-[16%] right-[16%] top-7 hidden border-t border-dashed border-navy/20 md:block" aria-hidden="true" />
        {steps.map(([number, title, description], index) => (
          <article key={number} className="reveal relative rounded-[26px] border border-navy/10 bg-ivory p-7 text-center" style={{ transitionDelay: `${index * 90}ms` }}>
            <span className="relative mx-auto grid size-14 place-items-center rounded-full border border-navy/15 bg-cream font-display text-lg shadow-soft">{number}</span>
            <h3 className="mt-7 font-display text-2xl">{title}</h3>
            <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-navy/60">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
