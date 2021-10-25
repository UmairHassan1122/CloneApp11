import React, { Component } from 'react'
import { Image, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import EditIcon from 'react-native-vector-icons/AntDesign'
import Phone from 'react-native-vector-icons/Feather'
import BuildingIcon from 'react-native-vector-icons/FontAwesome'
import Email from 'react-native-vector-icons/Fontisto'
import Url from 'react-native-vector-icons/Entypo'
import User from 'react-native-vector-icons/Feather'
import FollowIcon from 'react-native-vector-icons/AntDesign'
import MettingIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import LocationIcon from 'react-native-vector-icons/Octicons'
import SalesIcon from 'react-native-vector-icons/Ionicons'


export default class ClientsFlist extends Component {
    render() {
        return (
            <View>
                <View style={{ position: 'absolute', alignSelf: 'center', elevation: 10, backgroundColor: '#fff', borderRadius: 40 }}>
                    {this.props.item.img}
                </View>

                <View style={{ marginHorizontal: 10, marginTop: 30, marginVertical: 5, padding: 10, backgroundColor: '#fff', elevation: 3, borderRadius: 5 }}>
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                        <View>
                            <TouchableOpacity onPress={()=>alert('Edit')} style={{ backgroundColor: '#4169E1', elevation: 3, padding: 5, borderRadius: 5 }}>
                                <EditIcon name='edit' size={20} color='#fff' />
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginLeft: 10, marginRight: 10 }}>
                            <TouchableOpacity onPress={()=>alert('Delete')} style={{ backgroundColor: '#FF0000', elevation: 3, padding: 5, borderRadius: 5 }}>
                                <EditIcon name='delete' size={20} color='#fff' />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Ubuntu-Bold', color: '#000' }}>{this.props.item.name}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginRight: 10, backgroundColor: '#00FF00', padding: 5, borderRadius: 5 }}>
                            <Text style={{ fontFamily: 'Ubuntu-Bold', color: '#fff', fontSize: 12 }}>Ammount:</Text>
                            <Text style={{ fontFamily: 'Ubuntu-Bold', color: '#fff', fontSize: 12 }}> 1000</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <Phone name='phone' size={20} color='#fb8500' />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontFamily: 'Ubuntu-Regular', color: '#000' }}>{this.props.item.phone}</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <BuildingIcon name='building-o' size={20} color='#fb8500' />
                        <View style={{ marginLeft: 12 }}>
                            <Text style={{ fontFamily: 'Ubuntu-Regular', color: '#000' }}>{this.props.item.country}</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <Email name='email' size={20} color='#fb8500' />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontFamily: 'Ubuntu-Regular', color: '#000' }}>{this.props.item.email}</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <Url name='globe' size={20} color='#fb8500' />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontFamily: 'Ubuntu-Regular', color: '#000' }}>{this.props.item.url}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 10, backgroundColor: '#fff', elevation: 10, borderRadius: 10, padding: 5 }}>
                        <View >
                            <TouchableOpacity onPress={()=>alert('Contact')} style={{ borderRightWidth: 1,paddingRight:6,borderColor:'grey' }}>
                                <User name='user' size={25} style={{ alignSelf: 'center' }}color='#fb8500' />
                                <Text style={{ fontSize: 12, fontFamily: 'Ubuntu-Medium', color: '#000' }}>Contact</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity  onPress={()=>alert('FollwUP')} style={{ borderRightWidth: 1,paddingRight:6,borderColor:'grey' }}>
                                <FollowIcon name='bars' size={25} style={{ alignSelf: 'center' }} color='#fb8500'/>
                                <Text style={{ fontSize: 12, fontFamily: 'Ubuntu-Medium', color: '#000' }}>FollowUp</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity onPress={()=>alert('Metting')} style={{ borderRightWidth: 1,paddingRight:6,borderColor:'grey' }}>
                                <MettingIcon name='vibrate' size={25} style={{ alignSelf: 'center' }} color='#fb8500'/>
                                <Text style={{ fontSize: 12, fontFamily: 'Ubuntu-Medium', color: '#000' }}>Metting</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity onPress={()=>alert('Location')} style={{ borderRightWidth: 1,paddingRight:6,borderColor:'grey' }}>
                                <LocationIcon name='location' size={25} style={{ alignSelf: 'center' }} color='#fb8500'/>
                                <Text style={{ fontSize: 12, fontFamily: 'Ubuntu-Medium', color: '#000' }}>Location</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity onPress={()=>alert('Sales')}>
                                <SalesIcon name='ios-bar-chart-outline' size={25} style={{ alignSelf: 'center' }} color='#fb8500'/>
                                <Text style={{ fontSize: 12, fontFamily: 'Ubuntu-Medium', color: '#000' }}>Salespip..</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        )
    }
}
