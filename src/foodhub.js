import * as React from 'react';
import {View, Image} from 'react-native';

function foodhub() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../src/assets/image/Group 18118.png')}
        style={{
          position: 'absolute',
          width: '182%',
          height: '163p%',
          left: '97',
          top: '325',
        }}
      />
      <Image
        source={require('../src/assets/image/Rectangle.png')}
        style={{
          position: 'absolute',
          width: '134%',
          height: '5%',
          left: calc(50% - 134px/2 + 0.5px),
          bottom: '16',
          background: '#FFFFFF',
          border-radius: '100',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE724C'
  },
});

export default foodhub;
