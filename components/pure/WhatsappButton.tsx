import React from 'react';
import { ButtonProps } from '@material-ui/core/Button';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import Link from '@material-ui/core/Link';
import Button from './Button';

export type WhatsappButtonProps = {
  href: string,
  buttonProps?: ButtonProps;
  target?: '_blank' | '_self';
};

const WhatsappButton = ({
  href,
  buttonProps,
  target,
}: WhatsappButtonProps) => {

  return (
    <Link rel='noopener' target={target} href={href}>
      <Button
        color="primary"
        aria-label="whatsapp"
        endIcon={<AiOutlineWhatsApp />}
        {...buttonProps}
      >
        Quero Comprar
      </Button>
    </Link>
  );
};

WhatsappButton.defaultProps = {
  buttonProps: {},
  target: '_self',
};

export default WhatsappButton;
