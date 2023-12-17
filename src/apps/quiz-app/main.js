import { questions } from "./questions.js";

let body = document.querySelector("body");
let questionContainer = document.querySelector("#question-container");
let question = document.querySelector("#question");
let options = document.querySelector("#options-box");
let next = document.querySelector("#next");
let scoreHead = document.querySelector("#score");
let start = document.querySelector("#start");

let currQuesIdx, score, shuffleQues;

function startQuiz() {
  shuffleQues = questions.sort(() => Math.random() - 0.5);
  currQuesIdx = 0;
  start.classList.add("hidden");
  next.classList.remove("hidden");
  questionContainer.classList.remove("hidden");
  setNextQues();
}

function setNextQues() {
  resetState();
  showQuestion(shuffleQues[currQuesIdx]);
}

function showQuestion(questionObj) {
  question.innerHTML = `Question : ${questionObj.question}`;
  questionObj.options.forEach((option) => {
    const optionButton = document.createElement("button");
    optionButton.innerText = option.text;
    optionButton.classList.add(
      "p-3",
      "rounded-md",
      "border",
      "text-white",
      "hover:bg-yellow-300",
      "hover:text-red-600",
      "uppercase",
      "font-semibold",
      "tracking-wide",
      "focus:ring-4",
      "shadow-lg",
      "transform",
      "active:scale-75",
      "transition-transform"
    );
    if (option.correct) {
      optionButton.dataset.correct = option.correct;
    }
    optionButton.addEventListener("click", selectAnswer);
    options.append(optionButton);
  });
}

function resetState() {
  next.classList.add("hidden");
  while (options.firstChild) {
    options.removeChild(options.firstChild);
  }
}

function selectAnswer(e) {
  const selectedOption = e.target;
  const correct = selectedOption.dataset.correct;
  Array.from(options.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffleQues.length > currQuesIdx + 1) {
    next.classList.remove("hidden");
  } else {
    start.innerText = "Restart Quiz";
    start.classList.remove("hidden");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("bg-green-300");
  } else {
    element.classList.add("bg-red-300");
  }
}

function clearStatusClass(element) {
  element.classList.remove("bg-green-300");
  element.classList.remove("bg-red-300");
}

start.addEventListener("click", startQuiz);
next.addEventListener("click", () => {
  currQuesIdx++;
  setNextQues();
});
