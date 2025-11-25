import { prisma } from "@/db";
import { productData } from "@/db/seed-data";

async function main() {
  await prisma.product.deleteMany({});

  for (const product of productData) {
    await prisma.product.create({
      data: {
        id: product.id,
        name: product.name ?? null,
        description: product.description ?? null,
        template: product.template,
        createdAt: new Date(product.createdAt),
        updatedAt: new Date(product.updatedAt),
      },
    });
  }
}

main()
  .catch((err) => {
    console.error("Error while seeding:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
