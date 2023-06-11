import prisma from "./prisma";

export async function getCategories() {
  try {
    const categories = await prisma.categories.findMany();
    return { categories };
  } catch (error) {
    return { error };
  }
}

export async function getCategoriesByParent(parent: string) {
  try {
    const categories = await prisma.categories.findMany({
      where: { parentName: parent },
    });
    return { categories };
  } catch (error) {
    return { error };
  }
}
