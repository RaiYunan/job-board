import { prisma } from "./lib/prisma.js";

async function main() {
  await prisma.user.upsert({
    where: { email: "yunan@example.com" },
    update: {},
    create: { name: "Yunan", email: "yunan@example.com" },
  });

  const users = await prisma.user.findMany();
  console.log(users);
}

main().finally(() => prisma.$disconnect());