function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
};

function unshelfBook(title, shelf) {
  for (i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      shelf.splice(i, 1);
    };
  }
};

function listTitles(shelf) {
//   var listOfTitles = [];
//   for (i = 0; i < shelf.length; i++) {
//     listOfTitles.push(shelf[i].title);
//   }
//   console.log(listOfTitles);
// };

  return `${shelf[0].title}, ${shelf[1].title}, ${shelf[2].title}`;
}
// NEED TO REVIEW AND REFACTOR 

function searchShelf(shelf, title) {
  for (i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      return true;
    }
  }
  return false
}
// REVIEW AND REFACTOR

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
