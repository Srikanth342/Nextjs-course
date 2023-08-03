import { hash,compare } from "bcryptjs";

export const hashPassword = async (password) => {
  const hashPassword = await hash(password, 12);
  return hashPassword;
};

export const verifyPassword = async (password,hashedPassword) => {
  const isValid = await compare(password,hashedPassword);
  return isValid;
};
