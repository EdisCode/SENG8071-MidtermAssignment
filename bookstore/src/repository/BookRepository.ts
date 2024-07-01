import { EntityRepository, Repository } from 'typeorm';
import { BookEntity } from '../entity/Book';

@EntityRepository(BookEntity)
export class BookRepository extends Repository<BookEntity> {}