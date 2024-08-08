import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useState , useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Home from './HOME/Home';
import Splash from './HOME/Splash'
import Complainttypes from './HOME/Complainttypes';
import Settings from './FORM/Settings';

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
