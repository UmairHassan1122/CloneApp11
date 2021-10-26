import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/SimpleLineIcons';
import Icon4 from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialBottomTabNavigator();
import Home from '../screens/home/Home'
import Teams from '../screens/home/Teams'
import Clients from '../screens/home/Clients';
import Projects from '../screens/home/Projects';
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
                                iconName = focused ? 'ios-chatbox-ellipses-outline' : 'ios-chatbox-ellipses-outline';
                                return <Icon1 name={iconName} size={20} color={color} />;
                            } else if (route.name === 'LoanScreen') {
                                iconName = focused ? 'users' : 'users';
                                return <Icon2 name={iconName} size={20} color={color} />;
                            } else if (route.name === 'SavingsScreen') {
                                iconName = focused ? 'user' : 'user';
                                return <Icon2 name={iconName} size={20} color={color} />;

                            } else if (route.name === 'Projects') {
                                iconName = focused ? 'briefcase' : 'briefcase';
                                return <Icon3 name={iconName} size={20} color={color} />;

                            } else if (route.name === 'Clients') {
                                iconName = focused ? 'handshake-o' : 'handshake-o';
                                return <Icon4 name={iconName} size={20} color={color} />;

                            }

                            // You can return any component that you like here!
                        },
                    })}  >
                    <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Chat', }} />
                    <Tab.Screen name="LoanScreen" component={Teams} options={{ tabBarLabel: 'Team', }} />
                    <Tab.Screen name="SavingsScreen" component={Home} options={{ tabBarLabel: 'My Page', }} />
                    <Tab.Screen name="Projects" component={Projects} options={{ tabBarLabel: 'Projects', }} />
                    <Tab.Screen name="Clients" component={Clients} options={{ tabBarLabel: 'Clients', }} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}