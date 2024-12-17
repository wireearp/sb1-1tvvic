import { create } from 'zustand';
import type { Plot } from '../types';

interface PlotStore {
  plots: Plot[];
  selectedPlot: Plot | null;
  loading: boolean;
  error: string | null;
  fetchPlots: () => Promise<void>;
  addPlot: (plot: Plot) => Promise<void>;
  updatePlot: (id: string, plot: Partial<Plot>) => Promise<void>;
  selectPlot: (plot: Plot) => void;
}

export const usePlotStore = create<PlotStore>((set, get) => ({
  plots: [],
  selectedPlot: null,
  loading: false,
  error: null,

  fetchPlots: async () => {
    set({ loading: true });
    try {
      // TODO: Implement actual API call
      const response = [] as Plot[];
      set({ plots: response, error: null });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  addPlot: async (plot: Plot) => {
    set({ loading: true });
    try {
      // TODO: Implement actual API call
      const plots = get().plots;
      set({ plots: [...plots, plot], error: null });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  updatePlot: async (id: string, plotUpdate: Partial<Plot>) => {
    set({ loading: true });
    try {
      // TODO: Implement actual API call
      const plots = get().plots;
      const updatedPlots = plots.map(plot => 
        plot.id === id ? { ...plot, ...plotUpdate } : plot
      );
      set({ plots: updatedPlots, error: null });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  selectPlot: (plot: Plot) => {
    set({ selectedPlot: plot });
  },
}));