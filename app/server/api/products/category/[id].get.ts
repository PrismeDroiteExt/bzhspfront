export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const query = getQuery(event);

  console.log("id", id);
  console.log("query", query);

  console.log("query size", query.sizes);
  // Build query string from filters
  const queryParams = new URLSearchParams();
  if (query.brand && query.brand !== "all") queryParams.append("brand", query.brand as string);
  if (query.min_price && query.min_price !== "all") queryParams.append("min_price", query.min_price as string);
  if (query.max_price && query.max_price !== "all") queryParams.append("max_price", query.max_price as string);
  if (query.colors && query.colors !== "all") queryParams.append("colors", query.colors as string);
  if (query.sizes && query.sizes !== "all") queryParams.append("sizes", query.sizes as string);

  try {
    const response = await fetch(`${process.env.API_BASE_URL}/products/category/${id}?${queryParams.toString()}`);

    console.log("response for products by category", response);
    if (!response.ok) throw new Error("Products not found");

    return await response.json();
  } catch (error) {
    throw createError({
      statusCode: 404,
      message: "Products not found",
    });
  }
});
