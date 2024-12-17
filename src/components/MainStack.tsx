import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { Dashboard } from "./screens/Dashboard";
import { PlotManagement } from "./screens/PlotManagement";
import { CustomerManagement } from "./screens/CustomerManagement";
import { TransactionHistory } from "./screens/TransactionHistory";
import { Settings } from "./screens/Settings";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#2563eb",
                },
                headerTintColor: "#ffffff",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Dashboard"
                component={Dashboard}
            />
            <StackNavigator.Screen
                name="PlotManagement"
                component={PlotManagement}
                options={{ title: "Plot Management" }}
            />
            <StackNavigator.Screen
                name="CustomerManagement"
                component={CustomerManagement}
                options={{ title: "Customer Management" }}
            />
            <StackNavigator.Screen
                name="TransactionHistory"
                component={TransactionHistory}
                options={{ title: "Transactions" }}
            />
            <StackNavigator.Screen
                name="Settings"
                component={Settings}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);