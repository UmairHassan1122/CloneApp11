import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Feather from 'react-native-vector-icons/dist/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';


const Tab = createBottomTabNavigator();
import Home from '../screens/home/Home'
import Teams from '../screens/home/Teams'
export default class BottomNav extends Component {

    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    tabBarOptions={{
                        showLabel: false,
                        backBehavior: 'history',
                        style: {
                            position: "absolute",
                            bottom: 2,
                            left: 2,
                            right: 2,
                            elevation: 0,
                            backgroundColor: 'white',
                            borderRadius: 8,
                            height: 60,
                            ...sty.shadow
                        }
                    }}>
                    <Tab.Screen name="Chat" component={Home} options={{
                        title: "Home Screen",
                        tabBarBadge: 2,

                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: "center", justifyContent: "center", top: 5 }}>

                                <Icon name="ios-chatbox-ellipses-outline" size={25} style={{ color: focused ? '#e32f45' : '#000' }} />
                                <Text style={{ color: focused ? '#e32f45' : '#000', fontSize: 12 }}>Chat</Text>
                            </View>
                        )
                    }} />
                    <Tab.Screen name="Chat1" component={Teams} options={{
                        title: "Home Screen",
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: "center", justifyContent: "center", top: 5 }}>
                                <Feather name="users" size={25} style={{ color: focused ? '#e32f45' : '#000' }} />
                                <Text style={{ color: focused ? '#e32f45' : '#000', fontSize: 12 }}>Team</Text>
                            </View>
                        )
                    }} />
                    <Tab.Screen name="Chat2" component={Home} options={{
                        title: "Home Screen",
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: "center", justifyContent: "center", top: 5 }}>
                                <Feather name="user" size={25} style={{ color: focused ? '#e32f45' : '#000' }} />
                                <Text style={{ color: focused ? '#e32f45' : '#000', fontSize: 12 }}>MyPage</Text>
                            </View>
                        )
                    }} />
                    <Tab.Screen name="Chat3" component={Home} options={{
                        title: "Home Screen",
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: "center", justifyContent: "center", top: 5 }}>
                                <MaterialCommunityIcons name="bag-checked" size={25} style={{ color: focused ? '#e32f45' : '#000' }} />
                                <Text style={{ color: focused ? '#e32f45' : '#000', fontSize: 12 }}>Projects</Text>
                            </View>
                        )
                    }} />
                    <Tab.Screen name="Chat4" component={Home} options={{
                        title: "Home Screen",
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: "center", justifyContent: "center", top: 5 }}>
                                <FontAwesome name="handshake-o" size={25} style={{ color: focused ? '#e32f45' : '#000' }} />
                                <Text style={{ color: focused ? '#e32f45' : '#000', fontSize: 12 }}>Clients</Text>
                            </View>
                        )
                    }} />

                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}


const sty = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});