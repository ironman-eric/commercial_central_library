import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import {Book, getBook} from '../../data/Book'

const BookBarCodeReader = () => {
  /*return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Camera</Text>
    </View>
  );*/

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Book>();
  
  useEffect(() => {
    getBook('9780980200447')      
      .then((data) => setData(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text>{data?.title}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
  },
  headerText: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    height: 44,
  },
});

export default BookBarCodeReader;
