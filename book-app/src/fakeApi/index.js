// define data structure

export const user = {
  id: 1,
  userName: "KarenJParker",
  dateJoined: 12345678910,
  currentBook: [],
  futureBooks: [],
  finishedBooks: [],
};

export const book = {};

export const allBooks = [
  {
    id: 1,
    bookTitle: "Harry Potter",
    author: "JK Rowling",
    read: true,
    image: "",
  },
  {
    id: 2,
    bookTitle: "Winnie the Pooh",
    author: "AA Milne",
    read: true,
    image: "",
  },
  {
    id: 3,
    bookTitle: "The Lincoln Lawyer",
    author: "Michael Connelly",
    read: true,
    image: "",
  },
  {
    id: 4,
    bookTitle: "Verity",
    author: "Colleen Hoover",
    read: true,
    image: "",
  },

  {
    id: 5,
    bookTitle: "The Gods of Guilt",
    author: "Michael Connelly",
    read: true,
    image: "",
  },

  {
    id: 6,
    bookTitle: "The Ink Black Heart",
    author: "Robert Galbraith",
    read: true,
    image: "",
  },

  {
    id: 7,
    bookTitle: "Lessons in Chemistry",
    author: "Bonnie Garmus",
    read: true,
    image: "",
  },

  {
    id: 8,
    bookTitle: "Pride and Prejudice",
    author: "Jane Austen",
    read: true,
    image: "",
  },
];

export const futureBooks = [{}];

// bookId: [2], userId: 0, whenAdded: "date"

export const finishedBooks = [{ bookId: [3], whenFinished: "date" }];
