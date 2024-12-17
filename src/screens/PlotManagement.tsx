import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PlotList } from '../components/PlotList';
import { usePlots } from '../hooks/usePlots';

export function PlotManagement({ navigation }) {
  const { plots, loading, error, fetchPlots } = usePlots();

  useEffect(() => {
    fetchPlots();
  }, [fetchPlots]);

  const handlePlotSelect = (plot) => {
    navigation.navigate('PlotDetails', { plotId: plot.id });
  };

  return (
    <SafeAreaView style={styles.container}>
      <PlotList plots={plots} onSelectPlot={handlePlotSelect} />
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate('PlotForm')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#2563eb',
  },
});