
import * as React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { ImageSourcePropType, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

type customprops ={
    image:ImageSourcePropType;
    label:string;
    cost:string;
    onPress?: ()=>void;
}
const Proitemcard:React.FC<customprops> = ({image,label,cost,onPress}) => (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.mycard} >
                    <Image source={image} style={styles.image}  />
                    <View style={styles.cardInfo}>
                        <View style={styles.cardcon}>
                            <Text style={styles.text}>{label}</Text>
                            <Text>Donate a virtual pint of milk and support hubb's community fridge network.</Text>
                            <Text>From {cost}</Text>
                        </View>
                        <View style={styles.addbtn}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={{fontSize:16,fontWeight:800}}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
);

export default Proitemcard;

const styles = StyleSheet.create({
    mycard:{
        width:'103%',
        height:150,
        flexDirection:'row',
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'flex-start',
        gap:20,
        borderRadius:8
    },
    cardcon:{
        gap:10,
        flexDirection:'column',
        alignItems:'flex-start',
        width:'80%'
    },
    cardInfo:{

    },
    button:{
        backgroundColor:'#669bbc',
        width:60,
        alignItems:'center',
        height:30,
        justifyContent:'center',
        borderRadius:8
    },
    addbtn:{
        width:'70%',
        alignItems:'flex-end',
    },
    image:{
        width:100,
        height:110,
        borderRadius:18,
        marginLeft:10
    },
    text:{
        color:'#000',
        textAlign:'center',
        fontSize:14,
        fontWeight:800,
        margin:0,
        padding:0,
    }
})

