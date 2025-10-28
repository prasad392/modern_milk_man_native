import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Neighbours = () => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.jointext}>
                JOIN YOUR NEIGHBOURS ON THE WASTE-FIGHTING MILKROUND
            </Text>
        </View>
        <View style={styles.imgbox}>
            <Image source={require('../../../assets/neighbours/bottles.webp')} style={styles.image}/>
            <Text style={styles.heading}>Sustainable</Text>
            <Text style={styles.text}>Get everyday essentials without unnecessary wasteful packaging, including farm-fresh milk delivery in returnable glass bottle</Text>
        </View>
        <View style={styles.imgbox}>
            <Image source={require('../../../assets/neighbours/how_it_online.webp')} style={styles.image2}/>
            <Text style={styles.heading}>Fush Free and flexible</Text>
            <Text style={styles.text}>What you need when you need it, with flexible repeat deliveries up to three times  week and one-off orders for those special treats.</Text>
        </View>
        <View style={styles.imgbox}>
            <Image source={require('../../../assets/neighbours/delivery-details.webp')} style={styles.image3}/>
            <Text style={styles.heading}>Delivered By 7:30am</Text>
            <Text style={styles.text}>Groceries on your doorstep before you've even thought about that first cuppa. No more forgotten milk, food waste, or trudging to the shops!</Text>
        </View>
    </View>
  )
}

export default Neighbours

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        height:'auto',
        width:'100%',
        backgroundColor:'#c7e1f7ff',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    jointext:{
        marginTop:20,
        fontSize:26,
        fontWeight:800,
        textAlign:'center'
    },
    imgbox:{
        width:'97%',
        marginVertical:20,
        marginHorizontal:'auto',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    heading:{
        fontSize:24,
        fontWeight:600,
    },
    text:{
        fontSize:14,
        textAlign:'center'
    },
    image:{
        width:100,
        height:70,
    },
    image2:{
        width:80,
        height:100,
    },
    image3:{
        width:100,
        height:100,
    }
})