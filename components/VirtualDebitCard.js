import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../resources/Colors";
import HideCard from "../components/svglogos/HideCard";
import ShowCard from "../components/svglogos/ShowCard";
import AspireLogo from "../components/svglogos/AspireLogo";
import VisaLogo from "../components/svglogos/VisaLogo";
import { Strings } from "../resources/Strings";

function VirtualDebitCard({ userName, cardNumber, validThru, cvv }) {
  const [showCardNumber, setShowCardNumber] = useState(false);
  const cardParts = cardNumber.match(/.{1,4}/g) || [];

  return (
    <View style={styles.container}>
      {/* Top Right Element */}
      <TouchableOpacity onPress={() => setShowCardNumber(!showCardNumber)}>
        {showCardNumber ? (
          <View style={styles.topRightElement}>
            <HideCard />
            <Text style={styles.hideShowText}>{Strings.hideCard}</Text>
          </View>
        ) : (
          <View style={styles.topRightElement}>
            <ShowCard />
            <Text style={styles.hideShowText}>{Strings.showCard}</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* Debit Card View */}
      <View style={styles.cardView}>
        <View testID="aspireLogo" style={styles.aspireLogo}>
          <AspireLogo />
        </View>
        {/* User Info */}
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{userName}</Text>
          <View testID="cardContainer" style={styles.cardContainer}>
            {cardParts.map((part, index) => (
              <View key={index} style={styles.cardNumberContainer}>
                <Text style={styles.cardNumber}>
                  {showCardNumber || index >= 3 ? part : "●●●●"}
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.cardInfoRow}>
            <Text style={styles.validThruText}>Thru: {validThru}</Text>
            <Text style={styles.cvvText}>
              CVV: {showCardNumber ? cvv : "***"}
            </Text>
          </View>
        </View>

        <View testID="visaLogo" style={styles.visaLogo}>
          <VisaLogo />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: "flex-start",
  },
  hideShowText: {
    color: Colors.green,
    fontSize: 12,
    marginLeft: 5,
    fontFamily: "AvenirNextLTProDemi",
  },
  topRightElement: {
    top: 10,
    right: 10,
    width: 200,
    justifyContent: "center",
    alignSelf: "flex-end",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    paddingVertical: 15,
    marginEnd: 10,
    borderRadius: 4,
  },
  cardView: {
    flex: 1, // Updated to use row layout
    justifyContent: "space-between",
    padding: 20,
    borderRadius: 8,
    backgroundColor: Colors.green,
    marginHorizontal: 16,
    overflow: "hidden",
    marginBottom: 10,
  },
  aspireLogo: {
    alignSelf: "flex-end",
  },
  userInfo: {
    alignItems: "flex-start", // Align user info to the start
    marginBottom: 20,
  },
  userName: {
    color: Colors.white,
    marginTop: 24,
    alignSelf: "flex-start",
    fontSize: 22,
    letterSpacing: 0.53,
    marginLeft: 2,
    fontFamily: "AvenirNextLTProBold",
    marginBottom: 5,
  },
  cardNumber: {
    color: Colors.white,
    marginTop: 24,
    fontSize: 14,
    marginEnd: 10,
    letterSpacing: 3.64,
    fontFamily: "AvenirNextLTProDemi",
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardNumberContainer: {
    marginHorizontal: 5,
  },
  cardInfoRow: {
    flexDirection: "row",
    marginTop: 5,
  },
  validThruText: {
    color: Colors.white,
    marginTop: 15,
    fontSize: 14,
    marginLeft: 2,
    fontFamily: "AvenirNextLTProDemi",
  },
  cvvText: {
    color: Colors.white,
    marginTop: 15,
    fontSize: 14,
    marginLeft: 32,
    fontFamily: "AvenirNextLTProDemi",
  },
  visaLogo: {
    alignSelf: "flex-end", // Align VisaLogo to the end
  },
});

export default VirtualDebitCard;
