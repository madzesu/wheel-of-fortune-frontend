import { createMuiTheme } from '@material-ui/core/styles/';

import ThemeProvider from './ThemeProvider';
import palette from './palette';

const theme = createMuiTheme({
  palette: palette(),
});

export default theme;

export { ThemeProvider };