import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
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
      <Progress.Bar 
      progress={progress} 
      animated={true}
      color={Colors.green}
      unfilledColor={Colors.brightGreen}
      style={styles.progressBar}/>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      margin: 20,
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
    progressBar: {
      // Add platform-specific styles here if needed
    },
  });
export default SpendingProgressBar;
