import * as React from 'react';
import { useState } from 'react';

import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import validatePhoneNumber from 'validator-phone-number';

function PhoneValidation() {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleValidation = () => {
    const validationResult = validatePhoneNumber(phoneNumber);
    setResult(validationResult);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.headerText}>Telefon Numarası Doğrulama</Text>
      
      <Image style={styles.logo} source={{uri:"https://cdn-icons-png.freepik.com/256/4755/4755330.png?semt=ais_hybrid"}} />
     
     
        

        <View style={styles.inputContainer}>
          <Image style={styles.trlogo} source={{uri:"https://cdn-icons-png.flaticon.com/128/5111/5111548.png"}} />

          <TextInput
            style={styles.input}
            placeholder="(05xx) xxx xx xx"
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />  
      </View>

      <TouchableOpacity style={styles.button} onPress={handleValidation}>
      <Text style={styles.buttonText}>Doğrula</Text>
      </TouchableOpacity>

      {result && (
        result.isValid ? (
          <Text style={styles.valid}>{result.message}</Text>
        ) : (
          <View>
            <Text style={styles.invalid}>{result.message}</Text>
          </View>
        )
      )}
        </View>  
  );
}

export default PhoneValidation;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    padding: 16,
    backgroundColor: '#f0f4f7',
    marginBottom:80,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  
  inputContainer:{
    borderWidth: 1,
    borderColor: '#ccc',
    flexDirection:"row",
    alignItems:"center",
    width: '90%',
    borderRadius: 4,
    marginTop: 20,
  },
  input:{
    flex:1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
  },
  button:{
    marginTop: 16,
    width: '90%',
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logo: {
    justifyContent: 'center',
    alignItems:"center",
    width: 200,
    height: 200,
  },
  trlogo:{
    width: 40,
    height: 40,
    marginLeft:5,
    marginRight:5,
  },
  valid: {
    color: 'green',
    marginTop: 16,
    fontSize:16
  },
  invalid: {
    color: 'red',
    marginTop: 16,
    fontSize:16
  },
});
