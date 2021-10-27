import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, FlatList, ScrollView, Image,StyleSheet } from 'react-native'
import SettingIcon from 'react-native-vector-icons/AntDesign'
import BuildingIcon from 'react-native-vector-icons/FontAwesome'
import BellIcon from 'react-native-vector-icons/Feather'
import TeamsFlat from '../../components/Teams'
import { FlatGrid } from 'react-native-super-grid';
import Header from '../../components/Header'

export default class Teams extends Component {

    state = {
        dataSource: [],
        dataBackup: []
    }

    componentDidMount() {
        const data = [
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 72, width: 72,borderRadius:5 }} />,
                name: 'Umair',
                date: '07/03/2001',
                phone: '03431171815',

            },
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 72, width: 72,borderRadius:5 }} />,
                name: 'Farhan',
                date: '06/07/2004',
                phone: '+923063884033',
            },
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 72, width: 72,borderRadius:5 }} />,
                name: 'Khawar',
                date: '17/11/1994',
                phone: '+923485126286',
            },
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 72, width: 72, borderRadius:5}} />,
                name: 'Abdur ',
                date: '17/11/1994',
                phone: '+923485126286',
            },
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 72, width: 72,borderRadius:5 }} />,
                name: 'Irfan',
                date: '17/11/1994',
                phone: '+923485126286',
            },
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 72, width: 72,borderRadius:5 }} />,
                name: 'Adeel ',
                date: '17/11/1994',
                phone: '+923485126286',
            },
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 72, width: 72,borderRadius:5 }} />,
                name: 'Kashif',
                date: '17/11/1994',
                phone: '+923485126286',
            },
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 72, width: 72, borderRadius:5}} />,
                name: 'Shahja',
                date: '17/11/1994',
                phone: '+923485126286',
            },
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 72, width: 72, borderRadius:5}} />,
                name: 'Romero ',
                date: '17/11/1994',
                phone: '+923485126286',
            },
            {
                img: <Image source={require('../../../assets/images/1.png')} style={{ height: 72, width: 72,borderRadius:5 }} />,
                name: 'Faizan',
                date: '17/11/1994',
                phone: '+923485126286',
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
                
                <Header title='Teams' navi={()=>this.props.navigation.navigate('Settings')}  navig={()=>this.props.navigation.navigate('BellScreen')}/>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginRight: 10 }}>
                    <View style={{ marginLeft: 10, backgroundColor: '#fff', elevation: 3, flex: 1, borderRadius: 5 }}>
                        <TextInput style={{ marginLeft: 10 }} placeholder='Search' onChangeText={(value) => this.filterItem(value)}></TextInput>
                    </View>
                </View>


                    <FlatGrid
                        itemDimension={112}
                        data={dataSource}
                        style={styles.gridView}
                        // staticDimension={300}
                        // fixed
                        spacing={6}
                        renderItem={({ item }) => (
                                <TeamsFlat
                                    item={item}
                                />
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
