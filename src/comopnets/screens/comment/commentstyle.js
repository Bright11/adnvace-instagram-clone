
import { StyleSheet } from 'react-native';
const commentsyle= StyleSheet.create({
    imgviewcontent:{
        flexDirection:"column"
    },
    imgview:{
        width:"100%",
        height:250
    },
    comtimg:{
        width:"100%",
        height:"100%"
    },
    postname:{
        fontFamily:'Roboto-BoldItalic',
        fontSize:16,
        alignSelf:"center"
    },
    posticons:{
        flexDirection:"row",
        marginBottom:10,
        marginTop:10,
        justifyContent:"space-around",
    },
    textview:{
        padding:10
    },

    textcomment:{
        fontSize:0,
        alignSelf:"center",
        fontFamily:'Roboto-BoldItalic',

    },
    commentinputview:{
        position:"absolute",
        width:"100%",
        bottom:0,
    },
    commenticontextview:{
        flexDirection:"row",
        width:"100%",
       alignItems:"center",
       backgroundColor:"gray"
    },
    
    messageinput:{
        width:"85%",
        color:"white",
        height:50,
        fontSize:16
    }
})

export default commentsyle