import { MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-navy/10 bg-peach">
      <div className="page-shell grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-end">
        <div><a href="#home" className="inline-flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full border border-navy/25"><MessageCircle className="size-4" strokeWidth={1.5} aria-hidden="true" /></span><span className="font-display text-xl">Budva | English Conversation Club</span></a><p className="mt-4 max-w-md text-sm leading-relaxed text-navy/55">A friendly place to practice English, meet people, and feel at home in Budva, Montenegro.</p></div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold"><a className="hover:text-ocean" href="#about">About</a><a className="hover:text-ocean" href="#events">Events</a><a className="hover:text-ocean" href="#topics">Topics</a><a className="hover:text-ocean" href="https://t.me/EnglishSpeakingClubBudva" target="_blank" rel="noreferrer">Telegram ↗</a></div>
      </div>
      <div className="page-shell flex flex-col gap-2 border-t border-navy/10 py-5 text-xs text-navy/45 sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} Budva | English Conversation Club</span><span>Real people · Real conversations</span></div>
    </footer>
  );
}
