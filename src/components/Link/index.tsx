import React from 'react';
import NextLink, { LinkProps } from 'next/link';

export const Link: React.FC<LinkProps> = ({ children, href, ...props }) => (
  <NextLink href={href} passHref>
    {/* eslint-disable-next-line */}
      <a {...props}>
        {children}
      </a>
  </NextLink>
);
