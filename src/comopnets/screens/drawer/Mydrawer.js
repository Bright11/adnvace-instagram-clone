import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Mysettings from './settings/Mysettings';

const Drawer = createDrawerNavigator();
const Mydrawer = () => {
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="settings" component={Mysettings} />
    {/* <Drawer.Screen name="Article" component={Article} /> */}
  </Drawer.Navigator>
  )
}

export default Mydrawer