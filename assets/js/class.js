class Post {
  constructor(id, title, author, text, date, likes, hashtag) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.text = text;
    this.date = date;
    this._likes = likes;
    this._hashtag = hashtag;
  }
  changeText(newText) {
    this.text = newText;
  }
  increaseLikes() {
    this._likes = this.likes + 1;
  }
  decreaseLikes() {
    this._likes = this.likes - 1;
  }

  render() {
    const { id, title, author, text, date, _likes, _hashtag } = post1;
    document.write(`
      <article>
        <p>${id}</p>
        <h2>${title}</h2>
        <p>${author}</p>
        <p>${text}</p>
        <p>${date}</p>
        <p>${_likes}</p>
        <p>${_hashtag}</p>
    </article>
    `);
  }

  set likes(value) {
    if (typeof value !== "number") {
      throw new TypeError(`likes must be number`);
    }
    if (!Number.isInteger || value < 0) {
      throw new RangeError(`likes must be nonnegative`);
    }
    this._likes = value;
  }
  get likes() {
    return this._likes;
  }

  set hashtag(value) {
    const useHashtag = [
      "#web",
      "#javascript",
      "#fullstack",
      "#education",
      "#knowledge",
      "#tasks",
    ];
    if (!useHashtag.includes(value)) {
      throw new RangeError(`Hashtag is not accept`);
    }
    this._hashtag = value;
  }

  get hashtag() {
    return this._hashtag;
  }
}

const post1 = new Post(
  7,
  "Classes - JavaScript",
  "@frontend",
  "Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.",
  "2024-06-06",
  125,
  "#knowledge"
);
console.log(post1);
post1.changeText(
  "Classes are in fact <special functions>, and just as you can define function expressions and function declarations, a class can be defined in two ways: a class expression or a class declaration."
);
console.log(post1.text);
post1.increaseLikes();
console.log(post1.likes);
post1.increaseLikes();
console.log(post1.likes);
post1.decreaseLikes();
console.log(post1.likes);
post1.likes = 220;

post1.render();
