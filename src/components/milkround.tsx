import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Milkround = () => {
  return (
    <View style={styles.container}>
      <View style={styles.milkround}>
          <Text style={styles.milktext}>JOIN OUR MILKROUND</Text>
          <Text style={[styles.text,{color:'#000'}]}>Fight plastic waste with your neighbours</Text>
          <View style={styles.milksearch}>
            <TextInput style={styles.input} placeholder='Check Your postcode' placeholderTextColor={'#000'} keyboardType='number-pad'/>
            <TouchableOpacity style={styles.searchbtn}><Text style={[styles.searchtext,{color:'#000'}]}>Search</Text></TouchableOpacity>
          </View>
      </View>
      <View style={styles.plasticwheel}>
        <View style={styles.plastic}>
            <View>
                <Image source={require('../../assets/plastic_wheel/cheering-bottle1.webp')} style={styles.plimage}/>
            </View>
            <View>
                <Text style={styles.plasticwheelnum}>140,616,173</Text>
                <Text style={styles.plasticwheeltext}>Plastic bottles prevented from polluting our planet*</Text>
            </View>
        </View>
        <View style={styles.wheel}>
            <View>
                <Image source={require('../../assets/plastic_wheel/wheelie-bin.webp')} style={styles.plimage}/>
            </View>
            <View>
                <Text style={styles.plasticwheelnum}>329,646</Text>
                <Text style={styles.plasticwheeltext}>Wheelie bins of plastic erased from existence</Text>
            </View>
        </View>
      </View>
    </View>
  )
}

export default Milkround

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#003049',
        color:'#fff',
        height:'auto',
        marginTop:20,
        flexDirection:'column',
    },
    milkround:{
        width:'95%',
        color:'#000',
        backgroundColor:'#fff',
        marginTop:10,
        marginBottom:10,
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:12,
    },
    milktext:{
      marginTop:20,
      color:'#000',
      fontSize:36,
      textAlign:'center',
      fontWeight:600,
    },
    input:{
        width:280,
        fontSize:18,
        borderRadius:8,
    },
    text:{
      textAlign:'center',
      fontSize:16,
      color:'#fff'
    },
    milksearch:{
        width:'95%',
        borderWidth:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:10,
        marginBottom:10,
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:12,
    },
    searchbtn:{
      width:90,
      height:42,
      textAlign:'center',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#60d394',
      borderTopRightRadius:10,
      borderBottomRightRadius:10,
    },
    searchtext:{
      fontSize:22,
      fontWeight:600,
      color:'#fff'
    },

    plasticwheel:{
      width:'95%',
      marginTop:10,
      marginBottom:10,
      marginLeft:'auto',
      marginRight:'auto',
      flexDirection:'column',
      gap:20,
    },

    plastic:{
      width:'100%',
      flexDirection:'row',
      alignItems:'center',
      gap:10
    },
    wheel:{
      width:'100%',
      flexDirection:'row',
      alignItems:'center',
      gap:10
    },
    plasticwheelnum:{
      color:'#fff',
      fontSize:32,
      fontWeight:600,
    },
    plimage:{
      width:60,
      height:60,
    },
    plasticwheeltext:{
      color:'#56cfe1',
      fontSize:12,
      fontWeight:600
    }
})