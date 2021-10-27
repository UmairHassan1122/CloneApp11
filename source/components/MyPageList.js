import React, { Component } from 'react'
import { Text, Touchable, TouchableOpacity, View } from 'react-native'
import ChatIcon from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default class MyPageList extends Component {

    render() {
        return (
            <View style={{ marginHorizontal: 10, marginVertical: 10, padding: 10, backgroundColor: '#fff', elevation: 3, borderRadius: 5 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        {this.props.item.img}
                        <Text style={{ textAlign: 'center', fontSize: 12, fontFamily: 'Ubuntu-Regular', color: "#000", marginTop: 5 }}>
                            admin
                        </Text>
                    </View>

                    <View style={{ marginLeft: 10, flex: 1 }}>
                        <View style={{}}>
                            <Text style={{ fontFamily: 'Ubuntu-Bold', color: '#000', fontSize: 16 }}>{this.props.item.Name}</Text>
                        </View>

                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontFamily: 'Ubuntu-Medium', color: '#000' }}>{this.props.item.date}</Text>
                            </View>

                            <View style={{ marginRight: 5 }}>
                                <Text style={{ fontFamily: 'Ubuntu-Medium', color: '#000' }}>General task</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <Text style={{ flex: 1, fontFamily: 'Ubuntu-Medium', color: '#000' }}>{this.props.item.Member} Member</Text>
                            <View style={{ marginRight: 10 }}>
                                <TouchableOpacity onPress={()=>alert('chat')}>
                                    <ChatIcon name='ios-chatbox-ellipses-outline' size={25} color='#000' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ position: "absolute", right: 10, backgroundColor: "red", padding: 7, borderRadius: 10, top: -8 }}>
                    <Text style={{ color: "white" }}>In Progress</Text>
                </View>

            </View>
        )
    }
}
