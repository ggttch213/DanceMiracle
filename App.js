import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FooterTab from "./app/other/footerTab";
import EventInfoPage from "./app/screens/event";
import DanceStylePage from "./app/screens/styleinfo";
import DanceTeacherPage from "./app/screens/teacher";
import DanceGroupPage from "./app/screens/group";
import QuestionnaireScreen from "./app/screens/QuestionnaireScreen";
import ProfileScreen from './app/screens/prof';
import LoginScreen from './app/screens/login';
import RegisterScreen from './app/screens/registrastion';

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Main" component={FooterTab} options={{ headerShown: false }} />
        <RootStack.Screen name="EventInfoPage" component={EventInfoPage} />
        <RootStack.Screen name="DanceStylePage" component={DanceStylePage} />
        <RootStack.Screen name="DanceTeacherPage" component={DanceTeacherPage} />
        <RootStack.Screen name="DanceGroupPage" component={DanceGroupPage} />
        <RootStack.Screen name="Questionnaire" component={QuestionnaireScreen} />
        <RootStack.Screen name="LoginScreen" component={LoginScreen} options={{ title: '登入' }} />
        <RootStack.Screen name="RegisterScreen" component={RegisterScreen} />
        <RootStack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: '個人資料' }} />

      </RootStack.Navigator>
    </NavigationContainer>
  );
}
