import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native'
import BackIcon from 'react-native-vector-icons/Ionicons'
import LockIcon from 'react-native-vector-icons/Fontisto'

export default class ChangePassword extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F4F6FA' }}>
                <View>
                    <View style={{ marginTop: 10, marginLeft: 10, marginRight: 310 }}>
                        <TouchableOpacity style={{}} onPress={() => this.props.navigation.goBack()}>
                            <BackIcon name='arrow-back' size={35} color='#000' />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 10, marginLeft: 10 }}>
                        <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 25, color: '#000' }}>
                            Change Password
                        </Text>
                    </View>
                </View>

                <View style={{flexDirection:'row',marginTop:50,alignItems:'center',backgroundColor:'#fff',elevation:5,marginHorizontal:20,borderRadius:10}}> 
                    <View style={{flex:1,marginLeft:5}}>
                        <TextInput placeholder="Current Password" placeholderTextColor='#000' style={{fontFamily:'Ubuntu-Regular'}}></TextInput>
                    </View>

                    <View style={{marginRight:10}}>
                        <LockIcon name='locked' size={18} style={{opacity:0.5}}/>
                    </View>
                </View>

                <View style={{flexDirection:'row',marginTop:20,alignItems:'center',backgroundColor:'#fff',elevation:5,marginHorizontal:20,borderRadius:10}}> 
                    <View style={{flex:1,marginLeft:5}}>
                        <TextInput placeholder="New Password" placeholderTextColor='#000' style={{fontFamily:'Ubuntu-Regular'}}></TextInput>
                    </View>

                    <View style={{marginRight:10}}>
                        <LockIcon name='locked' size={18} style={{opacity:0.5}}/>
                    </View>
                </View>

                <View style={{flexDirection:'row',marginTop:20,alignItems:'center',backgroundColor:'#fff',elevation:5,marginHorizontal:20,borderRadius:10}}> 
                    <View style={{flex:1,marginLeft:5}}>
                        <TextInput placeholder="Confirm Password" placeholderTextColor='#000' style={{fontFamily:'Ubuntu-Regular'}}></TextInput>
                    </View>

                    <View style={{marginRight:10}}>
                        <LockIcon name='locked' size={18} style={{opacity:0.5}}/>
                    </View>
                </View>

                <View style={{marginHorizontal:20,marginTop:20,backgroundColor:'#FFAE42',elevation:5,borderRadius:10}}>
                        <TouchableOpacity style={{}}>
                            <Text style={{ fontFamily: 'Ubuntu-Bold' ,padding:15,textAlign:'center',fontSize:16,color:'#fff'}}>Change Password</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        )
    }
}
