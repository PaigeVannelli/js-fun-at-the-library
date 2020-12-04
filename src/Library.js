function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
  return library
};

function addBook(library, book) {
  if (book.genre === "fantasy") {
    library.shelves.fantasy.push(book);
  } else if (book.genre === "fiction") {
      library.shelves.fiction.push(book);
  } else if (book.genre === "nonFiction") {
      library.shelves.nonFiction.push(book)
  } else {
  }
}

//SPACING???

// function checkoutBook(library, title, genre) {
//   //check for a specifc objects
//   var newGenre = """ + genre + """
//   if (library.shelves.newGenre.includes(title)) {
//     console.log('true')
//     // library.shelves.genre.splice(0, 1);
//     // return `You have now checked out ${title} from the ${library}`
//   }
//   // remove said objects fromt he right genre arrays
//   // return the phrase ''
// }

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook,
};
