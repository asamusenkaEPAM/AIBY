import { useEffect, useRef, useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';

const navigation = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Events', '#events'],
  ['Topics', '#topics'],
  ['Contact', '#contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);
  const navigationTimer = useRef(null);

  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      window.clearTimeout(navigationTimer.current);
    };
  }, []);

  const followMobileLink = (event, href) => {
    event.preventDefault();
    setOpen(false);
    menuButton.current?.focus({ preventScroll: true });
    window.clearTimeout(navigationTimer.current);
    navigationTimer.current = window.setTimeout(() => {
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', href);
    }, 320);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-ivory/95 backdrop-blur-lg">
      <div className="page-shell flex min-h-[76px] items-center justify-between gap-7 lg:min-h-[82px]">
        <a href="#home" className="group flex items-center gap-3" aria-label="Budva | English Conversation Club home">
          <span className="grid size-10 place-items-center rounded-full border border-navy/30 transition-colors group-hover:border-terracotta group-hover:text-terracotta">
            <MessageCircle aria-hidden="true" className="size-[18px]" strokeWidth={1.6} />
          </span>
          <span className="font-display text-[16px] font-semibold leading-[1.02] tracking-[-0.02em]">
            Budva | English{' '}<br />Conversation Club
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a key={href} href={href} className="nav-link">{label}</a>
          ))}
        </nav>

        <a className="button-primary hidden min-h-11 px-7 lg:inline-flex" href="https://t.me/EnglishSpeakingClubBudva" target="_blank" rel="noreferrer">
          Join Us
        </a>

        <button
          ref={menuButton}
          className="grid size-12 place-items-center rounded-full border border-navy/20 bg-cream lg:hidden"
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`page-shell overflow-hidden transition-[max-height,opacity,padding] duration-300 lg:hidden ${open ? 'max-h-[430px] pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
        inert={open ? undefined : ''}
      >
        <div className="rounded-3xl border border-navy/10 bg-cream p-4 shadow-soft">
          {navigation.map(([label, href]) => (
            <a key={href} href={href} className="block rounded-2xl px-4 py-3.5 text-sm font-semibold hover:bg-peach" onClick={(event) => followMobileLink(event, href)}>{label}</a>
          ))}
          <a className="button-primary mt-3 flex w-full" href="https://t.me/EnglishSpeakingClubBudva" target="_blank" rel="noreferrer">Join Us</a>
        </div>
      </nav>
    </header>
  );
}
