import { categoriesFeeder, productsFeeder } from "@/feeder";

export default defineEventHandler((event) => {
  const productId = parseInt(getRouterParam(event, "id") as string);

  const product = productsFeeder.find((product) => product.id === productId);
  if (!product) {
    throw createError({
      statusCode: 404,
      message: "Product not found",
    });
  }

  return product;
});
