import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'
import { plasticWaste } from '../data/mockdata'
import Customcard from './customcard/customcard'



const Plasticwaste = () => {

  return (
    <View style={styles.container}>
      <View style={styles.reducecont}>
        <Text style={styles.freshtext}>FRESH WAYS TO REDUCE PLASTIC WASTE</Text>
      </View>
      <View style={styles.allcustomcard}>
            {
                plasticWaste.map((item,index)=>(
                    <View key={index} style={styles.card}>
                        <Customcard image={item.img} label={item.label} onPress={()=>Alert.alert(item.label)}/>
                    </View>
                ))
            }
      </View>
      <View style={styles.morningtext}>
        <Text style={styles.text}>We deliver Fresh milk, groceries and household products to your door - in returnable glass bottles, reusable containers or recyclable packaging. We also collect your empties (and whistle a new tune every morning).</Text>
      </View>
    </View>
  )
}

export default Plasticwaste

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        flexDirection:"column",
        height:'auto',
    },
    reducecont:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    freshtext:{
        color:'#000',
        fontWeight:600,
        fontSize:26,
        width:400,
        textAlign:'center',
        lineHeight:35,
        fontStyle:'italic'
    },
    allcustomcard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'flex-start',
        paddingHorizontal: 10,
        marginVertical:20,
        gap:20
    },
    card:{
        width:'30%',
    },
    morningtext:{
        width:'95%',
        marginHorizontal:'auto',
        marginVertical:10,
    },
    text:{
        textAlign:'center',
        fontSize:13,
        lineHeight:17,
        fontWeight:600,
        color:'#66666e',
    }
})