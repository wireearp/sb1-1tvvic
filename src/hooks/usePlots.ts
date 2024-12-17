import { useCallback } from 'react';
import { usePlotStore } from '../stores/plotStore';
import { plotService } from '../services/plotService';
import type { Plot } from '../types';

export const usePlots = () => {
  const { plots, loading, error, setPlots, setLoading, setError } = usePlotStore();

  const fetchPlots = useCallback(async () => {
    setLoading(true);
    try {
      const fetchedPlots = await plotService.getPlots();
      setPlots(fetchedPlots);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [setPlots, setLoading, setError]);

  const createPlot = useCallback(async (plot: Omit<Plot, 'id'>) => {
    setLoading(true);
    try {
      const newPlot = await plotService.createPlot(plot);
      setPlots([...plots, newPlot]);
      setError(null);
      return newPlot;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [plots, setPlots, setLoading, setError]);

  return {
    plots,
    loading,
    error,
    fetchPlots,
    createPlot
  };
};