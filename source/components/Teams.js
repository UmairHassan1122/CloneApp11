import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import ChatIcon from 'react-native-vector-icons/Fontisto'

export default class Teams extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#fff', marginLeft: 10, padding: 10, marginRight: 10, marginBottom: 10 }}>
                <View style={{}}>
                    <View style={{}} >
                        {/* <Image source={require('../../assets/images/1.png')} style={{height:70,width:70}}/> */}
                        {this.props.item.img}
                    </View>

                    <View style={{}}>
                        <View style={{}}>
                            <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 15, color: '#000', flex: 1, alignSelf: 'center', marginTop: 5 }}> {this.props.item.name} </Text>

                        </View>

                        {/* <View>
                            <Text style={{fontFamily:'Ubuntu-Medium'}}> {this.props.item.date} </Text>
                        </View> */}
                    </View>
                </View>

                <View style={{ flexDirection: 'row', backgroundColor: '#fff', elevation: 5, justifyContent: 'space-around', marginTop: 10, padding: 5 }}>
                    <View >
                        <TouchableOpacity style={{}}>
                            <ChatIcon name='hipchat' size={20} color='#000' />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity>
                            <ChatIcon name='hipchat' size={20} color='#000' />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}
