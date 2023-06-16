const { StyleSheet } = require("react-native");

const userspoststyle = StyleSheet.create({
    firstviewuserspost:{
        width:"100%",
        marginTop:20,
       //  backgroundColor:"blue"
       
    },
    postcontentview:{
        flexDirection:"column",
        marginBottom:20,
       
    },
    userpostdotsview:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingRight:10,
        paddingLeft:10,
        alignItems:"center",
        marginBottom:10
    },

    logoimageholder:{
        width:50,
        height:50,
        borderRadius:100,
        borderColor:"red"
    },
    userpostimage:{
        width:"100%",
        height:"100%",
        resizeMode: 'contain',
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "red"
    },
    logocontentholder:{
        flexDirection:"row",
        alignContent:"center",
        alignItems:"center",
        gap:10
    },
    userpostusernametext:{
        alignSelf:"center",
        fontFamily:'Roboto-BoldItalic',
        fontSize:16,
    },
    postimagesview:{
        width:"100%",
        height:250,
      
    },
    postimages:{
        width:"100%",
        height:"100%",
        resizeMode: 'contain',
        borderRadius: 6,
      
    },
    posticons:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10,
        alignItems:"center"
    },
    posttextviews:{
        flexDirection:"column",
        padding:10,
    },
    userlikestext:{
        fontFamily:'Roboto-BoldItalic',
        fontSize:16,
    }
})

export default userspoststyle