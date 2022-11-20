import React from 'react';
import {
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../src/assets/image/background.png')}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      />
      <LinearGradient
        colors={['rgba(75, 73, 99, 0)', 'rgba(25, 27, 47, 1)']}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />
      <TouchableOpacity style={styles.skipBtn}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      <Text style={styles.welcomeText1}>Welcome to</Text>
      <Text style={styles.welcomeText2}>FoodHub</Text>
      <Text style={styles.welcomeText3}>
        Your favourite foods delivered fast at your door.
      </Text>
      <Image
        source={require('../src/assets/image/Line71.png')}
        style={{
          position: 'absolute',
          width: '28%',
          height: '0.1%',
          marginLeft: 38,
          marginTop: 568,
        }}
      />
      <Text style={styles.welcomeText4}>sign in with</Text>
      <Image
        source={require('../src/assets/image/Line72.png')}
        style={{
          position: 'absolute',
          width: '28%',
          height: '0.1%',
          marginLeft: 240,
          marginTop: 568,
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
      <TouchableOpacity style={styles.signBtn}>
        <Text style={styles.signText}>Start with email or phone</Text>
      </TouchableOpacity>
      <Text style={styles.accText1}>Already have an account?</Text>
      <TouchableOpacity style={styles.accBtn}>
        <Text style={styles.accText2}>Sign In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  skipBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 26,
    marginLeft: 292.5,
    width: 55,
    height: 32,
    backgroundColor: '#fff',
    borderRadius: 27.41,
    borderBottom: 754,
    position: 'absolute',
  },
  skipText: {
    color: '#FE724C',
    fontSize: 14,
    fontFamily: 'sofiapro-light',
  },
  welcomeText1: {
    color: '#111719',
    fontSize: 45,
    fontFamily: 'sofiapro-light',
    width: 311,
    height: 111,
    marginTop: 168,
    marginLeft: 28,
    position: 'absolute',
  },
  welcomeText2: {
    color: '#FE724C',
    fontSize: 45,
    fontFamily: 'sofiapro-light',
    width: 311,
    height: 111,
    marginTop: 228,
    marginLeft: 28,
    position: 'absolute',
  },
  welcomeText3: {
    color: '#111719',
    fontSize: 18,
    fontFamily: 'sofiapro-light',
    width: 266,
    height: 54,
    marginTop: 290,
    marginLeft: 28,
    position: 'absolute',
  },
  welcomeText4: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'sofiapro-light',
    width: 86,
    height: 20,
    marginTop: 557,
    marginLeft: 155,
    position: 'absolute',
  },
  fBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 591,
    marginLeft: 40,
    width: 139.26,
    height: 54,
    backgroundColor: '#ffff',
    borderRadius: 27.41,
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
    marginTop: 590,
    marginLeft: 212,
    width: 139.26,
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 27.41,
    borderWidth: 0.1,
    borderColor: '#000000',
    position: 'absolute',
  },
  gText: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'sofiapro-light',
  },
  signBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 673,
    marginLeft: 40,
    width: 315,
    height: 54,
    backgroundColor: 'transparent',
    borderRadius: 27.41,
    opacity: 0.8,
    position: 'absolute',
    borderColor: '#fff',
    borderWidth: 2,
  },
  signText: {
    color: '#ffff',
    fontSize: 17,
    fontFamily: 'sofiapro-light',
  },
  accText1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffff',
    fontSize: 16,
    marginTop: 747,
    marginLeft: 73,
    width: 190,
    height: 16,
    position: 'absolute',
  },
  accBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 750,
    marginLeft: 265,
    width: 50,
    height: 16,
    position: 'absolute',
  },
  accText2: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'sofiapro-light',
    position: 'absolute',
  },
});
