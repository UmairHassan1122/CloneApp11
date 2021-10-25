import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Feather from 'react-native-vector-icons/dist/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Home from '../screens/home/Home'
import Teams from './Teams';

const Tab = createMaterialBottomTabNavigator();
export default class BottomNav extends Component {
    render() {
        return (
                <Tab.Navigator
                    screenOptions={{headerShown:false}}
                    initialRouteName="Home"
                    activeColor="#f0edf6"
                    inactiveColor="#fff"
                    barStyle={{
                        backgroundColor:'#fff'
                    }}
                    >
                    <Tab.Screen name="Chat" component={Home} options={{
                        title: "Home Screen",
                        tabBarBadge: 2,
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: "center", justifyContent: "center", top: 5 }}>
                                <Icon name="ios-chatbox-ellipses-outline" size={25} style={{ color: focused ? '#E32F45' : '#000' }} />
                                <Text style={{ color: focused ? '#E32F45' : '#000', fontSize: 12 }}></Text>
                            </View>
                        )
                    }} />
                    <Tab.Screen name="Chat1" component={Teams} options={{
                        title: "Home Screen",
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: "center", justifyContent: "center", top: 5 }}>
                                <Feather name="users" size={25} style={{ color: focused ? '#E32F45' : '#000' }} />
                                <Text style={{ color: focused ? '#E32F45' : '#000', fontSize: 12 }}></Text>
                            </View>
                        )
                    }} />
                    <Tab.Screen name="Chat2" component={Home} options={{
                        title: "Home Screen",
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: "center", justifyContent: "center", top: 5 }}>
                                <Feather name="user" size={25} style={{ color: focused ? '#E32F45' : '#000' }} />
                                <Text style={{ color: focused ? '#E32F45' : '#000', fontSize: 12 }}></Text>
                            </View>
                        )
                    }} />
                    <Tab.Screen name="Chat3" component={Home} options={{
                        title: "Home Screen",
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: "center", justifyContent: "center", top: 5 }}>
                                <MaterialCommunityIcons name="bag-checked" size={25} style={{ color: focused ? '#E32F45' : '#000' }} />
                                <Text style={{ color: focused ? '#E32F45' : '#000', fontSize: 12 }}></Text>
                            </View>
                        )
                    }} />
                    <Tab.Screen name="Chat4" component={Home} options={{
                        title: "Home Screen",
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: "center", justifyContent: "center", top: 5 }}>
                                <FontAwesome name="handshake-o" size={25} style={{ color: focused ? '#E32F45' : '#000' }} />
                                <Text style={{ color: focused ? '#E32F45' : '#000', fontSize: 12 }}></Text>
                            </View>
                        )
                    }} />
                </Tab.Navigator>
        )
    }
}
const sty = StyleSheet.create({
    shadow: {
        shadowColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});