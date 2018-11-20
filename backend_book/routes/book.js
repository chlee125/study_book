const express = require("express");
const router = express.Router();

// 책 배열
var books = [];
var booksContext = [];

// 책 목록
router.get("/", (req, res) => {
  res.json(books);
});

// 책 상세정보
router.get("/:id", (req, res) => {
  var id = parseInt(req.params.id);

  for (var idx in booksContext) {
    var book = booksContext[idx];

    if (book.id == id) {
      res.json(book);
      return;
    }
  }
  res.json();
});

// 책 추가하기
router.post("/", (req, res) => {
  var id = books.length;
  var newbook = {
    id: id,
    title: req.body.title,
    summary: req.body.summary,
    cover: req.body.cover,
    writer: req.body.writer
  };
  var newbookContext = {
    id: id,
    title: req.body.title,
    context: req.body.context
  };

  books.push(newbook);
  booksContext.push(newbookContext);

  res.json({ book: newbook, context: newbookContext });
});

module.exports = router;
