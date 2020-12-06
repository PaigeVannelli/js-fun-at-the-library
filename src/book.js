function createTitle(title) {
  return `The ${title}`;
};

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
  return character;
};

function saveReview(specificReview, reviews) {
  var isInArray = false;
  for (var i = 0; i < reviews.length; i++) {
    if (specificReview === reviews[i]) {
      isInArray = true;
    }
  }
  if (isInArray === false) {
    reviews.push(specificReview);
  };
};


function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
};

function writeBook(bookTitle, mainCharacter, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  }
  return book;
};

function editBook(book) {
  book.pageCount *= .75;
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
