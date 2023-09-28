export type Book = {
  title: string;
};

export async function getBook(isbn: string): Promise<Book> {
  const response = await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`);
  const json = await response.json();
  return {
    title: json[`ISBN:${isbn}`].title
  }
};