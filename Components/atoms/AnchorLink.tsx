import { LinkProps } from 'expo-router/build/link/Link';
import React from 'react';
import { Anchor, isWeb } from 'tamagui';
import { Link } from 'expo-router';

export default function AnchorLink(props: { linkProps?: any; href?: string; children: any }) {
  const { linkProps, href, children } = props;
  
  return linkProps ? (
    <Link {...linkProps} asChild={!isWeb}>
      {children}
    </Link>
  ) : (
    <Anchor href={href} style={{ textDecorationLine: 'none' }}>
      {children}
    </Anchor>
  );
}
