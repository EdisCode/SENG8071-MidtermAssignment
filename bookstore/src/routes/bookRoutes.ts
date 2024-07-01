import { Router, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { BookRepository } from '../repository/BookRepository';
import { BookEntity } from '../entity/Book';

const router = Router();

// Create a new book
router.post('/', async (req: Request, res: Response) => {
  const bookRepository = getCustomRepository(BookRepository);
  const book = bookRepository.create(req.body as BookEntity);
  await bookRepository.save(book);
  res.status(201).json(book);
});

// Read all books
router.get('/', async (req: Request, res: Response) => {
  const bookRepository = getCustomRepository(BookRepository);
  const books = await bookRepository.find();
  res.status(200).json(books);
});

// Update a book by ID
router.put('/:id', async (req: Request, res: Response) => {
  const bookRepository = getCustomRepository(BookRepository);
  const bookId = parseInt(req.params.id, 10);
  const book = await bookRepository.findOne({ where: { bookId } });
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  bookRepository.merge(book, req.body);
  await bookRepository.save(book);
  res.status(200).json(book);
});

// Delete a book by ID
router.delete('/:id', async (req: Request, res: Response) => {
  const bookRepository = getCustomRepository(BookRepository);
  const bookId = parseInt(req.params.id, 10);
  const book = await bookRepository.findOne({ where: { bookId } });
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  await bookRepository.remove(book);
  res.status(200).json({ message: 'Book deleted successfully' });
});

export default router;
