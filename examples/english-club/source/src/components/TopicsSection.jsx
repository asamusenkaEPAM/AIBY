import { BookOpen, Coffee, Compass, Film, Globe2, Sparkles } from 'lucide-react';

const topics = [
  [Compass, 'Travel stories', 'A place that changed the way you see the world.'],
  [Globe2, 'Culture & home', 'The traditions we keep and the ones we discover.'],
  [Coffee, 'Everyday life', 'Small rituals, useful habits, and local discoveries.'],
  [Film, 'Films & music', 'Stories and songs worth recommending to the table.'],
  [BookOpen, 'Books & ideas', 'A thought you cannot stop thinking about.'],
  [Sparkles, 'Big questions', 'Curiosity, choices, friendship, and what comes next.'],
];

export default function TopicsSection() {
  return (
    <section id="topics" className="bg-cream py-24 lg:py-32">
      <div className="page-shell">
        <div className="reveal max-w-3xl"><p className="eyebrow">Conversation topics</p><h2 className="section-title mt-6">There is always something worth talking about.</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/65">These are examples, not a syllabus. Follow the conversation, choose a card, or bring the question you have been saving for the right table.</p></div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-[30px] border border-navy/10 bg-navy/10 md:grid-cols-2 xl:grid-cols-3">
          {topics.map(([Icon, title, description], index) => (
            <article key={title} className="reveal group bg-cream p-7 transition-colors hover:bg-peach sm:p-8" style={{ transitionDelay: `${index * 55}ms` }}>
              <Icon className="size-6 text-terracotta transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-10 font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/60">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
