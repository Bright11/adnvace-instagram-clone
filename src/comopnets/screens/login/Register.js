import React,{useState} from 'react'
import { View, Text, KeyboardAvoidingView, TextInput, Pressable, SafeAreaView, Alert } from 'react-native'
import Mybutton from '../../utilities/Mybutton'
import loginstyle from './loginstyle'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase'




const Register = ({navigation}) => {
  const[name,setName]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const[cpassword,setCpassword]=useState("")

function registernow(){
 if(name && email&& password && cpassword){
 if(password===cpassword){
 try {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   // navigation.navigate("profilpic",{name})
    // ...
  }).then((user)=>(
   // Alert.alert("register"),
    navigation.navigate("profilpic",{name})
  ))
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
 } catch (e) {
  console.log(e)
 }
 }else{
  Alert.alert("password did not match")
 }
 }else{
 Alert.alert("make sure all forms are filed")
 }

}
  return (
    <KeyboardAvoidingView>
    <SafeAreaView style={loginstyle.loginsafeview}>
     <View  style={loginstyle.loginview}>
     <Text>Registraion page</Text>
      <TextInput  onChangeText={(name) => setName(name)} placeholder='User name' style={loginstyle.logininput}  placeholderTextColor="black" />
      <TextInput onChangeText={(email) => setEmail(email)} placeholder='email' style={loginstyle.logininput}  placeholderTextColor="black" />
      <TextInput onChangeText={(password) => setPassword(password)} secureTextEntry={true} placeholder='your password ****' style={loginstyle.logininput}  placeholderTextColor="black" />
      <TextInput onChangeText={(cpassword) => setCpassword(cpassword)} secureTextEntry={true} placeholder='confirm password ****' style={loginstyle.logininput}  placeholderTextColor="black" />
   <Pressable onPress={registernow} style={loginstyle.loginisubmit}>
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