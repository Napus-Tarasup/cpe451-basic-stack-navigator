import { TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { AntDesign } from '@expo/vector-icons';

import Home from './screens/Home';

import A0 from './screens/A0';
import B0 from './screens/B0';
import C0 from './screens/C0';

import A1 from './screens/A1';
import B1 from './screens/B1';
import C1 from './screens/C1';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="A0"
          component={A0}
          options={({ navigation }) => ({
            title: 'Setting Name A0 Here',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 18,
              color: 'indianred',
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <AntDesign name="caretleft" size={24} color="indianred" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="B0"
          component={B0}
          options={({ navigation }) => ({
            title: 'Setting Name B0 Here',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 18,
              color: 'khaki',
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <AntDesign name="leftcircle" size={24} color="khaki" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="C0"
          component={C0}
          options={({ navigation }) => ({
            title: 'Setting Name C0 Here',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 18,
              color: 'lightgreen',
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <AntDesign name="left" size={24} color="lightgreen" />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="A1"
          component={A1}
          options={({ navigation }) => ({
            title: 'Setting Name A1 Here',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 18,
              color: 'indianred',
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('A0')}>
                <AntDesign name="caretleft" size={24} color="indianred" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="B1"
          component={B1}
          options={({ navigation }) => ({
            title: 'Setting Name B1 Here',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 18,
              color: 'khaki',
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('B0')}>
                <AntDesign name="leftcircle" size={24} color="khaki" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="C1"
          component={C1}
          options={({ navigation }) => ({
            title: 'Setting Name C1 Here',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 18,
              color: 'lightgreen',
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('C0')}>
                <AntDesign name="left" size={24} color="lightgreen" />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
