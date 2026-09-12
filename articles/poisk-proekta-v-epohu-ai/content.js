// Вопросы теста и каталог источников для статьи редактируются здесь.
const quizQuestions = [
  {
    topic: "Агенты",
    focus: "Агентный подход",
    question: "Какой сценарий действительно описывает работу AI-агента, а не обычного чата?",
    answers: [
      "Модель получает подробный промпт, один раз генерирует решение и ждёт следующего сообщения пользователя",
      "Система ставит промежуточные цели, вызывает инструменты, проверяет результат и продолжает работу",
      "Чат сохраняет всю переписку, сжимает историю и подставляет её в каждый следующий запрос пользователя",
      "Модель пишет большой фрагмент кода по одному промпту, а агентом считается из-за длинной инструкции"
    ],
    correct: 1,
    explanation: "Агент отличается циклом действий: он планирует, вызывает инструменты, наблюдает результат и корректирует следующий шаг.",
  },
  {
    topic: "Архитектура",
    focus: "Архитектура агентов",
    question: "Вы проектируете систему, которая сама переписывает код. Какая схема надёжнее?",
    answers: [
      "Один агент получает доступ ко всему репозиторию и переписывает его целиком по максимально точному промпту",
      "Несколько агентов параллельно меняют одни и те же файлы, а лучший вариант выбирается голосованием моделей",
      "Система планирует работу, вносит небольшие изменения, запускает проверки и переходит к следующему шагу",
      "Модель меняет код небольшими порциями, но считает каждое изменение готовым лишь на основании собственной оценки"
    ],
    correct: 2,
    explanation: "Надёжная система ограничивает размер шага, использует проверяемые критерии и оставляет контрольные точки между изменениями.",
  },
  {
    topic: "Проверка качества",
    focus: "Evals и проверка",
    question: "Как агенту лучше всего проверять собственный результат?",
    answers: [
      "Попросить ту же модель критически перечитать результат и подтвердить, что теперь она действительно уверена",
      "Повторить запрос несколько раз с разной температурой и принять ответ, который поддержало большинство",
      "Проверить структуру и тон ответа: профессиональная формулировка обычно указывает на точный результат",
      "Запустить независимые тесты, evals и статический анализ, сверив результат с критериями приёмки"
    ],
    correct: 3,
    explanation: "Самооценка модели полезна только как один из сигналов. Основа — независимые тесты, evals, статический анализ и критерии приёмки.",
  },
  {
    topic: "RAG",
    focus: "RAG",
    question: "Когда RAG особенно уместен?",
    answers: [
      "Когда ответы должны опираться на актуальные документы компании, историю проекта и проверяемые источники",
      "Когда новые знания нужно навсегда встроить в веса модели и больше не хранить документы отдельно",
      "Когда требуется снизить стоимость любых запросов: подключённый поиск автоматически экономит токены",
      "Когда нужно увеличить контекстное окно модели, не меняя приложение и не подключая хранилища"
    ],
    correct: 0,
    explanation: "RAG находит релевантные фрагменты во внешней базе знаний и передаёт их модели как контекст перед ответом.",
  },
  {
    topic: "MCP",
    focus: "MCP и инструменты",
    question: "Какую задачу решает Model Context Protocol (MCP)?",
    answers: [
      "Хранит документы и эмбеддинги в едином формате, чтобы заменить отдельную векторную базу данных",
      "Дообучает выбранную модель на кодовой базе и синхронизирует её знания при каждом новом коммите",
      "Стандартизирует подключение AI-приложений к инструментам, данным и источникам контекста",
      "Проверяет ответы модели на достоверность, поэтому галлюцинации заканчиваются на уровне протокола"
    ],
    correct: 2,
    explanation: "MCP стандартизирует подключение AI-приложений к инструментам, данным и интеграциям, которые можно применять в разных системах.",
  },
  {
    topic: "Поиск",
    focus: "Векторный поиск",
    question: "Зачем AI-системе может понадобиться векторная база данных?",
    answers: [
      "Чтобы хранить пароли, API-ключи и другие секреты рядом с эмбеддингами — так агент их точно не потеряет",
      "Чтобы находить близкие по смыслу фрагменты, даже когда запрос и документ используют разные слова",
      "Чтобы заменить реляционные базы: векторные базы данных одинаково хорошо поддерживают транзакции, связи и отчёты",
      "Чтобы расширять контекстное окно модели по мере роста данных, не отправляя найденные фрагменты в запрос"
    ],
    correct: 1,
    explanation: "Векторный поиск сопоставляет данные по смысловой близости. Он часто используется как слой поиска в RAG, но не заменяет все виды хранения.",
  },
  {
    topic: "Контроль",
    focus: "Human-in-the-loop",
    question: "Где особенно важно участие человека в принятии решения (human-in-the-loop)?",
    answers: [
      "После каждого автодополнения и вызова инструмента, даже если действие полностью обратимо и безопасно",
      "Только при обучении модели: после релиза ответственность за решения уже переходит к самой системе",
      "Его можно убрать, если используется новая модель, строгий промпт и достаточно дорогая подписка",
      "Перед действием с высокой ценой ошибки: платежом, публикацией, удалением или изменением в продакшене"
    ],
    correct: 3,
    explanation: "Чем выше цена ошибки и чем сложнее откат, тем важнее явное подтверждение человеком и понятный журнал действий.",
  },
  {
    topic: "Наблюдаемость",
    focus: "Наблюдаемость",
    question: "Какие данные нужно собирать, чтобы понять, почему агент ошибся?",
    answers: [
      "Сведения о шагах агента, обращениях к инструментам, входных и выходных данных, ошибках, задержках и стоимости",
      "Только итоговый ответ и оценку пользователя: промежуточные действия лишь отвлекают от причины ошибки",
      "Только общее время и стоимость запуска: если показатели в норме, проблема почти наверняка в модели",
      "Только размер системного промпта, число токенов и название модели: для полной диагностики этого достаточно"
    ],
    correct: 0,
    explanation: "Наблюдаемость позволяет восстановить ход работы агента и увидеть, на каком шаге он получил неверный контекст или выбрал неудачное действие.",
  },
  {
    topic: "Инженерная база",
    focus: "Проверка AI-кода",
    question: "AI предложил убедительный патч. Что должен сделать сильный инженер?",
    answers: [
      "Передать патч второй модели и принять его при согласии обеих: две модели не могут ошибаться одновременно",
      "Проверить стиль, названия и форматирование; архитектурные решения лучше доверить модели с большим контекстным окном",
      "Проверить diff, допущения, тесты, безопасность и влияние патча на соседние компоненты системы",
      "Принять патч, если модель приложила зелёный прогон написанных ею тестов и убедительно объяснила решение"
    ],
    correct: 2,
    explanation: "Фундаментальные знания нужны прежде всего для оценки качества результата: AI ускоряет работу, но не отменяет инженерную ответственность.",
  },
  {
    topic: "Собеседование",
    focus: "AI-assisted интервью",
    question: "Что лучше всего демонстрирует зрелый подход к работе с AI на собеседовании?",
    answers: [
      "Как можно быстрее сгенерировать рабочий код: объём результата лучше всего показывает владение инструментом",
      "Объяснить план, выбрать подходящие инструменты, проверить результат и аргументировать принятое решение",
      "Использовать AI незаметно, чтобы решение выглядело полностью самостоятельным и не вызвало вопросов",
      "Перечислить модели, фреймворки и сертификаты: чем длиннее список, тем убедительнее уровень AI-зрелости"
    ],
    correct: 1,
    explanation: "На собеседовании важно показать, как вы рассуждаете, выбираете инструменты, проверяете результат и замечаете ошибки.",
  }
];

const sourceCategories = {
  all: "Все",
  market: "Рынок",
  interviews: "Интервью",
  tools: "Инструменты",
  certificates: "Сертификаты"
};

const sources = [
  { category: "market", publisher: "Dice", title: "Tech Hiring Myth vs. Reality", description: "Подтверждает рост доли tech-вакансий с AI-навыком: с 15% в январе 2024 до 73% в мае 2026.", note: "Добавлено при фактчеке", url: "https://www.dice.com/hiring/recruitment/reports/tech-hiring-myths-vs-reality" },
  { category: "market", publisher: "Dice", title: "2026 Tech Jobs Report", description: "Ежемесячный отчёт: по данным за июль 2026 года, доля вакансий хотя бы с одним AI-навыком достигла 79%. Страница обновляется новым выпуском.", note: "Источник цифры 79%", url: "https://www.dice.com/hiring/recruitment/reports/dice-tech-job-report" },
  { category: "market", publisher: "Indeed Hiring Lab", title: "AI and Job Postings: From Destruction to Creation?", description: "Оригинальный источник данных о снижении на 27,5% относительно уровня 2020 года, 71% прироста за счёт senior-ролей и 37% за счёт AI в названии.", note: "Добавлено при фактчеке", url: "https://hiringlab.indeed.com/2026/07/08/ai-and-job-postings-from-destruction-to-creation/" },
  { category: "interviews", publisher: "CoderPad", title: "State of Tech Hiring 2026", description: "Опрос 650+ участников о роли AI в разработке и найме, live coding, практических задачах и сохранении алгоритмических тестов у 43% команд.", note: "Дополнительный материал", url: "https://coderpad.io/survey-reports/coderpad-state-of-tech-hiring-2026/" },
  { category: "interviews", publisher: "Aline Lerner / interviewing.io", title: "How AI is changing technical interviews", description: "Исследование того, как AI меняет алгоритмические вопросы, поведение интервьюеров и формат технических собеседований.", note: "Источник тезиса о FAANG", url: "https://www.linkedin.com/posts/alinelerner_is-ai-changing-technical-interviews-are-activity-7374535779009617921-0l6t" },
  { category: "interviews", publisher: "Axios", title: "Companies embrace in-person interviews to dodge the chatbots", description: "Google, Cisco и McKinsey вернули очные этапы; материал связывает это с AI-подсказками и проверкой личности.", note: "Добавлено при фактчеке", url: "https://www.axios.com/2025/08/12/in-person-job-interview-artificial-intelligence" },
  { category: "interviews", publisher: "TechCrunch", title: "Columbia student suspended over interview cheating tool", description: "История Роя Ли, приложения Interview Coder и появления стартапа Cluely.", note: "Источник истории Cluely", url: "https://techcrunch.com/2025/04/21/columbia-student-suspended-over-interview-cheating-tool-raises-5-3m-to-cheat-on-everything/" },
  { category: "interviews", publisher: "Checkr", title: "The Hiring Hoax: What 3,000 Managers Revealed", description: "35% опрошенных менеджеров сообщили, что в виртуальном интервью участвовал не тот человек, который был указан как кандидат.", note: "Источник сведений о подмене кандидата", url: "https://checkr.com/resources/articles/hiring-hoax-manager-survey-2025" },
  { category: "tools", publisher: "OpenAI", title: "Codex", description: "Официальная документация coding-агента: работа с кодовой базой, задачами разработки и инструментами.", note: "Упомянуто в статье", url: "https://learn.chatgpt.com/docs/cloud" },
  { category: "tools", publisher: "Anthropic", title: "Claude Code overview", description: "Официальный обзор агентного coding-инструмента Claude Code.", note: "Упомянуто в статье", url: "https://docs.anthropic.com/en/docs/claude-code/overview" },
  { category: "tools", publisher: "Model Context Protocol", title: "Introduction to MCP", description: "Официальное введение в открытый протокол подключения AI-приложений к инструментам и данным.", note: "Поясняет термин из статьи", url: "https://modelcontextprotocol.io/docs/getting-started/intro" },
  { category: "tools", publisher: "GitHub", title: "What is GitHub Copilot?", description: "Официальный обзор AI-ассистента, с которого для многих начался переход от чата к AI-ассистенту в редакторе.", note: "Упомянуто в статье", url: "https://docs.github.com/en/copilot/get-started/what-is-github-copilot" },
  { category: "tools", publisher: "OpenAI", title: "Scheduled tasks in ChatGPT", description: "Официальная инструкция по одноразовым и регулярным задачам, мониторингу и управлению расписанием.", note: "Источник практического совета", url: "https://help.openai.com/en/articles/10291617" },
  { category: "tools", publisher: "EPAM", title: "Designing Context-Aware SDLC Agents at Enterprise Scale", description: "Практическое сравнение CodeMie, Cursor, AWS Bedrock и n8n: контекст, RAG, MCP и оркестрация.", note: "Источник про CodeMie", url: "https://www.epam.com/insights/ai/blogs/designing-context-aware-sdlc-agents-at-enterprise-scale-integration-and-orchestration-lessons-from-cursor-aws-bedrock-n8n-and-codemie" },
  { category: "tools", publisher: "Cursor", title: "Cursor — AI code editor", description: "Официальная страница редактора, о котором автора спрашивали на заключительных этапах интервью.", note: "Упомянуто в статье", url: "https://cursor.com/" },
  { category: "tools", publisher: "Google", title: "Gemini", description: "Официальная страница Gemini — одного из чат-инструментов, упомянутых в статье.", note: "Упомянуто в статье", url: "https://gemini.google.com/" },
  { category: "certificates", publisher: "Anthropic", title: "Claude Certified Architect, Foundations", description: "Официальный анонс технической сертификации Claude для архитекторов приложений, готовых к промышленной эксплуатации.", note: "Упомянуто в статье", url: "https://www.anthropic.com/news/claude-partner-network" },
  { category: "certificates", publisher: "Microsoft Learn", title: "Microsoft Credentials", description: "Актуальный каталог сертификаций и прикладных AI-квалификаций Microsoft.", note: "Упомянуто в статье", url: "https://learn.microsoft.com/en-us/credentials/" },
  { category: "certificates", publisher: "Google Cloud", title: "Google Cloud Certifications", description: "Официальный каталог, включая Generative AI Leader, Agentic Architect и Machine Learning Engineer.", note: "Упомянуто в статье", url: "https://cloud.google.com/learn/certification" },
  { category: "certificates", publisher: "OpenAI", title: "OpenAI Certified", description: "Официальная информация об учебной и сертификационной программе OpenAI Certified.", note: "Упомянуто в статье", url: "https://help.openai.com/en/articles/20001151-openai-certified-app" }
];

function renderSources() {
  const list = document.getElementById("source-list");
  const filters = document.getElementById("source-filters");
  const search = document.getElementById("source-search");
  const count = document.getElementById("source-count");
  if (!list || !filters || !search || !count) return;

  let active = "all";
  filters.innerHTML = Object.entries(sourceCategories).map(([key, label]) =>
    `<button class="filter-button${key === "all" ? " active" : ""}" data-filter="${key}">${label}</button>`
  ).join("");

  function draw() {
    const query = search.value.trim().toLocaleLowerCase("ru");
    const visible = sources.filter(item => {
      const matchesCategory = active === "all" || item.category === active;
      const haystack = `${item.publisher} ${item.title} ${item.description} ${item.note}`.toLocaleLowerCase("ru");
      return matchesCategory && (!query || haystack.includes(query));
    });
    count.textContent = `Показано: ${visible.length} из ${sources.length}`;
    list.innerHTML = visible.length ? visible.map((item, index) => `
      <a class="source-card" href="${item.url}" target="_blank" rel="noopener" style="--delay:${Math.min(index * 35, 280)}ms">
        <div class="source-index">${String(sources.indexOf(item) + 1).padStart(2, "0")}</div>
        <div class="source-copy"><div class="source-meta"><span>${sourceCategories[item.category]}</span><span>${item.publisher}</span></div><h2>${item.title}</h2><p>${item.description}</p><em>${item.note}</em></div>
        <span class="source-arrow" aria-hidden="true">↗</span>
      </a>`).join("") : `<div class="empty-state"><b>Ничего не найдено</b><span>Попробуйте другой запрос или сбросьте фильтр.</span></div>`;
  }

  filters.addEventListener("click", event => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;
    active = button.dataset.filter;
    filters.querySelectorAll("button").forEach(item => item.classList.toggle("active", item === button));
    draw();
  });
  search.addEventListener("input", draw);
  draw();
}
