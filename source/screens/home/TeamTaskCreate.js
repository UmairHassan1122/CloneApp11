import React, { Component } from 'react'
import { ScrollView, Text, TextInput, Touchable, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import EditIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MicIcon from 'react-native-vector-icons/SimpleLineIcons'
import PinIcon from 'react-native-vector-icons/Entypo'
import PlusIcon from 'react-native-vector-icons/Entypo'

export default class extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <ScrollView contentContainerStyle={{flexGrow:1}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, marginTop: 20,justifyContent:'space-between' }}>
                    <View style={{  }}>
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{ backgroundColor: 'red', padding: 5, paddingLeft: 17, paddingRight: 17, borderRadius: 10, elevation: 5 }}>
                            <Text style={{ textAlign: 'center', color: '#fff', fontFamily: 'Ubuntu-Regular' }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{}}>
                        <TouchableOpacity style={{ backgroundColor: 'green', padding: 5, paddingLeft: 19, paddingRight: 19, borderRadius: 10, elevation: 5 }}>
                            <Text style={{ color: '#fff', fontFamily: 'Ubuntu-Regular' ,textAlign:'center'}}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginTop: 20, marginLeft: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <EditIcon name='file-document-edit-outline' size={40} color='#FFAE42' />
                    </View>

                    <View style={{ marginTop: 10, marginLeft: 10 }}>
                        <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 25, color: '#FFAE42' }}>
                            Create Task
                        </Text>
                    </View>
                </View>

                <View style={{ marginTop: 50, marginHorizontal: 20, borderRadius: 10, backgroundColor: '#fff', elevation: 5 }}>
                    <TextInput placeholder='Task title*' style={{ marginLeft: 5, fontFamily: 'Ubuntu-Regular' }} />
                </View>

                <View style={{ height: 130, marginTop: 15, marginHorizontal: 20, borderRadius: 10, backgroundColor: '#fff', elevation: 5 }}>
                    <TextInput
                        style={{ flex: 1, marginLeft: 10, textAlignVertical: 'top', fontFamily: 'Ubuntu-Regular' }}
                        placeholder='Description (Max 400 Characters)' />
                </View>

                <View style={{ marginTop: 15, marginHorizontal: 20, borderRadius: 10, backgroundColor: '#fff', elevation: 5 }}>
                    <TouchableOpacity>
                        <MicIcon name='microphone' size={25} style={{ alignSelf: 'center', padding: 8 }} />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>
                    <View style={{ flex: 1, marginHorizontal: 20, backgroundColor: '#fff', elevation: 5, borderRadius: 10 }}>
                        <TextInput
                            style={{ marginLeft: 5 }}
                            placeholder='Start Date*' />
                    </View>

                    <View style={{ flex: 1, marginHorizontal: 20, backgroundColor: '#fff', elevation: 5, borderRadius: 10 }}>
                        <TextInput
                            style={{ marginLeft: 5 }}
                            placeholder='End Date*' />
                    </View>
                </View>

                <View style={{backgroundColor:'#fff',elevation:5,marginHorizontal:20,marginTop:15,borderRadius:10}}>
                    <TouchableOpacity style={{flexDirection:'row',paddingTop:12,paddingBottom:12,alignItems:'center'}}>
                        <View style={{marginLeft:5}}>
                            <PinIcon name='attachment' size={20}/>
                        </View>

                        <View style={{marginLeft:5,flex:1}}>
                            <Text>Add attachments</Text>
                        </View>

                        <View style={{marginRight:10}}>
                            <PlusIcon name='plus' size={25}/>
                        </View>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </View>
        )
    }
}
