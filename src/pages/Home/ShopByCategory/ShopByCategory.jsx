import { Tabs } from "flowbite-react";
import { useEffect, useState } from "react";

import ProductItem from "./ProductItem";
const ShopByCategory = () => {
  const [products, setProducts] = useState([]);

  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllCategories(getCategories(data));
        setProducts(data);
      });
  }, []);

  return (
    <div className="my-24">
      <h2 className="text-4xl text-center py-20">Shop By Category</h2>
      <Tabs.Group aria-label="Tabs with underline" style="underline">
        {allCategories.map((cat) => {
          return (
            <Tabs.Item key={cat} title={cat}>
              {products
                .filter((p) => p.category == cat)
                .map((e) => (
                  <ProductItem key={e._id} product={e} />
                ))}
            </Tabs.Item>
          );
        })}
      </Tabs.Group>
    </div>
  );
};

function getCategories(products) {
  const categories = new Set();

  products.forEach((product) => {
    categories.add(product.category);
  });

  return Array.from(categories);
}

export default ShopByCategory;
