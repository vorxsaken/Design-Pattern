import { UserBuilder } from "./user-builder.js";

const user = new UserBuilder("John Doe")
  .setAge(30)
  .setEmail("john@example.com")
  .setPhone("123456789")
  .build();

console.log(user);
