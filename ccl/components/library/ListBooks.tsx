import React from 'react';
import {
  FlatList,
  StyleSheet,
  Button,
  View,
} from 'react-native';
import BookCard from '../book/BookCard';

const ListBooks = ({ books, onRemoveBook }: any) => {
  const renderItem = (book: any) => {
    return (
      <View>
        <BookCard book={book} />
        <Button title="Remove Book" onPress={() => onRemoveBook(book)} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={({ item }) => renderItem(item)}
      />
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
