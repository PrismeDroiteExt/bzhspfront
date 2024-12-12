export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);

  if (!query.query) {
    throw createError({
      statusCode: 400,
      message: "Search query is required",
    });
  }

  // Build query string from filters
  const queryParams = new URLSearchParams();
  queryParams.append("query", query.query as string);
  if (query.category) queryParams.append("category", query.category as string);
  if (query.brand) queryParams.append("brand", query.brand as string);
  if (query.min_price) queryParams.append("min_price", query.min_price as string);
  if (query.max_price) queryParams.append("max_price", query.max_price as string);
  if (query.colors) queryParams.append("colors", query.colors as string);
  if (query.sizes) queryParams.append("sizes", query.sizes as string);

  try {
    const response = await fetch(`${config.public.API_BASE_URL}/products/search?${queryParams.toString()}`);
    if (!response.ok) throw new Error("Failed to search products");

    return await response.json();
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Failed to search products",
    });
  }
});
