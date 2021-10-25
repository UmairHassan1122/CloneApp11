import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Home from './source/screens/home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNav from './source/components/BottomNav';
import Teams from './source/screens/home/Teams';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="BottomNav" component={BottomNav} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Teams" component={Teams} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
