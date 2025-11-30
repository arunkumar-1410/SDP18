import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPriceLimit,
  addFarmer,
  removeFarmer,
  addBuyer,
  removeBuyer,
} from "../redux/StatsSlice";

import {
  Box,
  Card,
  Grid,
  Typography,
  Button,
  TextField,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const products = [
  { name: "Apple", emoji: "🍎" },
  { name: "Banana", emoji: "🍌" },
  { name: "Carrot", emoji: "🥕" },
  { name: "Tomato", emoji: "🍅" },
  { name: "Coriander", emoji: "🌿" },
];

export default function AdminDashboard() {
  const dispatch = useDispatch();

  const priceLimits = useSelector((s) => s.stats.priceLimits);
  const farmers = useSelector((s) => s.stats.farmers);
  const buyers = useSelector((s) => s.stats.buyers);
  const purchases = useSelector((s) => s.stats.purchaseHistory);

  const [inputs, setInputs] = useState({});
  const [newFarmer, setNewFarmer] = useState({});
  const [newBuyer, setNewBuyer] = useState({});

  // -------------------------
  // Save Price Limit
  // -------------------------
  const handleSaveLimit = (product) => {
    const min = Number(inputs[product]?.min);
    const max = Number(inputs[product]?.max);

    if (!min || !max) return alert("Enter both values.");
    if (min >= max) return alert("Min must be less than max.");

    dispatch(setPriceLimit({ product, min, max }));
    alert(`${product} limits updated`);
  };

  // -------------------------
  // Add Farmer
  // -------------------------
  const saveFarmer = () => {
    if (!newFarmer.name || !newFarmer.email || !newFarmer.location)
      return alert("Fill all fields");

    dispatch(
      addFarmer({
        id: Date.now(),
        ...newFarmer,
      })
    );

    setNewFarmer({});
  };

  // -------------------------
  // Add Buyer
  // -------------------------
  const saveBuyer = () => {
    if (!newBuyer.name || !newBuyer.email || !newBuyer.location)
      return alert("Fill all fields");

    dispatch(
      addBuyer({
        id: Date.now(),
        ...newBuyer,
      })
    );

    setNewBuyer({});
  };

  return (
    <Box sx={{ padding: "20px", marginTop: "40px" }}>
      {/* -------------------------------- PRICE LIMITS -------------------------------- */}
      <Typography variant="h4" fontWeight={600} sx={{ mb: 2 }}>
        1. Set Product Price Limits
      </Typography>

      <Grid container spacing={2}>
        {products.map((p) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={p.name}>
            <Card sx={{ p: 2, textAlign: "center", borderRadius: 2, boxShadow: 3 }}>
              <Typography fontSize={40}>{p.emoji}</Typography>
              <Typography fontWeight={600}>{p.name}</Typography>

              <Typography sx={{ mt: 1, color: "green" }}>
                Current: ₹{priceLimits[p.name].min} – ₹{priceLimits[p.name].max}
              </Typography>

              <TextField
                label="Min"
                type="number"
                size="small"
                sx={{ mt: 1 }}
                value={inputs[p.name]?.min || ""}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    [p.name]: { ...inputs[p.name], min: e.target.value },
                  })
                }
              />

              <TextField
                label="Max"
                type="number"
                size="small"
                sx={{ mt: 1 }}
                value={inputs[p.name]?.max || ""}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    [p.name]: { ...inputs[p.name], max: e.target.value },
                  })
                }
              />

              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2, backgroundColor: "#2e7d32" }}
                onClick={() => handleSaveLimit(p.name)}
              >
                Save
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* -------------------------------- FARMERS LIST -------------------------------- */}
      <Typography variant="h5" fontWeight={600} sx={{ mt: 5 }}>
        2. Farmers List
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <TextField
          label="Name"
          size="small"
          value={newFarmer.name || ""}
          onChange={(e) => setNewFarmer({ ...newFarmer, name: e.target.value })}
        />
        <TextField
          label="Email"
          size="small"
          value={newFarmer.email || ""}
          onChange={(e) => setNewFarmer({ ...newFarmer, email: e.target.value })}
        />
        <TextField
          label="Location"
          size="small"
          value={newFarmer.location || ""}
          onChange={(e) =>
            setNewFarmer({ ...newFarmer, location: e.target.value })
          }
        />
        <Button variant="contained" onClick={saveFarmer}>
          Add
        </Button>
      </Box>

      <Table sx={{ mt: 2 }}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {farmers.map((f) => (
            <TableRow key={f.id}>
              <TableCell>{f.id}</TableCell>
              <TableCell>{f.name}</TableCell>
              <TableCell>{f.email}</TableCell>
              <TableCell>{f.location}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => dispatch(removeFarmer(f.id))}
                >
                  REMOVE
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* -------------------------------- BUYERS LIST -------------------------------- */}
      <Typography variant="h5" fontWeight={600} sx={{ mt: 5 }}>
        3. Buyers List
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <TextField
          label="Name"
          size="small"
          value={newBuyer.name || ""}
          onChange={(e) => setNewBuyer({ ...newBuyer, name: e.target.value })}
        />
        <TextField
          label="Email"
          size="small"
          value={newBuyer.email || ""}
          onChange={(e) => setNewBuyer({ ...newBuyer, email: e.target.value })}
        />
        <TextField
          label="Location"
          size="small"
          value={newBuyer.location || ""}
          onChange={(e) =>
            setNewBuyer({ ...newBuyer, location: e.target.value })
          }
        />
        <Button variant="contained" onClick={saveBuyer}>
          Add
        </Button>
      </Box>

      <Table sx={{ mt: 2 }}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {buyers.map((b) => (
            <TableRow key={b.id}>
              <TableCell>{b.id}</TableCell>
              <TableCell>{b.name}</TableCell>
              <TableCell>{b.email}</TableCell>
              <TableCell>{b.location}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => dispatch(removeBuyer(b.id))}
                >
                  REMOVE
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* -------------------------------- TRANSACTION HISTORY -------------------------------- */}
      <Typography variant="h5" fontWeight={600} sx={{ mt: 5 }}>
        4. Transaction History
      </Typography>

      <Table sx={{ mt: 2 }}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Buyer</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {purchases.length === 0 && (
            <TableRow>
              <TableCell colSpan={5} align="center">
                No transactions yet
              </TableCell>
            </TableRow>
          )}

          {purchases.map((t) => (
            <TableRow key={t.id}>
              <TableCell>{t.id}</TableCell>
              <TableCell>{t.buyerName}</TableCell>
              <TableCell>{t.product}</TableCell>
              <TableCell>₹{t.price}</TableCell>
              <TableCell>{t.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}