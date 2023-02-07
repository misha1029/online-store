import { Prisma, PrismaClient, Product } from '@prisma/client';
import { faker } from '@faker-js/faker';
import * as dotenv from 'dotenv';
import { IProductPart, products } from './products.data';

const prisma = new PrismaClient();

function toSlug(name: string): string {
  return name.replace(/[^a-z0-9]/gi, '-').toLowerCase();
}

const fakerProduct = (product: IProductPart): Prisma.ProductCreateInput => ({
  name: product.name,
  images: product.images,
  description: faker.commerce.productDescription(),
  price: faker.datatype.number({ min: 4, max: 20 }),
  slug: toSlug(product.name),
  reviews: {
    createMany: {
      data: Array.from({
        length: faker.datatype.number({ min: 1, max: 4 }),
      }).map(() => ({
        text: faker.lorem.paragraph(),
        rating: faker.datatype.number({ min: 1, max: 5 }),
      })),
    },
  },
});

async function main() {
  const fakerRounds = 10;
  dotenv.config();
  console.log('Seeding...');
  
  await Promise.all(
    products.map(async (product) => {
      await prisma.product.create({ data: fakerProduct(product) });
    }),
  );
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
