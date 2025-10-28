

import Home from "@/src/components/home/home";
import { Platform, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView>
      <View style={styles.container}>
      <StatusBar barStyle={'dark-content'}/>
      <Home/>
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
    }
})