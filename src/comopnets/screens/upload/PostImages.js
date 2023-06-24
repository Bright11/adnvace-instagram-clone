import React, { useCallback, useLayoutEffect, useMemo, useRef,useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable,TextInput, Image, SafeAreaView, InputAccessoryView, KeyboardAvoidingView,TouchableOpacity, Alert } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import ImagePicker from 'react-native-image-crop-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import postimagestyle from './pstImagesstyle';
import { auth, db, storage } from '../../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';


const PostImages = ({navigation}) => {
const [myimage,setMymage]=useState("")
const [anotherpic,setAnotherpic]=useState(null)
const [firebesimg,setFirebesimg]=useState("")
const [caption,setCaption]= useState("")
// upload

const postmessage= async()=>{
try {
 if(myimage){
    const childPath = `post/${
  new Date().getTime()
 //auth?.currentUser.uid
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
      //  setFirebesimg(downloadURL)
       addDoc(collection(db,"post"),{
        caption,
        liks:parseInt(0),
        unliks:parseInt(0),
      })
     
     })
   }
 )
 }else{
  // no image
 }
} catch (e) {
  
}
}
// 
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
    width: 300,
    height: 500,
    cropping: true
  }).then(image => {
    // console.log(image);
    setMymage(image.path)
    setAnotherpic(true)
    refRBSheet.current.close();
  });
}
console.log(myimage);
  // 

  // take a picture
function takepicturenow(){
  ImagePicker.openCamera({
    width: 300,
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
    <View style={postimagestyle.myimageview}>
   {myimage?(
    <Image style={postimagestyle.myimage} source={{uri:myimage}}/>
   ):(
    <Image style={postimagestyle.myimage} source={{uri:"https://media.licdn.com/dms/image/D4E03AQFw45nOnVj7bA/profile-displayphoto-shrink_800_800/0/1683475115122?e=2147483647&v=beta&t=t62Bhf7gSRSLgOONQQLR0v-ecN-WPE0t2-xNYXIZBb8"}}/>
   )}
   </View>
   <View style={postimagestyle.actionsview}>
    {anotherpic?(
        <>
        {/* <Pressable style={postimagestyle.rawbottompreschange}  onPress={changeimage} >
        <Text style={postimagestyle.rawbottomviewtextchange} onPress={() => navigation.navigate("save", { myimage })}  >Add image</Text>
      </Pressable> */}
   
    <Pressable style={postimagestyle.rawbottompreschange}  onPress={changeimage} >
        <Text style={postimagestyle.rawbottomviewtextchange} >Change image</Text>
      </Pressable>
        </>
    ):(
        <Pressable style={postimagestyle.rawbottompreschange}   onPress={openbottomrawsheet} >
        {/* <Text style={postimagestyle.rawbottomviewtextchange} >Take action</Text> */}
        <AntDesign name="camerao" size={30} color="white" />
      </Pressable>
    )}
    </View>

  
    <KeyboardAvoidingView>
       <View style={postimagestyle.messageview}>
      <TextInput  onChangeText={(caption) => setCaption(caption)} style={postimagestyle.messageinput} placeholder='Text'  placeholderTextColor="grey"
      multiline={true}/>
      <TouchableOpacity style={postimagestyle.postbtnpress}>
        {/* <Text style={postimagestyle.postbtntext}>Create Post</Text> */}
       <Pressable style={{ backgroundColor:"white" }} onPress={postmessage}>
       <MaterialCommunityIcons name="send" color="black" size={50} />
       </Pressable>
      </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>


     <View>
   
    {/* <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} /> */}
 
  
    
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
    <View style={postimagestyle.rawbottomviewholder}>
    <View style={postimagestyle.rawbottomview}>
      <Pressable style={postimagestyle.rawbottompres} onPress={takepicturenow}>
       
        <AntDesign name="camerao" size={30} color="black" />
         <Text style={postimagestyle.rawbottomviewtext} >Take a Picture</Text>
      </Pressable>
      <Pressable style={postimagestyle.rawbottompres}>
      
        <AntDesign name="videocamera" size={30} color="black" />
          <Text style={postimagestyle.rawbottomviewtext}>Take a Video</Text>
      </Pressable>
      <Pressable style={postimagestyle.rawbottompres} onPress={takeingallery}>
       
        <MaterialCommunityIcons name="view-gallery-outline" size={30} color="black" /> 
        <Text style={postimagestyle.rawbottomviewtext}> gallery</Text>
      </Pressable>
      
      </View>
      <Pressable style={postimagestyle.rawbottompres} onPress={closebottomraw}>
      <AntDesign name="closecircle" size={20} color="black" />
      <Text style={postimagestyle.rawbottomviewtext}>Close</Text>
      </Pressable>
    </View>
    </RBSheet>
  </View>
   </SafeAreaView>
  );
};



export default PostImages;
