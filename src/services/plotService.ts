import { db } from './database';
import { Plot } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const plotService = {
  getPlots(): Promise<Plot[]> {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM plots ORDER BY section, lot, space',
          [],
          (_, { rows }) => resolve(rows.raw()),
          (_, error) => {
            reject(error);
            return false;
          }
        );
      });
    });
  },

  getPlotById(id: string): Promise<Plot | null> {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM plots WHERE id = ?',
          [id],
          (_, { rows }) => resolve(rows.length > 0 ? rows.item(0) : null),
          (_, error) => {
            reject(error);
            return false;
          }
        );
      });
    });
  },

  createPlot(plot: Omit<Plot, 'id'>): Promise<Plot> {
    const id = uuidv4();
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `INSERT INTO plots (id, section, lot, space, status, price, type, latitude, longitude)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            id,
            plot.section,
            plot.lot,
            plot.space,
            plot.status,
            plot.price,
            plot.type,
            plot.coordinates?.latitude,
            plot.coordinates?.longitude
          ],
          () => {
            resolve({ ...plot, id });
          },
          (_, error) => {
            reject(error);
            return false;
          }
        );
      });
    });
  },

  updatePlot(id: string, plot: Partial<Plot>): Promise<void> {
    const updates = Object.entries(plot)
      .filter(([key]) => key !== 'id')
      .map(([key]) => `${key} = ?`)
      .join(', ');

    const values = Object.entries(plot)
      .filter(([key]) => key !== 'id')
      .map(([_, value]) => value);

    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `UPDATE plots SET ${updates} WHERE id = ?`,
          [...values, id],
          () => resolve(),
          (_, error) => {
            reject(error);
            return false;
          }
        );
      });
    });
  }
};