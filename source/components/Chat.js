import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class Chat extends Component {
    render() {
        return (
            <View style={{ marginHorizontal: 10, marginVertical: 5,padding:10, backgroundColor: '#fff', elevation: 3, borderRadius: 5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{borderRadius:35,elevation:3,backgroundColor:'#fff'}} >
                        {/* <Image source={require('../../assets/images/1.png')} style={{height:70,width:70}}/> */}
                        {this.props.item.img}
                    </View>

                    <View style={{marginLeft:5,flex:1}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{fontFamily:'Ubuntu-Bold',fontSize:15,color:'#000',flex:1}}> {this.props.item.name} </Text>
                            <Text style={{fontSize:13,fontWeight:'bold'}}>{this.props.item.lastonline}</Text>
                        </View>

                        {/* <View>
                            <Text style={{fontFamily:'Ubuntu-Medium'}}> {this.props.item.date} </Text>
                        </View> */}

                        <View style={{marginTop:10}}>
                            <Text style={{fontFamily:'Ubuntu-Medium',fontSize:12}}> {this.props.item.lastchat} </Text>
                        </View>

                    </View>
                </View>

            </View>
        )
    }
}
