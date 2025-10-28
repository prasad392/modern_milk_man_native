
import Header from "@/src/components/header/header";
import { Platform, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function Products() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'}/>
          <View style={styles.products}>
            <Header/>
            <ScrollView contentContainerStyle={styles.scrollContent}>
              <View>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestiae esse maiores quo, possimus eveniet quia, qui aperiam, nobis deserunt corrupti modi eligendi suscipit consequuntur commodi illum voluptate at fugit.</Text>
                <Text style={{fontSize:32,textAlign:'center'}}>Products page</Text>
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
    }
})