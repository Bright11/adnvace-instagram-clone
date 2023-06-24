import 'react-native-gesture-handler';
// my code
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './comopnets/screens/login/Register';
import Login from './comopnets/screens/login/Login';

import MainScreen from './comopnets/screens/main/MainScreen';
import Profilepic from './comopnets/screens/login/Profilepic';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Mycomment from './comopnets/screens/comment/Mycomment';

const Stack = createNativeStackNavigator();

const App = () => {
  const [islogin,setIslogin] = useState(null);
  // useEffect(()=>{
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setIslogin(true)
  //      // const uid = user.uid;
  //     } 
  //   });
  // },[])
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if(auth?.currentUser?.displayName){
        setIslogin(true)
      }else{
        setIslogin(null)
      }
    });
  },[])
    return (
     <NavigationContainer>
      <Stack.Navigator
      //initialRouteName='login'
      >
        {islogin?(
       <>
       <Stack.Screen name="main" component={MainScreen} />
      <Stack.Screen name="comment" component={Mycomment} />
     </>
        ):(
          <>
          <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="profilpic" component={Profilepic} />
     <Stack.Screen name="register" component={Register} />
     <Stack.Screen name="main" component={MainScreen} />

         </>
           
        )}
        
   
     
      </Stack.Navigator>
     </NavigationContainer>
    );
  
  
};

export default App;