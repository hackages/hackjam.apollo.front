import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Demo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.text}>TOMMY</Text>
      </View>
      <View style={styles.middle}>
        <View style={styles.left} />
        <View style={styles.right} />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.text}>HILFIGER</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D51635',
    flex: 1,
    flexDirection: 'row'
  },
  top: {
    backgroundColor: '#08154A',
    flex: 1,
    justifyContent: 'center'
  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#08154A'
  },
  middle: {
    backgroundColor: 'white',
    flex: 2
  },
  left: {
    backgroundColor: 'white',
    flex: 1
  },
  right: {
    backgroundColor: '#D51635',
    flex: 1
  },
  text: {
    fontSize: 34,
    fontWeight: 'bold',
    // height: 200,
    // width: 200,
    color: 'white',
    transform: [{ rotate: '90deg' }]
  }
});
