export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  try {
    const response = await fetch(`${process.env.API_BASE_URL}/brands/${id}`);
    if (!response.ok) throw new Error("Brand not found");

    const data = await response.json();
    console.log("brand fetched from server", data);
    return data;
  } catch (error) {
    throw createError({
      statusCode: 404,
      message: "Brand not found",
    });
  }
});
