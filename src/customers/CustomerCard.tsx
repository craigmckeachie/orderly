import { Link } from 'react-router-dom';
import { formatPhoneNumber } from '../utility/formatUtlities';
import { Customer } from './Customer';

interface CustomerCardProps {
  customer: Customer;
}

function CustomerCard({ customer }: CustomerCardProps) {
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
              <a className="dropdown-item" href="#">
                Delete
              </a>
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
