export const supportedLocales = ['en', 'ru', 'me'];

const translations = {
  en: {
    code: 'EN', languageName: 'English', htmlLang: 'en',
    skip: 'Skip to content',
    nav: [['Home', '#home'], ['About', '#about'], ['Events', '#events'], ['Topics', '#topics'], ['Contact', '#contact']],
    joinUs: 'Join Us', joinClub: 'Join the Club',
    menuOpen: 'Open navigation menu', menuClose: 'Close navigation menu', mainNav: 'Main navigation', mobileNav: 'Mobile navigation', language: 'Language',
    hero: { line1: 'Speak English. Meet People.', line2: 'Feel at Home in Budva.', next: 'Next meetup', checking: 'Checking the latest update…', soon: 'New meetup details coming soon', automatic: 'The next time and location will appear here automatically.', check: 'Check Telegram', openLocation: 'Open location' },
    features: ['Friendly Community', 'Free to Join', 'In-Person Meetups', 'All Levels Welcome'], highlights: 'Club highlights',
    about: { label: 'About the club', title: 'A social evening where English happens naturally.', text: 'A place in Budva, Montenegro, where locals, newcomers, and visitors share stories, ask good questions, and become more confident one conversation at a time.', promises: ['No tests or formal lessons', 'Space to listen before you speak', 'A different mix of people every week'] },
    events: { label: 'Latest club update', checking: 'Checking Telegram', looking: 'Looking for the latest meetup…', updates: 'Updates from Telegram', soon: 'Next meetup details coming soon', soonText: 'The next date and venue will appear here as soon as they are announced in Telegram.', live: 'Live from Telegram', next: 'Next conversation night', date: 'Date & time', location: 'Location', openLocation: 'Open location', view: 'View in Telegram', check: 'Check Telegram' },
    topics: { label: 'Conversation topics', title: 'Pick a card. Start somewhere unexpected.', text: 'One hundred conversation starters for the table. Each card gives you a theme and three easy ways into the discussion.', deck: 'Conversation topic deck', fullscreen: 'Open topic in full screen', closeFullscreen: 'Close full-screen topic', previous: 'Previous', next: 'Next', surprise: 'Surprise me', hint: 'Use ← → keys or swipe', dialog: 'Full-screen conversation topic' },
    how: { label: 'How it works', title: 'Three small steps to a much bigger conversation.', steps: [['Open Telegram', 'Find the latest announcement with the exact venue and any updates.'], ['Come as you are', 'No registration form, placement test, or perfect introduction required.'], ['Start with hello', 'Listen, join a topic, and let the next sentence come naturally.']] },
    footer: { text: 'A friendly place to practice English, meet people, and feel at home in Budva, Montenegro.', tagline: 'Real people · Real conversations' },
  },
  ru: {
    code: 'RU', languageName: 'Русский', htmlLang: 'ru',
    skip: 'Перейти к содержанию',
    nav: [['Главная', '#home'], ['О клубе', '#about'], ['Встречи', '#events'], ['Темы', '#topics'], ['Контакты', '#contact']],
    joinUs: 'Присоединиться', joinClub: 'Вступить в клуб',
    menuOpen: 'Открыть меню', menuClose: 'Закрыть меню', mainNav: 'Основная навигация', mobileNav: 'Мобильная навигация', language: 'Язык',
    hero: { line1: 'Практикуйте английский. Знакомьтесь.', line2: 'Находите своих в Будве.', next: 'Следующая встреча', checking: 'Проверяем последнее объявление…', soon: 'Скоро анонсируем следующую встречу', automatic: 'Как только определимся со временем и местом, информация появится здесь.', check: 'Открыть Telegram', openLocation: 'Показать на карте' },
    features: ['Дружеская атмосфера', 'Участие бесплатно', 'Встречаемся офлайн', 'Любой уровень английского'], highlights: 'Преимущества клуба',
    about: { label: 'О клубе', title: 'Живое общение на английском — без уроков и оценок.', text: 'Мы встречаемся в Будве, чтобы местные жители, те, кто недавно переехал, и путешественники могли знакомиться, делиться историями и увереннее говорить по-английски.', promises: ['Без тестов и формальных уроков', 'Можно сначала послушать', 'Новые люди каждую неделю'] },
    events: { label: 'Новости клуба', checking: 'Проверяем Telegram', looking: 'Ищем информацию о следующей встрече…', updates: 'Обновления из Telegram', soon: 'Скоро анонсируем следующую встречу', soonText: 'Опубликуем дату и место в Telegram — и они сразу появятся здесь.', live: 'Прямо из Telegram', next: 'Ближайшая встреча клуба', date: 'Дата и время', location: 'Место', openLocation: 'Показать на карте', view: 'Открыть в Telegram', check: 'Открыть Telegram' },
    topics: { label: 'Темы для разговоров', title: 'Выберите карточку. Начните с неожиданного.', text: 'Сто тем для разговора за одним столом. В каждой карточке — основная тема и три вопроса, с которых легко начать.', deck: 'Карточки с темами для разговоров', fullscreen: 'Открыть тему на весь экран', closeFullscreen: 'Закрыть полноэкранный режим', previous: 'Назад', next: 'Дальше', surprise: 'Случайная тема', hint: 'Листайте стрелками или свайпом', dialog: 'Тема для разговора на весь экран' },
    how: { label: 'Как это работает', title: 'Три простых шага к хорошему разговору.', steps: [['Откройте Telegram', 'Там всегда есть свежий анонс с точным временем и адресом.'], ['Приходите без подготовки', 'Не нужно регистрироваться, проходить тест или заранее придумывать, что сказать.'], ['Начните с приветствия', 'Послушайте, включитесь в разговор — дальше всё пойдёт само.']] },
    footer: { text: 'Разговорный клуб в Будве, где практикуют английский, знакомятся и находят свой круг.', tagline: 'Знакомимся · Общаемся · Практикуем английский' },
  },
  me: {
    code: 'ME', languageName: 'Crnogorski', htmlLang: 'sr-ME',
    skip: 'Pređi na sadržaj',
    nav: [['Početna', '#home'], ['O klubu', '#about'], ['Događaji', '#events'], ['Teme', '#topics'], ['Kontakt', '#contact']],
    joinUs: 'Pridružite se', joinClub: 'Pridružite se klubu',
    menuOpen: 'Otvori meni', menuClose: 'Zatvori meni', mainNav: 'Glavna navigacija', mobileNav: 'Mobilna navigacija', language: 'Jezik',
    hero: { line1: 'Govorite engleski. Upoznajte ljude.', line2: 'Osjećajte se kao kod kuće u Budvi.', next: 'Sljedeće druženje', checking: 'Provjeravamo najnoviju objavu…', soon: 'Detalji novog druženja stižu uskoro', automatic: 'Vrijeme i mjesto će se ovdje pojaviti automatski.', check: 'Provjeri Telegram', openLocation: 'Otvori lokaciju' },
    features: ['Prijateljska zajednica', 'Besplatno učešće', 'Susreti uživo', 'Svi nivoi su dobrodošli'], highlights: 'Prednosti kluba',
    about: { label: 'O klubu', title: 'Veče u kojem engleski dolazi prirodno.', text: 'Mjesto u Budvi, Crna Gora, gdje lokalci, novi stanovnici i posjetioci dijele priče, postavljaju dobra pitanja i postaju sigurniji kroz svaki razgovor.', promises: ['Bez testova i formalnih časova', 'Možete prvo samo slušati', 'Drugačija ekipa svake sedmice'] },
    events: { label: 'Najnovije iz kluba', checking: 'Provjeravamo Telegram', looking: 'Tražimo detalje sljedećeg druženja…', updates: 'Novosti sa Telegrama', soon: 'Detalji novog druženja stižu uskoro', soonText: 'Datum i mjesto će se pojaviti čim budu objavljeni na Telegramu.', live: 'Direktno sa Telegrama', next: 'Sljedeće veče razgovora', date: 'Datum i vrijeme', location: 'Lokacija', openLocation: 'Otvori lokaciju', view: 'Pogledaj na Telegramu', check: 'Provjeri Telegram' },
    topics: { label: 'Teme za razgovor', title: 'Izaberite karticu. Počnite neočekivano.', text: 'Sto tema za razgovor za zajedničkim stolom. Svaka kartica donosi temu i tri jednostavna pitanja za početak.', deck: 'Kartice sa temama za razgovor', fullscreen: 'Otvori temu preko cijelog ekrana', closeFullscreen: 'Zatvori prikaz preko cijelog ekrana', previous: 'Prethodna', next: 'Sljedeća', surprise: 'Iznenadi me', hint: 'Koristite ← → ili prevucite', dialog: 'Tema za razgovor preko cijelog ekrana' },
    how: { label: 'Kako funkcioniše', title: 'Tri mala koraka do mnogo većeg razgovora.', steps: [['Otvorite Telegram', 'Pronađite najnoviju objavu sa tačnom lokacijom i svim novostima.'], ['Dođite kakvi jeste', 'Nisu potrebni prijava, test ili savršeno predstavljanje.'], ['Počnite pozdravom', 'Slušajte, uključite se u temu i pustite da sljedeća rečenica dođe prirodno.']] },
    footer: { text: 'Prijateljsko mjesto za vježbanje engleskog, upoznavanje ljudi i osjećaj doma u Budvi, Crna Gora.', tagline: 'Pravi ljudi · Pravi razgovori' },
  },
};

export function currentLocale() {
  if (typeof window === 'undefined') return 'en';
  const match = window.location.pathname.match(/\/(en|ru|me)\/?$/);
  return match?.[1] || 'en';
}

export function siteRootPath() {
  if (typeof window === 'undefined') return './';
  const directory = window.location.pathname.endsWith('/')
    ? window.location.pathname
    : window.location.pathname.replace(/[^/]*$/, '');
  return directory.replace(/(?:en|ru|me)\/$/, '');
}

export function localeHref(locale) {
  return `${siteRootPath()}${locale}/`;
}

export function assetHref(path) {
  return `${siteRootPath()}${path.replace(/^\//, '')}`;
}

export function getCopy(locale = currentLocale()) {
  return translations[locale] || translations.en;
}
