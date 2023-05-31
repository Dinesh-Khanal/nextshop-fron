import prisma from "./prisma";

export async function getOrders() {
  try {
    const orders = await prisma.orders.findMany();
    return { orders };
  } catch (error) {
    return { error };
  }
}

export async function createOrder(orderInfo: IOrder) {
  try {
    const order = await prisma.orders.create({ data: orderInfo });
    return { order };
  } catch (error) {
    return { error };
  }
}
