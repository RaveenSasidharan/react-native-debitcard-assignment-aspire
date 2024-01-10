import {View, Text, StyleSheet} from 'react-native';

import DollarComponent from './DollarComponent';
import { Colors } from '../resources/Colors';
import { Fonts } from '../resources/Fonts';

function AvailableBalance({balance}){
    return (
        <View style = {styles.container} >
            <Text style = {styles.cardTitle}>Debit Card</Text>
            <Text style = {styles.balaceTitle}>Available Balance</Text>
            <View style = {styles.pricePanel}>
                <DollarComponent verticalPadding={2}/>
                <Text style = {styles.pricePanelText}>{balance}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      marginHorizontal: 24,
    },
    cardTitle:{
        color: Colors.white,
        fontSize: 24,
        marginTop: 50,
        fontFamily: 'AvenirNextLTProBold',
    },
    balaceTitle:{
        color: Colors.white,
        fontSize: 14,
        marginTop: 25,
        fontFamily: 'AvenirNextLTProMedium',
    },
    pricePanel:{
        flexDirection: 'row',
        marginTop: 15,
    },
    pricePanelText:{
        color: Colors.white,
        fontSize: 25,
        marginTop:2,
        alignItems: 'center',
        marginStart: 10,
        fontFamily: 'AvenirNextLTProBold',
    },

  });
export default AvailableBalance;