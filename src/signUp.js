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
    Name: '',
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
      <Text style={styles.signText1}>Sign Up</Text>
      <Text style={styles.signText2}>Full name</Text>
      <View style={styles.inputView1}>
        <TextInput
          style={styles.inputText1}
          keyboardType="Text"
          placeholder="Arlene Mccoy"
          placeholderTextColor="black"
          onChangeText={Name => this.setState({Nmae: Text})}
        />
      </View>
      <Text style={styles.signText3}>Email</Text>
      <View style={styles.inputView2}>
        <TextInput
          style={styles.inputText2}
          keyboardType="Text"
          placeholder="prelookstudio@gmail.com"
          placeholderTextColor="black"
          onChangeText={Email => this.setState({Email: Text})}
        />
      </View>
      <Text style={styles.signText4}>Password</Text>
      <View style={styles.inputView3}>
        <TextInput
          secureTextEntry
          style={styles.inputText3}
          placeholder=""
          placeholderTextColor="black"
          onChangeText={Password => this.setState({Password: Text})}
        />
      </View>
      <TouchableOpacity style={styles.signBtn}>
        <Text style={styles.signText}>SIGN UP</Text>
      </TouchableOpacity>
      <Text style={styles.accText1}>Already have an account?</Text>
      <TouchableOpacity style={styles.accBtn}>
        <Text style={styles.accText2}>Login</Text>
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
      <Text style={styles.signText5}>Sign up with</Text>
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
  signText1: {
    fontSize: 36.41,
    fontFamily: 'sofiapro-light',
    color: '#000000',
    width: 129,
    height: 46,
    top: 98,
    left: 26,
    position: 'absolute',
  },
  signText2: {
    fontSize: 16,
    fontFamily: 'sofiapro-light',
    color: '#9796A1',
    width: 106,
    height: 16,
    top: 171,
    left: 29,
    position: 'absolute',
  },
  inputView1: {
    width: 328.01,
    height: 65,
    top: 199,
    left: 28,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FE724C',
    position: 'absolute',
  },
  inputText1: {
    color: 'black',
    width: 152,
    height: 17,
    top: 224,
    left: 46,
    position: 'absolute',
  },
  signText3: {
    fontSize: 16,
    fontFamily: 'sofiapro-light',
    color: '#9796A1',
    width: 56,
    height: 16,
    top: 293,
    left: 29,
    position: 'absolute',
  },
  inputView2: {
    width: 328.01,
    height: 65,
    top: 321,
    left: 28,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FE724C',
    position: 'absolute',
  },
  inputText2: {
    color: 'black',
    width: 152,
    height: 17,
    top: 224,
    left: 46,
    position: 'absolute',
  },
  signText4: {
    fontSize: 16,
    fontFamily: 'sofiapro-light',
    color: '#9796A1',
    width: 76,
    height: 16,
    top: 415,
    left: 29,
    position: 'absolute',
  },
  inputView3: {
    width: 328.01,
    height: 65,
    top: 443,
    left: 28,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FE724C',
    position: 'absolute',
  },
  inputText3: {
    color: 'black',
    width: 152,
    height: 17,
    top: 224,
    left: 46,
    position: 'absolute',
  },
  signBtn: {
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
  signText: {
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
