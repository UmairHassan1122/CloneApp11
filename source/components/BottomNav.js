import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createMaterialBottomTabNavigator();
import Home from '../screens/home/Home'
import Teams from '../screens/home/Teams'
export default class BottomNav extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    activeColor='red'
                    inactiveColor="gray"
                    barStyle={{ backgroundColor: 'white' }} screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === 'Home') {
                                iconName = focused ? 'home' : 'home';
                            } else if (route.name === 'LoanScreen') {
                                iconName = focused ? 'user' : 'user';
                            } else if (route.name === 'SavingsScreen') {
                                iconName = focused ? 'search1' : 'search1';
                            } else if (route.name === 'AccountScreen') {
                                iconName = focused ? 'setting' : 'setting';
                            } else if (route.name === 'ProfileScreen') {
                                iconName = focused ? 'user' : 'user';
                            }

                            // You can return any component that you like here!
                            return <Icon name={iconName} size={20} color={color} />;
                        },
                    })}  >
                    <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home', }} />
                    <Tab.Screen name="LoanScreen" component={Teams} options={{ tabBarLabel: 'Loan', }} />
                    <Tab.Screen name="SavingsScreen" component={Home} options={{ tabBarLabel: 'Savings', }} />
                    <Tab.Screen name="AccountScreen" component={Home} options={{ tabBarLabel: 'Settings', }} />
                    <Tab.Screen name="ProfileScreen" component={Home} options={{ tabBarLabel: 'Profile', }} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}