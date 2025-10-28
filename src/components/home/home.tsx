import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../header/header';

import Milkround from '../milkround';
import Plasticwaste from '../plasticwaste';
import Neighbours from './neighbours';
import Footer from '../footer/footer';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Milkround/>
        <Plasticwaste/>
        <Neighbours/>
        <Footer/>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 40,
  },
});