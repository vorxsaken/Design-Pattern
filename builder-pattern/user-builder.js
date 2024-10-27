import { User } from "./user.js";

class UserBuilder {
  constructor(name) {
    this.name = name; // required field
  }

  setAge(age) {
    this.age = age;
    return this;
  }

  setEmail(email) {
    this.email = email;
    return this;
  }

  setPhone(phone) {
    this.phone = phone;
    return this;
  }

  setAddress(address) {
    this.address = address;
    return this;
  }

  build() {
    return new User(this);
  }
}

export { UserBuilder };
