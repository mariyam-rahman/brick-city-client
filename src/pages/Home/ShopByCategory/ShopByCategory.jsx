import { Tabs } from "flowbite-react";
import { useEffect, useState } from "react";

import ProductItem from "./ProductItem";
const ShopByCategory = () => {
  const [products, setProducts] = useState([]);

  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        setAllCategories(getCategories(data));
        setProducts(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log({ products });

  return (
    <div className="my-24">
      <h2 className="text-4xl text-center py-20">Shop By Category</h2>
      <Tabs.Group aria-label="Tabs with underline" style="underline">
        {allCategories.map((cat) => {
          return (
            <Tabs.Item key={cat} title={cat}>
              <div className="md:grid-cols-4 grid gap-5">
                {products
                  .filter((p) => p.category == cat)
                  .map((e) => (
                    <div className="flex-1 items-stretch">
                      <ProductItem key={e._id} product={e} />
                    </div>
                  ))}
              </div>
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
