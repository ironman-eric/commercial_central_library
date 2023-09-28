import {Book} from './Book';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function listBooks(): Promise<Book[]> {
  const keys = await AsyncStorage.getAllKeys();

  return keys.map(book => ({
    title: book,
  }));
}
