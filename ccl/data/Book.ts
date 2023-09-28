import AsyncStorage from '@react-native-async-storage/async-storage';

export type Book = {
  title: string;
};

export async function searchBook(isbn: string): Promise<Book[]> {
  const response = await fetch(
    `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`,
  );
  const json = await response.json();
  return [
    {
      title: json[`ISBN:${isbn}`].title,
    },
  ];
}

export async function saveBook(book: Book) {
  const jsonValue = JSON.stringify(book);
  const key = `book_${book.title}`;
  await AsyncStorage.setItem(key, jsonValue);
}

export async function getBook(title: string) {
  const key = `book_${title}`;
  const jsonValue = await AsyncStorage.getItem(key);
  return jsonValue != null ? JSON.parse(jsonValue) : null;
}
