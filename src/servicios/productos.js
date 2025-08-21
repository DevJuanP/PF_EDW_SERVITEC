
export  async function getProducts() {
  const response = await fetch("./../../public/productos.json");
  const data = await response.json();
  return data.productos;
}

// Filtrar por categoría
export async function getProductsByCategory(category) {
  const products = await getProducts();
  return products.filter(p => p.category === category);
}

// Buscar por ID
export async function getProductById(id) {
  const products = await getProducts();
  return products.find(p => p.id === id);
}

export const hola = () => {
  return "Hola desde productos.js";
}