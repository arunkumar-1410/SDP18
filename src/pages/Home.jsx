import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
<Box
  sx={{
    flex: 1,
    width: "100%",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
      url(https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=1600&q=80)
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    padding: "20px 20px",
  }}
>
      <Box>
        {/* Main Title */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 2,
            fontFamily: "Inter, sans-serif",
            whiteSpace: 'nowrap', // stays on one line
          }}
        >
          Fresh From Farm to Your Table 🌿
        </Typography>

        {/* Single-Line Tagline */}
        <Typography
          sx={{
            fontSize: '1rem',
            mb: 3,
            fontFamily: "Inter, sans-serif",
            whiteSpace: 'nowrap', // prevents wrapping
          }}
        >
          Empowering farmers and connecting rural products to digital markets.
        </Typography>

        {/* Button */}
        <Button
          variant="contained"
          onClick={() => navigate("/buyer/dashboard")}
          sx={{
            backgroundColor: "#2e7d32",
            padding: "6px 20px",
            textTransform: "none",
            fontWeight: 600,
            fontSize: "0.95rem",
            borderRadius: "8px",
            '&:hover': { backgroundColor: "#1b5e20" }
          }}
        >
          Explore Products
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
