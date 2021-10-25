import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import ChatIcon from 'react-native-vector-icons/Fontisto'
import Foundation from 'react-native-vector-icons/Foundation'

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
                            <Text style={{ fontFamily: 'Ubuntu-Medium', fontSize: 12, color: '#000', flex: 1, alignSelf: 'center', marginTop: 5 }}> {this.props.item.name} </Text>

                        </View>

                        {/* <View>
                            <Text style={{fontFamily:'Ubuntu-Medium'}}> {this.props.item.date} </Text>
                        </View> */}
                    </View>
                </View>

                <View style={{width:70,height:35, flexDirection: 'row', backgroundColor: '#fff', elevation: 5, justifyContent: 'space-around', marginTop: 10, padding: 8,borderRadius:5}}>
                    <View style={{}}>
                        <TouchableOpacity onPress={()=>alert('Edit')}>
                            <Foundation name='page-edit' size={20} color='#000' />
                        </TouchableOpacity>
                    </View>

                    <View style={{borderRightWidth:1,borderColor:'grey'}}>
                        <Text> </Text>
                    </View>

                    <View style={{marginLeft:4}}>
                        <TouchableOpacity onPress={()=>alert('Chat')}>
                            <ChatIcon name='hipchat' size={20} color='#000' />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}
