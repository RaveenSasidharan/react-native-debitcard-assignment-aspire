
import CardSettingItem from './CardSettingItem';

import React from 'react';

import { View } from 'react-native';

function CardSettingList({ data }){
    return(<View >
        {data.map((item, index) => (
          <CardSettingItem key={index} {...item} />
        ))}
      </View>);
}



export default CardSettingList;

