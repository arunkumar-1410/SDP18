import { Box, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#1b5e20",
        color: "white",
        padding: "30px 20px",
        textAlign: "center",
        fontFamily: "Inter, sans-serif",
        mt: "auto"
      }}
    >
      {/* Brand */}
      <Typography
        variant="h5"
        sx={{ fontWeight: 700, mb: 1, fontFamily: "'Playfair Display', serif" }}
      >
        Harvestly
      </Typography>

      <Typography sx={{ mb: 2, opacity: 0.9 }}>
        Connecting rural roots with the digital future.
      </Typography>

      {/* Contact Info */}
      <Typography sx={{ mb: 0.5 }}>📧 Email: support@harvestly.com</Typography>
      <Typography sx={{ mb: 2 }}>📞 Phone: +91 98765 43210</Typography>

      {/* Links */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 2 }}>
        <Link href="/" underline="none" sx={{ color: "white" }}>
          Home
        </Link>
        <Link href="/farmer" underline="none" sx={{ color: "white" }}>
          Farmer Login
        </Link>
        <Link href="/buyer" underline="none" sx={{ color: "white" }}>
          Buyer Login
        </Link>
        <Link href="/admin" underline="none" sx={{ color: "white" }}>
          Admin Login
        </Link>
      </Box>

      {/* Copyright */}
      <Typography sx={{ fontSize: "0.85rem", opacity: 0.7 }}>
        © {new Date().getFullYear()} Harvestly. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
