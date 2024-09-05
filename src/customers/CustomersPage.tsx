import { Link } from 'react-router-dom';
import CustomerList from './CustomerList';

function CustomersPage() {
  return (
    <section>
      <header className="d-flex justify-content-between">
        <h3>Customers</h3>
        <Link to="create" className='btn btn-outline-secondary'>+ Add Customer</Link>
      </header>
      <hr />
      <CustomerList />
    </section>
  );
}

export default CustomersPage;
