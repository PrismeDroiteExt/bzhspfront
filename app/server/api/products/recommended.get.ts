export default defineEventHandler(async (event) => {
  try {
    const url = `${process.env.API_BASE_URL}/products/recommended`;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseText = await response.text();

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
