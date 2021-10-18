import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AddUser from '../screens/AddUser';
import ManageUsers from '../screens/ManageUsers';
const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="MainNavigation" >
        <Stack.Screen name="ManageUsers" component={ManageUsers} /> 
        <Stack.Screen name="AddUser" component={AddUser} /> 
      </Stack.Navigator>
  );
};

export default MainNavigation;