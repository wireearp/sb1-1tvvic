import { storage } from '../storage';
import { v4 as uuidv4 } from 'uuid';
import type { Customer } from '../../types';

const STORAGE_KEY = 'customers';

export const customerApi = {
  async getAll(): Promise<Customer[]> {
    const customers = await storage.get<Customer[]>(STORAGE_KEY);
    return customers || [];
  },

  async getById(id: string): Promise<Customer | null> {
    const customers = await this.getAll();
    return customers.find(customer => customer.id === id) || null;
  },

  async create(customer: Omit<Customer, 'id'>): Promise<Customer> {
    const customers = await this.getAll();
    const newCustomer = { ...customer, id: uuidv4() };
    await storage.set(STORAGE_KEY, [...customers, newCustomer]);
    return newCustomer;
  },

  async update(id: string, updates: Partial<Customer>): Promise<Customer | null> {
    const customers = await this.getAll();
    const index = customers.findIndex(customer => customer.id === id);
    if (index === -1) return null;

    const updatedCustomer = { ...customers[index], ...updates };
    customers[index] = updatedCustomer;
    await storage.set(STORAGE_KEY, customers);
    return updatedCustomer;
  },

  async delete(id: string): Promise<boolean> {
    const customers = await this.getAll();
    const filteredCustomers = customers.filter(customer => customer.id !== id);
    if (filteredCustomers.length === customers.length) return false;
    await storage.set(STORAGE_KEY, filteredCustomers);
    return true;
  }
};