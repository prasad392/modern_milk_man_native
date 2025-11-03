
import Header from "@/src/components/header/header";
import { router } from "expo-router";
import { Image, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Account() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'}/>
          <View style={styles.account}>
            <Header/>
            <ScrollView contentContainerStyle={styles.scrollContent}>
              <View style={styles.accountcon}>
                <View style={{alignItems:'center'}}>
                  <Image source={require('../../assets/logo/milk_bottle.png')} style={{width:140,height:140}}/>
                </View>
                <Text style={styles.text}>You don't have an account or you've not logged in. Login to access Your account details and manage your orders.</Text>
                <Text style={styles.signtxt}>Sign up order before 8pm for next dat delivery.</Text>
                <TouchableOpacity style={styles.searchbtn}><Text style={[styles.searchtext,{color:'#000'}]}>Get Started</Text></TouchableOpacity>
                <Text style={styles.text}>Already Have an Account ?</Text>
                <TouchableOpacity onPress={()=>router.push('/login')}>
                  <Text style={styles.btntxt}>Sign In</Text>
                </TouchableOpacity>
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
    account:{
      flex:1,
      width:'100%',
      backgroundColor:'#d8e9f8ff',
      height:900,
    },
    scrollContent:{
      paddingTop: 70,
    },
    accountcon:{
      width:'90%',
      marginVertical:20,
      marginHorizontal:'auto',
      padding:10,
      borderRadius:12,
      backgroundColor:'#f7ededff'
      
    },
    text:{
      fontSize:14,
      width:'95%',
      textAlign:'center',
      marginVertical:20,
      marginHorizontal:'auto',
    },
    signtxt:{
      fontSize:14,
      width:'95%',
      textAlign:'center',
      marginHorizontal:'auto',
    },
    searchbtn:{
      width:'50%',
      height:38,
      textAlign:'center',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#60d394',
      borderRadius:10,
      marginVertical:20,
      marginHorizontal:'auto'
    },
     searchtext:{
      fontSize:18,
      fontWeight:600,
      color:'#fff'
    },
    btntxt:{
      fontSize:14,
      width:'95%',
      textAlign:'center',
      marginHorizontal:'auto',
    }
})