import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AvailableBalance from "../components/AvailableBalance";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { Colors } from "../resources/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import DebitCardModal from "../components/DebitCardModal";
import Logo from "../components/svglogos/Logo";
import { Images } from "../resources/Images";
import { getCardDetails } from "../redux/store/actions/cardDetails";
import { setSpendingLimit } from "../redux/store/actions/spendingLimit";
function DebitCard() {
  const dispatch = useDispatch();
  const debitCard = useSelector((state) => state.cardDetails.debitCard);
  const isLoading = useSelector((state) => state.cardDetails.loading);
  const error = useSelector((state) => state.cardDetails.error);
  const spendLimit = useSelector((state) => state.spendingLimit.spendingLimit);
  const [isSpendLimitActive, setSpendLimitActive] = useState(
    spendLimit ? true : false
  );

  useEffect(() => {
    dispatch(getCardDetails());
  }, [dispatch]);
  return (
    <SafeAreaView style={styles.safeArea}>
      {isLoading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator
            size="large"
            style={styles.loader}
            color="#ffffff"
          />
        </View>
      )}
      {error && <Text>Error: {error}</Text>}
      {debitCard && (
        <View style={styles.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <Image source={Images.logoPng} style={styles.logo} />
            <AvailableBalance balance={spendLimit} />
            <View style={styles.bgImage} />
            <DebitCardModal debitCard={debitCard} />
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flexGrow: 1,
    backgroundColor: Colors.backgroundBlue,
    margin: 0,
  },
  logo: {
    alignSelf: "flex-end",
    marginEnd: 16,
    marginTop: 26,
  },
  container: {
    height: Dimensions.get("window").height,
    width: "100%",
  },
  loaderContainer: {
    height: Dimensions.get("window").height,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  loader: {
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  bgImage: {
    backgroundColor: Colors.white,
    height: "100%",
    width: "100%",
    position: "absolute",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: 325,
  },
});

export default DebitCard;
