import pizza from "../pizza.json";

export default function FilterList(arr, method) {
  if (method == null) return pizza;
  else {
    return pizza.filter((product) => {
      const sizeArray = product.size.split(" ");
      if (arr.length > 0 && sizeArray.some((r) => arr.indexOf(r) >= 0)) {
        return product;
      } else {
        return pizza;
      }
    });
  }
}
