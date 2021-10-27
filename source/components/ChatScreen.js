import React, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { GiftedChat, Bubble, InputToolbar } from 'react-native-gifted-chat'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5'
import MIcon from 'react-native-vector-icons/AntDesign'
import MyIcon from 'react-native-vector-icons/MaterialIcons'
export default function ChatScreen({ route, navigation }) {
  const [messages, setMessages] = useState([]);
  const [user, setuser] = useState('')
  const uid = route.params.data.post.uid;

  useEffect(() => {
    auth().onAuthStateChanged(userExist => {
      if (userExist) {
        setuser(userExist)
      }

    })

    const docid = uid > user.uid ? user.uid + "-" + uid : uid + "-" + user.uid
    const messageRef = firestore().collection('chatrooms')
      .doc(docid)
      .collection('messages')
      .orderBy('createdAt', "desc")

    const unSubscribe = messageRef.onSnapshot((querySnap) => {
      const allmsg = querySnap.docs.map(docSanp => {
        const data = docSanp.data()
        if (data.createdAt) {
          return {
            ...docSanp.data(),
            createdAt: docSanp.data().createdAt.toDate()
          }
        } else {
          return {
            ...docSanp.data(),
            createdAt: new Date()
          }
        }

      })
      setMessages(allmsg)
    })


    return () => {
      unSubscribe()
    }


  })

  const onSend = (messageArray) => {
    const msg = messageArray[0]
    const mymsg = {
      ...msg,
      sentBy: user.uid,
      sentTo: uid,
      createdAt: new Date()
    }
    setMessages(previousMessages => GiftedChat.append(previousMessages, mymsg))
    const docid = uid > user.uid ? user.uid + "-" + uid : uid + "-" + user.uid

    firestore().collection('chatrooms')
      .doc(docid)
      .collection('messages')
      .add({ ...mymsg, createdAt: firestore.FieldValue.serverTimestamp() })

    auth().onAuthStateChanged(userExist => {
      if (userExist) {

        firestore().collection('users')
          .doc(uid)
          .update({
            MSG: true
          })



      }


    })


  }
  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <Appbar.Header style={{ backgroundColor: '#fff' }}>
        <Appbar.BackAction onPress={() => { navigation.goBack() }} />
        <Image
          source={{ uri: route.params.data.post.pic }}

          style={{ height: 40, width: 40, borderRadius: 20 }}

        />
        <Appbar.Content title={route.params.data.post.name} subtitle={route.params.data.post.status} />
      </Appbar.Header>

      <GiftedChat
        messages={messages}
        onSend={text => onSend(text)}
        user={{
          _id: user.uid,
        }}
        renderBubble={(props) => {
          return <Bubble
            {...props}
            wrapperStyle={{
              right: {
                backgroundColor: "green",

              }

            }}
          />
        }}

        renderInputToolbar={(props) => {
          return <InputToolbar {...props}
            containerStyle={{ borderTopWidth: 1.5, borderTopColor: 'green' }}
            textInputStyle={{ color: "black" }}
          />
        }}

      />
    </View>
  )
}
