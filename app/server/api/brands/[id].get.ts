export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const config = useRuntimeConfig();

  try {
    const response = await fetch(`${config.public.API_BASE_URL}/brands/${id}`);
    if (!response.ok) throw new Error("Brand not found");

    return await response.json();
  } catch (error) {
    throw createError({
      statusCode: 404,
      message: "Brand not found",
    });
  }
});
