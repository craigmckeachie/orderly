import { Link } from 'react-router-dom';
import { formatPhoneNumber } from '../utility/formatUtlities';
import { Customer } from './Customer';

interface CustomerCardProps {
  customer: Customer;
}

function CustomerCard({ customer }: CustomerCardProps) {
  return (
    <div className="card p-4">
      <Link className='text-decoration-none text-secondary' to={`./edit/${customer.id}`}>
        <span className="customer-circle d-flex bg-secondary fs-3 text-white align-items-center justify-content-center rounded-circle">
          {customer.firstName?.substring(0, 1)}
          {customer.lastName?.substring(0, 1)}
        </span>
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
      </Link>
    </div>
  );
}

export default CustomerCard;
