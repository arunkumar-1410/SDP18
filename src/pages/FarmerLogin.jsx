import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function FarmerLogin() {
  const navigate = useNavigate();

  return (
   <Box
  sx={{
    height: "calc(100vh - 140px)",  // navbar + footer space removed
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
      <Paper elevation={5} sx={{ p: 4, width: 350 }}>
        <Typography variant="h5" fontWeight={700} mb={2}>
          Farmer Login
        </Typography>

        <TextField fullWidth label="Username" sx={{ mb: 2 }} />
        <TextField fullWidth label="Password" type="password" sx={{ mb: 3 }} />

        <Button
          variant="contained"
          fullWidth
          onClick={() => navigate("/farmer/dashboard")}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
}

export default FarmerLogin;
