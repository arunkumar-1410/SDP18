import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPriceLimit } from "../redux/StatsSlice";
import {
  Box,
  Card,
  Typography,
  Grid,
  TextField,
  Button,
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
  const priceLimits = useSelector((state) => state.stats.priceLimits);

  const [inputs, setInputs] = useState({});

  const handleSave = (product) => {
    const min = Number(inputs[product]?.min);
    const max = Number(inputs[product]?.max);

    if (!min || !max) return alert("Enter both values");
    if (min >= max) return alert("Min must be less than Max");

    dispatch(setPriceLimit({ product, min, max }));

    alert(`${product} price limit updated!`);
  };

  return (
    <Box sx={{ padding: "20px", marginTop: "40px" }}>
      <Typography variant="h4" fontWeight={600} sx={{ mb: 3 }}>
        Admin – Set Price Limits
      </Typography>

      <Grid container spacing={2}>
        {products.map((p) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={p.name}>
            <Card
              sx={{
                p: 2,
                borderRadius: "12px",
                boxShadow: 3,
                textAlign: "center",
              }}
            >
              {/* BIG EMOJI */}
              <Typography fontSize={40}>{p.emoji}</Typography>

              {/* PRODUCT NAME */}
              <Typography fontWeight={600} fontSize={18}>
                {p.name}
              </Typography>

              {/* CURRENT LIMIT */}
              <Typography sx={{ mt: 1, color: "green" }}>
                Current: ₹{priceLimits[p.name].min} – ₹
                {priceLimits[p.name].max}
              </Typography>

              {/* MIN INPUT */}
              <TextField
                label="Min"
                type="number"
                size="small"
                sx={{ mt: 1 }}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    [p.name]: { ...inputs[p.name], min: e.target.value },
                  })
                }
              />

              {/* MAX INPUT */}
              <TextField
                label="Max"
                type="number"
                size="small"
                sx={{ mt: 1 }}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    [p.name]: { ...inputs[p.name], max: e.target.value },
                  })
                }
              />

              {/* SAVE BUTTON */}
              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2, backgroundColor: "#2e7d32" }}
                onClick={() => handleSave(p.name)}
              >
                Save
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
  