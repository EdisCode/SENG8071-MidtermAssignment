import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty, IsEnum, IsNumber, IsDate } from 'class-validator';

// Book Interface
export interface Book {
  bookId: number;
  title: string;
  genre: string;
  publicationDate: Date;
  price: number;
  format: "physical" | "ebook" | "audiobook";
  authorId: number;
  publisherId: number;
  averageRating: number;
}

// Book Entity
@Entity()
export class BookEntity implements Book {
  @PrimaryGeneratedColumn()
  bookId: number;

  @Column()
  @IsNotEmpty()
  title: string;

  @Column()
  @IsNotEmpty()
  genre: string;

  @Column({ type: 'date' })
  @IsNotEmpty()
  @IsDate()
  publicationDate: Date;

  @Column('decimal')
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @Column()
  @IsNotEmpty()
  @IsEnum(["physical", "ebook", "audiobook"])
  format: "physical" | "ebook" | "audiobook";

  @Column()
  @IsNotEmpty()
  authorId: number;

  @Column()
  @IsNotEmpty()
  publisherId: number;

  @Column('decimal')
  @IsNumber()
  averageRating: number;
}
