const { StyleSheet } = require("react-native");

const loginstyle= StyleSheet.create({
    loginsafeview:{
        backgroundColor:"#FFFFFF",
    },
    loginview:{
     
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        height:"100%",
        width:"100%",
      padding:16,
      borderRadius:10,
      backgroundColor:"#EA4C89",
        },
        logininput:{
            padding:10,
            width:"100%",
            backgroundColor:"white",
            color:"black",
           borderRadius:6,
           marginTop:10, 
           fontSize:13,
        },
        loginisubmit:{
            padding:10,
            width:"100%",
            backgroundColor:"white",
            color:"black",
           borderRadius:6,
           marginTop:10, 
           alignItems:'center'
        },
        loginisubmittext:{
            textTransform:"capitalize",
            fontSize:16,
        },
        haveanaccounttext:{
            fontSize:20
        }
})


export default loginstyle