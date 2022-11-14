import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  View,
} from 'react-native';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const pizzaHut = () => {
  state = {
    Number: '',
    Password: '',
  };
  return (
    <>
      <ImageBackground
        source={require('../src/assets/image/Pizza-Hut-Logo.jpg')}
        style={{width: '100%', height: '90%', position: 'absolute'}}
      />
      <SafeAreaView style={styles.container1}>
        <Image
          style={{
            width: 130,
            height: 110,
            borderRadius: 5,
            alignSelf: 'center',
            marginTop: -750,
            marginBottom: 20,
          }}
          source={require('./assets/image/pizzahut.png')}
        />
        <Text
          style={{
            fontFamily: 'Roboto-Bold',
            fontSize: 40,
            color: '#c5c9c6',
            marginTop: -17,
            marginBottom: 5,
          }}>
          Pizza Hut
        </Text>
        <Text
          style={{
            fontFamily: 'Roboto-Bold',
            fontSize: 22,
            color: 'red',
            marginBottom: 5,
          }}>
          Order online | Deliver | Takeout
        </Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            keyboardType="numeric"
            placeholder="Mobile Number"
            placeholderTextColor="black"
            onChangeText={Number => this.setState({Number: Number})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="black"
            onChangeText={text => this.setState({Password: text})}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>Or</Text>
        <TouchableOpacity style={styles.SignUpBtn}>
          <Text style={styles.signUpText}>SignUp</Text>
        </TouchableOpacity>
        <Text style={styles.registerText}>Register with</Text>
      </SafeAreaView>
      <View style={styles.container2}>
        <TouchableOpacity>
          <Ionicons name="logo-google" size={25} color="red" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="logo-facebook" size={25} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="logo-apple" size={25} color="black" />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 15,
    marginBottom: -35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputView: {
    width: '90%',
    backgroundColor: '#fff',
    opacity: 0.8,
    borderRadius: 20,
    borderColor: 'red',
    borderWidth: 1,
    height: 50,
    justifyContent: 'space-evenly',
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  loginBtn: {
    width: '90%',
    backgroundColor: 'black',
    opacity: 0.8,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'Roboto-Bold',
  },
  forgot: {
    color: 'red',
    fontSize: 17,
    fontFamily: 'Roboto-Bold',
  },
  orText: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Roboto-Bold',
    marginTop: 10,
    fontWeight: 'bold',
  },
  signUpText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
  SignUpBtn: {
    width: '90%',
    backgroundColor: 'red',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 45,
    marginBottom: 30,
  },
  registerText: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Roboto-Bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -1,
    fontWeight: 'bold',
  },
});

export default pizzaHut;
