import { Book } from "./Book";

export async function searchBook(isbn: string): Promise<Book[]> {
  const response = await fetch(
    `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`,
  );
  const json = await response.json();
  return [
    {
      isbn:isbn,
      title: json[`ISBN:${isbn}`].title,
    },
  ];
}
