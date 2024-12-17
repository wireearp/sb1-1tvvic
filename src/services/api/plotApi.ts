import { storage } from '../storage';
import { v4 as uuidv4 } from 'uuid';
import type { Plot } from '../../types';

const STORAGE_KEY = 'plots';

export const plotApi = {
  async getAll(): Promise<Plot[]> {
    const plots = await storage.get<Plot[]>(STORAGE_KEY);
    return plots || [];
  },

  async getById(id: string): Promise<Plot | null> {
    const plots = await this.getAll();
    return plots.find(plot => plot.id === id) || null;
  },

  async create(plot: Omit<Plot, 'id'>): Promise<Plot> {
    const plots = await this.getAll();
    const newPlot = { ...plot, id: uuidv4() };
    await storage.set(STORAGE_KEY, [...plots, newPlot]);
    return newPlot;
  },

  async update(id: string, updates: Partial<Plot>): Promise<Plot | null> {
    const plots = await this.getAll();
    const index = plots.findIndex(plot => plot.id === id);
    if (index === -1) return null;

    const updatedPlot = { ...plots[index], ...updates };
    plots[index] = updatedPlot;
    await storage.set(STORAGE_KEY, plots);
    return updatedPlot;
  },

  async delete(id: string): Promise<boolean> {
    const plots = await this.getAll();
    const filteredPlots = plots.filter(plot => plot.id !== id);
    if (filteredPlots.length === plots.length) return false;
    await storage.set(STORAGE_KEY, filteredPlots);
    return true;
  }
};