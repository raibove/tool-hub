import React, { useEffect, useState } from 'react';

interface Product {
    product_url: string;
    product_description: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch all tools from the 'products' table
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/get-all-tools`);
        const data = await response.json();

        if (response.ok) {
          setProducts(data);
        } else {
          console.error('Error fetching data:', data.error || 'Unknown error');
        }
      } catch (error: any) {
        console.error('Error:', error.message);
      }
    };

    fetchProducts();
  }, []); 
  
  return (
    <div>
      <h2>All Products</h2>
      {products.map((product, idx) => (
        <div key={idx} className="product-card">
          <h3>{product.product_url}</h3>
          <p>{product.product_description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
