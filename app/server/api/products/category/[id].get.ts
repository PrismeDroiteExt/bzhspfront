export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const config = useRuntimeConfig();
  const query = getQuery(event);

  // Build query string from filters
  const queryParams = new URLSearchParams();
  if (query.brand) queryParams.append("brand", query.brand as string);
  if (query.min_price) queryParams.append("min_price", query.min_price as string);
  if (query.max_price) queryParams.append("max_price", query.max_price as string);
  if (query.colors) queryParams.append("colors", query.colors as string);
  if (query.sizes) queryParams.append("sizes", query.sizes as string);

  try {
    const response = await fetch(`${config.public.API_BASE_URL}/products/category/${id}?${queryParams.toString()}`);
    if (!response.ok) throw new Error("Products not found");

    return await response.json();
  } catch (error) {
    throw createError({
      statusCode: 404,
      message: "Products not found",
    });
  }
});
