import { View, Text, Pressable, FlatList, Image } from 'react-native'
import React from 'react'
import userspoststyle from './usersPoststyle'
import Entypo from 'react-native-vector-icons/Entypo';
import usersdata from './usersdata';
import AntDesign from 'react-native-vector-icons/AntDesign';
const UsersPost = () => {
  return (
    <View style={userspoststyle.firstviewuserspost}>
     <FlatList 
     data={usersdata}
     renderItem={({item})=>(
        <View  style={userspoststyle.postcontentview}>
     <View style={userspoststyle.userpostdotsview}>
  
        {/* User logo */}
        <View style={userspoststyle.logocontentholder}>
        <View style={userspoststyle.logoimageholder}>
        <Image style={userspoststyle.userpostimage} source={item.image}/>
        </View>
        <Text style={userspoststyle.userpostusernametext}>{item.name}</Text>
        </View>
        {/*  */}
    <Pressable>
    <Entypo  name="dots-three-vertical" size={24} color="black" />
    </Pressable>
      </View>
      {/* users contents */}
       <View >

       <View style={userspoststyle.postimagesview}>
            <Image style={userspoststyle.postimages} source={item.image}/>
        </View>
        <View style={userspoststyle.posticons}>
            <Pressable>
            <AntDesign  name="hearto" size={24} color="black" />
            </Pressable>
            <Pressable>
    <Entypo  name="message" size={24} color="black" />
    </Pressable>
    <Pressable>
    <Entypo  name="direction" size={24} color="black" />
    </Pressable>
    <Pressable>
    <Entypo  name="bookmark" size={24} color="black" />
    </Pressable>
        </View>
        <View style={userspoststyle.posttextviews}>
            <View>
                <Text style={userspoststyle.userlikestext}>{item.countmessage} likes</Text>
            </View>
            <Text style={userspoststyle.userlikestext}>{item.message}</Text>
        </View>
       </View>


       
      {/* the end */}
     </View>
     )}
     
     />
    </View>
  )
}

export default UsersPost