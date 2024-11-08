// phew… not a lot going on here. Please add some code!
console.clear();

// --- Bookmarks Toogle --- //
const cardBookmark = document.querySelector('[data-js="cardBookmark"]');

cardBookmark.addEventListener("click", () => {
  cardBookmark.classList.toggle("bookmark--active");
});

// --- Answer Toogle --- //
const cardToogle = document.querySelector('[data-js="cardToogle"]');
const cardAnswer = document.querySelector('[data-js="cardAnswer"]');

cardToogle.addEventListener("click", () => {
  cardAnswer.classList.toggle("card__answer--active");
});
