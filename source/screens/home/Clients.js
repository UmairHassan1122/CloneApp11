import React, { Component } from 'react'
import { Text, View,FlatList ,Image,TouchableOpacity,TextInput} from 'react-native'
import Header from '../../components/Header'
import ClientsFlist from '../../components/ClientsFlist'

export default class Clients extends Component {

    state = {
        dataSource: [],
        dataBackup: []
    }

    componentDidMount() {
        const data = [
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 70, width: 70, borderRadius: 40, }} />,
                name: 'Umair Hassan',
                date: '07/03/2001',
                phone: '03431171815',
                lastonline: '2:30pm',
                lastchat: 'Hello I am Umair Hassan.',
                country:'Pakistan',
                email:'umair@builtinsoft',
                url:'https://umairr.xyz'

            },
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
                name: 'Farhan Ali',
                date: '06/07/2004',
                phone: '+923063884033',
                lastonline: '2:30pm',
                lastchat: 'Hello I am Farhan Ali.',
                country:'Pakistan',
                email:'umair@builtinsoft',
                url:'https://umairr.xyz'
            },
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
                name: 'Khawar',
                date: '17/11/1994',
                phone: '+923485126286',
                lastonline: '2:30pm',
                lastchat: 'Hello I am Khawar.',
                country:'Pakistan',
                email:'umair@builtinsoft',
                url:'https://umairr.xyz'
            },
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
                name: 'Abdur Rahman',
                date: '17/11/1994',
                phone: '+923485126286',
                lastonline: '2:30pm',
                lastchat: 'Hello I am Rahman.',
                country:'Pakistan',
                email:'umair@builtinsoft',
                url:'https://umairr.xyz'
            },
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
                name: 'Irfan Ali',
                date: '17/11/1994',
                phone: '+923485126286',
                lastonline: '2:30pm',
                lastchat: 'Hello I am Irfan.',
                country:'Pakistan',
                email:'umair@builtinsoft',
                url:'https://umairr.xyz'
            },
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
                name: 'Adeel Arif',
                date: '17/11/1994',
                phone: '+923485126286',
                lastonline: '2:30pm',
                lastchat: 'Hello I am Adeel.',
                country:'Pakistan',
                email:'umair@builtinsoft',
                url:'https://umairr.xyz'
            },
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
                name: 'Kashif',
                date: '17/11/1994',
                phone: '+923485126286',
                lastonline: '2:30pm',
                lastchat: 'Hello I am Kashif.',
                url:'https://umairr.xyz'
            },
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
                name: 'Shahjahan XD',
                date: '17/11/1994',
                phone: '+923485126286',
                lastonline: '2:30pm',
                lastchat: 'Hello I am Shah.',
                url:'https://umairr.xyz'
            },
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
                name: 'Romero Riaz',
                date: '17/11/1994',
                phone: '+923485126286',
                lastonline: '2:30pm',
                lastchat: 'Hello I am Romero.',
                country:'Pakistan',
                email:'umair@builtinsoft',
                url:'https://umairr.xyz'
            },
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
                name: 'Faizan Rasool',
                date: '17/11/1994',
                phone: '+923485126286',
                lastonline: '2:30pm',
                lastchat: 'Hello I am Faizan.',
                country:'Pakistan',
                email:'umair@builtinsoft',
                url:'https://umairr.xyz'
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
        const {dataSource}= this.state
        return (
            <View style={{flex:1}}>
                <Header title='Clients'/>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginRight: 10 }}>
                    <View style={{ marginLeft: 10, backgroundColor: '#fff', elevation: 3, flex: 1, borderRadius: 5 }}>
                        <TextInput style={{ marginLeft: 10 }} placeholder='Search' onChangeText={(value) => this.filterItem(value)}></TextInput>
                    </View>
                </View>

                <FlatList
                        style={{marginTop:10}}
                        data={dataSource}
                        renderItem={({ item }) => (
                                <ClientsFlist
                                    item={item}
                                />
                        )}
                        keyExtractor={item => item.id}

                    />
            </View>
        )
    }
}
