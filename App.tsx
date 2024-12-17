import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { Dashboard } from './src/screens/Dashboard';
import { PlotManagement } from './src/screens/PlotManagement';
import { CustomerManagement } from './src/screens/CustomerManagement';
import { TransactionHistory } from './src/screens/TransactionHistory';
import { Settings } from './src/screens/Settings';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
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
      </NavigationContainer>
    </PaperProvider>
  );
}