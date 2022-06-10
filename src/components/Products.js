import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import axios from 'axios';
import './Products.css';


function Products() {
  const [productList, setProductList] = useState([]);

  useEffect(async () => {
    const getProducts = async () => {
      var response = await axios.get('https://capstonetask.herokuapp.com/getProducts');
      setProductList(response.data);
    }
    getProducts();
  }, [])

  return (
    <div style={{ padding: '2%' }}>
      <Grid container spacing={4}>
        {productList.map((product) => (
          <Grid item>
            <Card sx={{ width: 365 }}>
              <div className="card">
                <img className="productimage" src={product.imageUrl} alt={product.title} />
                <div className="content">
                  <h3>{product.name}</h3>
                  <h4>₹ {product.price}</h4>
                  <h5>Available:{product.countInStock}</h5>
                </div>
                </div>
              
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Products;