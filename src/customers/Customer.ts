export class Customer {
  id?: number;
  firstName = '';
  lastName = '';
  address = '';
  city = '';
  state = '';
  zip = '';
  email = '';
  phone = '';

  constructor(values?: any) {
    if (!values) return;
    if (values.id) this.id = values.id;
    if (values.firstName) this.firstName = values.firstName;
    if (values.lastName) this.firstName = values.lastName;
    if (values.address) this.address = values.address;
    if (values.city) this.city = values.city;
    if (values.state) this.state = values.state;
    if (values.zip) this.zip = values.zip;
    if (values.email) this.email = values.email;
    if (values.phone) this.phone = values.phone;
  }

  get isNew() {
    return this.id === undefined;
  }
}
