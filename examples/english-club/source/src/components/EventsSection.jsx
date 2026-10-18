import { ArrowUpRight, CalendarDays, Clock3, MapPin } from 'lucide-react';
import { fallbackAnnouncement } from '../hooks/useAnnouncement';

export default function EventsSection({ announcement }) {
  const schedule = announcement.schedule || fallbackAnnouncement.schedule;
  const venue = announcement.venue || fallbackAnnouncement.venue;

  return (
    <section id="events" className="page-shell py-24 lg:py-32">
      <div className="reveal max-w-4xl">
        <p className="eyebrow">Latest club update</p>
      </div>

      <article className="reveal mt-8 overflow-hidden rounded-[32px] bg-ocean p-7 text-cream shadow-soft sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <div className="flex items-start justify-between gap-5"><span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em]"><span className="size-2 rounded-full bg-terracotta" aria-hidden="true" />Live from Telegram</span><CalendarDays className="size-7 text-terracotta" strokeWidth={1.5} aria-hidden="true" /></div>
            <h3 className="mt-10 max-w-xl font-display text-4xl leading-tight sm:text-5xl">Next conversation night</h3>
            <p className="mt-5 max-w-xl whitespace-pre-line text-base leading-relaxed text-cream/75">{announcement.message}</p>
          </div>

          <div className="grid content-end gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <div className="flex items-start gap-4 rounded-[22px] border border-white/15 bg-white/8 p-5 backdrop-blur-sm">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-terracotta"><Clock3 className="size-5" strokeWidth={1.6} aria-hidden="true" /></span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-terracotta">Date &amp; time</p>
                <p className="mt-1 font-display text-xl leading-tight text-cream sm:text-2xl">{schedule}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-[22px] border border-white/15 bg-white/8 p-5 backdrop-blur-sm">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-terracotta"><MapPin className="size-5" strokeWidth={1.6} aria-hidden="true" /></span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-terracotta">Location</p>
                <p className="mt-1 font-display text-xl leading-tight text-cream sm:text-2xl">{venue}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-white/15 pt-7">
          {announcement.locationUrl && (
            <a className="inline-flex min-h-12 items-center gap-2 rounded-full bg-cream px-6 text-sm font-bold text-navy transition hover:-translate-y-0.5" href={announcement.locationUrl} target="_blank" rel="noreferrer"><MapPin className="size-4" aria-hidden="true" />Open location</a>
          )}
          <a className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/30 px-6 text-sm font-bold text-cream transition hover:-translate-y-0.5 hover:bg-white/10" href={announcement.postUrl} target="_blank" rel="noreferrer">View in Telegram <ArrowUpRight className="size-4" /></a>
        </div>
      </article>
    </section>
  );
}
