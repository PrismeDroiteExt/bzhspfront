export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const config = useRuntimeConfig();

  try {
    const response = await fetch(`${config.public.API_BASE_URL}/products/${id}`);
    if (!response.ok) throw new Error("Product not found");

    return await response.json();
  } catch (error) {
    throw createError({
      statusCode: 404,
      message: "Product not found",
    });
  }
});
