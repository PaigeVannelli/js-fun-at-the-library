class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }
  greetPatron(name, morning) {
    if (morning === true ) {
      return `Good morning, ${name}!`
    } else {
    return `Hello, ${name}!`
    }
  }
  // findBook(title) {
  //   for (var i = 0; i < this.library.shelves.fantasy.length; i++ ) {
  //     if (this.library.shelves.fantasy[i].title === title) {
  //       this.library.shelves.fantasy.splice([i], 1);
  //       return `Yes, we have ${title}`;
  //     } else {
  //       return `Sorry, we do not have ${title}`;
  //     };
  //   }

  findBook(title) {
    console.log(object.keys(this.library.shelves))
  }

  calculateLateFee(daysLate) {
    return Math.ceil(daysLate * .25)
  }
};


module.exports = Librarian;
