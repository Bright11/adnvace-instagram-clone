import { View, Text, KeyboardAvoidingView, TextInput, Pressable, SafeAreaView,Alert } from 'react-native'
import React,{useEffect,useState} from 'react'
import Mybutton from '../../utilities/Mybutton'
import loginstyle from './loginstyle'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase'
import { useNavigation } from '@react-navigation/native'
const Login = () => {
 const navigation=useNavigation()
  const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
       navigation.replace("main");
       // const uid = user.uid;
      } 
    });
  },[])

  function loginuser(){
  // if(email&&password){
   try {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      navigation.navigate("main")
    })
    .catch((error) => {
      Alert.alert("error")
      const errorCode = error.code;
      const errorMessage = error.message;
    });
   } catch (e) {
    console.log(e)
   }
  // }else{
  //   Alert.alert("make sure all forms are filed")
  // }
  }
  return (
    <SafeAreaView style={loginstyle.loginsafeview}>
    <KeyboardAvoidingView>
     <View  style={loginstyle.loginview}>
     <Text>Login page</Text>
     <TextInput onChangeText={(email) => setEmail(email)} placeholder='email' style={loginstyle.logininput}  placeholderTextColor="black" />
      <TextInput onChangeText={(password) => setPassword(password)} secureTextEntry={true} placeholder='your password ****' style={loginstyle.logininput}  placeholderTextColor="black" />
      
   <Pressable style={loginstyle.loginisubmit} onPress={loginuser}>
    <Text style={loginstyle.loginisubmittext}>Login</Text>
   </Pressable>
   <Pressable onPress={()=>navigation.navigate("register")}>
    <Text style={loginstyle.haveanaccounttext}>Don't have an account! Register</Text>
   </Pressable>

   {/* <Pressable style={loginstyle.loginisubmit} onPress={()=>navigation.navigate("main")}>
    <Text style={loginstyle.haveanaccounttext}>Dopen</Text>
   </Pressable> */}
     </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Login