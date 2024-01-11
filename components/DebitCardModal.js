import { Images } from "../resources/Images";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import CardSettingList from "./CardSettingList";
import VirtualDebitCard from "./VirtualDebitCard";
import { useSelector } from "react-redux";
import Insight from "../components/svglogos/Insight";
import Gauge from "../components/svglogos/Gauge";
import FreezeCard from "../components/svglogos/FreezeCard";
import NewCard from "../components/svglogos/NewCard";
import DeactivatedCards from "../components/svglogos/DeactivatedCards";
import SpendingProgressBar from "./SpendingProgressBar";
import { Strings } from "../resources/Strings";

function DebitCardModal({ debitCard }) {
  const spendLimit = useSelector((state) => state.spendingLimit.spendingLimit);
  const settingsData = [
    {
      imageIcon: <Insight />,
      title: Strings.topUpAccount,
      description: Strings.topUpDesc,
      toggleVisibility: false,
    },
    {
      imageIcon: <Gauge />,
      title: Strings.weeeklySpendLimit,
      description: Strings.weeeklySpendLimitDesc + spendLimit,
      toggleVisibility: true,
    },
    {
      imageIcon: <FreezeCard />,
      title: Strings.freezeCard,
      description: Strings.freezeCardDesc,
      toggleVisibility: true,
    },
    {
      imageIcon: <NewCard />,
      title: Strings.getANewCard,
      description: Strings.getANewCardDesc,
      toggleVisibility: false,
    },
    {
      imageIcon: <DeactivatedCards />,
      title: Strings.deactivatedCards,
      description: Strings.deactivatedCardsDesc,
      toggleVisibility: false,
    },
    // Add more settings as needed
  ];

  return (
    <View style={style.container}>
      <VirtualDebitCard
        cardNumber={debitCard.cardNum}
        userName={debitCard.name}
        validThru={debitCard.validThru}
        cvv={debitCard.cvv}
      />
      <SpendingProgressBar
        style={style.content}
        spendValue={debitCard.totalSpend}
        spendingLimit={spendLimit}
      />
      <CardSettingList style={style.content} data={settingsData} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1, // Clip the overflow content
  },
  content: {
    marginHorizontal: 16,
  },
});

export default DebitCardModal;
