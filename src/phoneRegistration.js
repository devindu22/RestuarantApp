import React from 'react';
import {
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  state = {
    Number: '',
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../src/assets/image/SignUp.png')}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      />
      <TouchableOpacity style={styles.backBtn}>
        <Image
          source={require('../src/assets/image/back.png')}
          style={{
            position: 'absolute',
            width: 10,
            height: 15,
            left: 15,
          }}
        />
      </TouchableOpacity>
      <Text style={styles.RegisterText}>Registration</Text>
      <Text style={styles.Text}>
        Enter your phone number to verify your account
      </Text>
      <Image
        source={require('../src/assets/image/flag.png')}
        style={{
          position: 'absolute',
          width: 90,
          height: 40,
          left: 30,
          top: 318,
        }}
      />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          keyboardType="numeric"
          placeholder="(+1) 230-333-0181"
          placeholderTextColor="black"
          onChangeText={Number => this.setState({Number: Number})}
        />
      </View>
      <TouchableOpacity style={styles.sendBtn}>
        <Text style={styles.sendText}>SEND</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    top: 28,
    left: 27,
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    position: 'absolute',
  },
  RegisterText: {
    fontSize: 36.41,
    fontFamily: 'sofiapro-light',
    color: '#000000',
    width: 247,
    height: 46,
    top: 180,
    left: 26,
    position: 'absolute',
  },
  Text: {
    fontSize: 14,
    fontFamily: 'sofiapro-light',
    color: '#9796A1',
    width: 223,
    height: 36,
    top: 234,
    left: 26,
    position: 'absolute',
  },
  inputView: {
    width: 328.01,
    height: 65,
    top: 301,
    left: 28,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FE724C',
    position: 'absolute',
  },
  inputText: {
    width: 267,
    height: 18,
    top: 325,
    left: 46,
    position: 'absolute',
  },
  sendBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: 417,
    left: 75,
    width: 248,
    height: 60,
    backgroundColor: '#FE724C',
    borderRadius: 28.5,
    position: 'absolute',
  },
  sendText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'sofiapro-light',
    position: 'absolute',
  },
});
