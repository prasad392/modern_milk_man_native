import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>REPEAT ORDERING IS FLEXIBLE WITH NO COMMITMENT</Text>
      <Text style={styles.text}>Find out if we deliver to your neighbourhood.</Text>
      <TouchableOpacity style={styles.searchbtn}><Text style={[styles.searchtext,{color:'#000'}]}>Get Started</Text></TouchableOpacity>
    </View>
  )
}

export default Footer
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#003049',
        height:'100%',
        flexDirection:'column',
    },
    heading:{
        marginVertical:20,
        color:'#fff',
        fontSize:26,
        textAlign:'center',
        fontWeight:800
    },
    text:{
        color:"#fff",
        textAlign:'center',
        marginBottom:20,
        fontSize:14
    },
    searchbtn:{
      width:'60%',
      height:42,
      textAlign:'center',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#60d394',
      borderRadius:10,
      marginVertical:20,
      marginHorizontal:'auto'
    },
     searchtext:{
      fontSize:22,
      fontWeight:600,
      color:'#fff'
    },
})