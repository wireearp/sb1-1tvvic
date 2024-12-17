import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { List, Text, useTheme } from 'react-native-paper';
import type { Plot } from '../types';

interface PlotListProps {
  plots: Plot[];
  onSelectPlot: (plot: Plot) => void;
}

export const PlotList: React.FC<PlotListProps> = ({ plots, onSelectPlot }) => {
  const theme = useTheme();

  const renderItem = ({ item }: { item: Plot }) => (
    <List.Item
      title={`${item.section}-${item.lot}-${item.space}`}
      description={`${item.type} - ${item.status}`}
      left={props => <List.Icon {...props} icon="map-marker" />}
      right={props => <Text {...props}>${item.price}</Text>}
      onPress={() => onSelectPlot(item)}
      style={styles.listItem}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={plots}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
  listItem: {
    marginBottom: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
});