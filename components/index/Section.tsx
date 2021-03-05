import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Title from '../pure/Title';

export interface SectionProps {
  children: React.ReactNode,
  my?: number,
  title: string,
  disableContainer?: boolean;
  maxWidth?: 'xs' | 'sm' | 'lg' | 'md' | 'xl' | false;
}

const Section = ({
  children,
  my,
  title,
  disableContainer,
  maxWidth,
}: SectionProps) => {

  const Content = () => (
    <Box my={my}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Title title={title} />
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );

  if (disableContainer) {
    return <Content />;
  }

  return (
    <Container maxWidth={maxWidth}>
      <Content />
    </Container>
  );
};

Section.defaultProps = {
  my: 6,
  maxWidth: 'lg',
  disableContainer: false,
};

export default Section;
