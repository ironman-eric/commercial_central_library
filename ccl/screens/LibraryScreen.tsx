import React, { useEffect, useState, useReducer } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import ListBooks from '../components/library/ListBooks';
import { useIsFocused } from '@react-navigation/native';
import { Book, listBooks, deleteBook } from '../data/Book';

const LibraryScreen = () => {
  const isFocused = useIsFocused();
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const [isLoading, setLoading] = useState(true);
  const [books, setBooks] = useState<Book[]>();

  useEffect(() => {
    if (isFocused) {
      setLoading(true);
      forceUpdate();
      listBooks()
        .then(data => setBooks(data))
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    }
  }, [isFocused]);

  const handleRemoveBook = (book: Book) => {
    deleteBook(book)
      .then(() => {
        listBooks()
          .then(data => setBooks(data))
          .catch(error => console.error(error))
          .finally(() => setLoading(false));
      })
      .catch(error => console.error(error))
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ListBooks books={books} onRemoveBook={handleRemoveBook} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
  },
});

export default LibraryScreen;
