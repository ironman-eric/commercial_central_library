/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import Library from './screens/LibraryScreen';
import SearchBook from './screens/BookSearchScreen';
import BookScanScreen from './screens/BookScanScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Library}
          options={{ title: 'Library' }}
        />
        <Tab.Screen name="SearchBook" component={SearchBook} options={{ title: 'Book Search' }} />
        <Tab.Screen name="BookScanScreen" component={BookScanScreen} options={{ title: 'Book Scan' }} />        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
