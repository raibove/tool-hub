import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL || "", process.env.REACT_APP_SUPABASE_KEY || "")

interface Product {
    product_url: string;
    product_description: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch all products from the 'products' table
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase.from('products').select('*');
        if (error) {
          console.error('Error fetching data:', error);
        } else {
          setProducts(data);
        }
      } catch (error: any) {
        console.error('Error:', error.message);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

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
