import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function FarmerLogin() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/farmer/dashboard");
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
      <Paper elevation={5} sx={{ p: 4, width: 350 }}>
        <Typography variant="h5" fontWeight={700} mb={2}>
          Farmer Login
        </Typography>

        <TextField fullWidth label="Username" sx={{ mb: 2 }} />
        <TextField fullWidth label="Password" type="password" sx={{ mb: 3 }} />

        <Button variant="contained" fullWidth onClick={handleLogin}>
          Login
        </Button>
      </Paper>
    </Box>
  );
}

export default FarmerLogin;
