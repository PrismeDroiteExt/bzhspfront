import { categoriesFeeder, productsFeeder } from "@/feeder";

export default defineEventHandler((event) => {
  const categoryId = parseInt(getRouterParam(event, "id") as string);
  const query = getQuery(event);

  console.log("query server", query);

  const category = categoriesFeeder.find((cat) => cat.id === categoryId);
  if (!category) {
    throw createError({
      statusCode: 404,
      message: "Category not found",
    });
  }

  const products = productsFeeder.filter((product) => product.fk_category_id === categoryId);

  return {
    category,
    products,
  };
});
