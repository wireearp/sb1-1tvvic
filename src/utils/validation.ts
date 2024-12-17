import * as yup from 'yup';

export const plotSchema = yup.object({
  section: yup.string().required('Section is required'),
  lot: yup.string().required('Lot is required'),
  space: yup.string().required('Space is required'),
  price: yup.number().positive('Price must be positive').required('Price is required'),
  type: yup.string().oneOf(['standard', 'premium']).required('Type is required'),
  status: yup.string().oneOf(['available', 'reserved', 'occupied', 'maintenance']).required('Status is required')
});

export const customerSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone is required'),
  address: yup.object({
    street: yup.string().required('Street is required'),
    city: yup.string().required('City is required'),
    state: yup.string().required('State is required'),
    zipCode: yup.string().required('ZIP code is required')
  })
});

export const transactionSchema = yup.object({
  plotId: yup.string().required('Plot ID is required'),
  customerId: yup.string().required('Customer ID is required'),
  amount: yup.number().positive('Amount must be positive').required('Amount is required'),
  type: yup.string().oneOf(['sale', 'payment', 'refund']).required('Type is required'),
  paymentMethod: yup.string().oneOf(['cash', 'credit', 'check', 'installment']).required('Payment method is required')
});