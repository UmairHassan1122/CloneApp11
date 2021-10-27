import React, { Component } from 'react'
import { Text, View, ScrollView, TextInput, FlatList, Button, Image, TouchableOpacity } from 'react-native'
import Header from '../../components/Header'
import Project from '../../components/Projects'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { TouchableHighlight } from 'react-native-gesture-handler'


export default class Projects extends Component {
    state = {
        visible1: true,
        visible2: false,
        dataSource: [],
        dataBackup: []
    }

    componentDidMount() {
        const data = [
            {
                name: "Umair Hassan",
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 80, width: 80, borderRadius: 5, }} />,
                start_date: "Oct 22,2021",
                deadline: "Dec 22,2021",
                status: "Pending",
                By: "admin admin",
                Client: "Accord",
                Tasks: 0,
                Issues: 0,
                Members: 6
            },
            {
                name: "Faizan Rasool",
                start_date: "Oct 22,2021",
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 80, width: 80, borderRadius: 5, }} />,
                deadline: "Dec 22,2021", status: "Pending",
                By: "admin admin", Client: "Ahad",
                Tasks: 0,
                Issues: 0,
                Members: 6
            },
            {
                name: "Romero Riaz",
                start_date: "Oct 22,2021",
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 80, width: 80, borderRadius: 5, }} />,
                deadline: "Dec 22,2021", status: "Pending",
                By: "admin admin", Client: "Ahad",
                Tasks: 0,
                Issues: 0,
                Members: 6
            }
        ];
        this.setState({
            dataBackup: data,
            dataSource: data
        })

    }

    onClick = () => {
        this.setState({ visible1: !this.state.visible1, visible2: !this.state.visible2, visible2: false, visible1: true })
    }

    onClick1 = () => {
        this.setState({ visible2: true, visible1: false })
    }



    filterItem = (value) => {
        // this.setState({
        //     query:query,
        // });

        if (value == " ") {
            this.setState({
                dataSource: this.state.dataBackup,
            })
        }
        else {
            var data = this.state.dataBackup;
            value = value.toLowerCase();
            data = data.filter(item => {
                return (item.name.toLowerCase().match(value)

                );
            });
            this.setState({
                dataSource: data,
            });
        }
    };

    render() {
        const { dataSource } = this.state
        return (
            <View style={{ flex: 1, backgroundColor: '#F4F6FA' }}>
                <Header title="Project List" navi={() => this.props.navigation.navigate('Settings')} navig={() => this.props.navigation.navigate('BellScreen')} />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginRight: 10 }}>
                    <View style={{ marginLeft: 10, backgroundColor: '#fff', elevation: 3, flex: 1, borderRadius: 5 }}>
                        <TextInput style={{ marginLeft: 10 }} placeholder='Search' onChangeText={(value) => this.filterItem(value)}></TextInput>
                    </View>

                    <View style={{ flexDirection: "row", marginLeft: 10, justifyContent: "flex-end", marginRight: 0, alignItems: 'center' }}>

                        <View>
                            <TouchableOpacity style={{ borderWidth: 1, borderColor: "blue", padding: 5, backgroundColor: this.state.visible1 ? "blue" : "white" }} onPress={() => { this.onClick() }}>
                                <Text style={{ color: this.state.visible1 ? "white" : "black", fontSize: 11 }}>Active</Text>
                            </TouchableOpacity>
                        </View>

                        <View >
                            <TouchableOpacity style={{ borderWidth: 1, borderColor: "blue", padding: 5, backgroundColor: this.state.visible2 ? "blue" : "white" }} onPress={() => { this.onClick1() }}>
                                <Text style={{ color: this.state.visible2 ? "white" : "black", fontSize: 11 }}>Archive</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <TouchableOpacity style={{ marginLeft: 5, backgroundColor: "grey", padding: 10, borderRadius: 10, elevation: 5, marginBottom: 10 }} onPress={() => { alert("sort") }}>
                            <FontAwesome5 name='bars' size={13} color='#000' />
                        </TouchableOpacity>
                    </View>

                </View>

                <FlatList
                    style={{ marginTop: 20 }}
                    data={dataSource}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProjectsDetails',
                         {
                           
                            otherParam:item
                          })} >
                            <Project item={item} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.Name}

                />

            </View >
        )
    }
}
