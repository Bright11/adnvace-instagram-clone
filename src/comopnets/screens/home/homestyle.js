const { StyleSheet } = require("react-native");

const homestyle = StyleSheet.create({
    homeleftheader:{
        flexDirection:"row",
        alignItems:"center",
    },
    leftheadertext:{
        fontFamily:'Roboto-BoldItalic',
        fontSize:16,
    },

    homerightheader:{
        flexDirection:"row",
        gap:40,
    },
    homelikesicon:{
        backgroundColor:"red",
     alignSelf:"center",
     width:25,
     height:25,
        borderRadius:100,
        position:'absolute',
        left:15,
        bottom:15,
        overflow:"hidden",
        
    },
    homelikesicontext:{
        color:"white",
       fontSize:16,
       alignSelf:"center"
    },
    homerightheaderviewhearticon:{
        position:"relative",
    },
    messagepress:{
        position:"relative"
    },
    messagetextview:{
        position:"absolute",
        backgroundColor:"red",
        width:25,
        height:25,
        bottom:15,
        left:10,
        borderRadius:100,
        overflow:"hidden",

    },
    messagetext:{
        alignSelf:"center",
        color:"white"
    }
})

export default homestyle;