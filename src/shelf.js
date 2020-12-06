function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
};

function unshelfBook(bookTitle, shelf) {
  for (i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      shelf.splice(i, 1);
    };
  }
};

function listTitles(shelf) {
  var listOfTitles = '';
  for (var i = 0; i < shelf.length; i++) {
    if (i < shelf.length - 1){
      listOfTitles += shelf[i].title + ', ';
    } else {
      listOfTitles += shelf[i].title;
    };
  };
  return listOfTitles;
};

function searchShelf(shelf, title) {
  var isOnShelf = false;
  for (i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      isOnShelf = true;
    } else {
      isOnShelf = false;
    };
  };
  return isOnShelf;
};


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
