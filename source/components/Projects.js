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
                <View style={{ height: 240, width: "95%", backgroundColor: "#40E0D0", elevation: 5, marginLeft: 10, marginHorizontal: 15, marginBottom: 10, borderRadius: 10 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{
                            marginLeft: 20, marginTop: 20, fontSize: 25, fontWeight: "bold", color: "white"
                        }}>{this.props.item.Name}</Text>
                        <Text style={{ marginTop: 20, marginRight: 20, backgroundColor: "#6495ED", padding: 8, borderRadius: 5, color: "white" }}>{this.props.item.status}</Text>
                    </View>
                    <Text style={{ marginLeft: 20, fontSize: 20, color: "white" }}>{this.props.item.start_date}|{this.props.item.deadline}</Text>
                    <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 25, marginRight: "25%", justifyContent: "space-between" }}>
                        <ChatIcon name='user-o' size={70} color='#000' />
                        <View>
                            <Text style={{ color: "white" }} >Created By:</Text>
                            <Text style={{ color: "white" }}>{this.props.item.By}</Text>
                            <Text style={{ color: "white" }}>Client:</Text>
                            <Text style={{ color: "white" }}>{this.props.item.Client}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", marginHorizontal: 25, justifyContent: "space-around", elevation: 5, backgroundColor: 'white', marginTop: 7, borderRadius: 5 }}>
                        <View style={{ alignItems: "center" }}>
                            <Text style={st.txt}>{this.props.item.Tasks}</Text>
                            <Text>Tasks</Text>
                        </View>
                        <View style={{ borderRightWidth: 1, borderColor: 'grey' }}>
                            <Text> </Text>
                        </View>
                        <View style={{ marginLeft: 10, alignItems: "center" }}>
                            <Text style={st.txt}>{this.props.item.Issues}</Text>
                            <Text>Issues</Text>
                        </View>
                        <View style={{ borderRightWidth: 1, borderColor: 'grey' }}>
                            <Text> </Text>
                        </View>
                        <View style={{ marginLeft: 10, alignItems: "center" }}>
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
        fontSize: 20
    }
})