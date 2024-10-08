import { Customer } from './Customer';

export const customersAPI = {
  list(): Promise<Customer[]> {
    return fetch(`http://localhost:3000/customers`)
      .then((response) => {
        if (!response.ok) throw new Error('http error');
        return response;
      })
      .then((response) => response.json());
  },

  find(id: number): Promise<Customer> {
    return fetch(`http://localhost:3000/customers/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error('http error');
        return response;
      })
      .then((response) => response.json());
  },

  post(customer: Customer): Promise<Customer> {
    return fetch(`http://localhost:3000/customers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer),
    })
      .then((response) => {
        if (!response.ok) throw new Error('http error');
        return response;
      })
      .then((response) => response.json());
  },

  put(customer: Customer): Promise<Customer> {
    return fetch(`http://localhost:3000/customers/${customer.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer),
    })
      .then((response) => {
        if (!response.ok) throw new Error('http error');
        return response;
      })
      .then((response) => response.json());
  },

  delete(id: number): Promise<Customer> {
    return fetch(`http://localhost:3000/customers/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) throw new Error('http error');
        return response;
      })
      .then((response) => response.json());
  },
};
