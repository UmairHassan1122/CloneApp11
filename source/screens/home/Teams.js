import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, FlatList, ScrollView, Image, StyleSheet } from 'react-native'
import SettingIcon from 'react-native-vector-icons/AntDesign'
import BuildingIcon from 'react-native-vector-icons/FontAwesome'
import BellIcon from 'react-native-vector-icons/Feather'
import TeamsFlat from '../../components/Teams'
import { FlatGrid } from 'react-native-super-grid';
import Header from '../../components/Header'
import firestore from '@react-native-firebase/firestore'

export default class Teams extends Component {

    state = {
        dataSource: [],
        dataBackup: [], users: []
    }
    getUsers = async () => {

        const querySanp = await firestore().collection('users').where('name', '!=', 'Abdul Rehman').get()
        const allusers = querySanp.docs.map(docSnap => docSnap.data())
        this.setState({ users: allusers, dataSource: allusers, dataBackup: allusers });
    }
    componentDidMount() {
        this.getUsers();
    }

    filterItem = (value) => {


        if (value == " ") {
            this.setState({
                dataSource: dataBackup
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

        return (
            <View style={{ flex: 1, backgroundColor: '#F4F6FA' }}>

                <Header title='Teams' navi={() => this.props.navigation.navigate('Settings')} navig={() => this.props.navigation.navigate('BellScreen')} />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginRight: 10 }}>
                    <View style={{ marginLeft: 10, backgroundColor: '#fff', elevation: 3, flex: 1, borderRadius: 5 }}>
                        <TextInput style={{ marginLeft: 10 }} placeholder='Search' onChangeText={(value) => this.filterItem(value)}></TextInput>
                    </View>
                </View>


                <FlatGrid
                    itemDimension={112}
                    data={this.state.dataSource}
                    style={styles.gridView}
                    spacing={6}
                    renderItem={({ item }) => (
                        <TeamsFlat item={item} navi={this.props.navigation} />
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    gridView: {
        marginTop: 10,
        flex: 1,
    },

});
