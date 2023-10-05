import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import { searchBook } from '../../data/OpenLibrary';
import { Book, saveBook } from '../../data/Book';
import BookSearchResult from './BookSearchResult';

const BookSearch = ({ route, navigation }: any) => {
  const { data } = route.params;
  const [isLoading, setLoading] = useState(false);
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    setLoading(true);
    searchBook(data)
      .then(book => setBook(book))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

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
      {book && <BookSearchResult book={book} handleSaveBook={() => handleSaveBook(book)} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
});

export default BookSearch;
