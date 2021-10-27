import React, { Component } from 'react'
import { Text, View, FlatList, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
import BuildingIcon from 'react-native-vector-icons/FontAwesome'
import BellIcon from 'react-native-vector-icons/Feather'
import SettingIcon from 'react-native-vector-icons/AntDesign'
import Chat from '../../components/Chat'
import Header from '../../components/Header'
export default class Home extends Component {

    state = {
        dataSource: [],
        dataBackup: []
    }

    componentDidMount() {
        const data = [
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
                name: 'Umair Hassan',
                date: '07/03/2001',
                phone: '03431171815',
                lastonline: '2:30pm',
                lastchat: 'Hello I am Umair Hassan.'

            },
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
                name: 'Farhan Ali',
                date: '06/07/2004',
                phone: '+923063884033',
                lastonline: '2:30pm',
                lastchat: 'Hello I am Farhan Ali.'
            },
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
                name: 'Khawar',
                date: '17/11/1994',
                phone: '+923485126286',
                lastonline: '2:30pm',
                lastchat: 'Hello I am Khawar.'
            },
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
                name: 'Abdur Rahman',
                date: '17/11/1994',
                phone: '+923485126286',
                lastonline: '2:30pm',
                lastchat: 'Hello I am Rahman.'
            },
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
                name: 'Irfan Ali',
                date: '17/11/1994',
                phone: '+923485126286',
                lastonline: '2:30pm',
                lastchat: 'Hello I am Irfan.'
            },
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
                name: 'Adeel Arif',
                date: '17/11/1994',
                phone: '+923485126286',
                lastonline: '2:30pm',
                lastchat: 'Hello I am Adeel.'
            },
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
                name: 'Kashif',
                date: '17/11/1994',
                phone: '+923485126286',
                lastonline: '2:30pm',
                lastchat: 'Hello I am Kashif.'
            },
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
                name: 'Shahjahan XD',
                date: '17/11/1994',
                phone: '+923485126286',
                lastonline: '2:30pm',
                lastchat: 'Hello I am Shah.'
            },
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
                name: 'Romero Riaz',
                date: '17/11/1994',
                phone: '+923485126286',
                lastonline: '2:30pm',
                lastchat: 'Hello I am Romero.'
            },
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
                name: 'Faizan Rasool',
                date: '17/11/1994',
                phone: '+923485126286',
                lastonline: '2:30pm',
                lastchat: 'Hello I am Faizan.'
            }
        ]; this.setState({
            dataBackup: data,
            dataSource: data
        })

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

        const { dataBackup, dataSource } = this.state
        return (
            <View style={{ flex: 1, backgroundColor: '#F4F6FA' }}>

                <Header title='Conversations' navi={()=>this.props.navigation.navigate('Settings')}  navig={()=>this.props.navigation.navigate('BellScreen')}/>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginRight: 10 }}>
                    <View style={{ marginLeft: 10, backgroundColor: '#fff', elevation: 3, flex: 1, borderRadius: 5 }}>
                        <TextInput style={{ marginLeft: 10 }} placeholder='Search' onChangeText={(value) => this.filterItem(value)}></TextInput>
                    </View>
                </View>

                <FlatList
                    style={{ marginTop: 10 }}
                    data={dataSource}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => alert('Chat Opened')}>
                            <Chat
                                item={item}
                            /></TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}

                />
            </View>
        )
    }
}
