
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from'@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SvgUri from 'react-native-svg-uri';
import {Colors } from '../resources/Colors';
import {Images} from '../resources/Images'
import Home from '../screens/Home';
import Credit from '../screens/Credit';
import DebitCard from '../screens/DebitCard';
import Payment from '../screens/Payment';
import Profile from '../screens/Profile';
import ManageLimit from '../screens/ManageLimit';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();


function  HomeScreen(){
    return( 
    <BottomTabs.Navigator
    initialRouteName='DebitCard'
    screenOptions={{
    
      tabBarStyle:{backgroundColor: Colors.white},
      tabBarActiveTintColor:Colors.green,

    }}>
      <BottomTabs.Screen name='Home' 
       component={Home}
        options={
          {
            headerShown: false,
             tabBarLabel:'Home',
             tabBarIcon: ({color, size}) =>(
                <SvgUri
                width={size}
                height={size}
                source={Images.home}
                fill={Colors.green}
              />
             )
        }}/>
         <BottomTabs.Screen name='DebitCard' 
       component={DebitCard}
        options={
          {
            headerShown: false,
             tabBarLabel:'Debit Card',
             tabBarIcon: ({color, size}) =>(
                <SvgUri
                width={size}
                height={size}
                source={Images.deactivatedCards}
                fill={color}
              />
             )
        }}/>
         <BottomTabs.Screen name='Payment' 
       component={Payment}
        options={
          {
            headerShown: false,
             tabBarLabel:'Payment',
             tabBarIcon: ({color, size}) =>(
                <SvgUri
                width={size}
                height={size}
                source={Images.payments}
                fill={color}
              />
             )
        }}/>
         <BottomTabs.Screen name='Credit' 
       component={Credit}
        options={
          {
            headerShown: false,
             tabBarLabel:'Credit',
             tabBarIcon: ({color, size}) =>(
                <SvgUri
                width={size}
                height={size}
                source={Images.card}
                fill={color}
              />
             )
        }}/>
         <BottomTabs.Screen name='Profile' 
       component={Profile}
        options={
          {
            headerShown: false,
             tabBarLabel:'Profile',
             tabBarIcon: ({color, size}) =>(
                <SvgUri
                width={size}
                height={size}
                source={Images.account}
                fill={color}
              />
             )
        }}/>
      
    </BottomTabs.Navigator>);
}

function Routes() {

    return(
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name ="HomeScreen" component ={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name  ="ManageLimit" component ={ManageLimit} />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Routes;