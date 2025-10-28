import { View, Text } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Products from './products';
import Index from './index'
import Orders from './orders';
import Basket from './basket';
import Account from './account';

const Tab = createBottomTabNavigator()
const Tabslayout = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:'#5e60ce',
      tabBarInactiveTintColor:'#3e3e3e',
      tabBarStyle:{
        height:60,
        width:'100%',
        
      },
      tabBarLabelStyle:{
        fontSize:12,
        fontWeight:800,
      }
    }}
    >
        <Tab.Screen
        name='index'
        component={Index}
        options={{
            title:'Home',
            tabBarIcon:({color,size}) => <Ionicons name='home' size={28}/>
        }}
        />
        <Tab.Screen
        name='products'
        component={Products}
        options={{
            title:'Products',
            tabBarIcon:({color,size}) => <Ionicons name='calendar-clear' size={28}/>
        }}
        />
        <Tab.Screen
        name='orders'
        component={Orders}
        options={{
            title:'Orders',
            tabBarIcon:({color,size}) => <Ionicons name='sync-circle' size={28}/>
        }}
        />
        <Tab.Screen
        name='basket'
        component={Basket}
        options={{
            title:'Basket',
            tabBarIcon:({color,size}) => <Ionicons name='bag-handle' size={28}/>
        }}
        />
        <Tab.Screen
        component={Account}
        name='account'
        options={{
            title:'Account',
            tabBarIcon:({color,size}) => <Ionicons name='person' size={28}/>
        }}
        />
    </Tab.Navigator>
  )
}

export default Tabslayout