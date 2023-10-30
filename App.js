import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './component/Home'; // Import your screen components
import Expense from './component/Expense';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}   
        options={{
          headerShown: false, // This removes the default header
        }}/>
        <Stack.Screen name="Expense" component={Expense}
         options={{
          headerShown: false, // This removes the default header
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
