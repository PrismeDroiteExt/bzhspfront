export default defineEventHandler(async (event) => {
  const categoryId = parseInt(getRouterParam(event, "id") as string);
  const query = getQuery(event);

  return null;
});
