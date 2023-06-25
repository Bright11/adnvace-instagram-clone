
import React,{useState,useEffect} from 'react';
import commentsyle from './commentstyle';
import { addDoc, collection, doc, getDoc, getDocs, query, serverTimestamp, where } from 'firebase/firestore';
import { auth, db } from '../../../firebase';
import { View, Text, ScrollView, Pressable, Image, KeyboardAvoidingView, TextInput, Alert } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
//import { TextInput } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Mycomment = ({route}) => {
    // const postid= route.params.item.id;
    const [getpost,setGetpost]= useState("")
    const[getcomment,setGetcomment]=useState([])
    const [comments,setComments]= useState("")
    // getting all post
    useEffect(()=>{
      postinfo();
      showcomment();
     
    },[getcomment])
    const postinfo = async()=>{
      const docRef = doc(db, "post", route.params.item.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        setGetpost(docSnap.data());
      } else {

        // doc.data() will be undefined in this case
        console.log("No such document!");
       //alert("no");
      }
    }
// getting users comment
const showcomment = async () => {
  const findcomment = collection(db, "comment");
  const allcomment = query(
    findcomment,
    where("post_id", "==", route.params.item.id)
  );
  const querySnapshot = await getDocs(allcomment);
  let allc = [];
  querySnapshot.forEach((doc) => {
    allc.push({ id: doc.id, ...doc.data() });
  });
  setGetcomment(allc);

  //the end
};
//console.log("cc",getcomment)
// post comment
    const sendcomment= async()=>{
        //  alert('cl')
        if (comments) {
          await addDoc(collection(db, "comment"), {
            comment:comments,
            post_id: route.params.item.id,
            name: auth?.currentUser.displayName,
            profile: auth?.currentUser.photoURL,
            timestamp: serverTimestamp(),
          })
            .then(() => {
              alert("success");
              //navigation.goBack();
              //  alert('seucce')
              //navigation.navigate("Home");
              setComments("");
            })
            .catch((error) => alert(error));
        } else {
          //alert('no comment')
        }
      };
      //the end
     // console.log(getcomment)
  return (
  
   <View style={{ flex:1 }}>
      <ScrollView style={{ flex:1,marginBottom:100 }}>
   <View style={commentsyle.imgviewcontent}>
     <View style={commentsyle.imgview}>
    <Image style={commentsyle.comtimg} source={{uri:getpost?.image}}/>
     </View>
     <Text style={commentsyle.postname}>{getpost.name}</Text>
     <View style={commentsyle.posticons}>
            <Pressable>
            <AntDesign  name="hearto" size={24} color="black" />
            </Pressable>
            <Pressable >
    <Entypo  name="message" size={24} color="black" />
    </Pressable>
    <Pressable>
    <Entypo  name="direction" size={24} color="black" />
    </Pressable>
    <Pressable>
    <Entypo  name="bookmark" size={24} color="black" />
    </Pressable>
        </View>
     <View style={commentsyle.textview}>
     {getcomment.map((items) => (
            <View style={commentsyle.commentinfoview}>
              <View style={commentsyle.commentimhviews }>
              {/* <Text >{items.name}</Text> */}
                <Image style={commentsyle.userimgcomment }
                  source={{ uri: items?.profile }}
                />
              </View>
              <View>
                <Text style={commentsyle.textstyle} >{items.comment}</Text>
              </View>
            </View>
          ))}
     </View>
      
    </View>
 </ScrollView>

<View style={commentsyle.commentinputview}>
<KeyboardAvoidingView>
  <View style={commentsyle.commenticontextview}>
  <TextInput style={commentsyle.messageinput} 
    multiline={true}
    onChangeText={(comments) => setComments(comments)}
    numberOfLines={4}placeholder='Comment'placeholderTextColor="white" />
  <Pressable onPress={sendcomment}>
  <MaterialCommunityIcons  name="send" size={60} color="black" />
  </Pressable>
  </View>
  </KeyboardAvoidingView>
</View>

   </View>

  )
}

export default Mycomment;