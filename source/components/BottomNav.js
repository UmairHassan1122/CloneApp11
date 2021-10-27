import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/SimpleLineIcons';
import Icon4 from 'react-native-vector-icons/FontAwesome';
import Home from '../screens/home/Home'
import Teams from '../screens/home/Teams'   
import Teams1 from './Teams';
import Clients from '../screens/home/Clients';
import Projects from '../screens/home/Projects';
import MyPage from '../screens/home/MyPage';
import Tasks from './Tasks';
import BellScreen from '../screens/home/BellScreen'
import Settings from '../screens/home/Settings'
import ChangePassword from '../screens/auth/ChangePassword';
<<<<<<< HEAD
import TeamTaskCreate from '../screens/home/TeamTaskCreate';
import ProjectsDetails from '../screens/home/ProjectsDetails';
import ProjectNotesCreate from '../screens/home/ProjectNotesCreate';
=======

import SignupScreen from '../screens/home/SignupScreen';
import ChatScreen from '../components/ChatScreen'
>>>>>>> 0f349aa2ce81f8e2d0f6c3c9dfbef8c0f48ed99f

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
export default class BottomNav extends Component {
    MyTabs = ({navigation}) => {
        return (
            <Tab.Navigator
                activeColor='red'
                inactiveColor="gray"
                barStyle={{ backgroundColor: 'white' }} screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? 'ios-chatbox-ellipses-outline' : 'ios-chatbox-ellipses-outline';
                            return <Icon1 name={iconName} size={20} color={color} />;
                        } else if (route.name === 'Team') {
                            iconName = focused ? 'users' : 'users';
                            return <Icon2 name={iconName} size={20} color={color} />;
                        } else if (route.name === 'MyPage') {
                            iconName = focused ? 'user' : 'user';
                            return <Icon2 name={iconName} size={20} color={color} />;
                        } else if (route.name === 'Projects') {
                            iconName = focused ? 'briefcase' : 'briefcase';
                            return <Icon3 name={iconName} size={20} color={color} />;
                        } else if (route.name === 'Clients') {
                            iconName = focused ? 'handshake-o' : 'handshake-o';
                            return <Icon4 name={iconName} size={20} color={color} />;
                        }
                    },
                })}  >
                <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Chat', }} />
                <Tab.Screen name="Team" component={Teams} options={{ tabBarLabel: 'Team', }} />
                <Tab.Screen name="MyPage" component={MyPage} options={{ tabBarLabel: 'My Page', }} />
                <Tab.Screen name="Projects" component={Projects} options={{ tabBarLabel: 'Projects', }} />
                <Tab.Screen name="Clients" component={Clients} options={{ tabBarLabel: 'Clients', }} />
            </Tab.Navigator>
        );
    }
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={this.MyTabs} />
                    <Stack.Screen name="Task" component={Tasks} />
                    <Stack.Screen name="BellScreen" component={BellScreen} />
                    <Stack.Screen name="Settings" component={Settings} />
                    <Stack.Screen name="ChangePassword" component={ChangePassword} />
                    <Stack.Screen name="ChatScreen" component={ChatScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}