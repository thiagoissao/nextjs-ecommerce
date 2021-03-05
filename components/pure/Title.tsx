import React from 'react';
import Typography from '@material-ui/core/Typography';

export interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <Typography color='primary' variant='h4'>
      <b>{title}</b>
    </Typography>
  );
};

export default Title;
