import { brandsFeeder } from "@/feeder";

export default defineEventHandler(async (event) => {
  const response = await fetch(`${process.env.API_BASE_URL}/categories`);
  const data = await response.json();

  return data.data;
});
