import { storage } from './storage';
import type { Plot, Customer, Transaction, Deceased } from '../types';

const STORAGE_KEYS = {
  PLOTS: 'plots',
  CUSTOMERS: 'customers',
  TRANSACTIONS: 'transactions',
  DECEASED: 'deceased',
};

export const initDatabase = async () => {
  const plots = await storage.get<Plot[]>(STORAGE_KEYS.PLOTS);
  if (!plots) {
    await storage.set(STORAGE_KEYS.PLOTS, []);
    console.log('Initialized plots storage');
  }

  const customers = await storage.get<Customer[]>(STORAGE_KEYS.CUSTOMERS);
  if (!customers) {
    await storage.set(STORAGE_KEYS.CUSTOMERS, []);
    console.log('Initialized customers storage');
  }

  const transactions = await storage.get<Transaction[]>(STORAGE_KEYS.TRANSACTIONS);
  if (!transactions) {
    await storage.set(STORAGE_KEYS.TRANSACTIONS, []);
    console.log('Initialized transactions storage');
  }

  const deceased = await storage.get<Deceased[]>(STORAGE_KEYS.DECEASED);
  if (!deceased) {
    await storage.set(STORAGE_KEYS.DECEASED, []);
    console.log('Initialized deceased storage');
  }
