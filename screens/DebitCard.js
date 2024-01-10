
import AvailableBalance from "../components/AvailableBalance";
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Colors } from "../resources/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import DebitCardModal from "../components/DebitCardModal";
import Logo from "../components/svglogos/Logo";
import { Images } from "../resources/Images";

function DebitCard(){

    return (<SafeAreaView style = {styles.safeArea}>
            <ScrollView>
              
            <Image source={Images.logoPng}  style = {styles.logo}/>  
            <AvailableBalance balance={3000} />
            <View style={styles.bgImage} />
            <DebitCardModal/>
            </ScrollView>
            
            </SafeAreaView>);
     
}

const styles = StyleSheet.create({
    safeArea:{
      flexGrow: 1,
      backgroundColor: Colors.backgroundBlue
    },
    logo: {
      alignSelf: 'flex-end',
      marginEnd: 16,
      marginTop: 26
    },
    bgImage: {
      backgroundColor: Colors.white,
      height: "100%",
      width: "100%",
      position: "absolute",
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      marginTop: 325
  }
  });
  

export default DebitCard;