import { View, Text, Pressable } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Home from '../home/Home';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import homestyle from '../home/homestyle';
import PostImages from '../upload/PostImages';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from '../search/Search';
import { NavigationContainer } from '@react-navigation/native';
import Mydrawer from '../drawer/Mydrawer';
import Comment from '../comment/Mycomment';

const Tab = createMaterialBottomTabNavigator();
const MainScreen = ({navigation}) => {
  useLayoutEffect(()=>{
    navigation.setOptions({
      title:"",
      headerStyle:{color:"black"},
      headerLeft: () => (
        <Pressable style={homestyle.homeleftheader}>
          <Text style={homestyle.leftheadertext}>Instagram</Text>
          <AntDesign name="down" size={20} color="black" />
        </Pressable>
      ),
      headerRight: ()=>(
        <View  style={homestyle.homerightheader}>
          {/* <Text style={{ color:"black" }}>hdnnnnnnni</Text> */}
          <Pressable  style={homestyle.homerightheaderviewhearticon}>
            
            <AntDesign  name="hearto" size={24} color="black" />
            <View style={homestyle.homelikesicon}>
        <Text style={homestyle.homelikesicontext}>20</Text>
            </View>

            </Pressable>
          <Pressable style={homestyle.messagepress}>
            <AntDesign  name="message1" size={24} color="black" />
            <View style={homestyle.messagetextview}>
              <Text style={homestyle.messagetext}>20</Text>
            </View>
            </Pressable>
        </View>
     )

    })
  },[navigation]);
  return (
      <Tab.Navigator
    activeColor="black"
    inactiveColor="#3e2465"
    // shifting={false}
    barStyle={{ backgroundColor:"white",paddingBottom: 5 }}
    // initialRouteName="home"
    >
    <Tab.Screen name="home" component={Home}
    options={{ 
     
      tabBarLabel:"Home",
      tabBarIcon:({color})=>(
        <MaterialCommunityIcons name="home" color="black" size={26} />
      )
     }}
    
    />
    {/* <Tab.Screen name='comment' component={Comment}
     options={{
      tabBarOptions: { showLabel: false,labeled:false },
    }}
    /> */}
    <Tab.Screen name="add" component={PostImages} 
    options={{ 
      tabBarIcon:({color})=>(
        <MaterialCommunityIcons name="plus-circle-outline" color="black" size={26} />
      )
     }}
    />

<Tab.Screen name="search" component={Search} 
    options={{ 
      tabBarIcon:({color})=>(
        <MaterialCommunityIcons name="magnify" color="black" size={26} />
      )
     }}
    
    />
    <Tab.Screen name="drawer" component={Mydrawer} 
    options={{ 
      
      tabBarIcon:({color})=>(
        <AntDesign name="setting" color="black" size={26} />
      )
     }}
    
    />
   
    {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
  </Tab.Navigator>
    
  )
}

export default MainScreen