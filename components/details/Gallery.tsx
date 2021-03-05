import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import * as R from 'ramda';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import strings from '../../utils/strings';
import Title from '../pure/Title';
import GalleryItem from './GalleryItem';
import GalleryDialog from './GalleryDialog';

const useStyles = makeStyles(() => ({
  box: {
    display: 'inline-block',
    width: '100%',
  },
  list: {
    width: '100vw',
    overflowX: 'scroll',
    overflowY: 'hidden',
    whiteSpace: 'nowrap',
    flexWrap: 'nowrap',
  },
}));

export type GalleryItemProps = {
  image: string;
  onClick: () => void;
};

export type GalleryProps = {
  images: Array<string>;
  title: string,
};

const Gallery = ({ images, title }: GalleryProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState(0);

  const handleClick = (image: string, idx: number) => {
    setIndex(idx);
    setOpen(true);
  };

  const handleClickBack = current => {
    if (current <= 0) {
      return;
    }
    setIndex(current - 1);
  };

  const handleClickForward = current => {
    if (current >= images.length - 1) {
      return;
    }
    setIndex(current + 1);
  };


  if (R.isEmpty(images)) {
    return (
      <Grid container justify='center'>
        <Grid item xs={12}>
          <Grid container justify='flex-start'>
            <Grid item>
              <Title title='Galeria' />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography>
            Sem fotos.
          </Typography>
        </Grid>
      </Grid>
    );
  }

  return (
    <>
      <GalleryDialog
        title={title}
        images={images}
        index={index}
        open={open}
        onClose={() => setOpen(false)}
        onClickBack={handleClickBack}
        onClickForward={handleClickForward}
      />
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth='lg'>
            <Box marginBottom={2}>
              <Title title={strings.galleryTitle} />
            </Box>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Hidden only='xs'>
            <Container maxWidth='lg'>
              <Grid container spacing={2}>
                {images.map((image, idx) => (
                  <Grid key={image} item sm={6}>
                    <GalleryItem
                      onClick={() => handleClick(image, idx)}
                      image={image}
                    />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Hidden>
          <Hidden smUp>
            <div className={classes.list}>
              {images.map((image, idx) => (
                <div className={classes.box} key={image}>
                  <GalleryItem
                    onClick={() => handleClick(image, idx)}
                    image={image}
                  />
                </div>
              ))}
            </div>
          </Hidden>
        </Grid>
      </Grid>
    </>
  );
};

export default Gallery;
