import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

export default class Chat extends Component {

    render() {
        return (
            <View style={{ marginHorizontal: 10, marginVertical: 5, padding: 10, backgroundColor: '#fff', elevation: 3, borderRadius: 5 }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => { this.props.navi.navigate('ChatScreen', { data: { post: this.props.item } }) }}>
                    <View style={{ borderRadius: 35, elevation: 3, backgroundColor: '#fff' }} >
                        <Image source={{ uri: this.props.item.pic }} style={{ height: 60, width: 60, borderRadius: 35, }} />

                    </View>

                    <View style={{ marginLeft: 5, flex: 1 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 15, color: '#000', flex: 1 }}> {this.props.item.name} </Text>
                            <Text style={{ fontSize: 13, fontWeight: 'bold' }}>{this.props.item.status == "online" ? "online" : "2:30pm"}</Text>
                        </View>



                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontFamily: 'Ubuntu-Medium', fontSize: 12 }}> {this.props.item.status} </Text>
                        </View>

                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}
