import React, { useState, useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  Button,
  View,
  ActivityIndicator,
} from 'react-native';
import { Book, listBooks, deleteBook, clearBooks } from '../../data/Book';

const ListBooks = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Book[]>();  

  function loadBooks() {
    listBooks()
      .then(books => setData(books))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    loadBooks()
  }, []);

  function makeRequest(book: Book) {
    setLoading(true);
    deleteBook(book)
      .then(() => loadBooks())
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Text style={styles.item}>{item.title}</Text> 
              <Button title="Remove Book" onPress={() => makeRequest(item)} />
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
  },
  item: {
    padding: 10,
    fontSize: 14,
    height: 44,
  },
});

export default ListBooks;
