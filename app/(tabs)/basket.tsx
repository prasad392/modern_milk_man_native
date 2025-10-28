
import Header from "@/src/components/header/header";
import { Platform, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function Basket() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'}/>
          <View style={styles.basket}>
            <Header/>
            <ScrollView contentContainerStyle={styles.scrollContent}>
              <View>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestiae esse maiores quo, possimus eveniet quia, qui aperiam, nobis deserunt corrupti modi eligendi suscipit consequuntur commodi illum voluptate at fugit.</Text>
                <Text style={{fontSize:32,textAlign:'center'}}>Basket page</Text>
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
      flex:1
    },
    scrollContent:{
      paddingTop: 70,
    }
})