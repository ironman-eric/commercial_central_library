import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';
import { searchBook } from '../data/OpenLibrary';
import { Book, saveBook } from '../data/Book';
import BookBarCodeReader from '../components/camera/BookBarCodeReader';
import BookSearchResult from '../components/book/BookSearchResult';

const BookScanScreen = ({ route, navigation }: any) => {
  const [isLoading, setLoading] = useState(false);
  const [book, setBook] = useState<Book>();
  const handleScanBook = (data: string) => {
    searchBook('9781526617163')
      .then(data => setBook(data))
      .catch(error => console.error(error))
  }

  const handleSaveBook = (book: Book) => {
    setLoading(true);
    saveBook(book)
      .then(() => navigation.navigate('Home'))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator />}
      <BookBarCodeReader handleScanBook={(data: string) => handleScanBook(data)} />
      {book && <BookSearchResult book={book} handleSaveBook={() => handleSaveBook(book)} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  }
});

export default BookScanScreen;
