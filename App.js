import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet, Text, View } from 'react-native';
import Home from './HOME/Home';
import Scanner from './HOME/Scanner';
import Complainttypes from './HOME/Complainttypes';
import Settings from './FORM/Settings';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={Home} options={{headerShown:false}}/>
        <Stack.Screen name='screen' component={Settings} options={{headerShown:false}} />
        <Stack.Screen name='types' component={Complainttypes} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
