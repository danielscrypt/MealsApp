// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
// import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Colors from './assets/Colors';
import MainScreen from './components/MainScreen'
import AppBar from './components/ui/AppBar';
import CategoryScreen from './components/CategoryScreen';
import ItemScreen from './components/ItemScreen';
import FavoritesScreen from './components/FavoritesScreen';
import FavContextProvider from './components/context/Context';


const Stack = createNativeStackNavigator()
const Tab = createMaterialBottomTabNavigator();
// const Drawer = createDrawerNavigator()

function MainScreenOverView() {
      return (
        <Stack.Navigator screenOptions={{
          contentStyle: {backgroundColor: Colors.secondary200},
       }} >      
         <Stack.Screen options={{
           title: 'All Categories'
         }} name='MealsCategories' component={MainScreen}/>
         <Stack.Screen name='CategoryScreen' component={CategoryScreen}/>
         <Stack.Screen name='ItemScreen' component={ItemScreen}/>
       </Stack.Navigator>
      )
}

export default function App() {

  return (
    <>
    <FavContextProvider>
    <NavigationContainer>
    <AppBar />
    <StatusBar style="light" />
    <Tab.Navigator
     activeColor={Colors.main600}
     inactiveColor={Colors.secondary600}
     barStyle={{ backgroundColor: Colors.secondary400 }}
     >
      <Tab.Screen options={{
        tabBarIcon: () => <Ionicons name='home' color={Colors.main400} size={24} />
      }} 
      name='MealsCategories' 
      component={MainScreenOverView}/>
      <Tab.Screen 
      name='Favorites' 
      component={FavoritesScreen}
      options={{
        tabBarIcon: () => <Ionicons name='star' color={Colors.main400} size={24} />
      }}
      />
    </Tab.Navigator>
    </NavigationContainer>
    </FavContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
