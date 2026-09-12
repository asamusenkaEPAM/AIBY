// Вопросы теста и каталог источников редактируются здесь.
const quizQuestions = [
  {
    topic: "Агенты",
    focus: "Агентный подход",
    question: "Какой сценарий действительно описывает работу AI-агента, а не обычного чата?",
    answers: [
      "Модель один раз отвечает на подробно написанный вопрос",
      "Система планирует шаги, использует инструменты, проверяет результат и продолжает до цели",
      "Чат хранит длинную историю переписки",
      "Модель генерирует большой фрагмент кода по одному промпту"
    ],
    correct: 1,
    explanation: "Агент отличается циклом действий: он планирует, вызывает инструменты, наблюдает результат и корректирует следующий шаг.",
    readMore: "https://www.epam.com/insights/ai/blogs/designing-context-aware-sdlc-agents-at-enterprise-scale-integration-and-orchestration-lessons-from-cursor-aws-bedrock-n8n-and-codemie"
  },
  {
    topic: "Архитектура",
    focus: "Архитектура агентов",
    question: "Вы проектируете систему, которая сама переписывает код. Какая схема надёжнее?",
    answers: [
      "Один мощный промпт сразу переписывает весь репозиторий",
      "Планирование → ограниченные изменения → тесты и анализ → ревью → следующий шаг",
      "Модель меняет код до тех пор, пока он не выглядит убедительно",
      "Любые изменения принимаются автоматически, если модель уверена"
    ],
    correct: 1,
    explanation: "Надёжная система ограничивает размер шага, использует проверяемые критерии и оставляет контрольные точки между изменениями.",
    readMore: "https://www.epam.com/insights/ai/blogs/codemie-to-enable-ai-native-software-delivery"
  },
  {
    topic: "Проверка качества",
    focus: "Evals и проверка",
    question: "Как агенту лучше всего проверять собственный результат?",
    answers: [
      "Спросить себя: «Ты уверен?»",
      "Повторить тот же запрос с большей температурой",
      "Запустить независимые тесты и проверки по заранее заданным критериям",
      "Оценить, насколько профессионально звучит ответ"
    ],
    correct: 2,
    explanation: "Самооценка модели полезна только как один из сигналов. Основа — независимые тесты, evals, статический анализ и критерии приёмки.",
    readMore: "https://coderpad.io/survey-reports/coderpad-state-of-tech-hiring-2026/"
  },
  {
    topic: "RAG",
    focus: "RAG",
    question: "Когда RAG особенно уместен?",
    answers: [
      "Когда нужно уменьшить стоимость любой модели",
      "Когда ответ должен опираться на актуальную внутреннюю документацию и историю проекта",
      "Когда модель нужно полностью переобучить",
      "Когда системе нельзя обращаться к данным"
    ],
    correct: 1,
    explanation: "RAG находит релевантные фрагменты во внешней базе знаний и передаёт их модели как контекст перед ответом.",
    readMore: "https://www.epam.com/insights/ai/blogs/designing-context-aware-sdlc-agents-at-enterprise-scale-integration-and-orchestration-lessons-from-cursor-aws-bedrock-n8n-and-codemie"
  },
  {
    topic: "MCP",
    focus: "MCP и инструменты",
    question: "Какую задачу решает Model Context Protocol (MCP)?",
    answers: [
      "Задаёт единый формат общения AI-приложений с инструментами и источниками контекста",
      "Заменяет векторную базу данных",
      "Обучает модель на кодовой базе",
      "Гарантирует отсутствие галлюцинаций"
    ],
    correct: 0,
    explanation: "MCP стандартизирует подключение AI-приложений к инструментам, данным и повторно используемым интеграциям.",
    readMore: "https://modelcontextprotocol.io/docs/getting-started/intro"
  },
  {
    topic: "Поиск",
    focus: "Векторный поиск",
    question: "Зачем в AI-системе может понадобиться векторная база?",
    answers: [
      "Чтобы хранить пароли модели",
      "Чтобы находить смыслово близкие фрагменты, даже если слова не совпадают буквально",
      "Чтобы заменить все реляционные базы",
      "Чтобы автоматически увеличивать контекстное окно"
    ],
    correct: 1,
    explanation: "Векторный поиск сопоставляет данные по смысловой близости. Он часто используется как слой поиска в RAG, но не заменяет все виды хранения.",
    readMore: "https://www.epam.com/insights/ai/blogs/designing-context-aware-sdlc-agents-at-enterprise-scale-integration-and-orchestration-lessons-from-cursor-aws-bedrock-n8n-and-codemie"
  },
  {
    topic: "Контроль",
    focus: "Human-in-the-loop",
    question: "Где human-in-the-loop особенно важен?",
    answers: [
      "Перед необратимым действием: публикацией, платежом, удалением или изменением production",
      "После каждого автодополнения кода без исключений",
      "Только во время обучения модели",
      "Нигде, если модель достаточно новая"
    ],
    correct: 0,
    explanation: "Чем выше цена ошибки и сложнее откат, тем важнее явное подтверждение человеком и понятный журнал действий.",
    readMore: "https://coderpad.io/survey-reports/coderpad-state-of-tech-hiring-2026/"
  },
  {
    topic: "Observability",
    focus: "Наблюдаемость",
    question: "Что нужно собирать, чтобы понять, почему агент ошибся?",
    answers: [
      "Только финальный текст ответа",
      "Только общее время выполнения",
      "Трассу шагов, вызовы инструментов, входы и выходы, ошибки, задержки и стоимость",
      "Количество строк в системном промпте"
    ],
    correct: 2,
    explanation: "Наблюдаемость делает поведение агента разборным: видно, на каком шаге он получил неверный контекст или выбрал плохое действие.",
    readMore: "https://www.dice.com/hiring/recruitment/reports/tech-hiring-myths-vs-reality"
  },
  {
    topic: "Инженерная база",
    focus: "Проверка AI-кода",
    question: "AI предложил убедительный патч. Что должен сделать сильный инженер?",
    answers: [
      "Принять патч: уверенный ответ модели обычно корректен",
      "Проверить diff, допущения, тесты, безопасность и влияние на соседние компоненты",
      "Попросить модель переписать объяснение более уверенно",
      "Оценить только стиль и читаемость кода"
    ],
    correct: 1,
    explanation: "Профессиональная база нужна именно для распознавания качества: AI ускоряет работу, но не отменяет инженерную ответственность.",
    readMore: "https://coderpad.io/survey-reports/coderpad-state-of-tech-hiring-2026/"
  },
  {
    topic: "Собеседование",
    focus: "AI-assisted интервью",
    question: "Что лучше всего демонстрирует зрелую работу с AI на собеседовании?",
    answers: [
      "Максимально быстро сгенерировать много кода",
      "Скрыть использование AI, чтобы результат выглядел самостоятельным",
      "Объяснить план, выбрать инструменты, проверить вывод и аргументировать финальное решение",
      "Перечислить как можно больше названий моделей"
    ],
    correct: 2,
    explanation: "Интервьюеру важен управляемый процесс: ваше мышление, выбор, проверка и способность заметить ошибку инструмента.",
    readMore: "https://www.linkedin.com/posts/alinelerner_is-ai-changing-technical-interviews-are-activity-7374535779009617921-0l6t"
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
  { category: "market", publisher: "Dice", title: "2026 Tech Jobs Report", description: "Ежемесячный отчёт: в июльском срезе 2026 доля вакансий хотя бы с одним AI-навыком достигла 79%. Страница обновляется новым выпуском.", note: "Источник цифры 79%", url: "https://www.dice.com/hiring/recruitment/reports/dice-tech-job-report" },
  { category: "market", publisher: "Indeed Hiring Lab", title: "AI and Job Postings: From Destruction to Creation?", description: "Первичный источник для −27,5% к уровню 2020 года, 71% прироста за счёт senior-ролей и 37% за счёт AI в названии.", note: "Добавлено при фактчеке", url: "https://hiringlab.indeed.com/2026/07/08/ai-and-job-postings-from-destruction-to-creation/" },
  { category: "interviews", publisher: "CoderPad", title: "State of Tech Hiring 2026", description: "Опрос 650+ участников о роли AI в разработке и найме, live coding, реальных сценариях и сохранении алгоритмических тестов у 43% команд.", note: "Дополнительный материал", url: "https://coderpad.io/survey-reports/coderpad-state-of-tech-hiring-2026/" },
  { category: "interviews", publisher: "Aline Lerner / interviewing.io", title: "How AI is changing technical interviews", description: "Исследование того, как AI меняет алгоритмические вопросы, поведение интервьюеров и формат технических собеседований.", note: "Источник тезиса о FAANG", url: "https://www.linkedin.com/posts/alinelerner_is-ai-changing-technical-interviews-are-activity-7374535779009617921-0l6t" },
  { category: "interviews", publisher: "Axios", title: "Companies embrace in-person interviews to dodge the chatbots", description: "Google, Cisco и McKinsey вернули очные этапы; материал связывает это с AI-подсказками и проверкой личности.", note: "Добавлено при фактчеке", url: "https://www.axios.com/2025/08/12/in-person-job-interview-artificial-intelligence" },
  { category: "interviews", publisher: "TechCrunch", title: "Columbia student suspended over interview cheating tool", description: "История Роя Ли, приложения Interview Coder и появления стартапа Cluely.", note: "Источник истории Cluely", url: "https://techcrunch.com/2025/04/21/columbia-student-suspended-over-interview-cheating-tool-raises-5-3m-to-cheat-on-everything/" },
  { category: "interviews", publisher: "Checkr", title: "The Hiring Hoax: What 3,000 Managers Revealed", description: "35% опрошенных менеджеров сообщили, что в виртуальном интервью участвовал не тот человек, который был указан как кандидат.", note: "Источник про подмену кандидата", url: "https://checkr.com/resources/articles/hiring-hoax-manager-survey-2025" },
  { category: "tools", publisher: "OpenAI", title: "Codex", description: "Официальная документация coding-агента: работа с кодовой базой, задачами разработки и инструментами.", note: "Упомянуто в статье", url: "https://learn.chatgpt.com/docs/cloud" },
  { category: "tools", publisher: "Anthropic", title: "Claude Code overview", description: "Официальный обзор агентного coding-инструмента Claude Code.", note: "Упомянуто в статье", url: "https://docs.anthropic.com/en/docs/claude-code/overview" },
  { category: "tools", publisher: "Model Context Protocol", title: "Introduction to MCP", description: "Официальное введение в открытый протокол подключения AI-приложений к инструментам и данным.", note: "Поясняет термин из статьи", url: "https://modelcontextprotocol.io/docs/getting-started/intro" },
  { category: "tools", publisher: "GitHub", title: "What is GitHub Copilot?", description: "Официальный обзор AI-ассистента, с которого для многих начался переход от чата к AI в редакторе.", note: "Упомянуто в статье", url: "https://docs.github.com/en/copilot/get-started/what-is-github-copilot" },
  { category: "tools", publisher: "OpenAI", title: "Scheduled tasks in ChatGPT", description: "Официальная инструкция по одноразовым и регулярным задачам, мониторингу и управлению расписанием.", note: "Источник практического совета", url: "https://help.openai.com/en/articles/10291617" },
  { category: "tools", publisher: "EPAM", title: "Designing Context-Aware SDLC Agents at Enterprise Scale", description: "Практическое сравнение CodeMie, Cursor, AWS Bedrock и n8n: контекст, RAG, MCP и оркестрация.", note: "Источник про CodeMie", url: "https://www.epam.com/insights/ai/blogs/designing-context-aware-sdlc-agents-at-enterprise-scale-integration-and-orchestration-lessons-from-cursor-aws-bedrock-n8n-and-codemie" },
  { category: "tools", publisher: "Cursor", title: "Cursor — AI code editor", description: "Официальная страница редактора, о котором автора спрашивали на заключительных этапах интервью.", note: "Упомянуто в статье", url: "https://cursor.com/" },
  { category: "tools", publisher: "Google", title: "Gemini", description: "Официальная страница Gemini — одного из чат-инструментов, упомянутых в статье.", note: "Упомянуто в статье", url: "https://gemini.google.com/" },
  { category: "certificates", publisher: "Anthropic", title: "Claude Certified Architect, Foundations", description: "Официальный анонс технической сертификации Claude для архитекторов production-приложений.", note: "Упомянуто в статье", url: "https://www.anthropic.com/news/claude-partner-network" },
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
