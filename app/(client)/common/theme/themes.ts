import createTheme, { ThemeOptions } from '@mui/material/styles/createTheme';
import { roboto } from '@theme/font';

const themeBase: ThemeOptions = {
  components: { MuiGrid: { defaultProps: { display: 'grid' } } },
  typography: { ...roboto.style }
};
export const LIGHT_THEME = createTheme({
  ...themeBase,
  palette: {
    mode: 'light',
    background: { default: '#fff' },
    primary: { main: '#3896ab' }
  }
});
