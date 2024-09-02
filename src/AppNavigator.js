import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Contacts from './screens/Contacts';
import AddContact from './screens/AddContact';
import ContactDetails from './screens/ContactDetails';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Contacts}
          name="Contacts"
          options=
          {
            {
              title: 'Phone Dialer',
              headerTitleAlign: 'center',
              headerShown: true}}
        />
        <Stack.Screen
          component={AddContact}
          name="AddContact"
          options={{headerBackVisible:false, title: 'Phone Dialer',headerTitleAlign: 'center', headerShown: true}}
        />
        <Stack.Screen
          component={ContactDetails}
          name="ContactDetails"
          options={{title: 'Phone Dialer',headerShown: true,headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
