import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from '../screens/Dashboard';
import { PlotManagement } from '../screens/PlotManagement';
import { CustomerManagement } from '../screens/CustomerManagement';
import { TransactionHistory } from '../screens/TransactionHistory';
import { Settings } from '../screens/Settings';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2563eb',
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen 
        name="PlotManagement" 
        component={PlotManagement}
        options={{ title: 'Plot Management' }}
      />
      <Stack.Screen 
        name="CustomerManagement" 
        component={CustomerManagement}
        options={{ title: 'Customer Management' }}
      />
      <Stack.Screen 
        name="TransactionHistory" 
        component={TransactionHistory}
        options={{ title: 'Transactions' }}
      />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}