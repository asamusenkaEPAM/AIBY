import { CalendarDays, MessagesSquare, TrendingUp, UsersRound } from 'lucide-react';

const features = [
  [UsersRound, 'Friendly Community', 'Meet locals, newcomers, and travellers.'],
  [MessagesSquare, 'Interesting Topics', 'Bring an idea or start with a conversation card.'],
  [CalendarDays, 'Online & Offline', 'Follow updates online, then meet face to face.'],
  [TrendingUp, 'All Levels Welcome', 'Listen, try, make mistakes, and grow naturally.'],
];

export default function FeatureGrid() {
  return (
    <section className="page-shell relative z-20 pb-24 pt-8 lg:-mt-3" aria-label="Club highlights">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {features.map(([Icon, title, description], index) => (
          <article key={title} className="reveal feature-card" style={{ transitionDelay: `${index * 70}ms` }}>
            <span className="grid size-12 place-items-center rounded-2xl border border-navy/20 text-ocean"><Icon className="size-5" strokeWidth={1.6} aria-hidden="true" /></span>
            <h2 className="mt-6 font-display text-[1.4rem] leading-tight">{title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-navy/60">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
