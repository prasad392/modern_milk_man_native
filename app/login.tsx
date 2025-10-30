import { View, Text, StyleSheet, Button, Alert, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Checkbox } from 'react-native-paper'
import { useRouter } from 'expo-router'

type user ={
  number:any;
  password:any;
}
const Login = () => {
  const router = useRouter();
  const [formData,setFormData] = useState<user>({
    number:'',
    password:'',
  })
  const [rememberMe, setRememberMe] = useState(false);
  const handleSubmit =()=>{
    if(!(formData.number) || !(formData.password)){
      Alert.alert('Enter the feilds')
      return;
    }
    Alert.alert(`${formData.number},${formData.password} is submitted`)
    setFormData({
      number:'',
      password:''
    })
  }
  return (
    <>
        <View style={styles.container}>
          <Text style={styles.label}>Mobile Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your mobile number"
            value={formData.number}
            onChangeText={(txt)=>setFormData((prev)=>({...prev,number:txt}))}
            keyboardType="number-pad"
            placeholderTextColor={"#000"}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            value={formData.password}
            placeholderTextColor={"#000"}
            onChangeText={(txt)=>setFormData((prev)=>({...prev,password:txt}))}
            secureTextEntry
          />
         
          <View style={styles.row}>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  status={rememberMe ? 'checked' : 'unchecked'}
                  onPress={() => setRememberMe(!rememberMe)}
                />
                <Text style={styles.checkboxLabel}>Remember me</Text>
              </View>
              <TouchableOpacity >
                <Text style={styles.forgotText}>Forgot password?</Text>
              </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.subbtn} onPress={handleSubmit}>
                <Text style={styles.logtxt}>Login</Text>
            </TouchableOpacity>
            <View style={styles.signup}>
              <Text>Don't Have an accoun?</Text>
              <Text onPress={()=>router.push('/register')} style={styles.signtxt}>Sign Up</Text>
            </View>
        </View>

    </>
  )
}

export default Login


const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 0,
    backgroundColor:'#dfe8f0ff',
    height:900,
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
  },
  forgotText: {
    fontSize: 14,
    color: '#000',
    textDecorationLine: 'underline',
  },
  signup:{
    flexDirection:'column',
    gap:20,
    alignItems:'center',
    marginVertical:20
  },
  signtxt:{
    textDecorationLine: 'underline',
  }

});
