import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListBooks from '../components/library/ListBooks';

const LibraryScreen = () => {
  return (
    <View style={styles.container}>
      <ListBooks />
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
