import React, { Component } from 'react'
import { Text, Touchable, View } from 'react-native'
import BackIcon from 'react-native-vector-icons/Ionicons'
import EditIcon from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class Settings extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#F4F6FA', flex: 1 }}>
                <View style={{ marginTop: 10, marginLeft: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, marginRight: 275 }}>
                        <TouchableOpacity style={{}} onPress={() => this.props.navigation.goBack()}>
                            <BackIcon name='arrow-back' size={35} color='#000' />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 10 }}>
                        <TouchableOpacity>
                            <EditIcon name='edit' size={25} color='#000' />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginTop: 10, marginLeft: 10 }}>
                    <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 20, color: '#000' }}>
                        Settings
                    </Text>
                </View>

                <View>

                <View style={{marginHorizontal:20,marginTop:50,backgroundColor:'#fff',elevation:5,borderRadius:10}}>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',}}>
                            <Text style={{ fontFamily: 'Ubuntu-Medium',flex:1 ,padding:15}}>Status</Text>
                            <BackIcon name='chevron-forward' size={20} color='#000' style={{marginRight:10}} />
                        </TouchableOpacity>
                    </View>

                    <View style={{marginHorizontal:20,marginTop:20,backgroundColor:'#fff',elevation:5,borderRadius:10}}>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',}}>
                            <Text style={{ fontFamily: 'Ubuntu-Medium',flex:1 ,padding:15}}>Change Language</Text>
                            <BackIcon name='chevron-forward' size={20} color='#000' style={{marginRight:10}} />
                        </TouchableOpacity>
                    </View>

                    <View style={{marginHorizontal:20,marginTop:20,backgroundColor:'#fff',elevation:5,borderRadius:10}}>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',}} onPress={()=>this.props.navigation.navigate('ChangePassword')}>
                            <Text style={{ fontFamily: 'Ubuntu-Medium',flex:1 ,padding:15}}>Change Password</Text>
                            <BackIcon name='chevron-forward' size={20} color='#000' style={{marginRight:10}} />
                        </TouchableOpacity>
                    </View>

                    <View style={{marginHorizontal:20,marginTop:20,backgroundColor:'#fff',elevation:5,borderRadius:10}}>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',}}>
                            <Text style={{ fontFamily: 'Ubuntu-Medium',flex:1 ,padding:15}}>Switch Account</Text>
                            <BackIcon name='chevron-forward' size={20} color='#000' style={{marginRight:10}} />
                        </TouchableOpacity>
                    </View>

                    <View style={{marginHorizontal:20,marginTop:20,backgroundColor:'#FFAE42',elevation:5,borderRadius:10}}>
                        <TouchableOpacity style={{}}>
                            <Text style={{ fontFamily: 'Ubuntu-Bold' ,padding:15,textAlign:'center',fontSize:16,color:'#fff'}}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
