import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        position: 'fixed',    // <--- THE REAL FIX
        top: 0,
        left: 0,

        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
          url(https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=1600&q=80)
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',

        paddingTop: '70px',       // navbar height
        paddingLeft: '60px',

        fontFamily: 'Inter, sans-serif',
        color: 'white',
      }}
    >
      <Box sx={{ transform: "translateY(-30px)" }}>
        <Typography
          variant="h3"
          fontWeight={700}
          mb={2}
          sx={{ fontFamily: 'Inter, sans-serif' }}
        >
          Fresh From Farm to Your Table 🌿
        </Typography>

        <Typography
          variant="h6"
          mb={3}
          sx={{ maxWidth: 450, fontFamily: 'Inter, sans-serif' }}
        >
          Empowering farmers and connecting rural products to digital markets.
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/buyer/dashboard")}
        >
          Explore Products
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
