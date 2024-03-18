import { getProducts } from "@/lib/data";
import React from "react";
import Product from "./product";

const ProductList = async () => {
  const products = await getProducts();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {products.map((product) => (
        <div className="" key={product.id}>
          <Product
            image={product.image}
            name={product.name}
            size={product.size}
            price={product.price}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
