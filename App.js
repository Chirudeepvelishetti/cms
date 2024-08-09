import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useState , useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Home from './HOME/Home';
import Splash from './HOME/Splash'
import Complainttypes from './HOME/Complainttypes';

import Forms from './FORM/Forms';
import Page1 from './FORM/Page1';
import Page2 from './FORM/Page2';
import Page3 from './FORM/Page3';
import Page4 from './FORM/Page4';
import Pagem from './FORM/Pagem';
import Submit from './FORM/Submit'

export default function App() {
  const Stack = createStackNavigator();
  const [isShownSplash, setIsShownSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {

      
      setIsShownSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {isShownSplash ? (
        <Stack.Screen 
          name='sc1' 
          component={Splash} 
          options={{ headerShown: false }} 
        />
      ) : (
        <Stack.Screen 
          name='home' 
          component={Home} 
          options={{ headerShown: false }} 

        />
      )}
        <Stack.Screen name='screen' component={Forms} options={{headerShown:false}} />
        <Stack.Screen name='types' component={Complainttypes} options={{headerShown:false}} />
        <Stack.Screen name='page1' component={Page1} options={{headerShown:false}} />
        <Stack.Screen name='page2' component={Page2} options={{headerShown:false}} />
        <Stack.Screen name='page3' component={Page3} options={{headerShown:false}} />
        <Stack.Screen name='page4' component={Page4} options={{headerShown:false}} />
        <Stack.Screen name='pagem' component={Pagem} options={{headerShown:false}} />
        <Stack.Screen name='submit' component={Submit} options={{headerShown:false}} />
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
