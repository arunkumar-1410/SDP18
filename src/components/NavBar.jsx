import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: '#2e7d32',
        backdropFilter: 'blur(6px)',
        fontFamily: 'Inter, sans-serif'
      }}
      elevation={4}
    >
      <Toolbar
        sx={{
          minHeight: '70px',
          px: { xs: 2, sm: 6 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative"
        }}
      >
        {/* LEFT SPACER (for perfect centering) */}
        <Box sx={{ width: '120px' }}></Box>

        {/* CENTERED BRAND */}
        <Typography
  variant="h4"
  component={Link}
  to="/"
  sx={{
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    color: 'white',
    textDecoration: 'none',
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: "2.2rem",
    letterSpacing: "1px",
    lineHeight: 1,
    '&:hover': { opacity: 0.9 }
  }}
>
  Harvestly
</Typography>


        {/* RIGHT NAV BUTTONS */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button component={Link} to="/" sx={navBtn}>Home</Button>
          <Button component={Link} to="/admin" sx={navBtn}>Admin</Button>
          <Button component={Link} to="/farmer" sx={navBtn}>Farmer</Button>
          <Button component={Link} to="/buyer" sx={navBtn}>Buyer</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

const navBtn = {
  color: 'white',
  fontWeight: 600,
  fontSize: '1rem',
  textTransform: 'none',
  fontFamily: 'Inter, sans-serif',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.15)',
    transform: 'scale(1.05)'
  }
};

export default Navbar;
