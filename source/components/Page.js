import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Button } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Page extends Component {

    state = {
        visible1: true, visible2: false
    }

    onClick = () => {
        this.setState({ visible1: this.state.visible1 ? true : true, visible2: this.state.visible2 ? false : false })
    }

    onClick1 = () => {
        this.setState({ visible1: false })
        this.setState({ visible2: true })
    }

    render() {
        return (
            <View>
                <View style={{ width: "95%", backgroundColor: "#fff", elevation: 5, marginLeft: 10, marginHorizontal: 15, marginBottom: 10, borderRadius: 10 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View>
                            <View style={{ marginLeft: 20, marginTop: 20 }}>
                                {this.props.item.img}
                            </View>
                            <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 20, fontFamily: "Ubuntu-Bold", color: "black" }}>Name: {this.props.item.Name}</Text>
                            <Text style={{ marginLeft: 20, marginTop: 2, fontSize: 14, fontFamily: "Ubuntu-Bold", color: "black",marginTop:5 }}>Rank: {this.props.item.level}</Text>
                            <Text style={{ marginLeft: 20, marginTop: 2, fontSize: 14, fontFamily: "Ubuntu-Bold", color: "black",marginTop:5 }}>Super Rank: {this.props.item.highLevel}</Text>

                        </View>



                        <View style={{ backgroundColor: "white", borderRadius: 5, elevation: 5, marginVertical: 5, marginRight: 5, padding: 5 }}>
                            <TouchableOpacity onPress={()=>{this.props.navi.navigate('Task')}} style={{ alignItems: "center", justifyContent: "center", borderBottomWidth: 1, borderColor: "grey", marginHorizontal: 5, marginBottom: 5 }}>
                                <FontAwesome5 name='tasks' size={16} color='#000' />
                                <Text style={{ fontSize: 11, marginBottom: 5, fontFamily: "Ubuntu-Light", color: "black" }}>Tasks</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", borderBottomWidth: 1, borderColor: "grey", marginHorizontal: 5, marginBottom: 5 }}>
                                <Feather name='users' size={15} color='#000' />
                                <Text style={{ fontSize: 11, marginBottom: 5, fontFamily: "Ubuntu-Light", color: "black" }}>Meetings</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", borderBottomWidth: 1, borderColor: "grey", marginHorizontal: 5, marginBottom: 5 }}>
                                <FontAwesome name='file' size={13} color='#000' />
                                <Text style={{ fontSize: 11, marginBottom: 5, fontFamily: "Ubuntu-Light", color: "black" }}>Files</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", borderBottomWidth: 1, borderColor: "grey", marginHorizontal: 5, marginBottom: 5 }}>
                                <AntDesign name='bars' size={18} color='#000' />
                                <Text style={{ fontSize: 11, marginBottom: 5, fontFamily: "Ubuntu-Light", color: "black" }}>Follow Up</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", borderBottomWidth: 1, borderColor: "grey", marginHorizontal: 5, marginBottom: 5 }}>
                                <MaterialIcons name='notifications-active' size={15} color='#000' />
                                <Text style={{ fontSize: 11, marginBottom: 5, fontFamily: "Ubuntu-Light", color: "black" }}>Reminder</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", marginHorizontal: 5, marginBottom: 5 }}>
                                <MaterialCommunityIcons name='av-timer' size={17} color='#000' />
                                <Text style={{ fontSize: 11, fontFamily: "Ubuntu-Light", color: "black" }}>Time Sheet</Text>
                            </TouchableOpacity>
                        </View>
                    </View >


                </View >




            </View >
        )
    }
}
