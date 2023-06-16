import { View, Text, Pressable, FlatList, ScrollView } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign';
import homestyle from './homestyle';
import UsersStatus from './status/UsersStatus';
import UsersPost from '../userspost/UsersPost';

const Home = ({navigation}) => {

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
  <SafeAreaView>
     <ScrollView>
       {/* users status */}
       <View style={homestyle.users_Status} >
   <UsersStatus/>
    </View>
      {/* the end */}
      <View >
        <UsersPost/>
      </View>
     </ScrollView>
  </SafeAreaView>
  )
}

export default Home