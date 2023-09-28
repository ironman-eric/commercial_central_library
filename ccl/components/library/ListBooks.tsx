import React, {useState, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import {listBooks} from '../../data/Library';
import {Book} from '../../data/Book';

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
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Book[]>();

  useEffect(() => {
    listBooks()
      .then(books => setData(books))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}
        />
      )}
    </View>
  );
};

export default ListBooks;
