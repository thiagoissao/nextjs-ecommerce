import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import '../globals.css';
import { theme } from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <MuiThemeProvider theme={theme}>
      <Component {...pageProps} />
    </MuiThemeProvider>
  );
}

export default MyApp;
