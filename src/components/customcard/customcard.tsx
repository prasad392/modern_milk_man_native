import { plasticWaste } from '@/src/data/mockdata';
import * as React from 'react';
import { ImageSourcePropType, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

type customprops ={
    image:ImageSourcePropType;
    label:string;
    onPress?: ()=>void;
}
const Customcard:React.FC<customprops> = ({image,label,onPress}) => (
            <>
                <Card style={styles.mycard} onPress={onPress}>
                    <Card.Cover source={image} style={styles.image} />
                    <Card.Content>
                    <Text style={styles.text}>{label}</Text>
                    </Card.Content>
                </Card>
            </>
);

export default Customcard;

const styles = StyleSheet.create({
    mycard:{
        width:130,
        height:'auto',
    },
    image:{
        width:130,
        height:140,
    },
    text:{
        color:'#000',
        textAlign:'center',
        fontSize:10,
        fontWeight:800,
        margin:0,
        padding:0,
    }
})