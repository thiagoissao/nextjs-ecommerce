import { createMuiTheme } from '@material-ui/core/styles';

//background: #333333

export const colors = {

};

export const theme = createMuiTheme({
  typography: {
    fontFamily: ['Raleway', 'Archivo', 'IndieFlower', 'Roboto'].join(',')
  },
  palette: {
    background: {
      paper: '#FFFFFF'
    },
    primary: {
      main: '#353c3f',
    },
    secondary: {
      main: '#F3F3F3'
    },
    text: {
      primary: '#353c3f',
      secondary: '#FFFFFF',
    }
  },
});
