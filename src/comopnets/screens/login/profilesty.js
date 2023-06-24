const { StyleSheet } = require("react-native");

const profilesty= StyleSheet.create({
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
        width:200,
        alignItems:'center',
        marginBottom:20
    },
    rawbottomviewtextchange:{
        fontSize:16,
        color:"white",
        fontFamily:'Roboto-BoldItalic',
    }
})

export default profilesty