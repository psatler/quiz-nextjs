import React from 'react';
import NextLink, { LinkProps } from 'next/link';

export const Link: React.FC<LinkProps> = ({
  children, href, as, ...props
}) => (
  <NextLink as={as} href={href} passHref>
    {/* eslint-disable-next-line */}
      <a {...props}>
        {children}
      </a>
  </NextLink>
);
