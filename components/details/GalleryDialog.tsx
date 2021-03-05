import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Typography from '@material-ui/core/Typography';
import Tooltip from '../pure/Tooltip';
import Button from '../pure/Button';
import strings from '../../utils/strings';
import Title from '../pure/Title';

const useStyles = makeStyles(theme => ({
  dialogContent: {
    backgroundColor: theme.palette.secondary.main,
  },
  dialog: {
    borderRadius: theme.spacing(3),
    [theme.breakpoints.only('xs')]: {
      borderRadius: theme.spacing(0),
    },
  },
  closeButton: {
    height: theme.spacing(5),
  },
  iconButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    fontSize: 35,
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));

export type GalleryDialogProps = {
  open: boolean,
  title: string,
  index: number,
  images: Array<string>,
  onClose: () => void,
  onClickForward: (index: number) => void,
  onClickBack: (index: number) => void,
};

const GalleryDialog = ({
  open,
  title,
  images,
  index,
  onClickForward,
  onClickBack,
  onClose,
}: GalleryDialogProps) => {
  const classes = useStyles();
  const [currentImage, setCurrentImage] = useState<string>();

  useEffect(() => {
    setCurrentImage(images[index]);
  }, [index]);

  return (
    <Dialog
      onClose={onClose}
      open={open}
      maxWidth='md'
      fullWidth
      classes={{ paper: classes.dialog }}
    >
      <DialogContent className={classes.dialogContent}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={10}>
                <Title title={title} />
              </Grid>
              <Grid item xs>
                <Button
                  variant='outlined'
                  className={classes.closeButton}
                  onClick={() => onClose()}
                >
                  {strings.close}
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid alignItems='center' container justify='space-between'>
              <Grid item xs={1}>
                {index > 0 && (
                  <Tooltip arrow title='Anterior'>
                    <IconButton
                      onClick={() => onClickBack(index)}
                      className={classes.iconButton}
                    >
                      <ArrowBackIosRoundedIcon />
                    </IconButton>
                  </Tooltip>
                )}
              </Grid>
              <Grid item xs>
                <Grid container justify='center'>
                  <Grid item>
                    <Image
                      width={700}
                      height={700}
                      src={currentImage}
                      alt={title}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={1}>
                {index <= images.length - 2 && (
                  <Tooltip arrow title='Posterior'>
                    <IconButton
                      onClick={() => onClickForward(index)}
                      className={classes.iconButton}
                    >
                      <ArrowForwardIosRoundedIcon />
                    </IconButton>
                  </Tooltip>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify='center'>
              <Grid item>
                <Typography color='textPrimary'>
                  {`${index + 1} de ${images.length}`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryDialog;
