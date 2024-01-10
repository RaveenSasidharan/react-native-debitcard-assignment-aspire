
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from'@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Colors } from '../resources/Colors';
import Home from '../screens/Home';
import Credit from '../screens/Credit';
import DebitCard from '../screens/DebitCard';
import Payment from '../screens/Payment';
import Profile from '../screens/Profile';
import ManageLimit from '../screens/ManageLimit';
import Account from "../components/svglogos/Account.js";
import Payments from "../components/svglogos/Payments.js";

import DeactivatedCards from "../components/svglogos/DeactivatedCards.js";
import Credits from "../components/svglogos/Credits.js";
import HomeIcon from "../components/svglogos/Home.js";

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
                <HomeIcon/>
             )
        }}/>
         <BottomTabs.Screen name='DebitCard' 
       component={DebitCard}
        options={
          {
            headerShown: false,
             tabBarLabel:'Debit Card',
             tabBarIcon: ({color, size}) =>(
                <DeactivatedCards/>
             )
        }}/>
         <BottomTabs.Screen name='Payment' 
       component={Payment}
        options={
          {
            headerShown: false,
             tabBarLabel:'Payment',
             tabBarIcon: ({color, size}) =>(
                <Payments/>
             )
        }}/>
         <BottomTabs.Screen name='Credit' 
       component={Credit}
        options={
          {
            headerShown: false,
             tabBarLabel:'Credit',
             tabBarIcon: ({color, size}) =>(
                <Credits/>
             )
        }}/>
         <BottomTabs.Screen name='Profile' 
       component={Profile}
        options={
          {
            headerShown: false,
             tabBarLabel:'Profile',
             tabBarIcon: ({color, size}) =>(
                <Account />
              
             )
        }}/>
      
    </BottomTabs.Navigator>);
}

function Routes() {

    return(
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name ="HomeScreen" component ={HomeScreen} options={{headerShown:false}} />
          <Stack.Screen name  ="ManageLimit" component ={ManageLimit}  options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Routes;