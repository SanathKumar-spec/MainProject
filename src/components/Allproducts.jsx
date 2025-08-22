import { useState, useEffect } from "react";

export function useProducts(filterCriteria = "") {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://furniture-api.fly.dev/v1/products?limit=100")
      .then((res) => res.json())
      .then((res) => {
        let data = res.data;

        if (filterCriteria) {
          const criteria = filterCriteria.toLowerCase();
          data = data.filter(
            (item) =>
              item.name.toLowerCase().includes(criteria) ||
              item.category.toLowerCase().includes(criteria)
          );
        }

        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, [filterCriteria]);

  return { products, loading };
}
