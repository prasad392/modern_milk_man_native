
import ProductCard from "@/src/components/customcard/productCard";
import Proitemcard from "@/src/components/customcard/proitemcard";
import Header from "@/src/components/header/header";
import { useCart } from "@/src/context/cartContext";
import { categories_Data, main_products_items, products_categories } from "@/src/data/mockdata";
import { useRoute } from "@react-navigation/native";

import { useEffect, useState } from "react";
import { Alert, ImageSourcePropType, Platform, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

type cata = {
    className: string;
    images: {
        img: any;
        label: string;
        cost: string;
    }[];
    header: string;
    para: string;
} 

type User = {
  image: ImageSourcePropType;
  label: string;
};

type ItemAdd = {
  image:ImageSourcePropType,
  label:any,
  cost:any
}
export default function Products() {
    const [selectcatdata,setSelectcatdata] = useState<cata | null>(null)
    const [selectedCategory,setSelectedCategory] = useState<string | null>(null);
 
    const route = useRoute();
    const params = route.params as { category?: string } | undefined;
    const category = params?.category;

  console.log('Received category:', category);
  useEffect(()=>{
    if(category){
      setSelectedCategory(category)
      const selectData = products_categories.find((c)=>(c.label === category))
      const catData = selectData && categories_Data.find((c)=>(c.className === selectData.label))
      console.log('catData',catData);
      setSelectcatdata(catData || null);
    }else{
      setSelectcatdata(null);
      setSelectedCategory(null);
    }
  },[category])

  const handleclik =(item:User)=>{
    setSelectedCategory(item.label)
    const selectData = products_categories.find((c)=>(c.label === item.label))
    const catData = selectData && categories_Data.find((c)=>(c.className === selectData.label))
     console.log(catData);
    setSelectcatdata(catData || null);
  }

  const {setCartItems} = useCart();

  const handleItemAdd=(item:ItemAdd)=>{
    Alert.alert(item.label,item.cost)
    setCartItems(prev=>[...prev,item])
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'}/>
          <View style={styles.products}>
            <Header/>
            <ScrollView contentContainerStyle={styles.scrollContent}>
              <View style={{backgroundColor:'#d7e5f1ff',height:'auto'}}>
                <View>
                  <Text style={styles.header}>Our PRODUCTS DELIVERED FRESH</Text>
                  <Text style={styles.headertext}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestiae esse maiores quo, possimus eveniet quia, qui aperiam, nobis deserunt corrupti modi eligendi suscipit consequuntur commodi illum voluptate at fugit.</Text>
                  <Text style={{color:"#000",marginVertical:30,marginHorizontal:30,fontSize:16,fontWeight:600}}>Categories You'll Love</Text>
                </View>
                <View style={styles.category}>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                      {
                        products_categories.map((item, index) => (
                          <View key={index} style={[styles.singleItem, selectedCategory === item.label &&  styles.selectedCard]}>
                            <ProductCard image={item.img} label={item.label} onPress={()=>handleclik({image:item.img,label:item.label})}/>
                          </View>
                        ))
                      }
                    </ScrollView>
                </View>
                  <View style={styles.productItems}>   
                      {
                        selectcatdata
                        ? <>
                            {
                              selectcatdata.images.map((item,index)=>(
                                <View key={index} style={styles.allproducts}>
                                  <Proitemcard image={item.img} label={item.label} cost={item.cost} onPress={()=>handleItemAdd({image:item.img,label:item.label,cost:item.cost})}/>
                                </View>
                              ))
                            }
                          </>
                        :
                          <>
                            {
                              main_products_items.map((item,index)=>(
                                <View key={index} style={styles.allproducts}>
                                    <Proitemcard image={item.img} label={item.label} cost={item.cost} onPress={()=>handleItemAdd({image:item.img,label:item.label,cost:item.cost})}/>
                                </View>
                              ))
                            }
                          </>
                      }
                  </View>
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
    products:{
      flex:1
    },
    scrollContent:{
      paddingTop: 70,
    },
    header:{
      fontSize:32,
      textAlign:'center',
      width:'80%',
      marginHorizontal:'auto',
      marginVertical:10,
      fontWeight:600,
    },
    selectedCard: {
      borderWidth: 2,
      borderColor: '#007BFF',
      borderRadius: 8,
    },
    headertext:{
      textAlign:'center',
      width:'90%',
      marginHorizontal:'auto',
      marginVertical:10,
    },
    category:{
      flexDirection:'row',
    },
    singleItem:{
      marginRight:15,
    },
    card:{
        width:'30%',
    },
    allproducts:{
      width:'90%',
      marginHorizontal:'auto',
      marginVertical:20,
    },
    productItems:{

    }
})