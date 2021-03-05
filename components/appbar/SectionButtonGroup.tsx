import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { AiOutlineShopping, AiOutlineFileImage } from 'react-icons/ai';
import Button from '../pure/Button';
import { Section } from '../../interfaces/homeInterface';

const useStyles = makeStyles(theme => ({
  buttonGroup: {
    padding: theme.spacing(1 / 4),
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.spacing(1.5),
  },
  button: {
    width: 120,
    borderRadius: theme.spacing(1.5),
    height: theme.spacing(4),
    fontWeight: 'bold',
    letterSpacing: 0.8,
    [theme.breakpoints.only('xs')]: {
      width: 70,
    },
  },
}));

export type SectionButtonGroupProps = {
  selected?: Section;
  onChange: (option: Section) => void;
};

const SectionButtonGroup = ({ selected, onChange }: SectionButtonGroupProps) => {
  const classes = useStyles();
  return (
    <Grid
      spacing={1}
      container
      className={classes.buttonGroup}
    >
      <Grid item>
        <Button
          onClick={() => onChange('SHOP')}
          startIcon={<AiOutlineShopping />}
          variant={selected === 'SHOP' ? 'contained' : 'text'}
          className={classes.button}
          style={{
            color: selected === 'SHOP' ? 'white' : 'black',
          }}
        >
          Loja
        </Button>
      </Grid>
      <Grid item>
        <Button
          onClick={() => onChange('BLOG')}
          startIcon={<AiOutlineFileImage />}
          variant={selected === 'BLOG' ? 'contained' : 'text'}
          className={classes.button}
          style={{
            color: selected === 'BLOG' ? 'white' : 'black',
          }}
        >
          Blog
        </Button>
      </Grid>
    </Grid>
  );
};

SectionButtonGroup.defaultProps = {
  selected: 'SHOP',
};

export default SectionButtonGroup;
