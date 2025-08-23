import { useEffect, useState } from "react";

export function useFurniture() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(
          "https://furniture-api.fly.dev/v1/products?limit=100"
        );
        const json = await res.json();
        setProducts(json.data || []); // make sure data exists
      } catch (err) {
        console.error("Error fetching furniture:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return { products, loading };
}
