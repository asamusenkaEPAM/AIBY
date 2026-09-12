let current = 0;
let score = 0;
let answered = false;
let missedTopics = [];

const counter = document.getElementById("counter");
const scoreLabel = document.getElementById("score-label");
const progress = document.querySelector(".progress");
const progressBar = document.getElementById("progress-bar");
const topic = document.getElementById("topic");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const explanation = document.getElementById("explanation");
const next = document.getElementById("next");

function pointsLabel(value) {
  if (value % 10 === 1 && value % 100 !== 11) return `${value} балл`;
  if ([2, 3, 4].includes(value % 10) && ![12, 13, 14].includes(value % 100)) return `${value} балла`;
  return `${value} баллов`;
}

function renderQuestion() {
  answered = false;
  const item = quizQuestions[current];
  counter.textContent = `Вопрос ${current + 1} из ${quizQuestions.length}`;
  scoreLabel.textContent = pointsLabel(score);
  progressBar.style.width = `${((current + 1) / quizQuestions.length) * 100}%`;
  progress.setAttribute("aria-valuenow", current + 1);
  progress.setAttribute("aria-valuemax", quizQuestions.length);
  topic.textContent = item.topic;
  question.textContent = item.question;
  explanation.hidden = true;
  explanation.innerHTML = "";
  next.disabled = true;
  next.textContent = current === quizQuestions.length - 1 ? "Показать результат →" : "Далее →";
  answers.innerHTML = item.answers.map((answer, index) =>
    `<button class="answer" data-index="${index}"><span>${String.fromCharCode(65 + index)}</span><b>${answer}</b></button>`
  ).join("");
  answers.querySelectorAll(".answer").forEach(button => button.addEventListener("click", chooseAnswer));
}

function chooseAnswer(event) {
  if (answered) return;
  answered = true;
  const selected = Number(event.currentTarget.dataset.index);
  const item = quizQuestions[current];
  if (selected === item.correct) score += 1;
  else missedTopics.push(item.focus);

  answers.querySelectorAll(".answer").forEach((button, index) => {
    button.disabled = true;
    if (index === item.correct) button.classList.add("correct");
    if (index === selected && selected !== item.correct) button.classList.add("wrong");
  });
  const verdict = selected === item.correct ? "Верно." : "Не совсем.";
  explanation.innerHTML = `<b>${verdict}</b> ${item.explanation}`;
  explanation.hidden = false;
  next.disabled = false;
  scoreLabel.textContent = pointsLabel(score);
  next.focus({ preventScroll: true });
}

function resultFor(value) {
  if (value >= 9) return { level: "AI-native", title: "Вы управляете системой, а не только промптом", copy: "Вы уверенно различаете чат и агента, понимаете контекст, инструменты и проверку результата. Следующий шаг — собирать собственные многошаговые сценарии и измерять их качество." };
  if (value >= 7) return { level: "Agent-ready", title: "База для агентной работы уже есть", copy: "Вы понимаете основные компоненты современной AI-системы. Закройте отмеченные пробелы и закрепите знания на практике в небольшом проекте." };
  if (value >= 4) return { level: "AI-практик", title: "Пора выйти за пределы чата", copy: "Вы уже умеете использовать AI с пользой, но часть инженерного слоя пока остаётся новой. Начните с одного агента, одного инструмента и измеримого критерия успеха." };
  return { level: "Точка старта", title: "Чат — это только первый уровень", copy: "Это нормальная отправная точка. Разберите RAG, MCP и цикл работы агента, а затем повторите тест после небольшого практического эксперимента." };
}

function showResult() {
  document.getElementById("quiz-view").hidden = true;
  document.getElementById("result-view").hidden = false;
  document.getElementById("result-score").textContent = `${score}/${quizQuestions.length}`;
  const percent = Math.round(score / quizQuestions.length * 100);
  document.getElementById("result-ring").style.setProperty("--score", `${percent * 3.6}deg`);
  const result = resultFor(score);
  document.getElementById("result-level").textContent = result.level;
  document.getElementById("result-title").textContent = result.title;
  document.getElementById("result-copy").textContent = result.copy;

  const uniqueMissed = [...new Set(missedTopics)];
  const focusBox = document.getElementById("focus-box");
  if (uniqueMissed.length) {
    document.getElementById("focus-topics").innerHTML = uniqueMissed.map(item => `<span>${item}</span>`).join("");
    focusBox.hidden = false;
  } else {
    focusBox.hidden = true;
  }
}

next.addEventListener("click", () => {
  current += 1;
  current < quizQuestions.length ? renderQuestion() : showResult();
});

document.getElementById("restart").addEventListener("click", () => {
  current = 0;
  score = 0;
  missedTopics = [];
  document.getElementById("quiz-view").hidden = false;
  document.getElementById("result-view").hidden = true;
  renderQuestion();
});

renderQuestion();
