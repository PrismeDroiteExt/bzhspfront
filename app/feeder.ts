import type { Brand } from "./utils/schema/brands";
import type { Categorie } from "./utils/schema/categories";
import type { Product } from "./utils/schema/products";

export const categoriesFeeder: Categorie[] = [
  {
    id: 1,
    name: "Homme",
    picture_url: "/images/home/categories/homme.jpeg",
    description: "Homme",
    id_subcategory: null,
  },
  {
    id: 2,
    name: "Femme",
    picture_url: "/images/home/categories/femme.jpeg",
    description: "Femme",
    id_subcategory: null,
  },
  {
    id: 3,
    name: "Enfant",
    picture_url: "/images/home/categories/enfant.jpeg",
    description: "Enfant",
    id_subcategory: null,
  },
  {
    id: 4,
    name: "Vélo",
    picture_url: "/images/home/categories/velo.jpg",
    description: "Vélo",
    id_subcategory: null,
  },
  {
    id: 5,
    name: "Foot",
    picture_url: "/images/home/categories/foot.jpg",
    description: "Foot",
    id_subcategory: null,
  },
];

export const productsFeeder: Product[] = [
  {
    id: 1,
    fk_id_brands: 1,
    title: "Chassure de running homme",
    description: "Chassure de running homme",
    fk_category_id: 1,
    price: 160,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    discount: 115,
    colors: ["#004AAD", "#A6B1E1", "#FFB12C"],
    sizes: [40, 41, 42, 43, 44, 45],
    picture_url: "/images/home/products/asics.jpg",
    body: `Chaussure idéale pour un usage intensif sur longues et moyennes distances, extrêmement confortable et 

Repensée avec de nouveaux matériaux, la GEL-Ziruss 8 est plus moelleuse et rebondissante. Elle est dotée de l'amorti ASICS le plus dense et sa mousse légère.`,
  },
  {
    id: 2,
    fk_id_brands: 2,
    title: "Chaussure de marche homme",
    description: "Chaussure de marche homme",
    fk_category_id: 1,
    price: 130,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    discount: 104,
    colors: ["#004AAD", "#A6B1E1", "#FFB12C"],
    sizes: [40, 41, 42, 43, 44],
    picture_url: "/images/home/products/salomon.jpg",
    body: `Chaussure idéale pour un usage intensif sur longues et moyennes distances, extrêmement confortable et 

Repensée avec de nouveaux matériaux, la GEL-Ziruss 8 est plus moelleuse et rebondissante. Elle est dotée de l'amorti ASICS le plus dense et sa mousse légère.`,
  },
];

export const brandsFeeder: Brand[] = [
  {
    id: 1,
    name: "Asics",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    logo_url: "/images/home/brands/asics.png",
  },
  {
    id: 2,
    name: "Salomon",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    logo_url: "/images/home/brands/salomon.png",
  },
];
