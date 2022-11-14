import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const coursera = () => {
  return (
    <>
      <TouchableOpacity style={styles.Btn}>
        <Text style={styles.btnText}>Sign Up Later</Text>
      </TouchableOpacity>
      <SafeAreaView style={styles.container}>
        <Text
          style={{
            fontFamily: 'Roboto-Bold',
            fontSize: 53,
            color: 'blue',
            marginTop: -100,
            marginBottom: 20,
          }}>
          coursera
        </Text>
        <Text
          style={{
            fontFamily: 'Roboto-Regular',
            fontSize: 14,
            color: 'grey',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 0,
            display: 'flex',
            flexDirection: 'column',
          }}>
          Take the world's best courses online from top
        </Text>
        <Text
          style={{
            fontFamily: 'Roboto-Regular',
            fontSize: 14,
            color: 'grey',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 50,
            display: 'flex',
            flexDirection: 'column',
          }}>
          universities and industry partners
        </Text>
        <TouchableOpacity style={styles.gBtn}>
          <Image
            style={{
              width: 25,
              height: 25,
              alignSelf: 'center',
              marginTop: 10,
              marginBottom: 10,
            }}
            source={require('./assets/image/google.png')}
          />
          <Text style={styles.gText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fBtn}>
          <Ionicons name="logo-facebook" size={25} color="blue" />
          <Text style={styles.fText}>Continue with Facebook</Text>
        </TouchableOpacity>
        <Image
          style={{
            width: 355,
            height: 0.5,
            alignSelf: 'center',
            marginTop: 10,
            marginBottom: -10,
          }}
          source={require('./assets/image/Line.png')}
        />
        <TouchableOpacity style={styles.LoginBtn}>
          <Text style={styles.LoginText}>Log in with Email</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.registerText}>
            New to Coursera? Create Account
          </Text>
        </TouchableOpacity>
        <Text style={styles.termText}>
          By creating an account, you accept Coursera's
          <TouchableOpacity style={styles.termsBtn}>
            <Text style={styles.signUpText}>Terms of Services </Text>
          </TouchableOpacity>
          <Text>and</Text>
          <TouchableOpacity style={styles.termsBtn}>
            <Text style={styles.signUpText}> Privacy policy</Text>
          </TouchableOpacity>
        </Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: -20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  Btn: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    color: 'blue',
    borderWidth: '50%',
    backgroundColor: '#fff',
    marginTop: -10,
    marginBottom: 10,
  },
  gBtn: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    height: 47,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginBottom: 10,
  },
  fBtn: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    height: 47,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginBottom: 10,
  },
  gText: {
    color: 'grey',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Roboto-Bold',
  },
  fText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Roboto-Bold',
  },
  LoginText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Roboto-Bold',
    marginTop: 0,
  },
  btnText: {
    color: 'blue',
    fontSize: 15,
    fontFamily: 'Roboto-Bold',
    marginTop: 30,
    marginBottom: 10,
    marginStart: 15,
  },
  LoginBtn: {
    display: 'flex',
    flexDirection: 'row',
    width: '91%',
    borderRadius: 4,
    backgroundColor: 'blue',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  registerText: {
    color: 'blue',
    fontSize: 15,
    fontFamily: 'Roboto-Bold',
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '500',
  },
  termsText: {
    color: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    marginTop: 10,
  },
  termText: {
    color: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    marginTop: 10,
  },
  termsBtn: {
    color: 'blue',
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
  },
  signUpText: {
    color: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    marginTop: 1,
  },
});

export default coursera;
