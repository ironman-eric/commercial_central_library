/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import Library from './components/library/Library';
import BookBarCodeReader from './components/camera/BookBarCodeReader';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Library}
          options={{title: 'Library'}}
        />
        <Stack.Screen name="BarCodeReader" component={BookBarCodeReader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
