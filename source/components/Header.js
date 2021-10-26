import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import BuildingIcon from 'react-native-vector-icons/FontAwesome'
import BellIcon from 'react-native-vector-icons/Feather'
import SettingIcon from 'react-native-vector-icons/AntDesign'

export default class Header extends Component {

    render() {
        return (
            <View style={{}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginRight: 10, marginTop: 20 }}>
                    <View style={{ marginRight: 5 }}>
                        <TouchableOpacity>
                            <BuildingIcon name='building' size={30} color='#000' />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 5 }}>
                        <TouchableOpacity>
                            <BellIcon name='bell' size={30} color='#000' />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity>
                            <SettingIcon name='setting' size={30} color='#000' />
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{ marginTop: 20, marginLeft: 10 }}>
                    <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 25, color: '#000' }}>{this.props.title}</Text>
                </View>


            </View>
        )
    }
}
