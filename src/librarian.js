class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  };
  greetPatron(name, morning) {
    if (morning) {
      return `Good morning, ${name}!`;
    } else {
      return `Hello, ${name}!`;
    };
  }

  findBook(title) {
    var libraryShelves = Object.keys(this.library.shelves);
    for (var i = 0; i < libraryShelves.length; i++) {
      for (var j = 0; j < this.library.shelves[libraryShelves[i]].length; j++) {
        if (this.library.shelves[libraryShelves[i]][j].title === title) {
          this.library.shelves[libraryShelves[i]].splice([j], 1)
          return `Yes, we have ${title}`;
        } else {
          return `Sorry, we do not have ${title}`;
        };
      };
    };
  };

  calculateLateFee(daysLate) {
    return Math.ceil(daysLate * .25);
  };
};


module.exports = Librarian;
