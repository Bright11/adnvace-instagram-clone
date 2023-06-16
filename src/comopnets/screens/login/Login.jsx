import { View, Text, KeyboardAvoidingView, TextInput, Pressable, SafeAreaView } from 'react-native'
import React from 'react'
import Mybutton from '../../utilities/Mybutton'
import loginstyle from './loginstyle'

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={loginstyle.loginsafeview}>
    <KeyboardAvoidingView>
     <View  style={loginstyle.loginview}>
     <Text>Registraion page</Text>
      <TextInput placeholder='email' style={loginstyle.logininput}  placeholderTextColor="black" />
      <TextInput secureTextEntry={true} placeholder='your password ****' style={loginstyle.logininput}  placeholderTextColor="black" />
      
   <Pressable style={loginstyle.loginisubmit}>
    <Text style={loginstyle.loginisubmittext}>Login</Text>
   </Pressable>
   <Pressable onPress={()=>navigation.navigate("register")}>
    <Text style={loginstyle.haveanaccounttext}>Don't have an account! Register</Text>
   </Pressable>
     </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Login