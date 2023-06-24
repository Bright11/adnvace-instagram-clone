 
import { View, Text, Pressable, FlatList, Image, Alert  } from 'react-native'
import React, { useEffect, useState } from 'react'
import userspoststyle from './usersPoststyle'
import Entypo from 'react-native-vector-icons/Entypo';
//import usersdata from './usersdata';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { collection, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useNavigation } from '@react-navigation/native';

const UsersPost = () => {
  const navigation = useNavigation();
const [usersdatas,setUsersdatas]= useState([])
  useEffect(()=>{
    const unsub= onSnapshot(
      collection(db,"post"),
      (snapshot)=>{
        let list=[];
        snapshot.docs.forEach((doc)=>{
          list.push({id:doc.id,...doc.data()})
        });
     // setIsloading(true)
     setUsersdatas(list)
      }
    )
    return()=>{
      unsub()
    }
  },[usersdatas])

  // likes post
const likespost= async(item)=>{
  const washingtonRef = doc(db, "post",item.id);
  // Set the "capital" field of the city 'DC'
  updateDoc(washingtonRef, {
    likes: item.likes + 1,
  });
}
const dislikespost= async(item)=>{
 if(item.likes===0){

 }else{
  const washingtonRef = doc(db, "post",item.id);
  // Set the "capital" field of the city 'DC'
   updateDoc(washingtonRef, {
    // likes: item.likes - 1,
    dislikes: item.dislikes + 1,
  });
 }
}
  // the end
  return (
    <View style={userspoststyle.firstviewuserspost}>
     <FlatList 
     data={usersdatas}
     renderItem={({item})=>(
        <View  style={userspoststyle.postcontentview}>
     <View style={userspoststyle.userpostdotsview}>
  
        {/* User logo */}
        <View style={userspoststyle.logocontentholder}>
        <View style={userspoststyle.logoimageholder}>
        <Image style={userspoststyle.userpostimage} source={{uri:item?.image}}/>
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
            <Image style={userspoststyle.postimages}source={{uri:item?.image}}/>
        </View>
        <View style={userspoststyle.posticons}>
            <Pressable>
            <AntDesign  name="hearto" size={24} color="black" />
            </Pressable>
            <Pressable >
    <Entypo  name="message" size={24} color="black" />
    </Pressable>
    <Pressable onPress={() =>
              navigation.navigate("comment", {
                item,
              })
            }>
    <Entypo  name="direction" size={24} color="black" />
    </Pressable>
    <Pressable>
    <Entypo  name="bookmark" size={24} color="black" />
    </Pressable>
        </View>
        <View style={userspoststyle.posttextviews}>
            <View style={userspoststyle.likesviews}>
               <Pressable onPress={()=>likespost(item)}>
               <Text style={userspoststyle.userlikestext}>{item.likes}likes</Text>
               </Pressable>
               <Pressable onPress={()=>dislikespost(item)}>
               <Text style={userspoststyle.userlikestext}>{item.dislikes}dislikes</Text>
               </Pressable>
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