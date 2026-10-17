import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Shuffle, Sparkles } from 'lucide-react';
import conversationTopics from '../data/conversationTopics';

const STORAGE_KEY = 'english-club-topic-index';

function savedTopicIndex() {
  if (typeof window === 'undefined') return 0;

  try {
    const storedIndex = Number.parseInt(window.localStorage.getItem(STORAGE_KEY), 10);
    return Number.isInteger(storedIndex) && storedIndex >= 0 && storedIndex < conversationTopics.length
      ? storedIndex
      : 0;
  } catch {
    return 0;
  }
}

export default function TopicsSection() {
  const [currentIndex, setCurrentIndex] = useState(savedTopicIndex);
  const [direction, setDirection] = useState('next');
  const [dragOffset, setDragOffset] = useState(0);
  const [isTouching, setIsTouching] = useState(false);
  const touchStart = useRef(null);
  const topic = conversationTopics[currentIndex];

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, String(currentIndex));
    } catch {
      // The deck still works when storage is disabled.
    }
  }, [currentIndex]);

  const move = (step) => {
    setDirection(step > 0 ? 'next' : 'previous');
    setCurrentIndex((index) => (index + step + conversationTopics.length) % conversationTopics.length);
  };

  const surpriseMe = () => {
    let nextIndex = currentIndex;
    while (nextIndex === currentIndex) {
      nextIndex = Math.floor(Math.random() * conversationTopics.length);
    }
    setDirection('random');
    setCurrentIndex(nextIndex);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      move(-1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      move(1);
    }
  };

  const handleTouchStart = (event) => {
    if (event.touches.length !== 1 || event.target.closest?.('button, a')) {
      touchStart.current = null;
      return;
    }

    const touch = event.touches[0];
    touchStart.current = touch ? { x: touch.clientX, y: touch.clientY } : null;
    setDragOffset(0);
    setIsTouching(Boolean(touch));
  };

  const resetTouchFeedback = () => {
    touchStart.current = null;
    setDragOffset(0);
    setIsTouching(false);
  };

  const handleTouchMove = (event) => {
    if (!touchStart.current || event.touches.length !== 1) return;

    const touch = event.touches[0];
    const distanceX = touch.clientX - touchStart.current.x;
    const distanceY = touch.clientY - touchStart.current.y;

    if (Math.abs(distanceY) > 12 && Math.abs(distanceY) > Math.abs(distanceX)) {
      resetTouchFeedback();
      return;
    }

    const softenedOffset = Math.sign(distanceX) * Math.min(18, Math.abs(distanceX) * 0.18);
    setDragOffset(softenedOffset);
  };

  const handleTouchEnd = (event) => {
    if (!touchStart.current) return;

    const touch = event.changedTouches[0];
    const distanceX = (touch?.clientX ?? touchStart.current.x) - touchStart.current.x;
    const distanceY = (touch?.clientY ?? touchStart.current.y) - touchStart.current.y;
    resetTouchFeedback();

    const isDeliberateHorizontalSwipe = Math.abs(distanceX) >= 90
      && Math.abs(distanceX) > Math.abs(distanceY) * 1.5;

    if (!isDeliberateHorizontalSwipe) return;
    move(distanceX < 0 ? 1 : -1);
  };

  return (
    <section id="topics" className="bg-cream py-24 lg:py-32">
      <div className="page-shell">
        <div className="reveal grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <p className="eyebrow">Conversation topics</p>
            <h2 className="section-title mt-6 max-w-4xl">Pick a card. Start somewhere unexpected.</h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-navy/65 lg:justify-self-end">
            One hundred conversation starters for the table. Each card gives you a theme and three easy ways into the discussion.
          </p>
        </div>

        <div
          className="reveal mt-12 outline-none"
          role="group"
          aria-label="Conversation topic deck"
          aria-roledescription="carousel"
          tabIndex="0"
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={resetTouchFeedback}
        >
          <article
            className={`topic-card ${isTouching ? 'topic-card-touching' : ''} relative overflow-hidden rounded-[34px] bg-ocean p-6 text-cream shadow-lift sm:p-9 lg:p-12`}
            style={{ '--topic-drag-x': `${dragOffset}px` }}
          >
            <div className="absolute -right-16 -top-20 size-64 rounded-full border border-white/10" aria-hidden="true" />
            <div className="absolute -bottom-36 -left-20 size-72 rounded-full bg-terracotta/10 blur-2xl" aria-hidden="true" />

            <div
              key={currentIndex}
              className={`topic-card-content topic-card-content-${direction}`}
              aria-live="polite"
            >
              <div className="relative flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em]">
                  <Sparkles className="size-3.5 text-terracotta" aria-hidden="true" />
                  {topic.category}
                </span>
                <span className="text-sm font-bold tabular-nums text-cream/65">
                  {String(currentIndex + 1).padStart(2, '0')} / {conversationTopics.length}
                </span>
              </div>

              <div className="relative mt-10 max-w-5xl sm:mt-14">
                <h3 className="font-display text-[clamp(2.5rem,6vw,5.7rem)] font-medium leading-[0.98] tracking-[-0.04em]">
                  {topic.title}
                </h3>
                <ol className="mt-10 grid gap-3 md:grid-cols-3">
                  {topic.prompts.map((prompt, index) => (
                    <li key={prompt} className="flex min-h-28 gap-4 rounded-[22px] border border-white/15 bg-white/8 p-5 backdrop-blur-sm sm:p-6">
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-terracotta text-xs font-bold text-navy">
                        {index + 1}
                      </span>
                      <p className="pt-1 text-base font-medium leading-relaxed text-cream/85">{prompt}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="relative mt-8 h-1.5 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
              <div
                className="h-full rounded-full bg-terracotta transition-[width] duration-500"
                style={{ width: `${((currentIndex + 1) / conversationTopics.length) * 100}%` }}
              />
            </div>

            <div className="relative mt-7 flex flex-wrap items-center gap-3">
              <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-5 text-sm font-bold transition hover:-translate-y-0.5 hover:bg-white/10" type="button" onClick={() => move(-1)} aria-label="Previous conversation topic">
                <ArrowLeft className="size-4" aria-hidden="true" />
                Previous
              </button>
              <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cream px-5 text-sm font-bold text-navy transition hover:-translate-y-0.5" type="button" onClick={surpriseMe}>
                <Shuffle className="size-4 text-terracotta" aria-hidden="true" />
                Surprise me
              </button>
              <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-5 text-sm font-bold transition hover:-translate-y-0.5 hover:bg-white/10" type="button" onClick={() => move(1)} aria-label="Next conversation topic">
                Next
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
              <span className="ml-auto hidden text-xs font-medium text-cream/50 md:block">Use ← → keys or swipe</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
