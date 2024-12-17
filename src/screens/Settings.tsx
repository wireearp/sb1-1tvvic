import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Settings() {
  return (
    <SafeAreaView style={styles.container}>
      <List.Section>
        <List.Subheader>General</List.Subheader>
        <List.Item
          title="User Profile"
          left={props => <List.Icon {...props} icon="account" />}
        />
        <List.Item
          title="Notifications"
          left={props => <List.Icon {...props} icon="bell" />}
        />
        <List.Item
          title="Security"
          left={props => <List.Icon {...props} icon="shield" />}
        />
        <List.Subheader>Data Management</List.Subheader>
        <List.Item
          title="Backup Data"
          left={props => <List.Icon {...props} icon="database" />}
        />
        <List.Item
          title="Export Reports"
          left={props => <List.Icon {...props} icon="file-export" />}
        />
      </List.Section>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
});