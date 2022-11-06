import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Sample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MaterialIcons name="home" size={50} color="cyan" />
      <Text style={{fontFamily: 'Roboto-Bold', fontSize: 30}}>Welcome Home</Text>
      <Text style={{fontFamily: 'Robotic-Bold', fontSize: 20, color: 'blue'}}>User</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Sample;
