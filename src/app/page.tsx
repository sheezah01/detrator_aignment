import { 
  Box,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  Avatar,
  Container,
  Grid,
  Paper
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navigation Bar */}
      <AppBar position="fixed" sx={{ backgroundColor: 'white', color: 'text.primary' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0, fontWeight: 'bold' }}>
            BrandName
          </Typography>
          <Box sx={{ flexGrow: 1, mx: 4 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search..."
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ maxWidth: 600, margin: '0 auto' }}
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar sx={{ bgcolor: 'primary.main' }}>J</Avatar>
            <Typography variant="caption">John</Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 10, py: 4 }}>
        <Grid container spacing={3}>
          {/* Center Container */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3, minHeight: 600 }}>
              <Typography variant="h5" gutterBottom>
                Main Content
              </Typography>
              <Typography>
                This is the main content area.
              </Typography>
            </Paper>
          </Grid>
          {/* Right Container */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, minHeight: 400 }}>
              <Typography variant="h5" gutterBottom>
                Side Content
              </Typography>
              <Typography>
                This is the side content area.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}