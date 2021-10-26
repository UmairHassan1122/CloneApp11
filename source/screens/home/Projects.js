import React, { Component } from 'react'
import { Text, View, ScrollView, TextInput, FlatList } from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button'
import { color } from 'react-native-elements/dist/helpers'
import Header from '../../components/Header'
import Project from '../../components/Projects'
const data = [{ Name: "Ali", start_date: "Oct 22,2021", deadline: "Dec 22,2021", status: "Pending", By: "admin admin", Client: "Accord", Tasks: 0, Issues: 0, Members: 6 }, { Name: "Raza", start_date: "Oct 22,2021", deadline: "Dec 22,2021", status: "Pending", By: "admin admin", Client: "Ahad", Tasks: 0, Issues: 0, Members: 6 }, { Name: "Abdul", start_date: "Oct 22,2021", deadline: "Dec 22,2021", status: "Pending", By: "admin admin", Client: "Ahad", Tasks: 0, Issues: 0, Members: 6 }]
export default class Projects extends Component {
    state = {
        visible1: true, visible2: false
    }
    onClick = () => {
        this.setState({ visible1: !this.state.visible1, visible2: !this.state.visible2 })


    }
    onClick1 = () => {
        this.setState({ visible1: false })
        this.setState({ visible2: true })



    }
    render() {

        return (
            <View style={{ flex: 1, backgroundColor: '#F4F6FA' }}>
                <Header title="PROJECT LIST" />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginRight: 10 }}>
                    <View style={{ marginLeft: 10, backgroundColor: '#fff', elevation: 3, flex: 1, borderRadius: 5 }}>
                        <TextInput style={{ marginLeft: 10 }} placeholder='Search' onChangeText={(value) => this.filterItem(value)}></TextInput>
                    </View>
                    <View style={{ height: 50, width: 120, marginLeft: 10, borderWidth: 1, borderColor: "white", flex: 0.6 }}>
                        <View style={{ flexDirection: "row", height: 50 }}>
                            <View style={{ backgroundColor: this.state.visible1 ? "blue" : "green" }}>
                                <Button title="Active" onPress={() => { this.onClick() }}></Button>

                            </View>
                            <View style={{ backgroundColor: this.state.visible2 ? "blue" : "purple" }}>
                                <Button color="#ff5c5c" title="Archi.." onPress={() => { this.onClick1() }} />

                            </View>
                        </View>
                    </View>
                </View>
                <ScrollView style={{ marginTop: 20 }}>
                    <FlatList

                        data={data}
                        renderItem={({ item }) => (

                            <Project item={item} />

                        )}
                        keyExtractor={item => item.Name}

                    />
                </ScrollView>

            </View >
        )
    }
}
