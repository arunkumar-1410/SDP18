import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFarmerProduct } from "../redux/StatsSlice";
import {
  Box,
  Card,
  Typography,
  Button,
  Grid,
  TextField,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

// Available products
const products = [
  { name: "Apple", emoji: "🍎" },
  { name: "Banana", emoji: "🍌" },
  { name: "Carrot", emoji: "🥕" },
  { name: "Tomato", emoji: "🍅" },
  { name: "Coriander", emoji: "🌿" },
];

export default function FarmerDashboard() {
  const dispatch = useDispatch();

  const priceLimits = useSelector((state) => state.stats.priceLimits);
  const marketItems = useSelector((state) => state.stats.marketItems);
  const purchaseHistory = useSelector((state) => state.stats.purchaseHistory);

  // Farmer ID (no authentication → fixed farmer = 1)
  const farmerId = 1;

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  // Filter items belonging to this farmer
  const farmerItems = marketItems.filter((i) => i.farmerId === farmerId);

  // Filter orders for this farmer
  const farmerOrders = purchaseHistory.filter(
    (o) => o.farmerId === farmerId
  );

  const handleAdd = () => {
    if (!selectedProduct) return alert("Select a product first");

    const { min, max } = priceLimits[selectedProduct];
    const numPrice = Number(price);

    if (numPrice < min || numPrice > max)
      return alert(`Allowed price: ₹${min} – ₹${max}`);

    if (!quantity || Number(quantity) <= 0)
      return alert("Enter quantity");

    dispatch(
      addFarmerProduct({
        id: Date.now(),
        farmerId,
        product: selectedProduct,
        price: numPrice,
        quantity: Number(quantity),
      })
    );

    setPrice("");
    setQuantity("");
    alert("Product added!");
  };

  return (
    <Box sx={{ padding: "20px", marginTop: "60px" }}>
      <Typography variant="h4" fontWeight={600} mb={3}>
        Farmer Dashboard
      </Typography>

      {/* Product Selection */}
      <Typography variant="h6" fontWeight={600}>
        Select Product
      </Typography>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        {products.map((p) => (
          <Grid item key={p.name}>
            <Card
              onClick={() => setSelectedProduct(p.name)}
              sx={{
                p: 2,
                width: 120,
                textAlign: "center",
                cursor: "pointer",
                border:
                  selectedProduct === p.name
                    ? "2px solid green"
                    : "1px solid #ccc",
              }}
            >
              <Typography fontSize={30}>{p.emoji}</Typography>
              <Typography fontWeight={600}>{p.name}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Price + Quantity */}
      <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
        <TextField
          label="Price"
          type="number"
          size="small"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <TextField
          label="Quantity"
          type="number"
          size="small"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <Button
          variant="contained"
          sx={{ backgroundColor: "#2e7d32" }}
          onClick={handleAdd}
        >
          Add
        </Button>
      </Box>

      {/* Inventory Table */}
      <Typography variant="h6" mt={4} fontWeight={600}>
        Your Inventory
      </Typography>

      <Paper sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {farmerItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.product}</TableCell>
                <TableCell>₹{item.price}</TableCell>
                <TableCell>{item.quantity}</TableCell>
              </TableRow>
            ))}

            {farmerItems.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  No items added yet
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>

      {/* Buyer Orders */}
      <Typography variant="h6" mt={4} fontWeight={600}>
        Buyer Orders
      </Typography>

      <Paper sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Buyer</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Qty</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {farmerOrders.map((o) => (
              <TableRow key={o.id}>
                <TableCell>{o.buyerName}</TableCell>
                <TableCell>{o.product}</TableCell>
                <TableCell>{o.quantity}</TableCell>
                <TableCell>₹{o.amount}</TableCell>
                <TableCell>{o.date}</TableCell>
              </TableRow>
            ))}

            {farmerOrders.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No orders yet
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}