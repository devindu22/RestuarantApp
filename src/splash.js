import React from 'react';
import {Image, SafeAreaView, StyleSheet} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../src/assets/image/Group_18118.png')}
        style={{
          position: 'absolute',
          width: '55%',
          height: '24%',
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE724C',
    position: 'relative',
  },
});
