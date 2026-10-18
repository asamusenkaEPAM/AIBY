export const supportedLocales = ['en', 'ru', 'me', 'tr'];

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
    topics: { label: 'Conversation topics', usage: 'Open a card at the meetup — the topic and three questions stay right on your phone.', title: 'Pick a card. Start somewhere unexpected.', text: 'One hundred conversation starters for the table. Each card gives you a theme and three easy ways into the discussion.', deck: 'Conversation topic deck', chooseCategory: 'Choose a category', allCategories: 'All topics', fullscreen: 'Open for the meetup', closeFullscreen: 'Close full-screen topic', previous: 'Previous', next: 'Next', surprise: 'Surprise me', anotherQuestion: 'Another question', startHere: 'Start here', hint: 'Use ← → keys or swipe', dialog: 'Full-screen conversation topic' },
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
    topics: { label: 'Темы для разговоров', usage: 'Откройте карточку на встрече — тема и три вопроса будут прямо в телефоне.', title: 'Выберите карточку. Начните с неожиданного.', text: 'Сто тем для разговора за одним столом. В каждой карточке — основная тема и три вопроса, с которых легко начать.', deck: 'Карточки с темами для разговоров', chooseCategory: 'Выбрать категорию', allCategories: 'Все темы', fullscreen: 'Открыть для встречи', closeFullscreen: 'Закрыть полноэкранный режим', previous: 'Назад', next: 'Дальше', surprise: 'Случайная тема', anotherQuestion: 'Другой вопрос', startHere: 'Начните с этого', hint: 'Листайте стрелками или свайпом', dialog: 'Тема для разговора на весь экран' },
    how: { label: 'Как это работает', title: 'Три простых шага к хорошему разговору.', steps: [['Откройте Telegram', 'Там всегда есть свежий анонс с точным временем и адресом.'], ['Приходите без подготовки', 'Не нужно регистрироваться, проходить тест или заранее придумывать, что сказать.'], ['Начните с приветствия', 'Послушайте, включитесь в разговор — дальше всё пойдёт само.']] },
    footer: { text: 'Разговорный клуб в Будве, где практикуют английский, знакомятся и находят свой круг.', tagline: 'Знакомимся · Общаемся · Практикуем английский' },
  },
  me: {
    code: 'ME', languageName: 'Crnogorski', htmlLang: 'sr-ME',
    skip: 'Pređite na sadržaj',
    nav: [['Početna', '#home'], ['O klubu', '#about'], ['Događaji', '#events'], ['Teme', '#topics'], ['Kontakt', '#contact']],
    joinUs: 'Pridružite nam se', joinClub: 'Pridružite se klubu',
    menuOpen: 'Otvorite meni', menuClose: 'Zatvorite meni', mainNav: 'Glavna navigacija', mobileNav: 'Mobilna navigacija', language: 'Jezik',
    hero: { line1: 'Vježbajte engleski. Upoznajte nove ljude.', line2: 'Pronađite svoju ekipu u Budvi.', next: 'Sljedeće druženje', checking: 'Provjeravamo najnoviju objavu…', soon: 'Uskoro objavljujemo sljedeće druženje', automatic: 'Čim dogovorimo vrijeme i mjesto, detalji će biti ovdje.', check: 'Otvorite Telegram', openLocation: 'Pogledajte na mapi' },
    features: ['Opuštena atmosfera', 'Učešće je besplatno', 'Družimo se uživo', 'Za sve nivoe engleskog'], highlights: 'Prednosti kluba',
    about: { label: 'O klubu', title: 'Razgovor na engleskom — bez časova i ocjenjivanja.', text: 'Okupljamo se u Budvi kako bi se lokalci, oni koji su se nedavno doselili i posjetioci upoznali, razmijenili priče i sigurnije govorili engleski.', promises: ['Bez testova i formalnih časova', 'Možete prvo samo slušati', 'Nova poznanstva svake sedmice'] },
    events: { label: 'Novosti iz kluba', checking: 'Provjeravamo Telegram', looking: 'Tražimo informacije o sljedećem druženju…', updates: 'Novosti sa Telegrama', soon: 'Uskoro objavljujemo sljedeće druženje', soonText: 'Čim datum i mjesto objavimo na Telegramu, pojaviće se i ovdje.', live: 'Direktno sa Telegrama', next: 'Sljedeće druženje', date: 'Datum i vrijeme', location: 'Mjesto', openLocation: 'Pogledajte na mapi', view: 'Pogledajte na Telegramu', check: 'Otvorite Telegram' },
    topics: { label: 'Teme za razgovor', usage: 'Otvorite karticu na druženju — tema i tri pitanja biće vam na telefonu.', title: 'Izaberite karticu i započnite neobičan razgovor.', text: 'Sto tema za razgovor za zajedničkim stolom. Svaka kartica donosi temu i tri jednostavna pitanja za početak.', deck: 'Kartice sa temama za razgovor', chooseCategory: 'Izaberite kategoriju', allCategories: 'Sve teme', fullscreen: 'Otvorite za druženje', closeFullscreen: 'Zatvorite prikaz preko cijelog ekrana', previous: 'Prethodna', next: 'Sljedeća', surprise: 'Iznenadi me', anotherQuestion: 'Drugo pitanje', startHere: 'Počnite odavde', hint: 'Listajte strelicama ili prevucite prstom', dialog: 'Tema za razgovor preko cijelog ekrana' },
    how: { label: 'Kako funkcioniše', title: 'Tri jednostavna koraka do dobrog razgovora.', steps: [['Otvorite Telegram', 'Tamo je uvijek najnovija objava sa tačnim vremenom i adresom.'], ['Dođite bez pripreme', 'Ne morate se prijavljivati, raditi test niti unaprijed smišljati šta ćete reći.'], ['Počnite pozdravom', 'Saslušajte druge, uključite se u razgovor — dalje će ići samo od sebe.']] },
    footer: { text: 'Klub u Budvi u kojem vježbamo engleski, upoznajemo ljude i pronalazimo svoju ekipu.', tagline: 'Upoznajemo se · Razgovaramo · Vježbamo engleski' },
  },
  tr: {
    code: 'TR', languageName: 'Türkçe', htmlLang: 'tr',
    skip: 'İçeriğe geç',
    nav: [['Ana sayfa', '#home'], ['Hakkımızda', '#about'], ['Buluşmalar', '#events'], ['Konular', '#topics'], ['İletişim', '#contact']],
    joinUs: 'Aramıza katıl', joinClub: 'Kulübe katıl',
    menuOpen: 'Menüyü aç', menuClose: 'Menüyü kapat', mainNav: 'Ana menü', mobileNav: 'Mobil menü', language: 'Dil',
    hero: { line1: 'İngilizce konuşun. Yeni insanlarla tanışın.', line2: "Budva'da kendi çevrenizi kurun.", next: 'Sıradaki buluşma', checking: 'Son duyuruyu kontrol ediyoruz…', soon: 'Yeni buluşmayı yakında duyuracağız', automatic: 'Saat ve mekân belli olduğunda ayrıntıları burada bulabilirsiniz.', check: "Telegram'ı aç", openLocation: 'Haritada göster' },
    features: ['Samimi bir ortam', 'Katılım ücretsiz', 'Yüz yüze buluşmalar', 'Her seviyeye uygun'], highlights: 'Kulübün öne çıkanları',
    about: { label: 'Kulüp hakkında', title: 'Ders yok, not yok — sadece İngilizce sohbet.', text: "Budva'da yaşayanların, şehre yeni gelenlerin ve gezginlerin tanıştığı; hikâyelerini paylaştığı ve konuşarak İngilizce özgüvenini geliştirdiği bir topluluğuz.", promises: ['Sınav ve resmi ders yok', 'İsterseniz önce sadece dinleyebilirsiniz', 'Her hafta yeni insanlarla tanışma fırsatı'] },
    events: { label: 'Kulüpten haberler', checking: 'Telegram kontrol ediliyor', looking: 'Sıradaki buluşmanın ayrıntılarını arıyoruz…', updates: "Telegram'dan güncellemeler", soon: 'Yeni buluşmayı yakında duyuracağız', soonText: "Tarih ve mekânı Telegram'da paylaşır paylaşmaz burada da görebilirsiniz.", live: "Telegram'dan", next: 'Sıradaki buluşma', date: 'Tarih ve saat', location: 'Mekân', openLocation: 'Haritada göster', view: "Telegram'da görüntüle", check: "Telegram'ı aç" },
    topics: { label: 'Sohbet konuları', usage: 'Buluşmada bir kart açın — konu ve üç soru telefonunuzda hazır olsun.', title: 'Bir kart seçin. Sohbeti beklenmedik bir yerden başlatın.', text: 'Aynı masa etrafında yüz farklı sohbet konusu. Her kartta bir ana konu ve sohbeti başlatacak üç soru var.', deck: 'Sohbet konusu kartları', chooseCategory: 'Kategori seçin', allCategories: 'Tüm konular', fullscreen: 'Buluşma için aç', closeFullscreen: 'Tam ekran görünümünü kapat', previous: 'Önceki', next: 'Sonraki', surprise: 'Rastgele konu', anotherQuestion: 'Başka bir soru', startHere: 'Buradan başlayın', hint: 'Ok tuşlarını kullanın veya kaydırın', dialog: 'Tam ekran sohbet konusu' },
    how: { label: 'Nasıl işliyor?', title: 'İyi bir sohbet için üç basit adım.', steps: [["Telegram'ı açın", 'Güncel duyuruda saat, adres ve olası değişiklikleri bulabilirsiniz.'], ['Hazırlık yapmadan gelin', 'Kayıt olmanız, sınava girmeniz veya ne söyleyeceğinizi önceden düşünmeniz gerekmez.'], ['Bir merhabayla başlayın', 'Önce dinleyin, sohbete katılın — gerisi kendiliğinden gelir.']] },
    footer: { text: "Budva'da İngilizce pratik yaptığımız, yeni insanlarla tanıştığımız ve kendi çevremizi kurduğumuz bir sohbet kulübü.", tagline: 'Tanışıyoruz · Konuşuyoruz · İngilizce pratik yapıyoruz' },
  },
};

export function currentLocale() {
  if (typeof window === 'undefined') return 'en';
  const match = window.location.pathname.match(/\/(en|ru|me|tr)\/?$/);
  return match?.[1] || 'en';
}

export function siteRootPath() {
  if (typeof window === 'undefined') return './';
  const directory = window.location.pathname.endsWith('/')
    ? window.location.pathname
    : window.location.pathname.replace(/[^/]*$/, '');
  return directory.replace(/(?:en|ru|me|tr)\/$/, '');
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
