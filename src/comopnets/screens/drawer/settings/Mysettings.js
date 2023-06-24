import { View, Text, Pressable,Alert } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import homestyle from '../../home/homestyle';
import { auth } from '../../../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Mysettings = ({navigation}) => {
  const [ckeck,setCheck]= useState(null)
// 
useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const uid = user.uid;
      // ...
    } else {
   navigation.navigate("home")
    }
  });
},[ckeck])


// 
  const logoutnow= async ()=>{
   await signOut(auth).then(() => {
     navigation.navigate("home")
    }).catch((error) => {
      // An error happened.
     // Alert.alert(error)
    });
  }
  useLayoutEffect(()=>{
    navigation.setOptions({
      title:"",
      headerStyle:{color:"black"},
      // headerLeft: () => (
      //   <Pressable style={homestyle.homeleftheader}>
      //     <Text style={homestyle.leftheadertext}>Instagram</Text>
      //     <AntDesign name="down" size={20} color="black" />
      //   </Pressable>
      // ),
      headerRight: ()=>(
        <View style={{ marginRight:20 }}>
          {/* <Text style={{ color:"black" }}>hdnnnnnnni</Text> */}
          <Pressable  style={homestyle.homerightheaderviewhearticon} onPress={logoutnow}>
            
            <AntDesign  name="logout" size={24} color="black" />
           

            </Pressable>
       
        </View>
     )

    })
  },[navigation]);
  return (
    <View>
      <Text>Mysettings</Text>
    </View>
  )
}

export default Mysettings