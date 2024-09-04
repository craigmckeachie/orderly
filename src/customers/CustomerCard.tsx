import { Customer } from './Customer';

interface CustomerCardProps {
  customer: Customer;
}

function CustomerCard({ customer }: CustomerCardProps) {
  return (
    <div className="card p-4">
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
        <div className="card-text small">{customer.phone}</div>
      </div>
    </div>
  );
}

export default CustomerCard;
