
import React, { Component } from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { Text, View, SafeAreaView, FlatList, StyleSheet, Image ,TouchableOpacity} from 'react-native'
import BackIcon from 'react-native-vector-icons/Ionicons'
import EditIcon from 'react-native-vector-icons/AntDesign'

const ListData =
    [
        {
            Name: "Ali",
            desc: 'You Have 1 Upcoming meeting "Aqdar App" in 15 Minutes',
            img: <Image source={require('../../../assets/images/1.png')} style={{ height: 70, width: 70, borderRadius: 5, }} />,
        },
        {
            Name: "Raza",
            desc: 'You Have 1 Upcoming meeting "Aqdar App" in 15 Minutes',
            img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
        },
        {
            Name: "Abdul",
            desc: 'You Have 1 Upcoming meeting "Aqdar App" in 15 Minutes',
            img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
        },
        {
            Name: "Rehman",
            desc: 'You Have 1 Upcoming meeting "Aqdar App" in 15 Minutes',
            img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
        },
        {
            Name: "Ahmad",
            desc: 'You Have 1 Upcoming meeting "Aqdar App" in 15 Minutes',
            img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
        },
        {
            Name: "Khan",
            desc: 'You Have 1 Upcoming meeting "Aqdar App" in 15 Minutes',
            img: <Image source={require('../../../assets/images/1.png')} style={{ height: 60, width: 60, borderRadius: 35, }} />,
        }
    ]
export default class BellScreen extends Component {
    renderItemComponent = (data) => {
        return (

            <View style={{ marginHorizontal: 10, marginVertical: 10, padding: 10, backgroundColor: '#F4F6FA', elevation: 3, borderRadius: 5 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <EvilIcons name='calendar' size={60} color='green' style={{ marginTop: 20 }} />

                    </View>

                    <View style={{ marginLeft: 10, flex: 1 }}>
                        <View style={{}}>
                            <Text style={{ fontFamily: 'Ubuntu-Regular', color: '#000', fontSize: 16 }}>Tasks</Text>
                        </View>

                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontFamily: 'Ubuntu-Bold', color: '#000' }}>{data.item.desc}</Text>
                            </View>

                        </View>

                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <Text style={{ flex: 1, fontFamily: 'Ubuntu-Medium', color: '#000', color: "grey" }}>18 Minutes ago</Text>

                        </View>
                    </View>

                </View>



            </View>
        )

    }
    render() {

        return (
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <View >
                    <View style={{ marginTop: 10, marginLeft: 10,marginRight: 310 }}>
                            <TouchableOpacity style={{}} onPress={()=>this.props.navigation.goBack()}>
                                <BackIcon name='arrow-back' size={35} color='#000' />
                            </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 10, marginLeft: 10 }}>
                        <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 25, color: '#000' }}>
                            Notifications
                        </Text>
                    </View>
                </View>

                <FlatList
                    data={ListData}
                    renderItem={item => this.renderItemComponent(item)}
                    keyExtractor={item => item.Name}
                />


            </View>

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