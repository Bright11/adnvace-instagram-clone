const { StyleSheet } = require("react-native");

const usersstatusstyle= StyleSheet.create({
    statusview:{
        width:100,
        marginTop:20,
        alignItems:"center"
        
    },
    statusviewimage:{
        width:80,
        height:80,
        borderRadius:100,
        borderColor:"red"

    },
    statusimage:{
        width:"100%",
        height:"100%",
        resizeMode: 'contain',
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "red"

    },
    statususername:{
        alignSelf:"center",
        fontFamily:'Roboto-BoldItalic',
        fontSize:16,
    }
})

export default usersstatusstyle