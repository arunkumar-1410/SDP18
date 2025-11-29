import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFarmerProduct } from "../redux/StatsSlice";
import { Box, Card, Typography, Button, Grid, TextField } from "@mui/material";

const products = [
  { name: "Apple", icon: "🍎" },
  { name: "Banana", icon: "🍌" },
  { name: "Carrot", icon: "🥕" },
  { name: "Tomato", icon: "🍅" },
  { name: "Coriander", icon: "🌿" },
];

export default function FarmerDashboard() {
  const dispatch = useDispatch();

  const priceLimits = useSelector((state) => state.stats.priceLimits);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    if (!selectedProduct) return alert("Select a product first");

    const { min, max } = priceLimits[selectedProduct];

    if (price < min || price > max)
      return alert(
        `Price must be between ₹${min} and ₹${max} (admin set limit)`
      );

    dispatch(
      addFarmerProduct({
        id: Date.now(),
        product: selectedProduct,
        price: Number(price),
      })
    );

    alert("Product added to market!");
    setPrice("");
    setSelectedProduct(null);
  };

  return (
    <Box sx={{ padding: "20px", marginTop: "40px" }}>
      <Typography variant="h4" sx={{ mb: 3 }} fontWeight={600}>
        Farmer Dashboard
      </Typography>

      <Typography variant="h6" sx={{ mb: 2 }}>
        Select Product
      </Typography>

      <Grid container spacing={2}>
        {products.map((p) => (
          <Grid size={{ xs: 12, sm: 6, md: 2 }} key={p.name}>
            <Card
              onClick={() => setSelectedProduct(p.name)}
              sx={{
                p: 2,
                textAlign: "center",
                border:
                  selectedProduct === p.name ? "2px solid green" : "1px solid #ccc",
                cursor: "pointer",
                borderRadius: "12px",
              }}
            >
              <Typography fontSize={40}>{p.icon}</Typography>
              <Typography>{p.name}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {selectedProduct && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">
            Set Price for {selectedProduct}
          </Typography>

          <Typography sx={{ color: "green", mb: 1 }}>
            Allowed Range: ₹{priceLimits[selectedProduct].min} – ₹
            {priceLimits[selectedProduct].max}
          </Typography>

          <TextField
            type="number"
            label="Enter Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <Button
            variant="contained"
            sx={{
              ml: 2,
              backgroundColor: "#2e7d32",
              "&:hover": { backgroundColor: "#1b5e20" },
            }}
            onClick={handleAdd}
          >
            Add to Market
          </Button>
        </Box>
      )}
    </Box>
  );
}
