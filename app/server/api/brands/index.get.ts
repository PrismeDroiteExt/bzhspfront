export default defineEventHandler(async (event) => {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/brands`);
    if (!response.ok) throw new Error("Failed to fetch brands");

    return await response.json();
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Failed to fetch brands",
    });
  }
});
