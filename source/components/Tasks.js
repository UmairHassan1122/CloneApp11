
import React, { Component } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import ChatIcon from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Text, View, SafeAreaView, FlatList, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native'
import { thisExpression } from '@babel/types'
const ListData =
    [
        {
            Name: "Ali",
            date: "Oct27,2021",
            Member: 1,
            status: "in Progress",
            Type: "General",
            User: "Admin",
            img: <Image source={require('../../assets/images/1.png')} style={{ height: 70, width: 70, borderRadius: 5, }} />,
        },
        {
            Name: "Raza",
            date: "Oct27,2021",
            Member: 1,
            status: "in Progress",
            Type: "General",
            User: "Admin",
            img: <Image source={require('../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
        },
        {
            Name: "Abdul",
            date: "Oct27,2021",
            Member: 1,
            status: "in Progress",
            Type: "General",
            User: "Admin",
            img: <Image source={require('../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
        },
        {
            Name: "Rehman",
            date: "Oct27,2021",
            Member: 1,
            status: "in Progress",
            Type: "General",
            User: "Admin",
            img: <Image source={require('../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
        },
        {
            Name: "Ahmad",
            date: "Oct27,2021",
            Member: 1,
            status: "in Progress",
            Type: "General",
            User: "Admin",
            img: <Image source={require('../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
        },
        {
            Name: "Khan",
            date: "Oct27,2021",
            Member: 1,
            status: "in Progress",
            Type: "General",
            User: "Admin",
            img: <Image source={require('../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
        }
    ]
export default class Tasks extends Component {
    state = {
        visible1: true, visible2: false, indicator: false, loadUsers: false, dataSource: [], dataBackup: []
    }
    onClick = () => {
        this.setState({ visible1: this.state.visible1 ? true : true, visible2: this.state.visible2 ? false : false, loadUsers: false })


    }
    onClick1 = () => {
        this.setState({ visible1: false })
        this.setState({ visible2: true })
        this.setState({ indicator: true })
        this.setState({ loadUsers: true })




    }
    componentDidMount() {
        this.setState({
            dataBackup: ListData,
            dataSource: ListData
        })
    }
    filterItem = (value) => {

        if (value == " ") {
            this.setState({
                dataSource: this.state.dataBackup,
            })
        }
        else {
            var data = this.state.dataBackup;
            value = value.toLowerCase();
            data = data.filter(item => {
                return (item.Name.toLowerCase().match(value)

                );
            });
            this.setState({
                dataSource: data
            });
        }
    };
    header = () => {
        return (
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginRight: 10 }}>
                    <View style={{ marginLeft: 10, backgroundColor: '#fff', elevation: 3, flex: 1, borderRadius: 5 }}>
                        <TextInput style={{ marginLeft: 10 }} placeholder='Search' onChangeText={(value) => this.filterItem(value)}></TextInput>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "flex-end", marginRight: 10, marginTop: 10 }}>
                    <View>
                        <TouchableOpacity style={{ borderWidth: 1, borderColor: "blue", padding: 5, backgroundColor: this.state.visible1 ? "blue" : "white" }} onPress={() => { this.onClick() }}>
                            <Text style={{ color: this.state.visible1 ? "white" : "black" }}>ASSIGNED</Text>
                        </TouchableOpacity>
                    </View>
                    <View>

                        <TouchableOpacity style={{ borderWidth: 1, borderColor: "blue", padding: 5, backgroundColor: this.state.visible2 ? "blue" : "white" }} onPress={() => { this.onClick1() }}>
                            <Text style={{ color: this.state.visible2 ? "white" : "black" }}>Created</Text>
                        </TouchableOpacity>
                    </View>
                    <View>

                        <TouchableOpacity style={{ marginHorizontal: 5, backgroundColor: "grey", padding: 10, borderRadius: 10, elevation: 5, marginBottom: 10 }} onPress={() => { alert("sort") }}>
                            <FontAwesome5 name='bars' size={13} color='#000' />
                        </TouchableOpacity>
                    </View>




                </View>
            </View>
        );
    }


    renderItemComponent = (data) => {


        return (

            <View style={{ marginHorizontal: 10, marginVertical: 10, padding: 10, backgroundColor: '#fff', elevation: 3, borderRadius: 5 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        {data.item.img}
                        <Text style={{ textAlign: 'center', fontSize: 12, fontFamily: 'Ubuntu-Regular', color: "#000", marginTop: 5 }}>
                            admin
                        </Text>
                    </View>

                    <View style={{ marginLeft: 10, flex: 1 }}>
                        <View style={{}}>
                            <Text style={{ fontFamily: 'Ubuntu-Bold', color: '#000', fontSize: 16 }}>{data.item.Name}</Text>
                        </View>

                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontFamily: 'Ubuntu-Medium', color: '#000' }}>{data.item.date}</Text>
                            </View>

                            <View style={{ marginRight: 5 }}>
                                <Text style={{ fontFamily: 'Ubuntu-Medium', color: '#000' }}>General task</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <Text style={{ flex: 1, fontFamily: 'Ubuntu-Medium', color: '#000' }}>{data.item.Member} Member</Text>
                            <View style={{ marginRight: 10 }}>
                                <TouchableOpacity onPress={() => alert('chat')}>
                                    <ChatIcon name='ios-chatbox-ellipses-outline' size={25} color='#000' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ position: "absolute", right: 10, backgroundColor: "red", padding: 7, borderRadius: 10, top: -15 }}>
                        <Text style={{ color: "white" }}>In Progress</Text>
                    </View>
                </View>



            </View>
        )

    }
    render() {
        const { dataBackup, dataSource } = this.state
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <this.header />
                {
                    this.state.loadUsers ?
                        <FlatList
                            data={dataSource}
                            renderItem={item => this.renderItemComponent(item)}
                            keyExtractor={item => item.Name}
                        />
                        : null
                }
            </SafeAreaView>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        height: 300,
        margin: 10,
        backgroundColor: '#FFF',
        borderRadius: 6,
    },
    image: {
        height: '100%',
        borderRadius: 4,
    },
    headerStyle: {
        flex: 1,
        height: 40,
        width: '100%',
        backgroundColor: 'white', justifyContent: "center", alignItems: "center", color: "black", borderWidth: 4, borderColor: "white", marginBottom: 2
    }
});