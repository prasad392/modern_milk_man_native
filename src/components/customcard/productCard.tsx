
import * as React from 'react';
import { ImageSourcePropType, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

type customprops ={
    image:ImageSourcePropType;
    label:string;
    onPress?: ()=>void;
}
const ProductCard:React.FC<customprops> = ({image,label,onPress}) => (
            <>
                <Card style={styles.mycard} onPress={onPress}>
                    <Card.Cover source={image} style={styles.image} />
                    <Card.Content>
                    <Text style={styles.text}>{label}</Text>
                    </Card.Content>
                </Card>
            </>
);

export default ProductCard;

const styles = StyleSheet.create({
    mycard:{
        width:120,
        height:120,
        flexDirection:'column',
        alignItems:"center",
        justifyContent:"center",
    },
    image:{
        width:70,
        height:70,
        borderRadius:50,
        alignSelf: 'center'
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