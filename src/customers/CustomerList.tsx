import { useEffect, useState } from 'react';
import CustomerCard from './CustomerCard';
import { Customer } from './Customer';
import toast from 'react-hot-toast';
import { customersAPI } from './customersAPI';

function CustomerList() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(false);

  async function loadCustomers() {
    try {
      setLoading(true);
      const data = await customersAPI.list();
      setCustomers(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCustomers();
  }, []);

  function removeCustomer(customer: Customer) {
    setCustomers(customers.filter((c) => c.id !== customer.id));
  }

  return (
    <section
      role="list"
      className="d-flex gap-4 flex-wrap bg-body-tertiary p-4 rounded-2"
    >
      {loading && <span>Loading...</span>}
      {customers?.map((customer) => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          onRemove={removeCustomer}
        />
      ))}
    </section>
  );
}

export default CustomerList;
