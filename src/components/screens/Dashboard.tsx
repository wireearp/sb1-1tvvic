import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";

interface DashboardProps {
    navigation: FrameNavigationProp<any, "Dashboard">;
}

export function Dashboard({ navigation }: DashboardProps) {
    return (
        <gridLayout rows="auto, *" className="p-4">
            <stackLayout row="0" className="mb-4">
                <label className="text-2xl font-bold">Cemetery Management System</label>
            </stackLayout>
            
            <scrollView row="1">
                <gridLayout columns="*, *" rows="auto, auto" className="gap-4">
                    <stackLayout 
                        col="0" 
                        row="0" 
                        className="bg-blue-500 p-4 rounded-lg"
                        onTap={() => navigation.navigate("PlotManagement")}
                    >
                        <label className="text-white text-lg font-semibold">Plot Management</label>
                        <label className="text-white">Manage cemetery plots</label>
                    </stackLayout>

                    <stackLayout 
                        col="1" 
                        row="0" 
                        className="bg-green-500 p-4 rounded-lg"
                        onTap={() => navigation.navigate("CustomerManagement")}
                    >
                        <label className="text-white text-lg font-semibold">Customers</label>
                        <label className="text-white">Manage customer records</label>
                    </stackLayout>

                    <stackLayout 
                        col="0" 
                        row="1" 
                        className="bg-purple-500 p-4 rounded-lg"
                        onTap={() => navigation.navigate("TransactionHistory")}
                    >
                        <label className="text-white text-lg font-semibold">Transactions</label>
                        <label className="text-white">View financial records</label>
                    </stackLayout>

                    <stackLayout 
                        col="1" 
                        row="1" 
                        className="bg-gray-500 p-4 rounded-lg"
                        onTap={() => navigation.navigate("Settings")}
                    >
                        <label className="text-white text-lg font-semibold">Settings</label>
                        <label className="text-white">System configuration</label>
                    </stackLayout>
                </gridLayout>
            </scrollView>
        </gridLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        padding: 16,
    }
});