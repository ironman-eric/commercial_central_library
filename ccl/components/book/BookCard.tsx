import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { Card } from 'react-native-elements'

const BookCard = ({ book }: any) => {  
  return (
    <Card containerStyle={styles.card}>
      <Card.Title>{book.title}</Card.Title>
      <Card.Divider />
      <View>
        <Image
          resizeMode="cover"
          source={{ uri: book.cover }}
        />
        <Text>Author: {book.author}</Text>
        <Text>Pages: {book.number_of_pages}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 0,
  },
  author: {
    marginBottom: 10,
  },
});

export default BookCard;
