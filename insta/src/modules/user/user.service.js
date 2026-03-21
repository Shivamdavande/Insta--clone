import { User } from "./user.model.js";

export const createUserService = async (data) => {

  const { name, username, email, password } = data;

  const existingUser = await User.findOne({
    $or: [{ email }, { username }]
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  console.log("Saving user...");
  const user = await User.create({
    name,
    username,
    email,
    password
  });

  console.log("Saved User:", user);

  return user;
};