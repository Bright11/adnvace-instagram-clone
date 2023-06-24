const { StyleSheet } = require("react-native");

const postimagestyle= StyleSheet.create({
    rawbottomviewholder:{
        flexDirection:"column",
        alignContent:"center",
        justifyContent:"center"
    },
    rawbottomview:{
       flexDirection:"row",
      alignContent:"center",
      width:"100%",
     justifyContent:"space-around",
     marginTop:20,
     marginBottom:40
    },
    rawbottompres:{
        alignSelf:'center',
        alignContent:"center",
        alignItems:"center",
        flexDirection:"column",
        padding:10,
        borderRadius:100
    },
    rawbottomviewtext:{
        color:"black",
        fontSize:16,
        fontFamily:'Roboto-BoldItalic',
    },
    myimageview:{
        width:200,
        height:150,
        marginTop:20,
        marginBottom:20
    },
    myimage:{
        width:"100%",
        height:"100%",
        resizeMode: 'contain',
        borderRadius: 16,
        overflow: "hidden",
    },
    rawbottompreschange:{
        backgroundColor:"red",
        padding:8,
        borderRadius:16,
        width:"100%",
        alignItems:'center',
        marginBottom:20,
        justifyContent:"center",
    },
    rawbottomviewtextchange:{
        fontSize:16,
        color:"white",
        fontFamily:'Roboto-BoldItalic',
    },
    actionsview:{
        width:200,
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center",
        marginRight:50,
        
    },
    messageview:{
        backgroundColor:"gray",
        height:50,
        flexDirection:"row",
        width:"100%",
        gap:5,
        alignItems:"center",
     
    },
    messageinput:{
        backgroundColor:"transprent",
        height:"100%",
        width:"80%"
    },
    postbtnpress:{
        alignContent:"center",
        alignItems:"center",
       backgroundColor:"gray",
    },
    postbtntext:{
        color:"white",
        fontSize:16,
        fontFamily:'Roboto-BoldItalic',
    }
})


export default postimagestyle