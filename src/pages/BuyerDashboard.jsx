import React, { useState } from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button, Rating } from '@mui/material';

const products = [
  { id: 1, name: "Organic Honey", description: "Pure honey", image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "Artisan Jam", description: "Fresh handmade jam", image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
];

function BuyerDashboard() {
  const [cart, setCart] = useState([]);
  const [ratings, setRatings] = useState({});

  const addToCart = (product) => setCart(prev => [...prev, product]);

  const handleRatingChange = (productId, value) => {
    setRatings(prev => ({ ...prev, [productId]: value }));
  };

  return (
    <Box p={4}>
      <Typography variant="h4" mb={4}>Products for Sale</Typography>
      <Grid container spacing={3}>
        {products.map(p => (
          <Grid item xs={12} md={4} key={p.id}>
            <Card sx={{ height: '100%', transition: 'all 0.3s', '&:hover': { boxShadow: 6, transform: 'scale(1.02)' } }}>
              <CardMedia image={p.image} height="140" sx={{ objectFit: 'cover' }} />
              <CardContent>
                <Typography variant="h6">{p.name}</Typography>
                <Typography variant="body2">{p.description}</Typography>
                <Typography color="primary" mt={2}>₹{p.price}</Typography>
                <Rating value={ratings[p.id] || 3} onChange={(e, newVal) => handleRatingChange(p.id, newVal)} />
                <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={() => addToCart(p)}>Add to Cart</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* Cart Summary */}
      <Box mt={4}>
        <Typography variant="h6">Your Cart:</Typography>
        {cart.length === 0 ? <Typography>No items added</Typography> :
          cart.map((item, idx) => (<Typography key={idx}>{item.name} - ₹{item.price}</Typography>))
        }
      </Box>
    </Box>
  );
}

export default BuyerDashboard;
