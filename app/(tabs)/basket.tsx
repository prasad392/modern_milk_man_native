

import BasketCard from "@/src/components/customcard/basketCard";
import Header from "@/src/components/header/header";
import { useCart } from "@/src/context/cartContext";
import { ImageSourcePropType, Platform, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

type userDel = {
  image:ImageSourcePropType;
  label:any,
  cost:any,
}

export default function Basket() {
  const {cartItems,setCartItems} = useCart();
  const handleDel=(item:userDel)=>{
    const res = cartItems.filter(c=>(c.label !== item.label))
    setCartItems(res)
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'}/>
          <View style={styles.basket}>
            <Header/>
            <ScrollView contentContainerStyle={styles.scrollContent}>
              <View style={styles.mycart}>
                  {
                    cartItems.map((item,index)=>(
                      <View key={index}>
                        <BasketCard image={item.image} label={item.label} cost={item.cost} onPress={()=>handleDel({image:item.image,label:item.label,cost:item.cost})}/>
                      </View>
                    ))
                  }
              </View>
            </ScrollView>
          </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight :0,
    },
    basket:{
      flex:1,
      width:'100%',
    },
    scrollContent:{
      paddingTop: 70,
    },
    mycart:{

    }
})