export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  try {
    const url = `${config.public.API_BASE_URL}/products/recommended`;
    console.log("Calling API:", url);

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Response status:", response.status);
    const responseText = await response.text();
    console.log("Response body:", responseText);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}, body: ${responseText}`);
    }

    return JSON.parse(responseText);
  } catch (error) {
    console.error("Detailed error:", error);
    if (error instanceof Error) {
      throw createError({
        statusCode: 500,
        message: `Failed to fetch recommended products: ${error.message}`,
      });
    } else {
      throw createError({
        statusCode: 500,
        message: `Failed to fetch recommended products: ${error}`,
      });
    }
  }
});
