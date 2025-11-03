import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static" color="primary" elevation={3}>
      <Toolbar sx={{ minHeight: '64px', px: { xs: 2, sm: 6 } }}>
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{
            color: 'inherit',
            textDecoration: 'none',
            fontWeight: 700,
            flexGrow: 1,
            fontSize: { xs: '1.25rem', sm: '2rem' }
          }}
        >
          Rural Entrepreneurship
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/" sx={{ fontSize: '1rem', fontWeight: 500 }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/admin" sx={{ fontSize: '1rem', fontWeight: 500 }}>
            Admin
          </Button>
          <Button color="inherit" component={Link} to="/farmer" sx={{ fontSize: '1rem', fontWeight: 500 }}>
            Farmer
          </Button>
          <Button color="inherit" component={Link} to="/buyer" sx={{ fontSize: '1rem', fontWeight: 500 }}>
            Buyer
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
