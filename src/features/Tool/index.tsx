import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useAuth } from "@pangeacyber/react-auth";
import './styles.css';

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL || "", process.env.REACT_APP_SUPABASE_KEY || "")

const Tool = ()=>{
  const { user } = useAuth();
  const [productUrl, setProductUrl] = useState('');
  const [description, setDescription] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      // Insert data into the 'products' table in Supabase
      const { data, error } = await supabase
        .from('products')
        .upsert([
          {
            product_url: productUrl,
            product_description: description,
            user_mail: user?.email
          },
        ]);

      if (error) {
        console.error('Error inserting data:', error);
      } else {
        console.log('Data inserted successfully:', data);
        // Clear input fields after successful submission
        setProductUrl('');
        setDescription('');
      }
    } catch (error: any) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="container">
      <h1>Submit new tool</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Tool URL:
          <input
            type="text"
            value={productUrl}
            onChange={(e) => setProductUrl(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Tool;