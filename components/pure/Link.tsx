import Link from 'next/link';
import { Link as LinkMUI, LinkProps } from '@material-ui/core';
import React from 'react';

export type NavLinkProps = LinkProps & {
  children: React.ReactNode;
};

// eslint-disable-next-line react/display-name
const LinkRef = React.forwardRef<HTMLAnchorElement, NavLinkProps>((props, ref) => (
  <LinkMUI {...props} ref={ref} {...props}>
    {props.children}
  </LinkMUI>
));

// eslint-disable-next-line react/require-default-props
function NavLink({ href, as, ...props }: NavLinkProps & { as?: string; }) {
  return (
    <Link href={href} as={as} passHref>
      <LinkRef {...props} />
    </Link>
  );
}

export default NavLink;
