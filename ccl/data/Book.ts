import storage from './Storage';

export type Book = {
  isbn: string;
  title: string;
};

export async function saveBook(book: Book) {
  storage.save({
    key: 'book',
    id: book.isbn,
    data: book
  });
}

export async function getBook(isbn: string) {
  return storage.load({
    key: 'book',
    id: isbn
  })
}

export async function deleteBook(book: Book) {
  storage.remove({
    key: 'book',
    id: book.isbn
  });
}

export async function listBooks(): Promise<Book[]> {
  const books = await storage.getAllDataForKey('book');

  return books;
}
