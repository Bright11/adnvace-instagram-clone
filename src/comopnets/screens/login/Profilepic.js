import React, { useCallback, useLayoutEffect, useMemo, useRef,useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable, Image, SafeAreaView, Alert } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import ImagePicker from 'react-native-image-crop-picker';
import profilesty from './profilesty';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { useNavigation } from '@react-navigation/native';
import { auth, db, storage } from '../../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';

const Profilepic = ({navigation, route}) => {
 // const navigation=useNavigation();
const [myimage,setMymage]=useState("")
const [anotherpic,setAnotherpic]=useState(null)
const [success,setSuccess]= useState(null)
const[imageur,setImageurl]=useState("")
const name = route.params?.name
// update profile
const updateprofle= async()=>{
  try {
    if(myimage){
      const childPath = `profile/${
       // new Date().getTime()
      auth?.currentUser.uid
     }/Math.random().toString(36)`;
   
     const response = await fetch(myimage);
     const blob = await response.blob();
 
     const storageRef = ref(storage, childPath);
 
     const uploadTask = uploadBytesResumable(storageRef, blob);
 
     uploadTask.on(
       "state_changed",
       (snapshot) => {
         const progress =
           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
         console.log("Upload is " + progress + "% done");
         switch (snapshot.state) {
           case "paused":
             console.log("Upload is paused");
             break;
           case "running":
             console.log("Upload is running");
            // setCheckupload("Upload is running, wait");
             break;
         }
       },
       (error) => {
         // Handle unsuccessful uploads
       },
       () => {
         const see = getDownloadURL(uploadTask.snapshot.ref).then(
           (downloadURL) => {
            setImageurl(downloadURL);
            // update

            updateProfile(auth.currentUser, {
              displayName: name, 
              photoURL:downloadURL
            }).then(async() => {
              // Profile updated!
             // navigation.navigate("main")
              // ...
              // add post
              await	setDoc(doc(db, "post", auth.currentUser.uid), {
                name: name,
                image:downloadURL,
                uuid:auth?.currentUser.uid,
                likes:parseInt(0),
                dislikes:parseInt(0),
                caption:"",
         }).then(async()=>{
       //users
       await addDoc(collection(db, "users"), {
        name: name,
        image:downloadURL,
        uuid:auth?.currentUser.uid,
        likes:parseInt(0),
        dislikes:parseInt(0),
        caption:"",
      }).then(()=>{
        navigation.navigate("main")
      })
      //  the end of users
         }).catch((e)=>{
          // error code
         })
              // 
            }).catch((error) => {
              // An error occurred
              // ...
            });


            // the end
           }
         );
       }
     );
 

    //  the end
 
 }
  } catch (e) {
    
  }
}

//}
// the end
useLayoutEffect(()=>{
navigation.setOptions({
    title:"Set up profile picture",
    headerStyle:{color:"black"}
})
},[navigation])
function changeimage(){
    setAnotherpic(null)
}
  // from gallery
function takeingallery(){
  ImagePicker.openPicker({
    width: 700,
    height: 500,
    cropping: true
  }).then(image => {
    // console.log(image);
    setMymage(image.path)
    setAnotherpic(true)
    refRBSheet.current.close();
  });
}
console.log("my",imageur);
console.log("news",imageur);
console.log("users",auth?.currentUser.displayName);
  // 

  // take a picture
function takepicturenow(){
  ImagePicker.openCamera({
    width: 700,
    height: 400,
    cropping: true,
  }).then(image => {
    console.log(image.path);
    setMymage(image.path)
    setAnotherpic(true)
  });
}

  // 
  const refRBSheet = useRef();

  function openbottomrawsheet(){
    refRBSheet.current.open();
  }
  function closebottomraw(){
    refRBSheet.current.close();
    setAnotherpic(true)

  }
  // renders
  return (
   <SafeAreaView   style={{
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent"
  }}>
    <View style={profilesty.myimageview}>
   {myimage?(
    <Image style={profilesty.myimage} source={{uri:myimage}}/>
   ):(
    <Image style={profilesty.myimage} source={{uri:"https://media.licdn.com/dms/image/D4E03AQFw45nOnVj7bA/profile-displayphoto-shrink_800_800/0/1683475115122?e=2147483647&v=beta&t=t62Bhf7gSRSLgOONQQLR0v-ecN-WPE0t2-xNYXIZBb8"}}/>
   )}
   </View>
   {/* <Pressable  onPress={()=>navigation.navigate("register")}>
    <Text>see {name} </Text>
   </Pressable> */}
     <View
  
  >
   
  

 {success?(
null
 ):(
  <>
     {anotherpic?(
        <> 
    <Pressable style={profilesty.rawbottompreschange}  onPress={changeimage} >
        <Text style={profilesty.rawbottomviewtextchange} >Change image</Text>
      </Pressable>
        </>
    ):(
        <Pressable style={profilesty.rawbottompreschange}   onPress={openbottomrawsheet} >
        <Text style={profilesty.rawbottomviewtextchange} >Take action</Text>
      </Pressable>
    )}
   {myimage &&  <Pressable style={profilesty.rawbottompres} onPress={updateprofle}>
      <Text style={profilesty.rawbottomviewtext}>Upload</Text>
      </Pressable>}
  </>
 )}
    
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={true}
      openDuration={250}
      height={300}
      customStyles={{
        container: {
          //justifyContent: "center",
          alignItems: "center"
        },
        wrapper: {
          backgroundColor: "transparent"
        },
        draggableIcon: {
          backgroundColor: "#000"
        }
      }}
    
    >
    <View style={profilesty.rawbottomviewholder}>
    <View style={profilesty.rawbottomview}>
      <Pressable style={profilesty.rawbottompres} onPress={takepicturenow}>
       
        <AntDesign name="camerao" size={30} color="black" />
         <Text style={profilesty.rawbottomviewtext} >Take a Picture</Text>
      </Pressable>
      <Pressable style={profilesty.rawbottompres}>
      
        <AntDesign name="videocamera" size={30} color="black" />
          <Text style={profilesty.rawbottomviewtext}>Take a Video</Text>
      </Pressable>
      <Pressable style={profilesty.rawbottompres} onPress={takeingallery}>
       
        <MaterialCommunityIcons name="view-gallery-outline" size={30} color="black" /> 
        <Text style={profilesty.rawbottomviewtext}> gallery</Text>
      </Pressable>
      
      </View>
      <Pressable style={profilesty.rawbottompres} onPress={closebottomraw}>
      <AntDesign name="closecircle" size={20} color="black" />
      <Text style={profilesty.rawbottomviewtext}>Close</Text>
      </Pressable>
      
    </View>
    </RBSheet>
  </View>
   </SafeAreaView>
  );
};




export default Profilepic