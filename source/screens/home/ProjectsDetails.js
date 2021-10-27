import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import EditIcon1 from 'react-native-vector-icons/Foundation'
import BackIcon from 'react-native-vector-icons/Ionicons'
import EditIcon from 'react-native-vector-icons/AntDesign'
import UserIcon from 'react-native-vector-icons/Feather'
import SettingIcon from 'react-native-vector-icons/SimpleLineIcons'
import FilesIcon from 'react-native-vector-icons/Octicons'
import PlusIcon from 'react-native-vector-icons/Entypo'


export default class ProjectsDetails extends Component {

    componentDidMount() {
        // console.log(JSON.stringify(this.props.route.params.otherParam.name))
    }

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>

                <View style={{ marginTop: 10, marginLeft: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, marginRight: 275 }}>
                        <TouchableOpacity style={{}} onPress={() => this.props.navigation.goBack()}>
                            <BackIcon name='arrow-back' size={35} color='#000' />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 10 }}>
                        <TouchableOpacity>
                            <EditIcon name='edit' size={25} color='#000' />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginTop: 10, marginLeft: 10 }}>
                    <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 20, color: '#000' }}>
                        Project
                    </Text>
                </View>

                <View style={{ marginTop: 30, backgroundColor: "#fff", elevation: 5, marginLeft: 10, marginHorizontal: 10, marginBottom: 10, borderRadius: 10 }}>
                    <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-between", alignItems: 'center' }}>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Ubuntu-Bold', color: '#000' }}>{this.props.route.params.otherParam.name}</Text>
                        </View>
                        <Text style={{ marginRight: 10, backgroundColor: "#F29339", padding: 5, marginRight: 30, borderRadius: 5, color: "white", width: 80, textAlign: 'center', fontFamily: 'Ubuntu-Medium' }}>Panding</Text>
                    </View>


                    <View style={{ flexDirection: "row", marginTop: 5, marginLeft: 10, marginRight: 20 }}>
                        <View style={{ flex: 1, marginTop: 10 }}>
                            <View>
                                <Text style={{ marginTop: 10, fontSize: 12, fontFamily: 'Ubuntu-Bold', color: "#000" }}>{this.props.route.params.otherParam.start_date} | {this.props.route.params.otherParam.deadline}</Text>
                            </View >

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                <Text style={{ color: "#000", fontFamily: 'Ubuntu-Bold', fontSize: 12, }} >Created By:</Text>
                                <Text style={{ color: "#000", fontFamily: 'Ubuntu-Regular', fontSize: 13, }}> {this.props.route.params.otherParam.By}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                <Text style={{ color: "#000", fontFamily: 'Ubuntu-Bold', fontSize: 12, }}>Client: </Text>
                                <Text style={{ color: "#000", fontFamily: 'Ubuntu-Regular', fontSize: 13, }}> {this.props.route.params.otherParam.Client}</Text>
                            </View>
                        </View>

                        <View style={{ marginRight: 10, marginTop: 10 }}>
                            {this.props.route.params.otherParam.img}
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 30, backgroundColor: '#fff', elevation: 10, borderRadius: 10, padding: 5 }}>
                        <View >
                            <TouchableOpacity onPress={() => alert('Task')} style={{ borderRightWidth: 1, borderColor: 'grey', paddingLeft: 10, paddingRight: 15 }}>
                                <EditIcon1 name='page-edit' size={25} style={{ alignSelf: 'center' }} color='#fb8500' />
                                <Text style={{ fontSize: 12, fontFamily: 'Ubuntu-Medium', color: '#000' }}>Task</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity onPress={() => alert('FollwUP')} style={{ borderRightWidth: 1, paddingRight: 10, borderColor: 'grey' }}>
                                <UserIcon name='users' size={25} style={{ alignSelf: 'center' }} color='#fb8500' />
                                <Text style={{ fontSize: 12, fontFamily: 'Ubuntu-Medium', color: '#000' }}>Metting</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity onPress={() => alert('Metting')} style={{ borderRightWidth: 1, paddingRight: 15, borderColor: 'grey' }}>
                                <SettingIcon name='settings' size={25} style={{ alignSelf: 'center' }} color='#fb8500' />
                                <Text style={{ fontSize: 12, fontFamily: 'Ubuntu-Medium', color: '#000' }}>Issues</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity onPress={() => alert('Location')} style={{ borderRightWidth: 1, paddingRight: 13, borderColor: 'grey', }}>
                                <FilesIcon name='file-directory' size={25} style={{ alignSelf: 'center' }} color='#fb8500' />
                                <Text style={{ fontSize: 12, fontFamily: 'Ubuntu-Medium', color: '#000' }}>Files</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity onPress={() => alert('Sales')}>
                                <UserIcon name='user' size={25} style={{ alignSelf: 'center' }} color='#fb8500' />
                                <Text style={{ fontSize: 12, fontFamily: 'Ubuntu-Medium', color: '#000' }}>Memb..</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row',marginTop:20, alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10 }}>
                    <View style={{padding:5,borderRadius:10,backgroundColor:'#fb8500',elevation:3}}>
                        <Text style={{fontFamily:'Ubuntu-Regular',color:'#fff'}}>Project notes</Text>
                    </View>

                    <View>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProjectNotesCreate')}>
                            <PlusIcon name='plus' size={40} color='#000'/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView >
        )
    }
}

const st = StyleSheet.create({
    txt: {
        fontSize: 20,
        textAlign: 'center'
    }
})