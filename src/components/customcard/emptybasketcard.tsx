import { View, Text, StyleSheet, Image, TouchableOpacity, ImageSourcePropType } from 'react-native'
import React from 'react'

type props ={
    label:any;
    cost:any;
    img:ImageSourcePropType;
    onPress:()=>void;
}
const Emptybasketcard:React.FC<props> = ({label,cost,img,onPress}) => {
  return (
    <View style={styles.emptybasket}>
      <View>
        <Image source={img} style={styles.image}/>
      </View>
      <View style={styles.headertxt}>
        <Text style={{fontWeight:600,fontSize:16}}>{label}</Text>
      </View>
      <View style={styles.costtxt}>
        <Text style={{fontWeight:600,fontSize:16}}>From {cost}</Text>
      </View>
      <View style={styles.addbox}>
        <TouchableOpacity onPress={onPress}>
            <Text style={{fontWeight:600,fontSize:18}}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Emptybasketcard

const styles = StyleSheet.create({
    emptybasket:{
        backgroundColor:'#ffffff',
        width:190,
        height:'auto',
        borderRadius:12
    },
    image:{
        width:170,
        height:180,
        marginHorizontal:'auto',
        marginVertical:10,
        borderRadius:12
    },
    headertxt:{
        marginLeft:10,
        height:50
    },
    costtxt:{
        marginLeft:10
    },
    addbox:{
        marginVertical:10,
        backgroundColor:'#669bbc',
        width:'90%',
        marginHorizontal:'auto',
        alignItems:'center',
        height:30,
        justifyContent:'center',
        borderRadius:8,
    }
})