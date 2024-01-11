import React, { useState } from "react";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from "react-native";
import { Colors } from "../resources/Colors";
import { useNavigation } from "@react-navigation/native";
function CardSettingItem({ imageIcon, title, description, toggleVisibility }) {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    if (isEnabled) navigation.navigate("ManageLimit");
  };
  return (
    <TouchableOpacity testID="touch" onPress={toggleSwitch}>
      <View style={styles.listItemContainer}>
        {imageIcon}

        <View style={styles.itemContent}>
          <View style={styles.titleRow}>
            <Text testID="itemTitle" style={styles.tileText}>
              {title}
            </Text>
            {toggleVisibility && (
              <Switch
                testID="switch"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={styles.switch}
              />
            )}
          </View>
          <Text testID="itemDesc" style={styles.descriptionText}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    padding: 10,
    marginHorizontal: 8,
    paddingVertical: 17,
  },
  imageIcon: {
    width: 32,
    height: 32,
    marginRight: 10,
  },
  itemContent: {
    flex: 1,
    flexDirection: "column",
  },
  switch: {
    marginLeft: 10,
    height: 5,
    transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }],
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  descriptionText: {
    color: Colors.charcoalBlack,
    fontSize: 13,
    opacity: 0.4,
    marginStart: 12,
    marginTop: 12,
    fontFamily: "AvenirNextLTProRegular",
  },
  tileText: {
    color: Colors.midnightBlue,
    fontSize: 13,
    marginStart: 12,
    fontFamily: "AvenirNextLTProMedium",
  },
});

export default CardSettingItem;
