import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, SafeAreaView} from 'react-native';
import { Colors } from '../resources/Colors';
import Gauge from "../components/svglogos/Gauge.js";
import { Images } from '../resources/Images.js';
import DollarComponent from "../components/DollarComponent.js";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { setSpendingLimit } from '../redux/store/actions/spendingLimit.js'

function ManageLimit(){
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const spendLimit = useSelector(state => state.spendingLimit.spendingLimit);
    const [inputAmount, setInputAmount] = useState(spendLimit);
    
    return (
        <SafeAreaView style = {styles.safeArea}>
            <View style={styles.container}>
        <View style = {styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="ios-arrow-back"
           size={30}
            color="white" />
        </TouchableOpacity>
        <Image source={Images.logoPng}  style = {styles.logoButton}/>  
            </View>
        <Text style={styles.title}>Spending limit</Text>
        <View style={styles.roundedView}>
            <View style={styles.gaugeContainer}>
                <Gauge style={styles.gaugeIcon}/>
                <Text style={styles.gaugeIconText}>Set a weekly debit card spending limit</Text>
            </View>
            <View style={styles.inputContainer}>
                <DollarComponent verticalPadding={4}/>
                <TextInput style={styles.amountText} 
                    keyboardType="numeric" 
                    placeholder="1,000"
                    value={inputAmount.toString()}
                    onChangeText={(amount) => setInputAmount(amount)}/>
            </View>
            <View style={styles.divider}/>
            <Text style={styles.info}>
                Here weekly means the last 7 days - not the calendar week
            </Text>
            <View style={styles.suggestedAmountRow}>
                <TouchableOpacity style={styles.suggestedAmountContainer} onPress={() => {
                    setInputAmount(5000)
                }}>
                    <Text style={styles.suggestedAmountText}>S$ 5,000</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.suggestedAmountContainer} onPress={() => {
                    setInputAmount(10000)
                }}>
                    <Text style={styles.suggestedAmountText}>S$ 10,000</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.suggestedAmountContainer} onPress={() => {
                    setInputAmount(20000)
                }}>
                    <Text style={styles.suggestedAmountText}>S$ 20,000</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={[
                        styles.button, 
                        {backgroundColor: inputAmount > 0 ? Colors.brightGreen : Colors.lightGray}
                    ]}
                    onPress={() => {
                        if(inputAmount > 0) {
                            dispatch(setSpendingLimit(inputAmount))
                            navigation.goBack()
                        }
                }}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    </SafeAreaView>
    );
}


const styles =  StyleSheet.create({
    container:{
        backgroundColor:Colors.backgroundBlue,
        flex:1,
        width:"100%",
        height:"100%",
    },
    safeArea:{
        flexGrow: 1,
        backgroundColor: Colors.backgroundBlue
      },
    header:{
        height:36,
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:20
    },
    info:{
        marginLeft: 10,
        fontSize: 13,
        color:Colors.charcoalBlack40,
        marginTop:12,
        marginLeft:24,
        fontFamily: 'AvenirNextLTProRegular',
    },
    backButton:{
        marginLeft: 20,
        
    },
    logoButton:{

       marginRight:20
        
    },
    title: {
        marginLeft: 10,
        fontSize: 24,
        color:Colors.white,
        marginTop:20,
        marginLeft:24,
        fontFamily: 'AvenirNextLTProBold',
    },
    roundedView:{
        width: "100%",
        height: "100%",
        backgroundColor: Colors.white,
        marginTop: 40,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    gaugeIcon:{
        width: 16,
        height: 16,
    },
    gaugeIconText:{
        marginLeft: 10,
        fontSize: 14,
        color:Colors.charcoalBlack,
        fontFamily: 'AvenirNextLTProMedium',
    },
    gaugeContainer:{
        flexDirection: "row", 
        marginLeft:24, 
        marginTop: 20, 
        alignItems: "center"
    },
    inputContainer: {
        flexDirection: "row", 
        marginLeft: 20, 
        marginTop: 20, 
        alignItems: "center"
    },
    amountText: {
        color: Colors.charcoalBlack,
        fontSize: 25,
        marginLeft: 10,
        marginTop:2,
        fontFamily: 'AvenirNextLTProBold',
        width: "100%",
    },
    divider: {
        backgroundColor: Colors.nearWhiteGray,
        height: .6,
        width: "90%",
        marginTop: 10,
        marginLeft: 20,
        opacity: .5
    },
    suggestedAmountRow: {
        flexDirection: "row", 
        marginTop: 20, 
        justifyContent: "space-evenly"
    },
    suggestedAmountContainer: {
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 5,
        marginRight: 10,
        backgroundColor: Colors.brightGreen07
    },
    suggestedAmountText: {
        color: Colors.green,
        fontSize: 12,
        fontFamily: 'AvenirNextLTProDemi',
    },
    buttonText: {
        color: Colors.white,
        fontSize: 16,
        fontFamily: 'AvenirNextLTProDemi'
    },
    buttonContainer: {
        width: "100%",
        height: "40%",
        alignItems: "center",
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute'
    },
    button: {
        padding: 15,
        alignItems: "center",
        width: "70%",
        borderRadius: 25
    }

});
export default ManageLimit;