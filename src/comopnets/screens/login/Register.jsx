import { View, Text, KeyboardAvoidingView, TextInput, Pressable, SafeAreaView } from 'react-native'
import React from 'react'
import Mybutton from '../../utilities/Mybutton'
import loginstyle from './loginstyle'

const Register = ({navigation}) => {
  return (
    <KeyboardAvoidingView>
    <SafeAreaView style={loginstyle.loginsafeview}>
   
     <View  style={loginstyle.loginview}>
     <Text>Registraion page</Text>
      <TextInput placeholder='User name' style={loginstyle.logininput}  placeholderTextColor="black" />
      <TextInput placeholder='email' style={loginstyle.logininput}  placeholderTextColor="black" />
      <TextInput secureTextEntry={true} placeholder='your password ****' style={loginstyle.logininput}  placeholderTextColor="black" />
      <TextInput secureTextEntry={true} placeholder='confirm password ****' style={loginstyle.logininput}  placeholderTextColor="black" />
   <Pressable style={loginstyle.loginisubmit}>
    <Text style={loginstyle.loginisubmittext}>Create an account</Text>
   </Pressable>
   <Pressable onPress={()=>navigation.navigate("login")}>
    <Text style={loginstyle.haveanaccounttext}>Have an account! Login</Text>
   </Pressable>
     </View>
     </SafeAreaView>
    </KeyboardAvoidingView>
   
  )
}

export default Register