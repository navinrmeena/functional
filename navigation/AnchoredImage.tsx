import { Link } from 'expo-router';
import { LinkProps } from 'expo-router/build/link/Link';
import React from 'react';
import { ImageProps, Image, Anchor } from 'tamagui';

function AnchoredImage(props: ImageProps & { linkProps: LinkProps; portfolioScreen: boolean; href: string }) {
  const { linkProps, portfolioScreen, href, ...rest } = props;
  return !portfolioScreen ? (
    <Link {...linkProps} asChild>
      <Image {...rest} />
    </Link>
  ) : (
    <Anchor href={href}>
      <Image {...rest} />
    </Anchor>
  );
}
export default AnchoredImage;
