
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

const Header = () => {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Modern Milkman"
        placeholderTextColor="#000"
      />
      <TouchableOpacity onPress={()=> router.push('/login')}>
          <Image source={require('../../../assets/users/user11.png')} style={styles.img} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  input: {
    width: 350,
    borderWidth: 1,
    fontSize: 18,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  img: {
    width: 45,
    height: 45,
  },
});