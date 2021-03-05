import React, { useState, useEffect } from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useRouter } from 'next/router';
import Box from '@material-ui/core/Box';
import { theme as appTheme } from '../theme';
import Appbar from './appbar/Appbar';
import { Section } from '../interfaces/homeInterface';
import WhatsappFab from './pure/WhatsappFab';
import Footer from './footer/Footer';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

interface LayoutProps {
  disableContainer?: boolean,
  children: React.ReactNode;
}

const Layout = ({ children, disableContainer }: LayoutProps) => {
  const classes = useStyles();
  const router = useRouter();
  const [selected, setSelected] = useState<Section>();

  const handleChange = (option: Section) => {
    setSelected(option);
    switch (option) {
      case 'BLOG':
        return router.push('/blog', undefined, { shallow: true });

      case 'SHOP':
        return router.push('/', undefined, { shallow: true });

      default: return null;
    }
  };

  useEffect(() => {
    switch (router.pathname) {
      case '/blog': return setSelected('BLOG');
      case '/': return setSelected('SHOP');
      default: return null;
    }
  }, [router.pathname]);

  const Content = () => <Box paddingTop={8} paddingBottom={10}>{children}</Box>;

  return (
    <ThemeProvider theme={appTheme}>
      <Appbar selected={selected} onChange={handleChange} />
      { disableContainer && <Content />}
      {!disableContainer && (
        <Container maxWidth='lg' disableGutters>
          <Content />
        </Container>
      )}
      <div className={classes.fab}>
        <WhatsappFab />
      </div>
      <footer>
        <Footer />
      </footer>
    </ThemeProvider>
  );
};

Layout.defaultProps = {
  disableContainer: false,
};

export default Layout;
