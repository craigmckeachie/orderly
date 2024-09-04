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
};
