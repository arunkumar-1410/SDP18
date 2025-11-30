import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { recordPurchase } from "../redux/StatsSlice";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Paper,
} from "@mui/material";

export default function BuyerDashboard() {
  const dispatch = useDispatch();

  const marketItems = useSelector((state) => state.stats.marketItems);

  const [quantities, setQuantities] = useState({});
  const [cart, setCart] = useState([]); // 🔥 NEW: Cart items

  const handleBuy = (item) => {
    const qty = Number(quantities[item.id]);

    if (!qty || qty <= 0) return alert("Enter valid quantity");

    const purchase = {
      id: Date.now(),
      farmerId: item.farmerId,
      buyerId: 1,
      buyerName: "Default Buyer",
      product: item.product,
      quantity: qty,
      amount: item.price * qty,
      date: new Date().toLocaleString(),
    };

    dispatch(recordPurchase(purchase));

    // Add to cart (only for total display)
    setCart((prev) => [...prev, purchase]);

    alert("Purchase successful!");
  };

  // 🔥 Calculate Total Price
  const total = cart.reduce((sum, item) => sum + item.amount, 0);

  return (
    <Box sx={{ padding: "20px", marginTop: "60px" }}>
      <Typography variant="h4" fontWeight={600} sx={{ mb: 3 }}>
        Buyer Dashboard
      </Typography>

      <Grid container spacing={2}>
        {marketItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ p: 2 }}>
              <CardContent>
                <Typography variant="h6">{item.product}</Typography>

                <Typography sx={{ color: "green", fontWeight: 600 }}>
                  Price: ₹{item.price}
                </Typography>

                <Typography sx={{ mt: 1 }}>
                  Available: {item.quantity}
                </Typography>

                <TextField
                  size="small"
                  label="Qty"
                  type="number"
                  sx={{ mt: 2 }}
                  onChange={(e) =>
                    setQuantities({
                      ...quantities,
                      [item.id]: e.target.value,
                    })
                  }
                />

                <Button
                  variant="contained"
                  sx={{ mt: 2, backgroundColor: "#2e7d32" }}
                  fullWidth
                  onClick={() => handleBuy(item)}
                >
                  Buy
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}

        {marketItems.length === 0 && (
          <Typography sx={{ mt: 4, ml: 2 }}>
            No items available yet.
          </Typography>
        )}
      </Grid>

      {/* 🔥 TOTAL PRICE SECTION */}
      <Paper
        elevation={3}
        sx={{
          mt: 4,
          p: 2,
          backgroundColor: "#f5f5f5",
          width: "300px",
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          🧾 Total Bill
        </Typography>

        {cart.length === 0 ? (
          <Typography sx={{ mt: 1 }}>No items purchased yet.</Typography>
        ) : (
          <>
            {cart.map((item) => (
              <Typography key={item.id} sx={{ mt: 1 }}>
                {item.product} × {item.quantity} = ₹{item.amount}
              </Typography>
            ))}

            <Typography
              sx={{
                mt: 2,
                fontWeight: "700",
                color: "#2e7d32",
                borderTop: "1px solid #ccc",
                pt: 1,
              }}
            >
              Total: ₹{total}
            </Typography>
          </>
        )}
      </Paper>
    </Box>
  );
}