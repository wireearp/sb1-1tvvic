export interface Plot {
  id: string;
  section: string;
  lot: string;
  space: string;
  status: 'available' | 'reserved' | 'occupied' | 'maintenance';
  price: number;
  type: 'standard' | 'premium';
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  nextOfKin?: {
    name: string;
    phone: string;
    email: string;
  };
}

export interface Transaction {
  id: string;
  plotId: string;
  customerId: string;
  type: 'sale' | 'payment' | 'refund';
  amount: number;
  date: Date;
  paymentMethod: 'cash' | 'credit' | 'check' | 'installment';
  status: 'pending' | 'completed' | 'failed';
  notes?: string;
}

export interface Deceased {
  id: string;
  plotId: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: Date;
  dateOfDeath: Date;
  dateOfBurial: Date;
  notes?: string;
}