import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View>
        <View style={styles.logos}>
        <Image source={require('./assets/images/logo-login.png')} style={styles.logoRocket} />
        </View>
        <View style={styles.logBlock}>
          <TextInput placeholder='Digite seu nome' style={styles.loginText}/>
          <TextInput placeholder='Digite seu nome' style={styles.loginText}/>
          <TouchableOpacity style={styles.btEntrar}>
              <Text>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
              <Text style={styles.btCadastrar}>Cadastrar Nova Conta</Text>
          </TouchableOpacity>
        
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333733',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logos: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  logoRocket: {
    width:400,
    height:350,
  },
  logBlock: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',

  },
  loginText: {
    borderColor:'#fff',
    borderWidth:1, 
    borderRadius:6, 
    width:250, 
    height:40, 
    textAlign:'center', 
    color:'#fff',
    margin:5
  },
  btEntrar: {
    backgroundColor:'#fff', 
    width:250, 
    height:40, 
    justifyContent:'center', 
    alignItems:'center', 
    borderRadius:6, 
    margin:5
  },
  btCadastrar: {
    color:'#fff', 
    fontWeight:'bold', 
    justifyContent:'center', 
    alignItems:'center', 
    marginTop:30 
  }

  
});
