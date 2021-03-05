import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Image from 'next/image';
import useWidth from '../../hooks/useWidth';

const useStyles = makeStyles(theme => ({
  root: {
    '&.MuiPaper-root-13': {
      backgroundColor: theme.palette.secondary.main,
      borderRadius: theme.spacing(3),
      boxShadow: 'none',
      [theme.breakpoints.only('xs')]: {
        borderRadius: theme.spacing(0),
      },
    },
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.spacing(3),
    boxShadow: 'none',
    [theme.breakpoints.only('xs')]: {
      borderRadius: theme.spacing(0),
    },
  },
}));

export type GalleryItemProps = {
  image: string;
  onClick: () => void;
};

const GalleryItem = ({ image, onClick }: GalleryItemProps) => {
  const classes = useStyles();
  const width = useWidth();

  return (
    <Card className={classes.root}>
      <CardActionArea disabled={width === 'xs'} onClick={onClick}>
        <CardContent>
          <Image
            alt={image}
            width={600}
            height={600}
            src={image}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};


export default GalleryItem;
