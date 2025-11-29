import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { recordPurchase } from "../redux/StatsSlice";
import {
  Box,
  Card,
  Typography,
  Grid,
  Button,
} from "@mui/material";

export default function BuyerDashboard() {
  const dispatch = useDispatch();

  const marketItems = useSelector((state) => state.stats.marketItems);

  const [cart, setCart] = useState([]);

  const handleBuy = (item) => {
    dispatch(
      recordPurchase({
        product: item.product,
        price: item.price,
      })
    );

    setCart((prev) => [...prev, item]);
    alert(`${item.product} added to cart!`);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Box sx={{ padding: "20px", marginTop: "40px" }}>
      <Typography variant="h4" fontWeight={600} sx={{ mb: 3 }}>
        Buyer Dashboard
      </Typography>

      <Typography variant="h6">Available Market Items</Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {marketItems.length === 0 ? (
          <Typography sx={{ mt: 3, ml: 2 }}>
            No items added yet by farmers.
          </Typography>
        ) : (
          marketItems.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  p: 2,
                  borderRadius: "12px",
                  textAlign: "center",
                  boxShadow: 3,
                }}
              >
                <Typography fontSize={35}>🛒</Typography>

                <Typography fontWeight={600} fontSize={18}>
                  {item.product}
                </Typography>

                <Typography color="green" fontSize={16} sx={{ mt: 1 }}>
                  ₹{item.price}
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "#2e7d32",
                    "&:hover": { backgroundColor: "#1b5e20" },
                  }}
                  fullWidth
                  onClick={() => handleBuy(item)}
                >
                  Buy
                </Button>
              </Card>
            </Grid>
          ))
        )}
      </Grid>

      {/* CART SECTION */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h6">Your Cart</Typography>

        {cart.length === 0 ? (
          <Typography sx={{ mt: 1 }}>Cart is empty.</Typography>
        ) : (
          <>
            {cart.map((item, index) => (
              <Typography key={index}>
                {item.product} — ₹{item.price}
              </Typography>
            ))}

            <Typography sx={{ mt: 2, fontWeight: 600 }}>
              Total: ₹{total}
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
}
