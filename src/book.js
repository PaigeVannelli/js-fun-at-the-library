function createTitle(title) {
  return 'The ' + title;
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
  return character
}

function saveReview(specificReview, reviews) {
  if (!reviews.includes(specificReview)) {
    reviews.push(specificReview)
  }
};

function calculatePageCount(bookTitle) {
  var length = bookTitle.length;
  return length * 20;
};

function writeBook(bookTitle, mainCharacter, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  }
  return book;
}

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
