import { Colors } from "../resources/Colors";
import { StyleSheet, View, Text } from "react-native";

function DollarComponent({ verticalPadding }) {
  return (
    <View style={[styles.container, { paddingVertical: verticalPadding }]}>
      <Text testID="dollarText" style={styles.text}>
        $$
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.green,
    borderRadius: 4,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "AvenirNextLTProBold",
    fontSize: 16, // Adjust the font size as needed
    color: Colors.white,
  },
});

export default DollarComponent;
