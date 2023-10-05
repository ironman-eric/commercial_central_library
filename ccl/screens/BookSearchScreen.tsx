import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  ActivityIndicator,
} from 'react-native';
import { searchBook } from '../data/OpenLibrary';
import { Book, saveBook } from '../data/Book';
import BookSearchResult from '../components/book/BookSearchResult';

const BookSearchScreen = ({ route, navigation }: any) => {
  //const { data } = route.params;
  const [isLoading, setLoading] = useState(false);
  const [book, setBook] = useState<Book>();
  const [searchText, setSearchText] = useState('');


  //searchFilterFunction(data);

  function searchFilterFunction(text: any) {
    setSearchText(text);
  }

  function makeRequest() {
    setLoading(true);
    searchBook('9781526617163')
      .then(data => setBook(data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }

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

      <TextInput
        style={styles.textInputStyle}
        onChangeText={text => searchFilterFunction(text)}
        underlineColorAndroid="transparent"
      />
      <Button title="Find a Book" onPress={() => makeRequest()} />

      {book && <BookSearchResult book={book} handleSaveBook={() => handleSaveBook(book)} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});

export default BookSearchScreen;
