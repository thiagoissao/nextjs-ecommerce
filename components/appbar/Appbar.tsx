import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import SectionButtonGroup from './SectionButtonGroup';
import Logo from './Logo';
import { Section } from '../../interfaces/homeInterface';

export interface AppbarProps {
  selected?: Section,
  onChange: (option: Section) => void;
}

export interface ScrollProps {
  window?: () => Window;
  children: React.ReactElement;
}

const ElevationScroll = ({ window, children }: ScrollProps) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const Appbar = ({ selected, onChange }: AppbarProps) => {
  return (
    <ElevationScroll>
      <AppBar color='inherit'>
        <Toolbar disableGutters>
          <Container maxWidth='lg'>
            <Grid container alignItems='center' spacing={1} justify='space-between'>
              <Grid item>
                <Logo />
              </Grid>
              <Grid item>
                <Grid container justify='center'>
                  <Grid item>
                    <SectionButtonGroup
                      selected={selected}
                      onChange={onChange}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

Appbar.defaultProps = {
  selected: 'SHOP',
};

export default Appbar;
