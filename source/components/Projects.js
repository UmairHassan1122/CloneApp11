import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import ChatIcon from 'react-native-vector-icons/FontAwesome'
import { Divider } from 'react-native-elements';

export default class Projects extends Component {
    componentDidMount() {
        // alert(JSON.stringify(this.props.item))
    }
    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{  backgroundColor: "#fff", elevation: 5, marginLeft: 10, marginHorizontal: 10, marginBottom: 10, borderRadius: 10 }}>
                    <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-between", alignItems: 'center' }}>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Ubuntu-Bold', color: '#000' }}>{this.props.item.name}</Text>
                        </View>
                        <Text style={{ marginRight: 10, backgroundColor: "#F29339", padding: 5, marginRight: 30, borderRadius: 5, color: "white", width: 80, textAlign: 'center', fontFamily: 'Ubuntu-Medium' }}>{this.props.item.status}</Text>
                    </View>


                    <View style={{ flexDirection: "row", marginTop: 5, marginLeft: 10, marginRight: 20 }}>
                        <View style={{ flex: 1,marginTop:10 }}>
                            <View>
                                <Text style={{ marginTop: 10, fontSize: 12, fontFamily: 'Ubuntu-Bold', color: "#000" }}>{this.props.item.start_date} | {this.props.item.deadline}</Text>
                            </View >

                            <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:5 }}>
                                <Text style={{ color: "#000", fontFamily: 'Ubuntu-Bold', fontSize: 12, }} >Created By:</Text>
                                <Text style={{ color: "#000", fontFamily: 'Ubuntu-Regular', fontSize: 13, }}> {this.props.item.By}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:5  }}>
                                <Text style={{ color: "#000", fontFamily: 'Ubuntu-Bold', fontSize: 12, }}>Client: </Text>
                                <Text style={{ color: "#000", fontFamily: 'Ubuntu-Regular', fontSize: 13, }}>{this.props.item.Client}</Text>
                            </View>
                        </View>

                        <View style={{ marginRight: 10, marginTop: 10 }}>
                            {this.props.item.img}
                        </View>
                    </View>

                    <View style={{flexDirection:'row',marginBottom:10,marginTop:20,justifyContent:'space-evenly',marginHorizontal:10,backgroundColor:'#fff',elevation:5,borderRadius:5,height:70,alignItems:'center'}}>
                        <View style={{}}>
                            <Text style={st.txt}>{this.props.item.Tasks}</Text>
                            <Text>Tasks</Text>
                        </View>

                        <View style={{borderRightWidth:1.5,height:50,borderColor:'grey'}}>
                            <Text> </Text>
                        </View>

                        <View style={{}}>
                            <Text style={st.txt}>{this.props.item.Issues}</Text>
                            <Text>Issues</Text>
                        </View>

                        <View style={{borderRightWidth:1.5,height:50,borderColor:'grey'}}>
                            <Text> </Text>
                        </View>

                        <View style={{}}>
                            <Text style={st.txt}>{this.props.item.Members}</Text>
                            <Text>Members</Text>
                        </View>

                    </View>
                </View>
            </ScrollView >
        )
    }
}

const st = StyleSheet.create({
    txt: {
        fontSize: 20,
        textAlign:'center'
    }
})