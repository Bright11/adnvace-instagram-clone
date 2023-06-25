import { View, Text, FlatList, Pressable, Image } from 'react-native'
import React,{useState, useEffect} from 'react'
//import usersdata from '../usersdata'
import usersstatusstyle from './usersStatusstyle'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../../../../firebase'

const UsersStatus = () => {
  const [usersdata,setUsersdata]= useState([])
  useEffect(()=>{
    const unsub= onSnapshot(
      collection(db,"users"),
      (snapshot)=>{
        let list=[];
        snapshot.docs.forEach((doc)=>{
          list.push({id:doc.id,...doc.data()})
        });
     // setIsloading(true)
     setUsersdata(list)
      }
    )
    // return()=>{
    //   unsub()
    // }
  },[usersdata])
  return (
    <View>
      <FlatList  
      horizontal={true}
      showsHorizontalScrollIndicator={false}
     data={usersdata}
     renderItem={({item})=>(
        <Pressable style={usersstatusstyle.statusview}>
            <View style={usersstatusstyle.statusviewimage}>
                <Image style={usersstatusstyle.statusimage} source={{ uri:item.image }} />
            </View>
            <Text style={usersstatusstyle.statususername}>{item.name}</Text>
        </Pressable>
     )}
     
     />
    </View>
  )
}

export default UsersStatus