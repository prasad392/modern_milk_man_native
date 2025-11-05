

import BasketCard from "@/src/components/customcard/basketCard";
import Emptybasketcard from "@/src/components/customcard/emptybasketcard";
import Header from "@/src/components/header/header";
import { useCart } from "@/src/context/cartContext";
import { main_products_items, products_categories } from "@/src/data/mockdata";
import {Ionicons} from '@expo/vector-icons';
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

import { Alert, ImageSourcePropType, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type userDel = {
  image:ImageSourcePropType;
  label:any,
  cost:any,
}
type TabParamList ={
  index:undefined;
  products: undefined;
  orders: undefined;
  basket: undefined;
  account: undefined;
}

type TabNavProp = BottomTabNavigationProp<TabParamList>



export default function Basket() {
  const {cartItems,setCartItems} = useCart();
  const handleDel=(item:userDel)=>{
    const res = cartItems.filter(c=>(c.label !== item.label))
    setCartItems(res)
  }
  const handleItemsclick=()=>{
    Alert.alert('item added')
  }
  const navigation = useNavigation<TabNavProp>();
  return (
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'}/>
          <View style={styles.basket}>
            <Header/>
            <ScrollView contentContainerStyle={styles.scrollContent}>
              {
                cartItems.length>0?
                <View style={styles.mycart}>
                  {
                    cartItems.map((item,index)=>(
                      <View key={index}>
                        <BasketCard image={item.image} label={item.label} cost={item.cost} onPress={()=>handleDel({image:item.image,label:item.label,cost:item.cost})}/>
                      </View>
                    ))
                  }
              </View>
              :
              <View style={styles.basketempty}>
                <View>
                  <Ionicons name='bag' size={120}/>
                </View>
                <View>
                  <Text style={{fontSize:24,fontWeight:600,marginVertical:20}}>YOUR BASKET IS EMPTY</Text>
                </View>
                <View>
                  <Text style={{fontSize:16}}>Add more products to your milkround</Text>
                </View>
                <View>
                  <TouchableOpacity style={styles.searchbtn} onPress={()=> navigation.navigate('products')}><Text style={[styles.searchtext,{color:'#000'}]} >View products</Text></TouchableOpacity>
                </View>
                <View style={{backgroundColor:'#b0c4b1',width:'100%'}}>
                  <View>
                    <Text style={{marginTop:20,marginLeft:20,fontSize:18,fontWeight:600}}>You might like to try this .....</Text>
                  </View>
                  <View style={styles.emptyItems}>
                    {
                      main_products_items.slice(6,12).map((item,index)=>(
                        <View key={index} style={styles.card}>
                          <Emptybasketcard label={item.label} cost={item.cost} img={item.img} onPress={()=>handleItemsclick()}/>
                        </View>
                      ))
                    }
                </View>
                </View>
              </View>
              }
            </ScrollView>
          </View>
      </View>
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
    mycart:{},
    basketempty:{
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column'
    },
    searchbtn:{
      width:200,
      height:42,
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
      color:'#fff',
      textAlign:'center',
    },
    emptyItems:{
      width:'100%',
      height:'auto',
      backgroundColor:'#b0c4b1',
      padding:10,
      flexDirection:'row',
      flexWrap:'wrap',
      marginVertical:20,
      gap:20
    },
    card:{
      width:'45%'
    }
})