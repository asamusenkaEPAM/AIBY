import { useEffect, useState } from 'react';
import { ArrowUpRight, CalendarDays, Clock3, MapPin, MessagesSquare } from 'lucide-react';

const telegramChannel = 'https://t.me/EnglishSpeakingClubBudva';
const fallbackAnnouncement = {
  message: 'Come for a drink, take a seat, and join whatever conversation feels right. The exact place is posted in Telegram each week.',
  postUrl: telegramChannel,
  schedule: 'Wednesday · 19:00',
  venue: 'Budva · venue in Telegram',
};

export default function EventsSection() {
  const [announcement, setAnnouncement] = useState(fallbackAnnouncement);

  useEffect(() => {
    let active = true;

    fetch('./data/latest-event.json', { cache: 'no-store' })
      .then((response) => {
        if (!response.ok) throw new Error('Latest event is unavailable');
        return response.json();
      })
      .then((latestEvent) => {
        if (active && latestEvent?.message && latestEvent?.postUrl) {
          setAnnouncement({ ...fallbackAnnouncement, ...latestEvent });
        }
      })
      .catch(() => {
        // Keep the useful weekly fallback when Telegram is temporarily unavailable.
      });

    return () => {
      active = false;
    };
  }, []);

  const details = [
    [Clock3, 'Announced for', announcement.schedule || fallbackAnnouncement.schedule],
    [MapPin, 'Where', announcement.venue || fallbackAnnouncement.venue],
    [MessagesSquare, 'Updates', 'Automatically from Telegram'],
  ];

  return (
    <section id="events" className="page-shell py-24 lg:py-32">
      <div className="reveal flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
        <div><p className="eyebrow">Latest club update</p><h2 className="section-title mt-6 max-w-3xl">The latest details, straight from the club.</h2></div>
        <a className="text-link" href={announcement.postUrl} target="_blank" rel="noreferrer">Latest announcement <ArrowUpRight className="size-4" /></a>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="reveal overflow-hidden rounded-[32px] bg-ocean p-8 text-cream shadow-soft sm:p-10 lg:p-12">
          <div className="flex items-start justify-between gap-5"><span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em]"><span className="size-2 rounded-full bg-terracotta" aria-hidden="true" />Live from Telegram</span><CalendarDays className="size-7 text-terracotta" strokeWidth={1.5} aria-hidden="true" /></div>
          <h3 className="mt-12 max-w-xl font-display text-4xl leading-tight sm:text-5xl">{announcement.venue || 'English Conversation Night'}</h3>
          <p className="mt-5 max-w-xl whitespace-pre-line text-base leading-relaxed text-cream/75">{announcement.message}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            {announcement.locationUrl && (
              <a className="inline-flex min-h-12 items-center gap-2 rounded-full bg-cream px-6 text-sm font-bold text-navy transition hover:-translate-y-0.5" href={announcement.locationUrl} target="_blank" rel="noreferrer"><MapPin className="size-4" aria-hidden="true" />Open location</a>
            )}
            <a className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/30 px-6 text-sm font-bold text-cream transition hover:-translate-y-0.5 hover:bg-white/10" href={announcement.postUrl} target="_blank" rel="noreferrer">View in Telegram <ArrowUpRight className="size-4" /></a>
          </div>
        </article>

        <div className="grid gap-5">
          {details.map(([Icon, label, value], index) => (
            <article key={label} className="reveal flex items-center gap-5 rounded-[26px] border border-navy/10 bg-cream p-6 shadow-soft sm:p-7" style={{ transitionDelay: `${index * 80}ms` }}>
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-peach text-ocean"><Icon className="size-5" strokeWidth={1.6} aria-hidden="true" /></span>
              <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-terracotta">{label}</p><p className="mt-1 font-display text-2xl leading-tight">{value}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
