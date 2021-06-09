//All about the bottom tab navigator, its icons, and what links to which page
import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import {View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';

//screens added by myself
import OrderScreen from '../screens/OrderScreen';
import MenuScreen from '../screens/MenuScreen';
import ReportScreen from '../screens/ReportScreen';
import ProfileScreen from '../screens/ProfileScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import AddMenuScreen from '../screens/AddMenuScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 55,
          borderTopWidth: 0.5,
          elevation: 0,
        },
        showLabel: true,
        activeTintColor: COLORS.primary,
      }}>
      <Tab.Screen
        name="เมนู"
        component={MenuScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="menu-book" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="รายการสั่ง"
        component={OrderScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="report" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="ยอดขาย"
        component={ReportScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="library-books" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="บัญชี"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="person" color={color} size={28} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};

export default BottomNavigator;

{/*

<Tab.Screen
        name="testSignIn"
        component={SignInScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="question" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="testSignUp"
        component={SignUpScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="question" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="testOrderDetail"
        component={OrderDetailsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="question" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="testAddMenu"
        component={AddMenuScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="question" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="หน้าหลัก"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="restaurant-menu" color={color} size={28} />
          ),
        }}
      />

*/}