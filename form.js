console.clear();

const newCardSubmit = document.querySelector('[data-js="newCardSubmit"]');
const newCardQuestion = document.querySelector('[data-js="newCardQuestion"]');
const newCardAnswer = document.querySelector('[data-js="newCardAnswer"]');
const newCardTag = document.querySelector('[data-js="newCardTag"]');
const mainElement = document.querySelector("main");

newCardSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Das klappt!");

  const ulElement = document.createElement("ul");
  const liElement = document.createElement("li");
  const articleElement = document.createElement("article");
  const h2Element = document.createElement("h2");
  const buttonElement = document.createElement("button");
  const pElement = document.createElement("p");
  const ulElementTag = document.createElement("ul");
  const liElementTag = document.createElement("li");

  mainElement.append(ulElement);
  ulElement.append(liElement);
  liElement.append(articleElement);
  articleElement.append(h2Element, buttonElement, pElement, ulElementTag);
  ulElementTag.append(liElementTag);

  ulElement.classList.add("card-list");

  liElement.classList.add("card-list__item");

  articleElement.classList.add("card");

  h2Element.classList.add("card__question");
  h2Element.textContent = newCardQuestion.value;

  buttonElement.classList.add("card__button-answer");
  buttonElement.setAttribute("type", "button");
  buttonElement.setAttribute("data-js", "cardToogle");
  buttonElement.textContent = "Show answer";

  pElement.classList.add("card__answer", "card__answer--active");
  pElement.setAttribute("data-js", "cardAnswer");
  pElement.textContent = newCardAnswer.value;

  ulElementTag.classList.add("card__tag-list");
  liElementTag.classList.add("card__tag-list-item");
  liElementTag.textContent = newCardTag.value;
});

const maxLengthTextAreaQuestion = document.querySelector(
  '[data-js="maxlength-textarea-question"]'
);

const maxLengthTextAreaAnswer = document.querySelector(
  '[data-js="maxlength-textarea-answer"]'
);

function calculateLeftSpaceQuestion(event) {
  const sum = 150 - event.target.value.length;
  maxLengthTextAreaQuestion.textContent = `${sum} characters are left.`;
}

function calculateLeftSpaceAnswer(event) {
  const sum = 150 - event.target.value.length;
  maxLengthTextAreaAnswer.textContent = `${sum} characters are left.`;
}

newCardQuestion.addEventListener("input", calculateLeftSpaceQuestion);
newCardAnswer.addEventListener("input", calculateLeftSpaceAnswer);
