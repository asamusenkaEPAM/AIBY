let current = 0;
let score = 0;
let answered = false;

const counter = document.getElementById("counter");
const scoreLabel = document.getElementById("score-label");
const progressBar = document.getElementById("progress-bar");
const topic = document.getElementById("topic");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const explanation = document.getElementById("explanation");
const next = document.getElementById("next");

function renderQuestion() {
  answered = false;
  const item = quizQuestions[current];
  counter.textContent = `Вопрос ${current + 1} из ${quizQuestions.length}`;
  scoreLabel.textContent = `${score} ${score === 1 ? "балл" : score > 1 && score < 5 ? "балла" : "баллов"}`;
  progressBar.style.width = `${((current + 1) / quizQuestions.length) * 100}%`;
  topic.textContent = item.topic;
  question.textContent = item.question;
  explanation.hidden = true;
  next.disabled = true;
  next.textContent = current === quizQuestions.length - 1 ? "Показать результат →" : "Далее →";
  answers.innerHTML = item.answers.map((answer, index) => `<button class="answer" data-index="${index}"><span>${String.fromCharCode(65 + index)}</span>${answer}</button>`).join("");
  answers.querySelectorAll(".answer").forEach(button => button.addEventListener("click", chooseAnswer));
}

function chooseAnswer(event) {
  if (answered) return;
  answered = true;
  const selected = Number(event.currentTarget.dataset.index);
  const item = quizQuestions[current];
  if (selected === item.correct) score++;
  answers.querySelectorAll(".answer").forEach((button, index) => {
    button.disabled = true;
    if (index === item.correct) button.classList.add("correct");
    if (index === selected && selected !== item.correct) button.classList.add("wrong");
  });
  explanation.textContent = item.explanation;
  explanation.hidden = false;
  next.disabled = false;
  scoreLabel.textContent = `${score} ${score === 1 ? "балл" : score > 1 && score < 5 ? "балла" : "баллов"}`;
}

function showResult() {
  document.getElementById("quiz-view").hidden = true;
  document.getElementById("result-view").hidden = false;
  document.getElementById("result-score").textContent = `${score}/${quizQuestions.length}`;
  const percent = Math.round(score / quizQuestions.length * 100);
  document.getElementById("result-ring").style.setProperty("--score", `${percent * 3.6}deg`);
  document.getElementById("result-title").textContent = percent >= 85 ? "Отличный результат!" : percent >= 55 ? "Хорошая база!" : "Отличное начало!";
  document.getElementById("result-copy").textContent = percent >= 85 ? "Ты уверенно ориентируешься в ключевых понятиях." : percent >= 55 ? "Основы уже есть — материалы помогут закрыть оставшиеся пробелы." : "Посмотри материалы и возвращайся: второй результат наверняка будет выше.";
}

next.addEventListener("click", () => {
  current++;
  current < quizQuestions.length ? renderQuestion() : showResult();
});

document.getElementById("restart").addEventListener("click", () => {
  current = 0; score = 0;
  document.getElementById("quiz-view").hidden = false;
  document.getElementById("result-view").hidden = true;
  renderQuestion();
});

renderQuestion();
