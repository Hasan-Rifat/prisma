import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  /*  const getAllUsers = await prisma.users.findMany();
  console.log(getAllUsers); */

  const postUser = await prisma.users.create({
    data: {
      name: "John Doe",
      email: "john@gmail.com",
    },
  });
}

main();
