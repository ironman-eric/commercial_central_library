import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import ListBooks from './ListBooks';

const Library = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>My Books</Text>
      <ListBooks />
      <Button
        title="Add Book"
        onPress={() => navigation.navigate('BarCodeReader')}
      />
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

export default Library;
