import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.12)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
});

export default theme;
