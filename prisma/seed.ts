import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.collection.deleteMany();

  console.log('Seeding...');

  const collection = await prisma.collection.create({
    data: {
      data: 'lisa@simpson.com',
    },
  });
  console.log({ collection });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
