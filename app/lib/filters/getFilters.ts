export async function getBrandFilters() {
  const brands = await useFetch("/api/brands");
  if (!brands.data.value) {
    return [];
  }

  const brandsFilter = brands.data.value.map((brand) => ({
    value: brand.id.toString(),
    label: brand.name,
  }));

  brandsFilter.unshift({ value: "all", label: "Toutes" });

  return brandsFilter;
}
