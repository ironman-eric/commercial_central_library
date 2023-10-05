import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import ListBooks from '../components/library/ListBooks';

const LibraryScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <ListBooks />
      <Button
        title="Add Book"
        onPress={() => navigation.navigate('BookBarCodeReader')}
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

export default LibraryScreen;
