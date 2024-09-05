import { Link } from 'react-router-dom';

function CustomerForm() {
  return (
    <form className="w-50" noValidate>
      <div className="mb-3 form-group">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control is-invalid"
          name="firstName"
          id="firstName"
          placeholder="Enter First Name"
        />
        <div className="invalid-feedback">First Name is required.</div>
      </div>

      <div className="mb-3 form-group">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control is-invalid"
          name="lastName"
          id="lastName"
          placeholder="Enter Last Name"
        />
        <div className="invalid-feedback">Last Name is required.</div>
      </div>

      <div className="mb-3 form-group">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control is-invalid"
          name="username"
          id="username"
          placeholder="Enter Username"
        />
        <div className="invalid-feedback">Username is required.</div>
      </div>

      <div className="mb-3 form-group">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control is-invalid"
          name="address"
          id="address"
          placeholder="Enter Address"
        />
        <div className="invalid-feedback">Address is required.</div>
      </div>

      <div className="mb-3 form-group">
        <label htmlFor="city" className="form-label">
          City
        </label>
        <input
          type="text"
          className="form-control is-invalid"
          name="city"
          id="city"
          placeholder="Enter City"
        />
        <div className="invalid-feedback">City is required.</div>
      </div>

      <div className="mb-3 form-group">
        <label htmlFor="state" className="form-label">
          State
        </label>
        <input
          type="text"
          className="form-control is-invalid"
          name="state"
          id="state"
          placeholder="Enter State"
        />
        <div className="invalid-feedback">State is required.</div>
      </div>

      <div className="mb-3 form-group">
        <label htmlFor="zip" className="form-label">
          Zip
        </label>
        <input
          type="text"
          className="form-control is-invalid"
          name="zip"
          id="zip"
          placeholder="Enter Zip"
        />
        <div className="invalid-feedback">Zip is required.</div>
      </div>

      <div className="mb-3 form-group">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control is-invalid"
          name="email"
          id="email"
          placeholder="Enter Email"
        />
        <div className="invalid-feedback">Email is required.</div>
      </div>

      <div className="mb-3 form-group">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          type="text"
          className="form-control is-invalid"
          name="phone"
          id="phone"
          placeholder="Enter Phone"
        />
        <div className="invalid-feedback">Phone is required.</div>
      </div>

      <hr />

      <div className="d-flex gap-2 pt-2">
        <button type="submit" className="btn btn-primary">
          Save
        </button>
        <Link className="btn btn-outline-secondary" to="/customers">
          Cancel
        </Link>
      </div>
    </form>
  );
}
export default CustomerForm;
