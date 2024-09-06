import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { Customer } from './Customer';

function CustomerForm() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zip: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className="row" noValidate onSubmit={formik.handleSubmit}>
      <div className="mb-3 form-group col-md-6">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control is-invalid"
          id="firstName"
          placeholder="Enter First Name"
          {...formik.getFieldProps('firstName')}
        />
        <div className="invalid-feedback">First Name is required.</div>
      </div>

      <div className="mb-3 form-group col-md-6">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control is-invalid"
          id="lastName"
          placeholder="Enter Last Name"
          {...formik.getFieldProps('lastName')}
        />
        <div className="invalid-feedback">Last Name is required.</div>
      </div>

      <div className="mb-3 form-group col-md-12">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control is-invalid"
          id="address"
          placeholder="Enter Address"
          {...formik.getFieldProps('address')}
        />
        <div className="invalid-feedback">Address is required.</div>
      </div>

      <div className="mb-3 form-group col-md-6">
        <label htmlFor="city" className="form-label">
          City
        </label>
        <input
          type="text"
          className="form-control is-invalid"
          id="city"
          placeholder="Enter City"
          {...formik.getFieldProps('city')}
        />
        <div className="invalid-feedback">City is required.</div>
      </div>

      <div className="mb-3 form-group col-md-2">
        <label htmlFor="state" className="form-label">
          State
        </label>

        <select
          className="form-select is-invalid"
          id="state"
          {...formik.getFieldProps('state')}
        >
          <option value="">Select state...</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
        <div className="invalid-feedback">State is required.</div>
      </div>

      <div className="mb-3 form-group col-md-4">
        <label htmlFor="zip" className="form-label">
          Zip
        </label>
        <input
          type="text"
          className="form-control is-invalid"
          id="zip"
          placeholder="Enter Zip"
          {...formik.getFieldProps('zip')}
        />
        <div className="invalid-feedback">Zip is required.</div>
      </div>

      <div className="mb-3 form-group col-md-6">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control is-invalid"
          id="email"
          placeholder="Enter Email"
          {...formik.getFieldProps('email')}
        />
        <div className="invalid-feedback">Email is required.</div>
      </div>

      <div className="mb-3 form-group col-md-6">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          type="text"
          className="form-control is-invalid"
          id="phone"
          placeholder="Enter Phone"
          {...formik.getFieldProps('phone')}
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
