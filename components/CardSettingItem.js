import React, { useState }from 'react';

import { View, Text, Image, TouchableOpacity, Switch , StyleSheet} from 'react-native';
import { Colors } from '../resources/Colors';
function CardSettingItem({
    imageIcon,
    title,
    description,
    toggleVisibility,
    onToggle,
    onPress,
  }){
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
      setIsEnabled((previousState) => !previousState);
    };
    return (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.listItemContainer}>
            {imageIcon}
    
            <View style={styles.itemContent}>
              <View style={styles.titleRow}>
                <Text style={styles.tileText}>{title}</Text>
                {toggleVisibility && (
                  <Switch
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={styles.switch}
                />
                )}
              </View>
              <Text style={styles.descriptionText}>{description}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
}


const styles = StyleSheet.create( {
    listItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.white,
      padding: 10,
      marginHorizontal:8,
      paddingVertical:17
    },
    imageIcon: {
      width: 32,
      height: 32,
      marginRight: 10,
    },
    itemContent: {
      flex: 1,
      flexDirection: 'column',
    },
    switch:{
      marginLeft: 10,
      height:5,
      transform: [{ scaleX: .6 }, { scaleY: .6 }],
    },
    titleRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    descriptionText:{
      color: Colors.charcoalBlack,
      fontSize: 13,
      opacity:0.4,
      marginStart:12,
      marginTop:12,
      fontFamily:'AvenirNextLTProRegular',
    },
    tileText:{
      color: Colors.midnightBlue,
      fontSize: 13,
      marginStart:12,
      fontFamily:'AvenirNextLTProMedium',
    },
  });
  

export default CardSettingItem;