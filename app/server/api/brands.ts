import { brandsFeeder } from "@/feeder";

export default defineEventHandler((event) => {
  return brandsFeeder;
});
