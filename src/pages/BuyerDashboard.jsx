import React, { useState } from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button, Rating } from '@mui/material';

const products = [
  {
    id: 1,
    name: "Organic Honey",
    description: "Pure honey",
    price: 250,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Artisan Jam",
    description: "Fresh handmade jam",
    price: 180,
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80"
  }
];

function BuyerDashboard() {
  const [cart, setCart] = useState([]);
  const [ratings, setRatings] = useState({});

  return (
    <Box p={4}>
      <Typography variant="h4" mb={4}>Products for Sale</Typography>

      <Grid container spacing={3}>
        {products.map(p => (
          <Grid item xs={12} md={4} key={p.id}>
            <Card sx={{ height: '100%', '&:hover': { boxShadow: 6 } }}>
              <CardMedia component="img" height="180" image={p.image} alt={p.name} />

              <CardContent>
                <Typography variant="h6">{p.name}</Typography>
                <Typography variant="body2">{p.description}</Typography>
                <Typography fontWeight={600} color="primary">₹{p.price}</Typography>

                <Rating
                  value={ratings[p.id] || 3}
                  onChange={(e, val) => setRatings({ ...ratings, [p.id]: val })}
                />

                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={() => setCart(prev => [...prev, p])}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box mt={4}>
        <Typography variant="h6">Your Cart:</Typography>
        {cart.length === 0
          ? <Typography>No items added</Typography>
          : cart.map((item, i) => <Typography key={i}>{item.name} — ₹{item.price}</Typography>)
        }
      </Box>
    </Box>
  );
}

export default BuyerDashboard;
