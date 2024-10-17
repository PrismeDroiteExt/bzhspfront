import { categoriesFeeder, productsFeeder } from "@/feeder";

export default defineEventHandler((event) => {
  const categoryId = parseInt(getRouterParam(event, "id") as string);
  const query = getQuery(event);

  const category = categoriesFeeder.find((cat) => cat.id === categoryId);
  if (!category) {
    throw createError({
      statusCode: 404,
      message: "Category not found",
    });
  }

  let products = productsFeeder.filter((product) => product.fk_category_id === categoryId);

  const size = query.size;
  if (size) {
    products = products.filter((product) => product.sizes.includes(parseInt(size as string)));
  }

  return {
    category,
    products,
  };
});
