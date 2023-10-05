import React, { useState, useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
  Button,
  View,
  ActivityIndicator,
} from 'react-native';
import { Book, listBooks, deleteBook } from '../../data/Book';
import BookCard from '../book/BookCard';

const ListBooks = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Book[]>();

  useEffect(() => {
    listBooks()
      .then(books => setData(books))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const handleRemoveBook = (book: Book) => {    
    deleteBook(book)      
      .catch(error => console.error(error))      
  };

  const renderItem = (book: any) => {
    return (
      <View>
        <BookCard book={book} />
        <Button title="Remove Book" onPress={() => handleRemoveBook(book)} />
      </View>  
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => renderItem(item)}
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
});

export default ListBooks;
