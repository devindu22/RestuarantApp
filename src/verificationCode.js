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
          position: 'absolute',
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
      <Text style={styles.vText}>Vefification Code</Text>
      <Text style={styles.Text}>
        Please type the verification code sent to prelookstudio@gmail.com
      </Text>
      <View style={styles.inputView1}>
        <TextInput
          style={styles.inputText1}
          keyboardType="Number"
          placeholder="5"
          placeholderTextColor="black"
          onChangeText={Number => this.setState({Number: Number})}
        />
      </View>
      <View style={styles.inputView2}>
        <TextInput
          style={styles.inputText2}
          keyboardType="Number"
          placeholder="3"
          placeholderTextColor="black"
          onChangeText={Number => this.setState({Number: Number})}
        />
      </View>
      <View style={styles.inputView3}>
        <TextInput
          style={styles.inputText3}
          keyboardType="Number"
          placeholder=""
          placeholderTextColor="black"
          onChangeText={Number => this.setState({Number: Number})}
        />
      </View>
      <View style={styles.inputView4}>
        <TextInput
          style={styles.inputText4}
          keyboardType="Number"
          placeholder=""
          placeholderTextColor="black"
          onChangeText={Number => this.setState({Number: Number})}
        />
      </View>
      <Text style={styles.Text1}>I don’t recevie a code!</Text>
      <TouchableOpacity style={styles.Btn}>
        <Text style={styles.Text2}>Please resend</Text>
      </TouchableOpacity>
      <Image
        source={require('../src/assets/image/Numeric.png')}
        style={{
          position: 'absolute',
          width: 392,
          height: 268,
          left: 0,
          top: 550,
        }}
      />
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
  vText: {
    fontSize: 36.41,
    fontFamily: 'sofiapro-light',
    color: '#000000',
    width: 296,
    height: 40,
    top: 180,
    left: 26,
    position: 'absolute',
  },
  Text: {
    fontSize: 14,
    fontFamily: 'sofiapro-light',
    color: '#9796A1',
    width: 289,
    height: 38,
    top: 232,
    left: 26,
    position: 'absolute',
  },
  inputView1: {
    width: 65,
    height: 65,
    top: 301,
    left: 27,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FE724C',
    position: 'absolute',
  },
  inputText1: {
    width: 16,
    height: 20,
    top: 323,
    left: 52,
    color: '#FE724C',
    fontSize: 27,
    position: 'absolute',
  },
  inputView2: {
    width: 65,
    height: 65,
    top: 301,
    left: 117,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FE724C',
    position: 'absolute',
  },
  inputText2: {
    width: 16,
    height: 20,
    top: 323,
    left: 137,
    color: '#FE724C',
    fontSize: 27,
    position: 'absolute',
  },
  inputView3: {
    width: 65,
    height: 65,
    top: 301,
    left: 205,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FE724C',
    position: 'absolute',
  },
  inputText3: {
    width: 16,
    height: 20,
    top: 325,
    left: 246,
    color: '#FE724C',
    fontSize: 27,
    position: 'absolute',
  },
  inputView4: {
    width: 65,
    height: 65,
    top: 301,
    left: 296,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FE724C',
    position: 'absolute',
  },
  inputText4: {
    width: 16,
    height: 20,
    top: 325,
    left: 316,
    color: '#FE724C',
    fontSize: 27,
    position: 'absolute',
  },
  Text1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    top: 398,
    left: 70,
    width: 218,
    height: 16,
    position: 'absolute',
  },
  Btn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: 402,
    left: 255,
    width: 50,
    height: 16,
    position: 'absolute',
  },
  Text2: {
    color: '#FE724C',
    fontSize: 16,
    fontFamily: 'sofiapro-light',
    position: 'absolute',
  },
});
