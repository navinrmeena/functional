import React from 'react';
import { Anchor, Stack, XStack } from 'tamagui';
import Text from "../Components/Text"
import { CustomTextProps } from '../types';

const Footer = function () {
  const currentYear = new Date().getFullYear();

  function FooterText(props: CustomTextProps & { href: string }) {
    const { children, href, ...rest } = props;

    return (
      <Anchor href={`/${href}`} style={{ textDecorationLine: 'none' }}>
        <Text $sm={{ fontSize: '$xs' }} $md={{ fontSize: '$sm' }} hoverStyle={{ textDecorationLine: 'underline', textDecorationColor: 'white' }} cursor="pointer" {...rest}>
          {children}
        </Text>
      </Anchor>
    );
  }

  return (
    <Stack alignItems="center" bg='$chineseBlack100' width="100%" alignSelf="center" justifyContent="flex-end" $xl={{ px: '$3' }}>
      <XStack width="100%" p="$3.5" justifyContent="space-between" alignItems="center">
        <XStack space="$1.5">
          <FooterText href='terms-and-conditions'>Terms and Conditions</FooterText>
          <Text $sm={{ fontSize: '$xs' }} $md={{ fontSize: '$sm' }}>
            |
          </Text>
          <FooterText href='privacy-policy'>Privacy Policy</FooterText>
        </XStack>
        <Text $sm={{ fontSize: '$xs' }} $md={{ fontSize: '$sm' }} mb={4}>
          &#169; {currentYear} Functional. All Rights Reserved
        </Text>
      </XStack>
    </Stack>
  );
};

export default Footer;
