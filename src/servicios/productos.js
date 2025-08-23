
export  async function getProducts() {
  const response = await fetch("./../../public/productos.json");
  const data = await response.json();
  return data.productos;
}

export const getByCategory = (category, productos) =>{
  return productos.filter(p => {
    let cat = p.categoria.name+"_"+p.categoria.Subcategoria
    console.log("cat: ",cat);
    return cat.trim() == category.trim();
  })
} 

export const getTitleCategory = (category) =>{
  switch (category) {
    case "laptops_gaming":
      return "LAPTOPS GAMER";
    case "laptops_otras":
      return "OTRAS LAPTOPS";
    default:
      return "CATEGORÍA NO ENCONTRADA";
  }
}