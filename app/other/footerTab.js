import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import LearningScreen from '../screens/learn';
import StyleScreen from '../screens/style';
import InforScreen from '../screens/infor';
import ProfileScreen from '../screens/prof';

// Import the necessary icons
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function FooterTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: 'black' },
        
      }}
    >
      <Tab.Screen
        name="首頁"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="舞蹈學院"
        component={LearningScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="school" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="舞出你的STYLE"
        component={StyleScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="資訊中心"
        component={InforScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="個人資訊"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
