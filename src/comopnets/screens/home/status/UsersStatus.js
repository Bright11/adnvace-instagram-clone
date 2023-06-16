import { View, Text, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import usersdata from '../usersdata'
import usersstatusstyle from './usersStatusstyle'

const UsersStatus = () => {
  return (
    <View>
      <FlatList  
      horizontal={true}
      showsHorizontalScrollIndicator={false}
     data={usersdata}
     renderItem={({item})=>(
        <Pressable style={usersstatusstyle.statusview}>
            <View style={usersstatusstyle.statusviewimage}>
                <Image style={usersstatusstyle.statusimage} source={item.image} />
            </View>
            <Text style={usersstatusstyle.statususername}>{item.name}</Text>
        </Pressable>
     )}
     
     />
    </View>
  )
}

export default UsersStatus