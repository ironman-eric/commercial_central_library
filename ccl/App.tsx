/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import Library from './screens/LibraryScreen';
import SearchBook from './screens/BookSearchScreen';
import BookSearch from './components/book/BookSearch';
import BookBarCodeReader from './components/camera/BookBarCodeReader';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Library}
          options={{ title: 'Library' }}
        />
        <Stack.Screen name="SearchBook" component={SearchBook} options={{ title: 'Book Search' }} />
        <Stack.Screen name="BookBarCodeReader" component={BookBarCodeReader} options={{ title: 'Book Scan' }} />
        <Stack.Screen name="BookSearch" component={BookSearch} options={{ title: 'Book Search' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
