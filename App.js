import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import COLORS from './src/consts/colors';

//screens
import OrderDetailsScreen from './src/screens/OrderDetailsScreen';
import BottomNavigator from './src/navigation/BottomNavigator';

//screens that I add
import OrderScreen from './src/screens/OrderScreen';
import MenuScreen from './src/screens/MenuScreen';
import ReportScreen from './src/screens/ReportScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import AddMenuScreen from './src/screens/AddMenuScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="Home" component={BottomNavigator} />
    
        <Stack.Screen name="OrderDetailsScreen" component={OrderDetailsScreen} />
        <Stack.Screen name="OrderScreen" component={OrderScreen} />
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
        <Stack.Screen name="AddMenuScreen" component={AddMenuScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
