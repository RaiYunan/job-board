import { prisma } from "../src/lib/prisma";

async function main() { //seed function
  await prisma.user.createMany({
    data: [
      { name: "Yunan", email: "yunan@example.com" },
      { name: "Sita", email: "sita@example.com" },
      { name: "Ram", email: "ram@example.com" },
    ],
    skipDuplicates:true,
  });
  console.log("Seeding finished");
}


main().catch(console.error).finally(()=>prisma.$disconnect) //disconnect from db and stop query engine