import { View, Text, StyleSheet, Button, Alert, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Checkbox } from 'react-native-paper'

import { Picker } from '@react-native-picker/picker';

type user ={
  fname:string;
  lname:string;
  email:string;
  number:any;
  password:any;
}
const Register = () => {
  const [source, setSource] = useState('');
  const [formData,setFormData] = useState<user>({
    fname:'',
    lname:'',
    email:'',
    number:'',
    password:'',
  })
  const [rememberMe, setRememberMe] = useState(false);
  const handleSubmit =()=>{
    if(!(formData.fname) || !(formData.lname) || !(formData.email) || !(formData.number)){
      Alert.alert("enter the feilds")
      return
    }
    Alert.alert(`${formData.fname},${formData.lname},${formData.email},${formData.number},is submitted`)
    setFormData({
      fname:'',
      lname:'',
      email:'',
      number:'',
      password:'',
    })
  }
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.heading}>
            <Text style={styles.headtxt}>LETS GET YOU</Text>
            <Text style={styles.headtxt}>ON THE MILKROUND</Text>
          </View>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your First Name"
            value={formData.fname}
            onChangeText={(first)=>setFormData((prev)=>({...prev,fname:first}))}
            placeholderTextColor={"#000"}
          />
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Last Name"
            value={formData.lname}
            onChangeText={(last)=>setFormData((prev)=>({...prev,lname:last}))}
            placeholderTextColor={"#000"}
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Email"
            value={formData.email}
            onChangeText={(mail)=>setFormData((prev)=>({...prev,email:mail}))}
            placeholderTextColor={"#000"}
          />
          <Text style={styles.label}>Mobile Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your mobile number"
            value={formData.number}
            onChangeText={(num)=>setFormData((prev)=>({...prev,number:num}))}
            keyboardType="number-pad"
            placeholderTextColor={"#000"}
          />
          <Text style={styles.label}>Create Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            value={formData.password}
            placeholderTextColor={"#000"}
            onChangeText={(txt)=>setFormData((prev)=>({...prev,password:txt}))}
            secureTextEntry
          />
            <View >
            <Text style={styles.label}>Where did you hear about us?</Text>
            <Picker
                selectedValue={source}
                onValueChange={(itemValue) => setSource(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Select an option" value="" />
                <Picker.Item label="Social Media" value="social" />
                <Picker.Item label="Friend or Family" value="friend" />
                <Picker.Item label="Advertisement" value="ad" />
                <Picker.Item label="Other" value="other" />
            </Picker>
            </View>

          <View style={styles.row}>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  status={rememberMe ? 'checked' : 'unchecked'}
                  onPress={() => setRememberMe(!rememberMe)}
                />
                <Text style={styles.checkboxLabel}>I'd like free stuff, drool-worthy duscounts and planet friendky tips and tricks.</Text>
              </View>
          </View>

          <TouchableOpacity style={styles.subbtn} onPress={handleSubmit}>
                <Text style={styles.logtxt}>Create Account</Text>
            </TouchableOpacity>
            <View style={styles.signup}>
              <Text>By selecting 'Create acoount' you have read and accepted the Tems & conditions and privacy policy</Text>
              <Text style={styles.signtxt}>I am at least 18 years od age</Text>
            </View>
        </View>
      </ScrollView>
    </>
  )
}

export default Register


const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 0,
    backgroundColor:'#dfe8f0ff',
    height:900,
  },
  heading:{
    flexDirection:'column',
  },
  headtxt:{
      fontSize:28,
      textAlign:'center',
      fontWeight:800
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: 'none',
    borderRadius: 12,
    outline:'0',
  },
  subbtn:{
    backgroundColor:'#94d2bd',
    marginTop:20,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    width:'70%',
    borderRadius:12,
    marginLeft:50
  },
  logtxt:{
    color:'#000',
    textAlign:'center',
    fontWeight:600,
    fontSize:18,
  },
  
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    fontSize: 14,
    width:'80%'
  },
  forgotText: {
    fontSize: 14,
    color: '#000',
    textDecorationLine: 'underline',
  },
  signup:{
    width:'80%',
    flexDirection:'column',
    gap:20,
    alignItems:'center',
    marginVertical:20,
    marginHorizontal:'auto',
  },
  signtxt:{
    color:'#000'
  },
  picker: {
    height: 50,
    backgroundColor: '#dfe8f0ff',
    marginBottom: 15,
    borderWidth:2,
    borderColor:'#000',
    borderRadius:12,
    color:'#000'
  },

});
