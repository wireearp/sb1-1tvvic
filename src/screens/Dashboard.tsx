import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { MenuCard } from '../components/ui/MenuCard';
import type { RootStackParamList } from '../navigation/types';
import type { StackNavigationProp } from '@react-navigation/stack';

type DashboardNavigationProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;

export function Dashboard() {
  const navigation = useNavigation<DashboardNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <Title style={styles.header}>Cemetery Management System</Title>
      <View style={styles.grid}>
        <MenuCard
          title="Plot Management"
          subtitle="Manage cemetery plots"
          color="#3b82f6"
          onPress={() => navigation.navigate('PlotManagement')}
        />
        <MenuCard
          title="Customers"
          subtitle="Manage customer records"
          color="#22c55e"
          onPress={() => navigation.navigate('CustomerManagement')}
        />
        <MenuCard
          title="Transactions"
          subtitle="View financial records"
          color="#a855f7"
          onPress={() => navigation.navigate('TransactionHistory')}
        />
        <MenuCard
          title="Settings"
          subtitle="System configuration"
          color="#64748b"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f3f4f6',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});