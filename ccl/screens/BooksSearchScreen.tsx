import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { searchBook } from '../data/OpenLibrary';
import { Book, saveBook } from '../data/Book';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
  item: {
    padding: 10,
    fontSize: 14,
    height: 44,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

const BooksSearchScreen = ({ navigation }: any) => {
  const [isLoading, setLoading] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [_, setSearchText] = useState('');

  function searchFilterFunction(text: any) {
    setSearchText(text);
  }

  function makeRequest() {
    setLoading(true);
    searchBook('9780980200447')
      .then(data => setBooks(data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }

  const handleItemPress = (book: Book) => {
    setLoading(true);
    saveBook(book)
      .then(() => navigation.navigate('Home'))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  const renderItem = (book: Book) => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleItemPress(book)}>
        <Text>{book.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator />}

      <TextInput
        style={styles.textInputStyle}
        onChangeText={text => searchFilterFunction(text)}
        underlineColorAndroid="transparent"
        placeholder="Search Here"
      />
      <Button title="Find Book" onPress={() => makeRequest()} />

      <FlatList data={books} renderItem={({ item }) => renderItem(item)} />
    </View>
  );
};

export default BooksSearchScreen;
