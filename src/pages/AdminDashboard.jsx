import React from 'react';
import { Box, Grid, Paper, Typography, List, ListItem, ListItemText } from '@mui/material';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

function AdminDashboard() {
  const dummyData = { users: 10, products: 50, orders: 20 };
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>Admin Dashboard</Typography>
      <Grid container spacing={3}>
        {/* Stats Cards */}
        {[
          { icon: <SupervisorAccountIcon fontSize="large"/>, label: 'Active Users', value: dummyData.users },
          { icon: <TrendingUpIcon fontSize="large"/>, label: 'Products', value: dummyData.products },
          { icon: <AssignmentTurnedInIcon fontSize="large"/>, label: 'Orders', value: dummyData.orders },
        ].map((card, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper sx={{ padding: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
              {card.icon}
              <Box>
                <Typography variant="h6">{card.label}</Typography>
                <Typography variant="h4">{card.value}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      {/* Recent Activity */}
      <Box mt={4}>
        <Typography variant="h6" mb={2}>Recent Activity</Typography>
        <List>
          <ListItem><ListItemText primary="New farmer registration from Italy" /></ListItem>
          <ListItem><ListItemText primary="Order #1234 completed" /></ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default AdminDashboard;
