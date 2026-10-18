import { Check } from 'lucide-react';

const promises = [
  'No tests or formal lessons',
  'Space to listen before you speak',
  'A different mix of people every week',
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-peach py-16 lg:py-20">
      <div className="page-shell grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="reveal">
          <h2 className="eyebrow">About the club</h2>
        </div>
        <div className="reveal" style={{ transitionDelay: '100ms' }}>
          <p className="text-xl leading-[1.75] text-navy/72">A place in Budva, Montenegro, where locals, newcomers, and visitors share stories, ask good questions, and become more confident one conversation at a time.</p>
          <ul className="mt-9 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {promises.map((promise) => <li key={promise} className="flex gap-3 text-sm font-semibold leading-snug"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-terracotta/25"><Check className="size-3.5" aria-hidden="true" /></span>{promise}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
