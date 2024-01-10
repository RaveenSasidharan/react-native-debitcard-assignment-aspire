import React from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import * as Progress from 'react-native-progress';
import { Colors } from '../resources/Colors';


const SpendingProgressBar = ({ spendingLimit, spendValue}) => {
  const progress = spendValue / spendingLimit; 
  return (
    <View style={styles.container}>
      
      <View style={styles.row}>
        <Text style={styles.title}>Debit Card Spending Limit</Text>
        <View style={styles.amountContainer}>
        <Text style={styles.spendText}>$${spendValue} /</Text>
        <Text style={styles.totalText}>{spendingLimit}</Text>
        </View>
        
      </View>
      <View style={styles.progresContainer}>
        <Progress.Bar 
        width={Dimensions.get('window').width - (Dimensions.get('window').width * 0.1)}
          progress={progress} 
          animated={true}
          color={Colors.green}
          height={10}
          unfilledColor={Colors.brightGreen07}
          borderWidth={0}
          style={styles.progressBar}/>    
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      marginVertical: 20,
      marginHorizontal:22
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    amountContainer: {
        flexDirection: 'row',
      },
    title: {
      color: Colors.charcoalBlack,
      fontFamily:'AvenirNextLTProMedium',
      fontSize:13
    },
    spendText: {
      color: Colors.brightGreen,
      fontFamily:'AvenirNextLTProDemi',
      fontSize:13
    },
    totalText: {
        color: Colors.nearWhiteGray,
        fontFamily:'AvenirNextLTProMedium',
        fontSize:13
      },
      progresContainer: {
        flexDirection:"row",
    },
  });
export default SpendingProgressBar;
