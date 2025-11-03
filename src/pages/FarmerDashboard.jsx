import React from 'react';
import { Box, Grid, Paper, Typography, Card, CardMedia, CardContent, TextField, Button } from '@mui/material';
import useForm from '../hooks/useForm';

const demoImages = [
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1506802230852-767b7b1e7aef?auto=format&fit=crop&w=400&q=80"
];

function FarmerDashboard() {
  const { values, handleChange, resetForm } = useForm({ name: '', description: '', price: '', image: '' });
  const [products, setProducts] = React.useState([]);

  const handleAddProduct = () => {
    setProducts(prev => [...prev, { ...values, id: Date.now(), image: values.image || demoImages[Math.floor(Math.random() * demoImages.length)] }]);
    resetForm();
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" mb={4}>Manage Your Products</Typography>
      {/* Add Product Form */}
      <Grid spacing={2} container mb={4}>
        <Grid item xs={12} md={3}><TextField fullWidth label="Name" name="name" value={values.name} onChange={handleChange} /></Grid>
        <Grid item xs={12} md={4}><TextField fullWidth label="Description" name="description" value={values.description} onChange={handleChange} /></Grid>
        <Grid item xs={12} md={2}><TextField fullWidth label="Price" name="price" value={values.price} onChange={handleChange} type="number" /></Grid>
        <Grid item xs={12} md={3}><Button fullWidth variant="contained" onClick={handleAddProduct}>Add Product</Button></Grid>
      </Grid>
      {/* Products Grid */}
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={12} md={4} key={product.id}>
            <Card sx={{ height: '100%', transition: 'all 0.3s', '&:hover': { boxShadow: 6, transform: 'scale(1.02)' } }}>
              <CardMedia image={product.image} height="140" sx={{ objectFit: 'cover' }} />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="text.secondary">{product.description}</Typography>
                <Typography color="primary" mt={2}>₹{product.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FarmerDashboard;
