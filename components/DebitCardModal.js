import { Images } from "../resources/Images";
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import CardSettingList from "./CardSettingList";
import VirtualDebitCard from "./VirtualDebitCard";

import Insight from "../components/svglogos/Insight";
import Gauge from "../components/svglogos/Gauge";
import FreezeCard from "../components/svglogos/FreezeCard";
import NewCard from "../components/svglogos/NewCard";
import DeactivatedCards from "../components/svglogos/DeactivatedCards";
import SpendingProgressBar from "./SpendingProgressBar";

function DebitCardModal(){

    const settingsData = [
        {
            imageIcon: <Insight/>,
            title: 'Top-up account',
            description: 'Deposit Money to your account to use with card',
            toggleVisibility: false,
            onPress: () => console.log('Item pressed'),
          },
        {
          imageIcon: <Gauge/>,
          title: 'Weekly spending limit',
          description: 'Your weekly spendinf limit is $$3000',
          toggleVisibility: true,
          onToggle: () => console.log('Toggle switched'),
          onPress: () => console.log('Item pressed'),
        },
        {
            imageIcon: <FreezeCard/>,
            title: 'Freeze Card',
            description: 'Your Debit card is currently active',
            toggleVisibility: true,
            onToggle: () => console.log('Toggle switched'),
            onPress: () => console.log('Item pressed'),
          },
        {
            imageIcon:<NewCard/>,
            title: 'Get a new card',
            description: 'This deactivates your current debit card',
            toggleVisibility: false,
            onPress: () => console.log('Item pressed'),
          },
          {
            imageIcon: <DeactivatedCards/>,
            title: 'Deactivated cards',
            description: 'Your previouslt deactivated cards',
            toggleVisibility: false,
            onPress: () => console.log('Item pressed'),
          }
        // Add more settings as needed
      ];

    return (
    <View  style = {style.container}>
        <VirtualDebitCard
         cardNumber={'4444000033332222'} 
         userName={"David John"}
         validThru={'03/30'}
         cvv={'566'}/>
         <SpendingProgressBar style={style.content} spendValue={300} spendingLimit={5000}/>
        <CardSettingList style={style.content} data={settingsData}/>
    </View>);
}

const style = StyleSheet.create({
  container: {
    flex: 1, // Clip the overflow content
  },
  content:{
    marginHorizontal:16
  }
  
}

);

export default DebitCardModal;