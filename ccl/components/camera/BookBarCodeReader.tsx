import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const BookBarCodeReader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Camera</Text>
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
