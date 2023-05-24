import prisma from "./prisma";

export async function getProducts() {
  try {
    const products = await prisma.products.findMany();
    return { products };
  } catch (error) {
    return { error };
  }
}

export async function getProductById(id: string) {
  try {
    const product = await prisma.products.findUnique({ where: { id } });
    return { product };
  } catch (error) {
    return { error };
  }
}
