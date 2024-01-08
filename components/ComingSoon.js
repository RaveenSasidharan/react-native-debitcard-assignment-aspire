import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Colors} from '../resources/Colors';
import {Fonts} from '../resources/Fonts';
function ComingSoon(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Updating Soon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.AvenirNextLTPRegular,
    fontSize: 16,
  },
});

export default ComingSoon;

