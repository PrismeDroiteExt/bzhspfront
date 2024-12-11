export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  try {
    const response = await fetch(`${config.public.API_BASE_URL}/brands`);
    if (!response.ok) throw new Error("Failed to fetch brands");

    return await response.json();
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Failed to fetch brands",
    });
  }
});
