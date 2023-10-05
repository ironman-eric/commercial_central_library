import React from 'react';
import {  
  View,
  Button,
} from 'react-native';
import BookCard from './BookCard';

const BookSearchResult = ({ book, handleSaveBook }: any) => {  
  return (
    <View>
      <BookCard book={book} />
      <Button title="Add Book" onPress={() => handleSaveBook()} />
    </View>
  );
};

export default BookSearchResult;
