import { prisma } from ".";
import bycrpt from "bcrypt";

export const createUser = (userData) => {
  const finalUserData = {
    ...userData,
    password: bycrpt.hashSync(userData.password, 10),
  };

  return prisma.user.create({
    data: finalUserData,
  });
};

export const getUserByUsername = (username) => {
  return prisma.user.findUnique({
    where: {
      username,
    },
  });
};
