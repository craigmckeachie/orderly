import { Link } from 'react-router-dom';
import { formatPhoneNumber } from '../utility/formatUtlities';
import { Customer } from './Customer';
import { customersAPI } from './customersAPI';
import toast from 'react-hot-toast';

interface CustomerCardProps {
  customer: Customer;
  onRemove: (customer: Customer) => void;
}

function CustomerCard({ customer, onRemove }: CustomerCardProps) {
  return (
    <div className="card p-4">
      <div className="d-flex justify-content-between">
        <span className="customer-circle d-flex bg-secondary fs-3 text-white align-items-center justify-content-center rounded-circle">
          {customer.firstName?.substring(0, 1)}
          {customer.lastName?.substring(0, 1)}
        </span>
        <details className="dropdown mb-5">
          <summary className="btn text-decoration-none no-caret fs-4">
            &#x22EE;
          </summary>

          <ul className="dropdown-menu" style={{ display: 'revert' }}>
            <li>
              <Link
                className="dropdown-item text-decoration-none text-body"
                to={`./edit/${customer.id}`}
              >
                Edit
              </Link>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={async () => {
                 
                  if (
                    confirm('Are you sure you want to delete this product?')
                  ) {
                    if (customer.id) {
                      await customersAPI.delete(customer.id);
                      onRemove(customer);
                      toast.success('Successfully deleted.');
                    }
                  }
                }}
              >
                Delete
              </button>
            </li>
          </ul>
        </details>
      </div>

      <div className="card-body">
        <h5 className="card-title">
          {customer.firstName} {customer.lastName}
        </h5>
        <address>
          {customer.address}
          <br />
          {customer.city}, {customer.state} {customer.zip}
        </address>
        <div className="card-text small">{customer.email}</div>
        <div className="card-text small">
          {formatPhoneNumber(customer.phone)}
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;
