import { View, Text,TouchableOpacity, StyleSheet,Button,Image, } from 'react-native'
import * as React from 'react';

function HomeScreen({ navigation }) {
  return (
      <View style={styles.container}>


      <Text style={styles.headerText}>Hoşgeldiniz!</Text>
      <Text style={styles.description}>
        Telefon numarası doğrulama işlemine başlamak için aşağıdaki butona basın.
      </Text>

      <View style={styles.logoContainer}>
      <Image style={styles.logo} source={{uri:"https://cdn-icons-png.freepik.com/256/3930/3930466.png?ga=GA1.1.1329786461.1725780026&semt=ais_hybrid"}} />

      </View>
       <View style={styles.buttonContainer}>
       <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.push('PhoneValidationScreen')}
      >
        <Text style={styles.buttonText}>Başla</Text>
      </TouchableOpacity>
       </View>


    </View>
  )
};
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 20,
      backgroundColor: '#f0f4f7',
      marginTop:10,
    },
    headerText: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 50,
    },
    description: {
      color:"red",
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 50,
      paddingHorizontal: 20,
    },

    buttonContainer:{
      flex:1,
      justifyContent: "flex-end",
      alignItems:"center",
      width: '100%',
      marginBottom:10,

    },
    startButton: {
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 4,
        alignItems: 'center',
        width: '100%',
        marginTop: 20,     
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    logoContainer:{
      flex:2,
      justifyContent: "center",
      alignItems:"center",
      justifyContent: 'center',
      alignItems:"center",
      marginTop: 20,

    },
    logo: {
      width: 200,
      height: 200,
      
    },
    
  });