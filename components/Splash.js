import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Colors } from "../resources/Colors";
import { Images } from "../resources/Images";
import { Fonts } from "../resources/Fonts";
function Splash() {
  return (
    <View style={styles.container}>
      <Image source={Images.logoPng} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
  },
});

export default Splash;
