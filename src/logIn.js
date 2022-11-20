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
    Email: '',
    Password: '',
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
            height: 20,
            left: 12,
          }}
        />
      </TouchableOpacity>
      <Text style={styles.loginText1}>Login</Text>
      <Text style={styles.loginText2}>Email</Text>
      <View style={styles.inputView1}>
        <TextInput
          style={styles.inputText1}
          keyboardType="Text"
          placeholder="Your email or phone"
          placeholderTextColor="black"
          onChangeText={Email => this.setState({Email: Text})}
        />
      </View>
      <Text style={styles.loginText3}>Password</Text>
      <View style={styles.inputView2}>
        <TextInput
          secureTextEntry
          style={styles.inputText2}
          placeholder="Password"
          placeholderTextColor="black"
          onChangeText={Password => this.setState({Password: Text})}
        />
      </View>
      <TouchableOpacity style={styles.forgotBtn}>
        <Text style={styles.forgotText}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.accText1}>Don't have an account?</Text>
      <TouchableOpacity style={styles.accBtn}>
        <Text style={styles.accText2}>Sign Up</Text>
      </TouchableOpacity>
      <Image
        source={require('../src/assets/image/Line71.png')}
        style={{
          position: 'absolute',
          width: 102,
          height: 0,
          left: 40,
          top: 703,
          borderWidth: 1,
          borderColor: '#B3B3B3',
        }}
      />
      <Text style={styles.signText5}>Sign in with</Text>
      <Image
        source={require('../src/assets/image/Line72.png')}
        style={{
          position: 'absolute',
          width: 102,
          height: 0,
          left: 240,
          top: 703,
          borderWidth: 1,
          borderColor: '#B3B3B3',
        }}
      />
      <TouchableOpacity style={styles.fBtn}>
        <Text style={styles.fText}>
          <Image
            style={{
              width: 25,
              height: 25,
              position: 'absolute',
              color: '#1877F2',
            }}
            source={require('./assets/image/facebook.png')}
          />
          FACEBOOK
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.gBtn}>
        <Text style={styles.gText}>
          <Image
            style={{
              width: 25,
              height: 25,
              position: 'absolute',
            }}
            source={require('./assets/image/google.png')}
          />
          GOOGLE
        </Text>
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
  loginText1: {
    fontSize: 36.41,
    fontFamily: 'sofiapro-light',
    color: '#000000',
    width: 247,
    height: 46,
    top: 180,
    left: 26,
    position: 'absolute',
  },
  loginText2: {
    fontSize: 16,
    fontFamily: 'sofiapro-light',
    color: '#9796A1',
    width: 56,
    height: 16,
    top: 251,
    left: 29,
    position: 'absolute',
  },
  inputView1: {
    width: 332.01,
    height: 65,
    top: 279,
    left: 27,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FE724C',
    position: 'absolute',
  },
  inputText1: {
    color: 'black',
    width: 206,
    height: 17,
    top: 301,
    left: 47,
    position: 'absolute',
  },
  loginText3: {
    fontSize: 16,
    fontFamily: 'sofiapro-light',
    color: '#9796A1',
    width: 76,
    height: 16,
    top: 373,
    left: 29,
    position: 'absolute',
  },
  inputView2: {
    width: 332.01,
    height: 65,
    top: 401,
    left: 27,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FE724C',
    position: 'absolute',
  },
  inputText2: {
    color: 'black',
    width: 206,
    height: 17,
    top: 423,
    left: 47,
    position: 'absolute',
  },
  forgotBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: 498,
    left: 98,
    width: 200,
    height: 10,
    position: 'absolute',
  },
  forgotText: {
    color: '#FE724C',
    fontSize: 14,
    fontFamily: 'sofiapro-light',
    position: 'absolute',
  },
  loginBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: 541,
    left: 75,
    width: 248,
    height: 60,
    backgroundColor: '#FE724C',
    borderRadius: 28.5,
    position: 'absolute',
  },
  loginText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'sofiapro-light',
    position: 'absolute',
  },
  accText1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    top: 634,
    left: 96,
    width: 218,
    height: 16,
    position: 'absolute',
  },
  accBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: 636,
    left: 255,
    width: 50,
    height: 16,
    position: 'absolute',
  },
  accText2: {
    color: '#FE724C',
    fontSize: 14,
    fontFamily: 'sofiapro-light',
    position: 'absolute',
  },
  signText5: {
    fontSize: 14,
    fontFamily: 'sofiapro-light',
    color: '#9796A1',
    width: 79,
    height: 17,
    top: 693,
    left: 155,
    position: 'absolute',
  },
  fBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    top: 727,
    left: 25,
    width: 147,
    height: 57,
    backgroundColor: '#ffff',
    borderRadius: 28.5,
    borderWidth: 0.1,
    borderColor: '#000000',
    position: 'absolute',
  },
  fText: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'sofiapro-light',
  },
  gBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    top: 727,
    left: 213,
    width: 147,
    height: 57,
    backgroundColor: '#fff',
    borderRadius: 28.5,
    borderWidth: 0.1,
    borderColor: '#000000',
    position: 'absolute',
  },
  gText: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'sofiapro-light',
  },
});
