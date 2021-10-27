import React, { Component } from 'react'
import { Text, View, ScrollView, FlatList, TouchableOpacity,Image } from 'react-native'
import Header from '../../components/Header'
import Page from '../../components/Page'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MyPageList from '../../components/MyPageList'
import { ActivityIndicator } from 'react-native-paper'

const Data =
    [
        {
            Name: "admin admin",
            level: "Admin",
            highLevel: "Super Admin",
            img: <Image source={require('../../../assets/images/1.png')} style={{ height: 120, width: 120, borderRadius: 5, }} />,
        }
    ]

const ListData =
    [
        {
            Name: "Ali",
            date: "Oct27,2021",
            Member: 1,
            status: "in Progress",
            Type: "General",
            User: "Admin",
            img: <Image source={require('../../../assets/images/1.png')} style={{ height: 70, width: 70, borderRadius: 5, }} />,
        },
        {
            Name: "Raza",
            date: "Oct27,2021",
            Member: 1,
            status: "in Progress",
            Type: "General",
            User: "Admin",
            img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
        },
        {
            Name: "Abdul",
            date: "Oct27,2021",
            Member: 1,
            status: "in Progress",
            Type: "General",
            User: "Admin",
            img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
        },
        {
            Name: "Rehman",
            date: "Oct27,2021",
            Member: 1,
            status: "in Progress",
            Type: "General",
            User: "Admin",
            img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
        },
        {
            Name: "Ahmad",
            date: "Oct27,2021",
            Member: 1,
            status: "in Progress",
            Type: "General",
            User: "Admin",
            img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
        },
        {
            Name: "Khan",
            date: "Oct27,2021",
            Member: 1,
            status: "in Progress",
            Type: "General",
            User: "Admin",
            img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
        }
    ]

export default class MyPage extends Component {

    state = {
        visible1: true, visible2: false, indicator: false, loadUsers: false
    }

    onClick = () => {
        this.setState({ visible1: this.state.visible1 ? true : true, visible2: this.state.visible2 ? false : false, loadUsers: false })


    }

    onClick1 = () => {
        this.setState({ visible1: false })
        this.setState({ visible2: true })
        this.setState({ indicator: true })
        setTimeout(() => {
            this.setState({ indicator: false, loadUsers: true })
        }, 1000);
    }

    render() {
        return (
            <View style={{ flex: 1,backgroundColor: '#F4F6FA' }}>

                <Header title="MY PAGE" navi={()=>this.props.navigation.navigate('Settings')}  navig={()=>this.props.navigation.navigate('BellScreen')}/>

                <ScrollView style={{ marginTop: 20 }}>

                    <FlatList
                        data={Data}
                        renderItem={({ item }) => (<Page item={item} navi={this.props.navigation} />)}
                        keyExtractor={item => item.Name}
                    />

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
                    <View style={{ position: "absolute", top: 285, left: 130 }}>
                        {
                            this.state.indicator ? <ActivityIndicator size="small" color="#0000ff" /> : null
                        }
                    </View>


                    {
                        this.state.loadUsers ?
                            <FlatList

                                data={ListData}
                                renderItem={({ item }) => (

                                    <MyPageList item={item} />

                                )}
                                keyExtractor={item => item.Name}

                            />
                            : null
                    }

                </ScrollView>
            </View>
        )
    }
}
