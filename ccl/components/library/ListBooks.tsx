import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {listBooks} from '../../data/Library';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 14,
    height: 44,
  },
});

const ListBooks = () => {
  const books = listBooks();
  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}
      />
    </View>
  );
};

export default ListBooks;
