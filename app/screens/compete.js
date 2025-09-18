import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function CompeteScreen(){
    return(
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>舞蹈學院</Text>
    </View>
    );
}
