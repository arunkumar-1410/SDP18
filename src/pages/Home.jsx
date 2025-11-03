import { Box, Grid, Paper, Typography, Card, CardContent } from '@mui/material';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import StorefrontIcon from '@mui/icons-material/Storefront';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BusinessIcon from '@mui/icons-material/Business';
import { useSelector } from 'react-redux';

const features = [
  { title: "Value-Added Production", desc: "Transform raw crops into high-value processed foods and artisan products." },
  { title: "Global Marketplace", desc: "Connect with international buyers and expand your market reach." },
  { title: "Technology Integration", desc: "Leverage modern tech tools for inventory, quality control and marketing." },
  { title: "Rural Entrepreneurship", desc: "Build sustainable agricultural businesses and create local employment." },
];

function Home() {
  const stats = useSelector(state => state.stats);

  return (
    <Box sx={{ px: 4, py: 3 }}>
      <Typography variant="h4" align="center" fontWeight={700} mb={4}>
        Transform Your Agricultural Business
      </Typography>
      <Grid container spacing={4} justifyContent="center" mb={3}>
        {features.map((f) => (
          <Grid item xs={12} sm={6} md={3} key={f.title}>
            <Card sx={{ minHeight: 140, borderRadius: 2, boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600} mb={1}>{f.title}</Typography>
                <Typography variant="body2" color="text.secondary">{f.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3} justifyContent="center" mb={5}>
        <Grid item xs={6} md={3}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 2 }}>
            <EmojiPeopleIcon fontSize="large" />
            <Typography variant="h5" fontWeight={700}>{stats.farmers}+</Typography>
            <Typography variant="subtitle1">Active Farmers</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 2 }}>
            <StorefrontIcon fontSize="large" />
            <Typography variant="h5" fontWeight={700}>{stats.buyers}+</Typography>
            <Typography variant="subtitle1">Global Buyers</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 2 }}>
            <TrendingUpIcon fontSize="large" />
            <Typography variant="h5" fontWeight={700}>{stats.products}+</Typography>
            <Typography variant="subtitle1">Products Listed</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 2 }}>
            <BusinessIcon fontSize="large" />
            <Typography variant="h5" fontWeight={700}>{stats.orders}+</Typography>
            <Typography variant="subtitle1">Successful Orders</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Typography variant="h5" fontWeight={600} mb={1}>Support:</Typography>
      <ul>
        <li>Product Development Support (processing, packaging, quality standards)</li>
        <li>Market Access (connect with buyers and distributors)</li>
        <li>Technology Tools (inventory, quality tracking, automated order processing)</li>
      </ul>
    </Box>
  );
}
export default Home;
