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

  get isNew(){
    return this.id === undefined;
  }


}
